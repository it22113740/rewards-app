"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const upload_service_js_1 = require("./upload.service.js");
const jwt_auth_guard_js_1 = require("../auth/guards/jwt-auth.guard.js");
const MAX_IMAGE_SIZE = 10 * 1024 * 1024;
const MAX_VIDEO_SIZE = 100 * 1024 * 1024;
const MAX_FILES = 20;
let UploadController = class UploadController {
    constructor(uploadService) {
        this.uploadService = uploadService;
    }
    async upload(file, resourceType) {
        if (!file?.buffer) {
            throw new common_1.BadRequestException('No file provided. Send as multipart/form-data with field "file".');
        }
        const type = resourceType === 'video' ? 'video' : resourceType === 'image' ? 'image' : 'auto';
        if (type === 'image' && file.size > MAX_IMAGE_SIZE) {
            throw new common_1.BadRequestException(`Image must be under ${MAX_IMAGE_SIZE / 1024 / 1024} MB`);
        }
        if (type === 'video' && file.size > MAX_VIDEO_SIZE) {
            throw new common_1.BadRequestException(`Video must be under ${MAX_VIDEO_SIZE / 1024 / 1024} MB`);
        }
        return this.uploadService.uploadFile(file.buffer, type);
    }
    async uploadMultiple(files, resourceType) {
        if (!files?.length) {
            throw new common_1.BadRequestException('No files provided. Send as multipart/form-data with field "files" (multiple).');
        }
        const type = resourceType === 'video' ? 'video' : resourceType === 'image' ? 'image' : 'auto';
        const results = [];
        for (const file of files) {
            if (!file.buffer)
                continue;
            if (type === 'image' && file.size > MAX_IMAGE_SIZE) {
                throw new common_1.BadRequestException(`One or more images exceed ${MAX_IMAGE_SIZE / 1024 / 1024} MB`);
            }
            if (type === 'video' && file.size > MAX_VIDEO_SIZE) {
                throw new common_1.BadRequestException(`One or more videos exceed ${MAX_VIDEO_SIZE / 1024 / 1024} MB`);
            }
            const result = await this.uploadService.uploadFile(file.buffer, type);
            results.push(result);
        }
        return { uploads: results };
    }
};
exports.UploadController = UploadController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_js_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({
        summary: 'Upload a single file (image or video) to Cloudinary',
        description: 'Use for submission media or shop image. For venue/shop image: upload here with resourceType "image", then pass the returned mediaUrl as imageUrl in POST /venues or PATCH /venues/:id.',
    }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                file: { type: 'string', format: 'binary', description: 'Image or video file' },
                resourceType: { type: 'string', enum: ['image', 'video', 'auto'], description: 'Optional' },
            },
            required: ['file'],
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Returns { mediaUrl, publicId }' }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.memoryStorage)(),
        limits: { fileSize: MAX_VIDEO_SIZE },
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)('resourceType')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "upload", null);
__decorate([
    (0, common_1.Post)('multiple'),
    (0, common_1.UseGuards)(jwt_auth_guard_js_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload multiple files (field: files)' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                files: { type: 'array', items: { type: 'string', format: 'binary' }, description: 'Multiple files' },
                resourceType: { type: 'string', enum: ['image', 'video', 'auto'], description: 'Optional' },
            },
            required: ['files'],
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Returns { uploads: [ { mediaUrl, publicId }, ... ] }' }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files', MAX_FILES, {
        storage: (0, multer_1.memoryStorage)(),
        limits: { fileSize: MAX_VIDEO_SIZE },
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)('resourceType')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadMultiple", null);
exports.UploadController = UploadController = __decorate([
    (0, swagger_1.ApiTags)('Upload'),
    (0, common_1.Controller)('upload'),
    __metadata("design:paramtypes", [upload_service_js_1.UploadService])
], UploadController);
//# sourceMappingURL=upload.controller.js.map