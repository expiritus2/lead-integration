import React, { FC } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Box,
} from '@mui/material';

export enum Currency {
  EUR = 'EUR',
  USD = 'USD',
  GBP = 'GBP',
  JPY = 'JPY',
  CNY = 'CNY'
}

interface CurrencySelectProps {
  name: string;
  value: Currency | null;
  onChange: (event: SelectChangeEvent<Currency>, child: React.ReactNode) => void;
  label: string;
  disabled?: boolean;
}

const CurrencySelect: FC<CurrencySelectProps> = (props) => {
  const { name, value, onChange, label, disabled } = props;

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="currency-select-label">{label}</InputLabel>
        <Select
          disabled={disabled}
          name={name}
          labelId="currency-select-label"
          value={value || ''}
          label={label}
          onChange={onChange}
        >
          {Object.values(Currency).map((currency) => (
            <MenuItem key={currency} value={currency}>{currency}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CurrencySelect;
