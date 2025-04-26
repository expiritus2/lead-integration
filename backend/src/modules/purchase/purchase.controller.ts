import { Body, Controller, Post } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import Logger from '../../logger/logger';
import { PurchaseDto } from './dto/purchase.dto';
import { PurchaseProviderResponse } from './purchase.types';

@Controller('purchase')
export class PurchaseController {
  constructor(
    private readonly purchaseService: PurchaseService,
    private readonly logger: Logger,
  ) {}

  @Post()
  purchase(@Body() purchaseDto: PurchaseDto): PurchaseProviderResponse {
    return this.purchaseService.purchase(purchaseDto);
  }
}
