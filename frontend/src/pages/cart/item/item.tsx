import { FC } from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { IoMdClose } from "react-icons/io";
import styles from './item.module.css';
import useCartStore from '../../../store/cart.ts';

interface ItemProps {
  id: number;
  price: number;
  description: string;
  image: string;
}

const Item: FC<ItemProps> = (props) => {
  const { id, price, description, image } = props;
  const removeGood = useCartStore((store) => store.removeGood);

  const onRemove = () => {
    removeGood(id);
  }

  return (
    <Box sx={{ position: 'relative' }}>
      <Box className={styles.container} sx={{ mb: 2, p: 2, display: 'flex', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <img className={styles.img} src={image} alt={description} />
        </Box>
        <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>
          {description}
        </Typography>
        <Typography variant="h3" sx={{ mt: 2, textAlign: 'center' }}>{`${price}€`}</Typography>
      </Box>
      <IoMdClose className={styles.close} size={20} onClick={onRemove} />
    </Box>
  );
};

export default Item;
