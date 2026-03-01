"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = __importStar(require("bcrypt"));
const prisma_service_js_1 = require("../prisma/prisma.service.js");
const client_1 = require("@prisma/client");
const mail_service_js_1 = require("../mail/mail.service.js");
const SALT_ROUNDS = 10;
const OTP_EXPIRY_MINUTES = 10;
let AuthService = AuthService_1 = class AuthService {
    constructor(prisma, jwtService, mailService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.mailService = mailService;
        this.logger = new common_1.Logger(AuthService_1.name);
    }
    get otp() {
        return this.prisma.passwordResetOtp;
    }
    async registerOwner(dto) {
        const existing = await this.prisma.user.findUnique({
            where: { email: dto.gmail.toLowerCase() },
        });
        if (existing) {
            throw new common_1.ConflictException('An account with this email already exists');
        }
        const passwordHash = await bcrypt.hash(dto.password, SALT_ROUNDS);
        const user = await this.prisma.user.create({
            data: {
                email: dto.gmail.toLowerCase(),
                username: null,
                passwordHash,
                role: client_1.Role.OWNER,
            },
        });
        await this.prisma.ownerProfile.create({
            data: {
                userId: user.id,
                gmail: dto.gmail,
                address: dto.address,
                onboardingStep: 0,
            },
        });
        const token = this.issueToken(user);
        return { user: this.sanitizeUser(user), accessToken: token };
    }
    async registerUser(dto) {
        const existing = await this.prisma.user.findUnique({
            where: { email: dto.email.toLowerCase() },
        });
        if (existing) {
            throw new common_1.ConflictException('An account with this email already exists');
        }
        const passwordHash = await bcrypt.hash(dto.password, SALT_ROUNDS);
        const user = await this.prisma.user.create({
            data: {
                email: dto.email.toLowerCase(),
                username: dto.username,
                passwordHash,
                role: client_1.Role.USER,
            },
        });
        const token = this.issueToken(user);
        return { user: this.sanitizeUser(user), accessToken: token };
    }
    async login(dto) {
        const user = await this.prisma.user.findUnique({
            where: { email: dto.email.toLowerCase() },
        });
        if (!user ||
            !(await bcrypt.compare(dto.password, user.passwordHash))) {
            throw new common_1.UnauthorizedException('Invalid email or password');
        }
        const token = this.issueToken(user);
        return { user: this.sanitizeUser(user), accessToken: token };
    }
    async getProfile(user) {
        return this.sanitizeUser(user);
    }
    async forgotPassword(dto) {
        const email = dto.email.toLowerCase().trim();
        const user = await this.prisma.user.findUnique({
            where: { email },
        });
        const message = "If an account exists with this email, you'll receive an OTP shortly.";
        if (!user) {
            return { message };
        }
        const otp = String(Math.floor(100000 + Math.random() * 900000));
        const expiresAt = new Date(Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000);
        await this.otp.deleteMany({ where: { email } });
        await this.otp.create({
            data: { email, otp, expiresAt },
        });
        try {
            await this.mailService.sendMail({
                to: email,
                subject: 'Reset your password – OTP',
                text: `Your one-time password is: ${otp}. It expires in ${OTP_EXPIRY_MINUTES} minutes. If you didn't request this, ignore this email.`,
                html: `<p>Your one-time password is: <strong>${otp}</strong>.</p><p>It expires in ${OTP_EXPIRY_MINUTES} minutes.</p><p>If you didn't request this, please ignore this email.</p>`,
            });
        }
        catch (err) {
            this.logger.error(`Failed to send OTP email to ${email}:`, err);
            await this.otp.deleteMany({ where: { email } });
            throw new common_1.InternalServerErrorException('Failed to send OTP email. Please check SMTP configuration or try again later.');
        }
        return { message };
    }
    async resetPasswordWithOtp(dto) {
        const email = dto.email.toLowerCase().trim();
        const record = await this.otp.findFirst({
            where: { email, otp: dto.otp },
            orderBy: { createdAt: 'desc' },
        });
        if (!record || record.expiresAt < new Date()) {
            throw new common_1.BadRequestException('Invalid or expired OTP. Please request a new one.');
        }
        const user = await this.prisma.user.findUnique({
            where: { email },
        });
        if (!user) {
            throw new common_1.BadRequestException('Invalid or expired OTP.');
        }
        const passwordHash = await bcrypt.hash(dto.newPassword, SALT_ROUNDS);
        await this.prisma.$transaction([
            this.prisma.user.update({
                where: { id: user.id },
                data: { passwordHash },
            }),
            this.otp.deleteMany({ where: { email } }),
        ]);
        return { message: 'Password reset successfully. You can now log in with your new password.' };
    }
    async changePassword(userId, dto) {
        if (dto.currentPassword === dto.newPassword) {
            throw new common_1.BadRequestException('New password must be different from current password');
        }
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        const valid = await bcrypt.compare(dto.currentPassword, user.passwordHash);
        if (!valid) {
            throw new common_1.UnauthorizedException('Current password is incorrect');
        }
        const passwordHash = await bcrypt.hash(dto.newPassword, SALT_ROUNDS);
        await this.prisma.user.update({
            where: { id: userId },
            data: { passwordHash },
        });
        return { message: 'Password updated successfully' };
    }
    async validateUserById(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });
        return user ?? null;
    }
    issueToken(user) {
        const payload = { sub: user.id, email: user.email, role: user.role };
        return this.jwtService.sign(payload);
    }
    sanitizeUser(user) {
        const { passwordHash: _, ...rest } = user;
        return rest;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_js_1.PrismaService,
        jwt_1.JwtService,
        mail_service_js_1.MailService])
], AuthService);
//# sourceMappingURL=auth.service.js.map