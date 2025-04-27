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
exports.PaymentController = void 0;
const common_1 = require("@nestjs/common");
const payment_service_1 = require("./payment.service");
const payment_body_dto_1 = require("./dto/payment-body.dto");
let PaymentController = class PaymentController {
    paymentService;
    constructor(paymentService) {
        this.paymentService = paymentService;
    }
    async pay(ip, req, paymentBodyDto) {
        return this.paymentService.pay(paymentBodyDto.directPostUrl, {
            cardholderName: paymentBodyDto.cardholderName,
            paymentMethod: paymentBodyDto.paymentMethod,
            cardNumber: paymentBodyDto.cardNumber,
            expires: paymentBodyDto.expirationDate,
            cvc: paymentBodyDto.securityCode,
            remoteIp: ip,
            userAgent: req.headers['user-agent'] || '',
            acceptHeader: req.headers['accept-language'] || 'text/html',
            language: req.headers['accept-language'] || 'en-US',
            utcOffset: 0,
        });
    }
};
exports.PaymentController = PaymentController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Ip)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Request,
        payment_body_dto_1.PaymentBodyDto]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "pay", null);
exports.PaymentController = PaymentController = __decorate([
    (0, common_1.Controller)('payment'),
    __metadata("design:paramtypes", [payment_service_1.PaymentService])
], PaymentController);
//# sourceMappingURL=payment.controller.js.map