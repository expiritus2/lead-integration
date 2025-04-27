declare class ClientDto {
    email: string;
}
declare class ProductDto {
    name: string;
    price: number;
}
declare class PurchaseDto {
    products: ProductDto[];
}
export declare class CreatePurchaseDto {
    client: ClientDto;
    purchase: PurchaseDto;
    brandId: string;
    successRedirect: string;
    failureRedirect: string;
}
export {};
