import React from 'react';
import { Slider, TextField, Typography, Box } from '@mui/material';

const SliderWithValue = ({ label, id, value, min, max, step, onChange }) => {
  return (
    <Box mb={2}>
      <Typography gutterBottom>{label}</Typography>
      <Box display="flex" alignItems="center">
        <Slider
          value={value}
          onChange={(_, newValue) => onChange(newValue)}
          aria-labelledby={id}
          min={min}
          max={max}
          step={step}
          sx={{ flexGrow: 1, mr: 2 }}
        />
        <TextField
          id={id}
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          inputProps={{
            min: min,
            max: max,
            step: step,
          }}
          sx={{ width: 80 }}
        />
      </Box>
    </Box>
  );
};

export default SliderWithValue;