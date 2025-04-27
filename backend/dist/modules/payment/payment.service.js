"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const provider_api_1 = require("../../api/provider-api");
const payment_body_dto_1 = require("./dto/payment-body.dto");
const error_1 = require("../../utils/error");
let PaymentService = class PaymentService {
    async pay(directPostUrl, paymentPayloadDto) {
        try {
            const directUrl = paymentPayloadDto.paymentMethod === payment_body_dto_1.PaymentMethod.S2S
                ? `${directPostUrl}?s2s=true`
                : directPostUrl;
            const response = await provider_api_1.providerS2SApi.post(directUrl, {
                cardholder_name: 'John Doe',
                card_number: paymentPayloadDto.cardNumber,
                expires: paymentPayloadDto.expires,
                cvc: paymentPayloadDto.cvc,
                remote_ip: paymentPayloadDto.remoteIp,
                user_agent: paymentPayloadDto.userAgent,
                accept_header: paymentPayloadDto.acceptHeader,
                language: paymentPayloadDto.language,
                utc_offset: paymentPayloadDto.utcOffset,
            });
            return response.data;
        }
        catch (error) {
            (0, error_1.handleError)(error);
            throw new common_1.InternalServerErrorException('Unknown error. Please try again later.');
        }
    }
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = __decorate([
    (0, common_1.Injectable)()
], PaymentService);
//# sourceMappingURL=payment.service.js.map