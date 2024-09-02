import React from 'react';
import { Label } from './Label';
import SliderWithValue from './SliderWithValue';
import { Select, SelectItem } from './Select';

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
          value={investmentParams.years.toString()} 
          onValueChange={(value) => handleInvestmentChange('years', Number(value))}
        >
          {[...Array(20)].map((_, i) => (
            <SelectItem key={i+1} value={(i+1).toString()}>{i+1} years</SelectItem>
          ))}
        </Select>
      </div>
    </div>
  </div>
);

export default InvestmentParameters;