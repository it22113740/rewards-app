import { UploadService } from './upload.service.js';
export declare class UploadController {
    private readonly uploadService;
    constructor(uploadService: UploadService);
    upload(file: Express.Multer.File, resourceType?: string): Promise<{
        mediaUrl: string;
        publicId: string;
    }>;
    uploadMultiple(files: Express.Multer.File[], resourceType?: string): Promise<{
        uploads: {
            mediaUrl: string;
            publicId: string;
        }[];
    }>;
}
