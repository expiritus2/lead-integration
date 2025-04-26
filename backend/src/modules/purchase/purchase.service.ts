import { Injectable } from '@nestjs/common';
import { PurchaseDto } from './dto/purchase.dto';
import providerApi from '../../api/provider-api';
import { PurchaseProviderResponse } from './purchase.types';

@Injectable()
export class PurchaseService {
  purchase(purchaseDto: PurchaseDto): PurchaseProviderResponse {
    // return providerApi.post('/api/v1/purchases/', purchaseDto);
    return {};
  }
}
