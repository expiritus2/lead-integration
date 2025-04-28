import { create } from 'zustand';
import { Good } from '../pages/catalog/catalog.tsx';

interface CartStore {
  goods: Good[];
  addGood: (good: Good) => void;
  resetGoods: () => void;
  removeGood: (id: number) => void;
}

const useCartStore = create<CartStore>((set) => ({
  goods: [],
  addGood: (good: Good) => set((store) => ({ goods: [...store.goods, good] })),
  resetGoods: () => set(() => ({ goods: [] })),
  removeGood: (id: number) => set((store) => ({ goods: store.goods.filter((good) => good.id !== id) })),
}));

export default useCartStore;
