import { create } from 'zustand';
import { Purchase } from '../api/purchase.tsx';

interface PurchaseStore {
  directPostUrl: string;
  purchase: Purchase;
  setDirectPostUrl: (url: string) => void;
  setPurchase: (purchase: Purchase) => void;
}

const usePurchaseStore = create<PurchaseStore>((set) => ({
  directPostUrl: '',
  purchase: {
    currency: null,
    total: 0,
  },
  setDirectPostUrl: (url: string) => set(() => ({ directPostUrl: url })),
  setPurchase: (purchase: Purchase) => set(() => ({ purchase })),
  resetPurchase: () => set(() => ({
    directPostUrl: '',
    purchase: { currency: null, total: 0,}
  })),
}));

export default usePurchaseStore;
