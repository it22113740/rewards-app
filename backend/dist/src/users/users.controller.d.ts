import { UsersService } from './users.service.js';
import { UpdateProfileDto } from './dto/update-profile.dto.js';
import type { User } from '@prisma/client';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getMe(user: User): Promise<{
        username: string | null;
        email: string;
        id: string;
        role: import(".prisma/client").$Enums.Role;
        pushToken: string | null;
        createdAt: Date;
        updatedAt: Date;
        ownerProfile?: unknown;
    } | null>;
    getMyPoints(user: User): Promise<{
        total: number;
        byVenue: {
            venueId: string;
            venueName: string;
            points: number;
        }[];
    }>;
    updateMe(user: User, dto: UpdateProfileDto): Promise<{
        username: string | null;
        email: string;
        id: string;
        role: import(".prisma/client").$Enums.Role;
        pushToken: string | null;
        createdAt: Date;
        updatedAt: Date;
        ownerProfile?: unknown;
    } | null>;
}
