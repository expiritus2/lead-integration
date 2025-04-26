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
  value: Currency;
  onChange: (event: SelectChangeEvent<Currency>, child: React.ReactNode) => void;
  label: string;
}

const CurrencySelect: FC<CurrencySelectProps> = (props) => {
  const { name, value, onChange, label } = props;

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="currency-select-label">{label}</InputLabel>
        <Select
          name={name}
          labelId="currency-select-label"
          value={value}
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
