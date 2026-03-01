import { ConfigService } from '@nestjs/config';
export type UploadResourceType = 'image' | 'video' | 'auto';
export declare class UploadService {
    private readonly configService;
    constructor(configService: ConfigService);
    uploadFile(buffer: Buffer, resourceType?: UploadResourceType, folder?: string): Promise<{
        mediaUrl: string;
        publicId: string;
    }>;
}
