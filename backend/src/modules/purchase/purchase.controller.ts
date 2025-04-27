import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import {
  CreatePurchaseResponseDto,
  GetPurchaseResponseDto,
} from './dto/create-purchase-response.dto';
import { CreatePurchaseDto } from './dto/create-purchase.dto';

@Controller('purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Post()
  async createPurchase(
    @Body() createPurchaseDto: CreatePurchaseDto,
  ): Promise<CreatePurchaseResponseDto> {
    return this.purchaseService.createPurchase(createPurchaseDto);
  }

  @Get('/:id')
  async getPurchase(
    @Param() params: { id: string },
  ): Promise<GetPurchaseResponseDto> {
    return this.purchaseService.getPurchase(params.id);
  }
}
