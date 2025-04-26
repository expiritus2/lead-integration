import { PurchaseService } from './purchase.service';
import Logger from '../../logger/logger';
import { PurchaseDto } from './dto/purchase.dto';
import { PurchaseProviderResponse } from './purchase.types';
export declare class PurchaseController {
    private readonly purchaseService;
    private readonly logger;
    constructor(purchaseService: PurchaseService, logger: Logger);
    purchase(purchaseDto: PurchaseDto): PurchaseProviderResponse;
}
