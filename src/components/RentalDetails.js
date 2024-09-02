import React from 'react';
import { Input } from './Input';
import { Label } from './Label';

const RentalDetails = ({ investmentParams, handleInvestmentChange }) => (
  <div>
    <h3 className="text-xl font-semibold mb-2 border-b-2 pb-2">Rental Details</h3>
    <div className="grid grid-cols-3 gap-4">
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="occupancyRate">Annual Occupancy Rate (%)</Label>
        <Input 
          id="occupancyRate" 
          type="number" 
          value={investmentParams.occupancyRate} 
          onChange={(e) => handleInvestmentChange('occupancyRate', Number(e.target.value))}
          min={0}
          max={100}
          step={0.1}
          className="bg-white text-black"
        />
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="monthlyRent">Estimated Monthly Rent (€)</Label>
        <Input 
          id="monthlyRent" 
          type="number"
          value={investmentParams.monthlyRent} 
          onChange={(e) => handleInvestmentChange('monthlyRent', Number(e.target.value))} 
          className="bg-white text-black"
        />
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="monthlyManagementFee">Monthly Management Fee (€)</Label>
        <Input 
          id="monthlyManagementFee" 
          type="number"
          value={investmentParams.monthlyManagementFee} 
          onChange={(e) => handleInvestmentChange('monthlyManagementFee', Number(e.target.value))} 
          className="bg-white text-black"
        />
      </div>
    </div>
  </div>
);

export default RentalDetails;