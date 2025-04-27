declare class Purchase {
    currency: string;
    total: number;
}
export declare class CreatePurchaseResponseDto {
    id: string;
}
export declare class GetPurchaseResponseDto {
    id: string;
    direct_post_url: string;
    purchase: Purchase;
}
export {};
