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
exports.RedemptionsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const redemptions_service_js_1 = require("./redemptions.service.js");
const redeem_perk_dto_js_1 = require("./dto/redeem-perk.dto.js");
const jwt_auth_guard_js_1 = require("../auth/guards/jwt-auth.guard.js");
const roles_decorator_js_1 = require("../auth/decorators/roles.decorator.js");
const roles_guard_js_1 = require("../auth/guards/roles.guard.js");
const current_user_decorator_js_1 = require("../auth/decorators/current-user.decorator.js");
let RedemptionsController = class RedemptionsController {
    constructor(redemptionsService) {
        this.redemptionsService = redemptionsService;
    }
    async redeem(user, dto) {
        return this.redemptionsService.redeem(user, dto.perkId);
    }
    async findMine(user) {
        return this.redemptionsService.findMyRedemptions(user);
    }
    async findByVenue(user, venueId) {
        return this.redemptionsService.findByVenue(venueId, user);
    }
    async markAsUsed(user, id) {
        return this.redemptionsService.markAsUsed(id, user);
    }
};
exports.RedemptionsController = RedemptionsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_js_1.JwtAuthGuard, roles_guard_js_1.RolesGuard),
    (0, roles_decorator_js_1.Roles)(client_1.Role.USER),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({ summary: 'User: redeem a perk (deducts points, returns promo code)' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Redemption with promo code' }),
    __param(0, (0, current_user_decorator_js_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, redeem_perk_dto_js_1.RedeemPerkDto]),
    __metadata("design:returntype", Promise)
], RedemptionsController.prototype, "redeem", null);
__decorate([
    (0, common_1.Get)('mine'),
    (0, common_1.UseGuards)(jwt_auth_guard_js_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({ summary: 'User: list my redemptions' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of redemptions' }),
    __param(0, (0, current_user_decorator_js_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RedemptionsController.prototype, "findMine", null);
__decorate([
    (0, common_1.Get)('venue/:venueId'),
    (0, common_1.UseGuards)(jwt_auth_guard_js_1.JwtAuthGuard, roles_guard_js_1.RolesGuard),
    (0, roles_decorator_js_1.Roles)(client_1.Role.OWNER),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({ summary: 'Owner: list redemptions for a venue' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of redemptions with promo codes' }),
    __param(0, (0, current_user_decorator_js_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('venueId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], RedemptionsController.prototype, "findByVenue", null);
__decorate([
    (0, common_1.Patch)(':id/used'),
    (0, common_1.UseGuards)(jwt_auth_guard_js_1.JwtAuthGuard, roles_guard_js_1.RolesGuard),
    (0, roles_decorator_js_1.Roles)(client_1.Role.OWNER),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({ summary: 'Owner: mark redemption as used' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Redemption marked as used' }),
    __param(0, (0, current_user_decorator_js_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], RedemptionsController.prototype, "markAsUsed", null);
exports.RedemptionsController = RedemptionsController = __decorate([
    (0, swagger_1.ApiTags)('Redemptions'),
    (0, common_1.Controller)('redemptions'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    __metadata("design:paramtypes", [redemptions_service_js_1.RedemptionsService])
], RedemptionsController);
//# sourceMappingURL=redemptions.controller.js.map