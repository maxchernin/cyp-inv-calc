import React from 'react';
import { Label } from './Label';
import SliderWithValue from './SliderWithValue';
import { Select, MenuItem } from '@mui/material';

const InvestmentParameters = ({ investmentParams, handleInvestmentChange, rentalYield }) => (
  <div>
    <h3>Investment Parameters</h3>
    <div>
      <div>
        <Label>Annual Rental Yield</Label>
        <div>{rentalYield.toFixed(2)}%</div>
      </div>
      <SliderWithValue
        label="Annual Appreciation Rate (%)"
        id="appreciationRate"
        value={investmentParams.appreciationRate}
        min={0}
        max={10}
        step={0.1}
        onChange={(value) => handleInvestmentChange('appreciationRate', value)}
      />
      <div>
        <Label htmlFor="years">Investment Period (Years)</Label>
        <Select
          value={investmentParams.years}
          onChange={(e) => handleInvestmentChange('years', Number(e.target.value))}
          fullWidth
        >
          {[...Array(20)].map((_, i) => (
            <MenuItem key={i+1} value={i+1}>{i+1} years</MenuItem>
          ))}
        </Select>
      </div>
    </div>
  </div>
);

export default InvestmentParameters;