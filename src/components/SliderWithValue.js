import React from 'react';
import { Slider } from './Slider';
import { Input } from './Input';
import { Label } from './Label';

const SliderWithValue = ({ label, id, value, min, max, step, onChange }) => {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <div>
        <Slider
          id={`${id}-slider`}
          min={min}
          max={max}
          step={step}
          value={[value]}
          onValueChange={(values) => onChange(values[0])}
        />
        <Input
          id={id}
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          min={min}
          max={max}
          step={step}
        />
      </div>
    </div>
  );
};

export default SliderWithValue;