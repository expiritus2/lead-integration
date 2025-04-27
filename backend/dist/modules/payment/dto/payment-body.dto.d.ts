export declare enum PaymentMethod {
    S2S = "s2s"
}
export declare class PaymentBodyDto {
    directPostUrl: string;
    paymentMethod: PaymentMethod;
    cardholderName: string;
    cardNumber: string;
    expirationDate: string;
    securityCode: string;
}
