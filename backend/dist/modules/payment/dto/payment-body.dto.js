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
exports.PaymentBodyDto = exports.PaymentMethod = void 0;
const class_validator_1 = require("class-validator");
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["S2S"] = "s2s";
})(PaymentMethod || (exports.PaymentMethod = PaymentMethod = {}));
class PaymentBodyDto {
    directPostUrl;
    paymentMethod;
    cardholderName;
    cardNumber;
    expirationDate;
    securityCode;
}
exports.PaymentBodyDto = PaymentBodyDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PaymentBodyDto.prototype, "directPostUrl", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(PaymentMethod),
    __metadata("design:type", String)
], PaymentBodyDto.prototype, "paymentMethod", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PaymentBodyDto.prototype, "cardholderName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PaymentBodyDto.prototype, "cardNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PaymentBodyDto.prototype, "expirationDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PaymentBodyDto.prototype, "securityCode", void 0);
//# sourceMappingURL=payment-body.dto.js.map