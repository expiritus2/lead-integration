import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { FaRegSadCry } from "react-icons/fa";
import Button from '../../components/inputs/button';

const Failure = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1);
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <FaRegSadCry color="red" size="400" />
      </Box>
      <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>
        Something went wrong. Please try again. <Button onClick={onClick}>Back</Button>
      </Typography>
    </Box>
  );
};

export default Failure;
