import { Currency } from '../components/inputs/currency.tsx';

export interface PurchaseData {
  client: {
    email: string;
  },
  purchase: {
    products: [
      {
        name: string;
        price: number;
      }
    ]
  },
  brandId: string;
  successRedirect: string;
  failureRedirect: string;
}

export interface Purchase {
  currency: Currency | null,
  total: number;
}

export interface PurchaseResponse {
  purchaseId: string;
}

export interface GetPurchaseResponse {
  id: string;
  directPostUrl: string;
  purchase: Purchase;
}

export interface PaymentFormData {
  directPostUrl: string;
  cardholderName: string;
  cardNumber: string;
  expirationDate: string;
  securityCode: string;
  paymentMethod: string;
}
