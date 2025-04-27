import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { FaRegSadCry } from "react-icons/fa";

const Failure = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <FaRegSadCry color="red" size="400" />
      </Box>
      <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>
        Something went wrong. Please try again. <NavLink to="/payment">Back</NavLink>
      </Typography>
    </Box>
  );
};

export default Failure;
