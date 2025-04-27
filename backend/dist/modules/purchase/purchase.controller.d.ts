import { PurchaseService } from './purchase.service';
import { CreatePurchaseResponseDto, GetPurchaseResponseDto } from './dto/create-purchase-response.dto';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
export declare class PurchaseController {
    private readonly purchaseService;
    constructor(purchaseService: PurchaseService);
    createPurchase(createPurchaseDto: CreatePurchaseDto): Promise<CreatePurchaseResponseDto>;
    getPurchase(params: {
        id: string;
    }): Promise<GetPurchaseResponseDto>;
}
