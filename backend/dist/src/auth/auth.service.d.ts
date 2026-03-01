import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service.js';
import type { User } from '@prisma/client';
import { MailService } from '../mail/mail.service.js';
import { RegisterOwnerDto } from './dto/register-owner.dto.js';
import { RegisterUserDto } from './dto/register-user.dto.js';
import { LoginDto } from './dto/login.dto.js';
import { ChangePasswordDto } from './dto/change-password.dto.js';
import { ForgotPasswordDto } from './dto/forgot-password.dto.js';
import { ResetPasswordDto } from './dto/reset-password.dto.js';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    private readonly mailService;
    private readonly logger;
    constructor(prisma: PrismaService, jwtService: JwtService, mailService: MailService);
    private get otp();
    registerOwner(dto: RegisterOwnerDto): Promise<{
        user: {
            username: string | null;
            email: string;
            id: string;
            role: import(".prisma/client").$Enums.Role;
            pushToken: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
        accessToken: string;
    }>;
    registerUser(dto: RegisterUserDto): Promise<{
        user: {
            username: string | null;
            email: string;
            id: string;
            role: import(".prisma/client").$Enums.Role;
            pushToken: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
        accessToken: string;
    }>;
    login(dto: LoginDto): Promise<{
        user: {
            username: string | null;
            email: string;
            id: string;
            role: import(".prisma/client").$Enums.Role;
            pushToken: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
        accessToken: string;
    }>;
    getProfile(user: User): Promise<{
        username: string | null;
        email: string;
        id: string;
        role: import(".prisma/client").$Enums.Role;
        pushToken: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    forgotPassword(dto: ForgotPasswordDto): Promise<{
        message: string;
    }>;
    resetPasswordWithOtp(dto: ResetPasswordDto): Promise<{
        message: string;
    }>;
    changePassword(userId: string, dto: ChangePasswordDto): Promise<{
        message: string;
    }>;
    validateUserById(userId: string): Promise<User | null>;
    private issueToken;
    private sanitizeUser;
}
