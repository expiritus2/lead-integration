import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { IoMdHappy } from "react-icons/io";

const Success = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <IoMdHappy color="green" size="400" />
      </Box>
      <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>
        Purchase processed successfully. <NavLink to="/">Go to Main</NavLink>
      </Typography>
    </Box>
  );
};

export default Success;
