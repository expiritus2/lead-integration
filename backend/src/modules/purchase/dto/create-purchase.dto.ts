import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class ClientDto {
  @IsEmail()
  email: string;
}

class ProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  price: number;
}

class PurchaseDto {
  @ValidateNested({ each: true })
  @Type(() => ProductDto)
  products: ProductDto[];
}

export class CreatePurchaseDto {
  @ValidateNested()
  @Type(() => ClientDto)
  client: ClientDto;

  @ValidateNested()
  @Type(() => PurchaseDto)
  purchase: PurchaseDto;

  @IsString()
  @IsNotEmpty()
  brandId: string;

  @IsString()
  successRedirect: string;

  @IsString()
  failureRedirect: string;
}
