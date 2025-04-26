import { FC } from 'react'

import MaterialButton, { ButtonProps } from '@mui/material/Button';

const Button: FC<ButtonProps> = (props) => {
  return (
    <MaterialButton {...props} />
  );
};

export default Button;
