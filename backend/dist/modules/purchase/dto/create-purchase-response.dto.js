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
exports.GetPurchaseResponseDto = exports.CreatePurchaseResponseDto = void 0;
const class_transformer_1 = require("class-transformer");
let Purchase = class Purchase {
    currency;
    total;
};
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Purchase.prototype, "currency", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], Purchase.prototype, "total", void 0);
Purchase = __decorate([
    (0, class_transformer_1.Exclude)()
], Purchase);
let CreatePurchaseResponseDto = class CreatePurchaseResponseDto {
    id;
};
exports.CreatePurchaseResponseDto = CreatePurchaseResponseDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CreatePurchaseResponseDto.prototype, "id", void 0);
exports.CreatePurchaseResponseDto = CreatePurchaseResponseDto = __decorate([
    (0, class_transformer_1.Exclude)()
], CreatePurchaseResponseDto);
let GetPurchaseResponseDto = class GetPurchaseResponseDto {
    id;
    direct_post_url;
    purchase;
};
exports.GetPurchaseResponseDto = GetPurchaseResponseDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], GetPurchaseResponseDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], GetPurchaseResponseDto.prototype, "direct_post_url", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => Purchase),
    __metadata("design:type", Purchase)
], GetPurchaseResponseDto.prototype, "purchase", void 0);
exports.GetPurchaseResponseDto = GetPurchaseResponseDto = __decorate([
    (0, class_transformer_1.Exclude)()
], GetPurchaseResponseDto);
//# sourceMappingURL=create-purchase-response.dto.js.map