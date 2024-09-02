import React from 'react';
import { Input } from './Input';
import { Label } from './Label';
import { SliderWithValue } from './SliderWithValue';
import { Select } from './Select';

const PropertyDetails = ({ propertyDetails, handlePropertyChange }) => (
  <div>
    <h3 className="text-xl font-semibold mb-2 border-b-2 pb-2">Property Details</h3>
    <div className="grid grid-cols-3 gap-4">
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="totalPrice">Total Apartment Price (€)</Label>
        <Input id="totalPrice" value={propertyDetails.totalPrice} onChange={(e) => handlePropertyChange('totalPrice', Number(e.target.value))} className="bg-white text-black" />
      </div>
      <SliderWithValue
        label="Upfront Payment"
        id="upfrontPercentage"
        value={propertyDetails.upfrontPercentage}
        min={0}
        max={100}
        step={1}
        onChange={(value) => handlePropertyChange('upfrontPercentage', value)}
      />
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="constructionMonths">Construction Period</Label>
        <Select value={propertyDetails.constructionMonths.toString()} onValueChange={(value) => handlePropertyChange('constructionMonths', Number(value))}>
          {[12, 24, 36, 48, 60].map((months) => (
            <option key={months} value={months.toString()}>{months / 12} years</option>
          ))}
        </Select>
      </div>
    </div>
  </div>
);

export default PropertyDetails;