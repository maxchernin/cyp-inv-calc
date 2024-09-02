import React from 'react';
import { Input } from './Input';
import { Label } from './Label';
import SliderWithValue from './SliderWithValue';

const RentalDetails = ({ rentalDetails, handleRentalChange }) => (
  <div>
    <h3>Rental Details</h3>
    <SliderWithValue
      label="Annual Occupancy Rate (%)"
      id="occupancyRate"
      value={rentalDetails.occupancyRate}
      min={0}
      max={100}
      step={1}
      onChange={(value) => handleRentalChange('occupancyRate', value)}
    />
    <div>
      <div>
        <Label htmlFor="monthlyRent">Estimated Monthly Rent (€)</Label>
        <Input
          id="monthlyRent"
          type="number"
          value={rentalDetails.monthlyRent}
          onChange={(e) => handleRentalChange('monthlyRent', Number(e.target.value))}
        />
      </div>
      <div>
        <Label htmlFor="monthlyManagementFee">Monthly Management Fee (€)</Label>
        <Input
          id="monthlyManagementFee"
          type="number"
          value={rentalDetails.monthlyManagementFee}
          onChange={(e) => handleRentalChange('monthlyManagementFee', Number(e.target.value))}
        />
      </div>
    </div>
  </div>
);

export default RentalDetails;