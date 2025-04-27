import { Box } from '@mui/material';
import Item from './item/item.tsx';
import { FaCartArrowDown } from "react-icons/fa";
import useCartStore from '../../store/cart.ts';
import styles from './catalog.module.css';
import { useNavigate } from 'react-router-dom';

export interface Good {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
}

const GOODS: Good[] = [
  { id: 1, name: 'Laptop', image: '/laptop_1.jpg', price: 1000, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad fuga nostrum sunt. Aliquid consequuntur deleniti dolores excepturi harum nisi? Deleniti distinctio ducimus nihil obcaecati odio possimus quaerat totam vel velit!' },
  { id: 2, name: 'Bucicle', image: '/bycicle.avif', price: 250, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad fuga nostrum sunt. Aliquid consequuntur deleniti dolores excepturi harum nisi? Deleniti distinctio ducimus nihil obcaecati odio possimus quaerat totam vel velit!' },
]

const Catalog = () => {
  const navigate = useNavigate();
  const goods = useCartStore((store) => store.goods);

  const onClickCart = () => {
    navigate('/cart');
  }

  return (
    <Box sx={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <Box sx={{ width: '800px', display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }} onClick={onClickCart}>
        <FaCartArrowDown className={styles.cart} size={30} />
        <div className={styles.cartCount}>{goods.length}</div>
      </Box>
      <Box sx={{ mt: 4 }}>
        {GOODS.map((item) => (
          <Item key={item.id} id={item.id} name={item.name} imageUrl={item.image} price={item.price} description={item.description} />
        ))}
      </Box>
    </Box>
  );
};

export default Catalog;
