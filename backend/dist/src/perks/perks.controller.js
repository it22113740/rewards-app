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
exports.PerksController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const perks_service_js_1 = require("./perks.service.js");
const create_perk_dto_js_1 = require("./dto/create-perk.dto.js");
const update_perk_dto_js_1 = require("./dto/update-perk.dto.js");
const jwt_auth_guard_js_1 = require("../auth/guards/jwt-auth.guard.js");
const roles_decorator_js_1 = require("../auth/decorators/roles.decorator.js");
const roles_guard_js_1 = require("../auth/guards/roles.guard.js");
const current_user_decorator_js_1 = require("../auth/decorators/current-user.decorator.js");
let PerksController = class PerksController {
    constructor(perksService) {
        this.perksService = perksService;
    }
    async create(user, dto) {
        return this.perksService.createForOwner(user, dto);
    }
    async findByVenue(venueId) {
        return this.perksService.findByVenue(venueId);
    }
    async update(user, id, dto) {
        return this.perksService.updateForOwner(user, id, dto);
    }
    async remove(user, id) {
        return this.perksService.deleteForOwner(user, id);
    }
};
exports.PerksController = PerksController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_js_1.JwtAuthGuard, roles_guard_js_1.RolesGuard),
    (0, roles_decorator_js_1.Roles)(client_1.Role.OWNER),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({ summary: 'Owner: create perk for a venue (stepper 3)' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Perk created' }),
    __param(0, (0, current_user_decorator_js_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_perk_dto_js_1.CreatePerkDto]),
    __metadata("design:returntype", Promise)
], PerksController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('venue/:venueId'),
    (0, swagger_1.ApiOperation)({ summary: 'List perks for a venue (public)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of perks' }),
    __param(0, (0, common_1.Param)('venueId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PerksController.prototype, "findByVenue", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_js_1.JwtAuthGuard, roles_guard_js_1.RolesGuard),
    (0, roles_decorator_js_1.Roles)(client_1.Role.OWNER),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({ summary: 'Owner: update perk' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Perk updated' }),
    __param(0, (0, current_user_decorator_js_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_perk_dto_js_1.UpdatePerkDto]),
    __metadata("design:returntype", Promise)
], PerksController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_js_1.JwtAuthGuard, roles_guard_js_1.RolesGuard),
    (0, roles_decorator_js_1.Roles)(client_1.Role.OWNER),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({ summary: 'Owner: delete perk' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Perk deleted' }),
    __param(0, (0, current_user_decorator_js_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], PerksController.prototype, "remove", null);
exports.PerksController = PerksController = __decorate([
    (0, swagger_1.ApiTags)('Perks'),
    (0, common_1.Controller)('perks'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    __metadata("design:paramtypes", [perks_service_js_1.PerksService])
], PerksController);
//# sourceMappingURL=perks.controller.js.map