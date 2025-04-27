import { PurchaseService } from './purchase.service';
import { PurchaseResponseDto } from './dto/purchase-response.dto';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
export declare class PurchaseController {
    private readonly purchaseService;
    constructor(purchaseService: PurchaseService);
    purchase(createPurchaseDto: CreatePurchaseDto): Promise<PurchaseResponseDto>;
}
