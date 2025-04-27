import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import styles from './item.module.css';
import { FC } from 'react';

interface ItemProps {
  price: number;
  description: string;
  image: string;
}

const Item: FC<ItemProps> = (props) => {
  const { price, description, image } = props;

  return (
    <Box className={styles.container} sx={{ mb: 2, p: 2, display: 'flex', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <img className={styles.img} src={image} alt={description} />
      </Box>
      <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>
        {description}
      </Typography>
      <Typography variant="h3" sx={{ mt: 2, textAlign: 'center' }}>{`${price}€`}</Typography>
    </Box>
  );
};

export default Item;
