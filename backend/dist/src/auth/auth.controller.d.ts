import { AuthService } from './auth.service.js';
import { RegisterOwnerDto } from './dto/register-owner.dto.js';
import { RegisterUserDto } from './dto/register-user.dto.js';
import { LoginDto } from './dto/login.dto.js';
import { ChangePasswordDto } from './dto/change-password.dto.js';
import { ForgotPasswordDto } from './dto/forgot-password.dto.js';
import { ResetPasswordDto } from './dto/reset-password.dto.js';
import type { User } from '@prisma/client';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
    forgotPassword(dto: ForgotPasswordDto): Promise<{
        message: string;
    }>;
    resetPassword(dto: ResetPasswordDto): Promise<{
        message: string;
    }>;
    me(user: User): Promise<{
        username: string | null;
        email: string;
        id: string;
        role: import(".prisma/client").$Enums.Role;
        pushToken: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    changePassword(user: User, dto: ChangePasswordDto): Promise<{
        message: string;
    }>;
}
