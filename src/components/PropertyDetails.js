import React from 'react';
import { Input } from './Input';
import { Label } from './Label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './Select';

const PropertyDetails = ({ propertyDetails, handlePropertyChange }) => (
  <div className="space-y-3">
    <h3 className="text-lg font-semibold">Property Details</h3>
    <div className="grid grid-cols-2 gap-3">
      <div>
        <Label htmlFor="totalPrice">Total Price (€)</Label>
        <Input
          id="totalPrice"
          type="number"
          value={propertyDetails.totalPrice}
          onChange={(e) => handlePropertyChange('totalPrice', Number(e.target.value))}
          className="bg-white text-black"
        />
      </div>
      <div>
        <Label htmlFor="upfrontPercentage">Upfront Payment (%)</Label>
        <Input
          id="upfrontPercentage"
          type="number"
          value={propertyDetails.upfrontPercentage}
          onChange={(e) => handlePropertyChange('upfrontPercentage', Number(e.target.value))}
          min={0}
          max={100}
          className="bg-white text-black"
        />
      </div>
    </div>
    <div>
      <Label htmlFor="constructionMonths">Construction Period</Label>
      <Select
        value={propertyDetails.constructionMonths.toString()}
        onValueChange={(value) => handlePropertyChange('constructionMonths', Number(value))}
      >
        <SelectTrigger className="bg-white text-black">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {[12, 24, 36, 48, 60].map((months) => (
            <SelectItem key={months} value={months.toString()}>{months / 12} years</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  </div>
);

export default PropertyDetails;