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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSubmissionsBatchDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const create_submission_item_dto_js_1 = require("./create-submission-item.dto.js");
const MAX_ITEMS = 20;
class CreateSubmissionsBatchDto {
}
exports.CreateSubmissionsBatchDto = CreateSubmissionsBatchDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], CreateSubmissionsBatchDto.prototype, "venueId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [create_submission_item_dto_js_1.CreateSubmissionItemDto], maxItems: MAX_ITEMS }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1, { message: 'At least one item (type + mediaUrl) is required' }),
    (0, class_validator_1.ArrayMaxSize)(MAX_ITEMS, { message: `Maximum ${MAX_ITEMS} items per batch` }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_submission_item_dto_js_1.CreateSubmissionItemDto),
    __metadata("design:type", Array)
], CreateSubmissionsBatchDto.prototype, "items", void 0);
//# sourceMappingURL=create-submissions-batch.dto.js.map