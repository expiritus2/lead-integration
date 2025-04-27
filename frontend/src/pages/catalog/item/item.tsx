import { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from './item.module.css';
import Button from '../../../components/inputs/button.tsx';
import useCartStore from '../../../store/cart.ts';

interface ItemProps {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
}

const Item: FC<ItemProps> = (props) => {
  const { id, name, imageUrl, price, description } = props;
  const addGood = useCartStore((store) => store.addGood);

  const onClick = () => {
    addGood({
      id,
      name,
      image: imageUrl,
      price,
      description
    })
  }

  return (
    <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', width: '100%' }}>
      <Box>
        <img className={styles.item} src={props.imageUrl} alt={props.description} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flex: 1, alignItems: 'center' }}>
        <Box sx={{ ml: 2 }}>
          <Typography variant="body1">{props.description}</Typography>
        </Box>
        <Box sx={{ ml: 2, mr: 2 }}>
          <Typography variant="body1">{`${props.price}€`}</Typography>
        </Box>
      </Box>
      <Box sx={{ ml: 2 }}>
        <Button variant="contained" onClick={onClick}>Add to cart</Button>
      </Box>
    </Box>
  );
};

export default Item;
