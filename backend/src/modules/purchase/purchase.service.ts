import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { providerApi } from '../../api/provider-api';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { PurchaseResponseDto } from './dto/purchase-response.dto';
import { plainToInstance } from 'class-transformer';
import { handleError } from '../../utils/error';

@Injectable()
export class PurchaseService {
  async purchase(
    createPurchaseDto: CreatePurchaseDto,
  ): Promise<PurchaseResponseDto> {
    try {
      const result = await providerApi.post('/purchases/', {
        client: createPurchaseDto.client,
        purchase: createPurchaseDto.purchase,
        brand_id: createPurchaseDto.brandId,
        success_redirect: createPurchaseDto.successRedirect,
        failure_redirect: createPurchaseDto.failureRedirect,
      });

      return plainToInstance(PurchaseResponseDto, result.data);
    } catch (error: any) {
      handleError(error);

      throw new InternalServerErrorException(
        'Unknown error. Please try again later.',
      );
    }
  }
}
