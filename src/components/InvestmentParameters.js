import React from 'react';
import { Label } from './Label';
import { SliderWithValue } from './SliderWithValue';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './Select';

const InvestmentParameters = ({ investmentParams, handleInvestmentChange, rentalYield }) => (
  <div>
    <h3 className="text-xl font-semibold mb-2 border-b-2 pb-2">Investment Parameters</h3>
    <div className="grid grid-cols-3 gap-4">
      <div className="flex flex-col space-y-1.5">
        <Label>Annual Rental Yield</Label>
        <div className="font-bold">{rentalYield.toFixed(2)}%</div>
      </div>
      <SliderWithValue
        label="Annual Appreciation Rate"
        id="appreciationRate"
        value={investmentParams.appreciationRate}
        min={0}
        max={10}
        step={0.1}
        onChange={(value) => handleInvestmentChange('appreciationRate', value)}
      />
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="years">Investment Period (Years)</Label>
        <Select value={investmentParams.years.toString()} onValueChange={(value) => handleInvestmentChange('years', Number(value))}>
          <SelectTrigger className="bg-white text-black">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            {[...Array(20)].map((_, i) => (
              <SelectItem key={i+1} value={(i+1).toString()}>{i+1} years</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  </div>
);

export default InvestmentParameters;