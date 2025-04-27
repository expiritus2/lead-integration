import { IsEnum, IsString } from 'class-validator';

export enum PaymentMethod {
  S2S = 's2s',
}

export class PaymentBodyDto {
  @IsString()
  directPostUrl: string;

  @IsEnum(PaymentMethod)
  paymentMethod: PaymentMethod;

  @IsString()
  cardholderName: string;

  @IsString()
  cardNumber: string;

  @IsString()
  expirationDate: string;

  @IsString()
  securityCode: string;
}
