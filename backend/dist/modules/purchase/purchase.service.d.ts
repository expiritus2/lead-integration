import { PurchaseDto } from './dto/purchase.dto';
import { PurchaseProviderResponse } from './purchase.types';
export declare class PurchaseService {
    purchase(purchaseDto: PurchaseDto): PurchaseProviderResponse;
}
