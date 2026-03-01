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
exports.SubmissionsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const submissions_service_js_1 = require("./submissions.service.js");
const create_submission_dto_js_1 = require("./dto/create-submission.dto.js");
const create_submissions_batch_dto_js_1 = require("./dto/create-submissions-batch.dto.js");
const review_submission_dto_js_1 = require("./dto/review-submission.dto.js");
const jwt_auth_guard_js_1 = require("../auth/guards/jwt-auth.guard.js");
const roles_decorator_js_1 = require("../auth/decorators/roles.decorator.js");
const roles_guard_js_1 = require("../auth/guards/roles.guard.js");
const current_user_decorator_js_1 = require("../auth/decorators/current-user.decorator.js");
const client_2 = require("@prisma/client");
let SubmissionsController = class SubmissionsController {
    constructor(submissionsService) {
        this.submissionsService = submissionsService;
    }
    async create(user, dto) {
        return this.submissionsService.create(user, dto);
    }
    async createBatch(user, dto) {
        return this.submissionsService.createBatch(user, dto);
    }
    async findMine(user, status) {
        return this.submissionsService.findMySubmissions(user, status);
    }
    async getApprovedMediaForVenue(venueId) {
        return this.submissionsService.getApprovedMediaForVenue(venueId);
    }
    async findByVenue(user, venueId, status) {
        return this.submissionsService.findByVenue(venueId, user, status);
    }
    async review(user, id, dto) {
        return this.submissionsService.review(id, user, dto);
    }
};
exports.SubmissionsController = SubmissionsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_js_1.JwtAuthGuard, roles_guard_js_1.RolesGuard),
    (0, roles_decorator_js_1.Roles)(client_2.Role.USER),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({ summary: 'User: submit a single photo or video at a venue' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Submission created' }),
    __param(0, (0, current_user_decorator_js_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_submission_dto_js_1.CreateSubmissionDto]),
    __metadata("design:returntype", Promise)
], SubmissionsController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('batch'),
    (0, common_1.UseGuards)(jwt_auth_guard_js_1.JwtAuthGuard, roles_guard_js_1.RolesGuard),
    (0, roles_decorator_js_1.Roles)(client_2.Role.USER),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({ summary: 'User: submit multiple photos/videos at a venue' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Submissions created' }),
    __param(0, (0, current_user_decorator_js_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_submissions_batch_dto_js_1.CreateSubmissionsBatchDto]),
    __metadata("design:returntype", Promise)
], SubmissionsController.prototype, "createBatch", null);
__decorate([
    (0, common_1.Get)('mine'),
    (0, common_1.UseGuards)(jwt_auth_guard_js_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({ summary: 'User: list my submissions and their status' }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false, enum: client_1.SubmissionStatus }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of my submissions with venue and status' }),
    __param(0, (0, current_user_decorator_js_1.CurrentUser)()),
    __param(1, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], SubmissionsController.prototype, "findMine", null);
__decorate([
    (0, common_1.Get)('venue/:venueId/approved-media'),
    (0, swagger_1.ApiOperation)({ summary: 'Public: list approved media for a venue (gallery)' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of approved photo/video submissions for the venue',
    }),
    __param(0, (0, common_1.Param)('venueId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubmissionsController.prototype, "getApprovedMediaForVenue", null);
__decorate([
    (0, common_1.Get)('venue/:venueId'),
    (0, common_1.UseGuards)(jwt_auth_guard_js_1.JwtAuthGuard, roles_guard_js_1.RolesGuard),
    (0, roles_decorator_js_1.Roles)(client_2.Role.OWNER),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({ summary: 'Owner: list submissions for a venue' }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false, enum: client_1.SubmissionStatus }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of submissions' }),
    __param(0, (0, current_user_decorator_js_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('venueId')),
    __param(2, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], SubmissionsController.prototype, "findByVenue", null);
__decorate([
    (0, common_1.Patch)(':id/review'),
    (0, common_1.UseGuards)(jwt_auth_guard_js_1.JwtAuthGuard, roles_guard_js_1.RolesGuard),
    (0, roles_decorator_js_1.Roles)(client_2.Role.OWNER),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({ summary: 'Owner: approve or reject a submission' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Submission reviewed, points awarded if approved' }),
    __param(0, (0, current_user_decorator_js_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, review_submission_dto_js_1.ReviewSubmissionDto]),
    __metadata("design:returntype", Promise)
], SubmissionsController.prototype, "review", null);
exports.SubmissionsController = SubmissionsController = __decorate([
    (0, swagger_1.ApiTags)('Submissions'),
    (0, common_1.Controller)('submissions'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, transform: true })),
    __metadata("design:paramtypes", [submissions_service_js_1.SubmissionsService])
], SubmissionsController);
//# sourceMappingURL=submissions.controller.js.map