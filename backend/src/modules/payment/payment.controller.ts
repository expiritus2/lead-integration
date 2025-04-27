import { Body, Controller, Ip, Post, Req } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentBodyDto } from './dto/payment-body.dto';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  async pay(
    @Ip() ip: string,
    @Req() req: Request,
    @Body() paymentBodyDto: PaymentBodyDto,
  ): Promise<{ status: string }> {
    return this.paymentService.pay(paymentBodyDto.directPostUrl, {
      cardholderName: paymentBodyDto.cardholderName,
      paymentMethod: paymentBodyDto.paymentMethod,
      cardNumber: paymentBodyDto.cardNumber,
      expires: paymentBodyDto.expirationDate,
      cvc: paymentBodyDto.securityCode,
      remoteIp: ip,
      userAgent: (req.headers['user-agent'] as string) || '',
      acceptHeader: (req.headers['accept-language'] as string) || 'text/html',
      language: (req.headers['accept-language'] as string) || 'en-US',
      utcOffset: 0,
    });
  }
}
