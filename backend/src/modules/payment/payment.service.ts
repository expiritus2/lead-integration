import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { providerS2SApi } from '../../api/provider-api';
import { PaymentPayloadDto } from './dto/payment-payload.dto';
import { AxiosError } from 'axios';
import { PaymentMethod } from './dto/payment-body.dto';
import logger from '../../logger/logger';
import { handleError } from '../../utils/error';

@Injectable()
export class PaymentService {
  async pay(
    directPostUrl: string,
    paymentPayloadDto: PaymentPayloadDto,
  ): Promise<{ status: string }> {
    try {
      const directUrl =
        paymentPayloadDto.paymentMethod === PaymentMethod.S2S
          ? `${directPostUrl}?s2s=true`
          : directPostUrl;

      const response = await providerS2SApi.post<{ status: string }>(
        directUrl,
        {
          cardholder_name: 'John Doe',
          card_number: paymentPayloadDto.cardNumber,
          expires: paymentPayloadDto.expires,
          cvc: paymentPayloadDto.cvc,
          remote_ip: paymentPayloadDto.remoteIp,
          user_agent: paymentPayloadDto.userAgent,
          accept_header: paymentPayloadDto.acceptHeader,
          language: paymentPayloadDto.language,
          utc_offset: paymentPayloadDto.utcOffset,
        },
      );

      return response.data;
    } catch (error: any) {
      handleError(error);

      throw new InternalServerErrorException(
        'Unknown error. Please try again later.',
      );
    }
  }
}
