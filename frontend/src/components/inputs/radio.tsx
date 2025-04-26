import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import React, { FC } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { Currency } from './currency.tsx';

interface RadioInputProps {
  name: string;
  value: string;
  onChange?: (event: SelectChangeEvent<Currency>, child: React.ReactNode) => void;
  label?: string;
  options: { label: string; value: string }[];
}

const RadioInput: FC<RadioInputProps> = (props) => {
  const { name, value, label, onChange, options } = props;

  return (
    <FormControl>
      {label && <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>}
      <RadioGroup
        value={value}
        name={name}
        onChange={onChange}
      >
        {options.map((option) => (
          <FormControlLabel value={option.value} control={<Radio />} label={option.label} key={option.value} />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioInput;
