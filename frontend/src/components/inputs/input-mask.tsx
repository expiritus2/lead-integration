import { FC } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { IMaskInput } from 'react-imask';
import * as React from 'react';

interface CreditCardInputProps {
  name: string;
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const CreditCardInput: FC<CreditCardInputProps> = (props) => {
  const { name, label, value = '', onChange } = props;

  return (
    <TextField
      name={name}
      label={label}
      variant="outlined"
      fullWidth
      value={value}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <CreditCardIcon />
          </InputAdornment>
        ),
        inputComponent: IMaskInput,
        inputProps: {
          mask: '0000 0000 0000 0000',
          definitions: {
            '0': /[0-9]/
          },
          overwrite: true
        }
      }}
      inputProps={{
        inputMode: 'numeric',
      }}
      error={value.replace(/\s/g, '').length < 16 && value.length > 0}
      helperText={
        value.replace(/\s/g, '').length < 16 && value.length > 0
          ? 'The card number must contain 16 digits'
          : ''
      }
    />
  );
};

export default CreditCardInput;
