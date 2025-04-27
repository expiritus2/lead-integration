import { Exclude, Expose, Type } from 'class-transformer';

@Exclude()
class Purchase {
  @Expose()
  currency: string;

  @Expose()
  total: number;
}

@Exclude()
export class CreatePurchaseResponseDto {
  @Expose()
  id: string;
}

@Exclude()
export class GetPurchaseResponseDto {
  @Expose()
  id: string;

  @Expose()
  direct_post_url: string;

  @Expose()
  @Type(() => Purchase)
  purchase: Purchase;
}
