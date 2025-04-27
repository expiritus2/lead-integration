import { Body, Controller, Post } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { PurchaseResponseDto } from './dto/purchase-response.dto';
import { CreatePurchaseDto } from './dto/create-purchase.dto';

@Controller('purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Post()
  async purchase(
    @Body() createPurchaseDto: CreatePurchaseDto,
  ): Promise<PurchaseResponseDto> {
    return this.purchaseService.purchase(createPurchaseDto);
  }
}
