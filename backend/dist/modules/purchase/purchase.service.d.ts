import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { CreatePurchaseResponseDto, GetPurchaseResponseDto } from './dto/create-purchase-response.dto';
export declare class PurchaseService {
    createPurchase(createPurchaseDto: CreatePurchaseDto): Promise<CreatePurchaseResponseDto>;
    getPurchase(id: string): Promise<GetPurchaseResponseDto>;
}
