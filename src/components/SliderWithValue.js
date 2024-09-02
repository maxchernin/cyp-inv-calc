import React from 'react';
import { Slider } from './Slider';
import { Input } from './Input';
import { Label } from './Label';

const SliderWithValue = ({ label, id, value, min, max, step, onChange }) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="flex items-center space-x-4">
        <Slider
          id={`${id}-slider`}
          min={min}
          max={max}
          step={step}
          value={[value]}
          onValueChange={(values) => onChange(values[0])}
          className="flex-grow"
        />
        <Input
          id={id}
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          min={min}
          max={max}
          step={step}
          className="w-20 bg-white text-black"
        />
      </div>
    </div>
  );
};

export default SliderWithValue;