"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseService = void 0;
const common_1 = require("@nestjs/common");
const provider_api_1 = require("../../api/provider-api");
const create_purchase_response_dto_1 = require("./dto/create-purchase-response.dto");
const class_transformer_1 = require("class-transformer");
const error_1 = require("../../utils/error");
let PurchaseService = class PurchaseService {
    async createPurchase(createPurchaseDto) {
        try {
            const result = await provider_api_1.providerApi.post('/purchases/', {
                client: createPurchaseDto.client,
                purchase: createPurchaseDto.purchase,
                brand_id: createPurchaseDto.brandId,
                success_redirect: createPurchaseDto.successRedirect,
                failure_redirect: createPurchaseDto.failureRedirect,
            });
            return (0, class_transformer_1.plainToInstance)(create_purchase_response_dto_1.CreatePurchaseResponseDto, result.data);
        }
        catch (error) {
            (0, error_1.handleError)(error);
            throw new common_1.InternalServerErrorException('Unknown error. Please try again later.');
        }
    }
    async getPurchase(id) {
        try {
            const result = await provider_api_1.providerApi.get(`/purchases/${id}/`);
            return (0, class_transformer_1.plainToInstance)(create_purchase_response_dto_1.GetPurchaseResponseDto, result.data);
        }
        catch (error) {
            (0, error_1.handleError)(error);
            throw new common_1.InternalServerErrorException('Unknown error. Please try again later.');
        }
    }
};
exports.PurchaseService = PurchaseService;
exports.PurchaseService = PurchaseService = __decorate([
    (0, common_1.Injectable)()
], PurchaseService);
//# sourceMappingURL=purchase.service.js.map