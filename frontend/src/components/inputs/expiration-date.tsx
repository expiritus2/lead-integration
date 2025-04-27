import React, { FC, useState } from 'react';
import TextField from '@mui/material/TextField';
import { IMask, IMaskInput } from 'react-imask';
import Box from '@mui/material/Box';

interface ExpirationDateInputProps {
  name: string;
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const ExpirationDateInput: FC<ExpirationDateInputProps> = (props) => {
  const { name, value, label, onChange } = props;
  const [error, setError] = useState('');

  const validateExpiry = (val: string) => {
    if (!val) {
      setError('');
      return;
    }

    const [month, year] = val.split('/');

    if (!month || !year || month.length !== 2 || year.length !== 2) {
      setError('Invalid format (MM/YY)');
      return;
    }

    const numMonth = parseInt(month);
    const numYear = parseInt(year);
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;

    if (numMonth < 1 || numMonth > 12) {
      setError('Invalid month (01-12)');
      return;
    }

    if (numYear < currentYear ||
      (numYear === currentYear && numMonth < currentMonth)) {
      setError('Card has expired');
      return;
    }

    setError('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange(e);
    validateExpiry(value);
  };

  return (
    <Box sx={{ mb: 2 }}>
      <TextField
        name={name}
        label={label}
        variant="outlined"
        value={value}
        onChange={handleChange}
        placeholder="MM/YY"
        InputProps={{
          inputComponent: IMaskInput,
          inputProps: {
            mask: 'MM/YY',
            blocks: {
              MM: {
                mask: IMask.MaskedRange,
                from: 1,
                to: 12,
                maxLength: 2
              },
              YY: {
                mask: IMask.MaskedRange,
                to: 99,
                maxLength: 2
              }
            },
            overwrite: true
          }
        }}
        inputProps={{
          inputMode: 'numeric',
        }}
        error={!!error}
        helperText={error || ''}
        fullWidth
      />
    </Box>
  );
};

export default ExpirationDateInput;
