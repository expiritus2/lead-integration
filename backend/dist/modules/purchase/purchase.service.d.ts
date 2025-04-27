import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { PurchaseResponseDto } from './dto/purchase-response.dto';
export declare class PurchaseService {
    purchase(createPurchaseDto: CreatePurchaseDto): Promise<PurchaseResponseDto>;
}
