import { IsString, IsNumber, Length } from 'class-validator';

export class PurchaseDto {
  @IsNumber()
  amount: number;

  @IsString()
  currency: string;

  @IsString()
  paymentMethod: string;

  @IsString()
  @Length(16, 16)
  cardNumber: string;

  @IsString()
  expirationDate: string;

  @IsString()
  securityCode: string;
}
