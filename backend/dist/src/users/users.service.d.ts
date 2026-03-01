import { PrismaService } from '../prisma/prisma.service.js';
import { UpdateProfileDto } from './dto/update-profile.dto.js';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getProfile(userId: string): Promise<{
        username: string | null;
        email: string;
        id: string;
        role: import(".prisma/client").$Enums.Role;
        pushToken: string | null;
        createdAt: Date;
        updatedAt: Date;
        ownerProfile?: unknown;
    } | null>;
    updateProfile(userId: string, dto: UpdateProfileDto): Promise<{
        username: string | null;
        email: string;
        id: string;
        role: import(".prisma/client").$Enums.Role;
        pushToken: string | null;
        createdAt: Date;
        updatedAt: Date;
        ownerProfile?: unknown;
    } | null>;
    getMyPoints(userId: string): Promise<{
        total: number;
        byVenue: {
            venueId: string;
            venueName: string;
            points: number;
        }[];
    }>;
    private sanitize;
}
