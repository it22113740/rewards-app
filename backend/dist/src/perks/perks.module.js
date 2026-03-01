"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerksModule = void 0;
const common_1 = require("@nestjs/common");
const perks_service_js_1 = require("./perks.service.js");
const perks_controller_js_1 = require("./perks.controller.js");
const venues_module_js_1 = require("../venues/venues.module.js");
let PerksModule = class PerksModule {
};
exports.PerksModule = PerksModule;
exports.PerksModule = PerksModule = __decorate([
    (0, common_1.Module)({
        imports: [venues_module_js_1.VenuesModule],
        controllers: [perks_controller_js_1.PerksController],
        providers: [perks_service_js_1.PerksService],
        exports: [perks_service_js_1.PerksService],
    })
], PerksModule);
//# sourceMappingURL=perks.module.js.map