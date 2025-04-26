import React, { FC } from 'react'
import { TextField as MaterialTextField } from '@mui/material';
import { StandardTextFieldProps } from '@mui/material/TextField';

interface TextInputFieldProps extends StandardTextFieldProps {
  type: 'text' | 'number' | 'password' | 'email';
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
}

const TextField: FC<TextInputFieldProps> = (props) => {
  const { type, label, name, onChange, value, ...rest } = props;

  return (
    <MaterialTextField
      type={type}
      label={label}
      name={name}
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
};

export default TextField;
