import apiServer from './api-server.tsx'
import { GetPurchaseResponse, PaymentFormData, PurchaseData, PurchaseResponse } from './types.ts';

export async function purchase(body: PurchaseData): Promise<PurchaseResponse> {
  const response = await apiServer.post('/purchase', body);

  return {
    purchaseId: response.data.id
  }
}

export async function getPurchase(id: string): Promise<GetPurchaseResponse> {
  const response = await apiServer.get(`/purchase/${id}`);

  return {
    id: response.data.id,
    directPostUrl: response.data.direct_post_url,
    purchase: response.data.purchase
  }
}

export async function pay(body: PaymentFormData): Promise<{ status: string }> {
  const response = await apiServer.post('/payment', body);

  return response.data;
}
