import React from 'react';
import { Label } from './Label';
import { SliderWithValue } from './SliderWithValue';
import { Toggle } from './Toggle';

const TaxDetails = ({ investmentParams, handleInvestmentChange }) => (
  <div>
    <h3 className="text-xl font-semibold mb-2 border-b-2 pb-2">Taxes</h3>
    <div className="grid grid-cols-3 gap-4">
      <div className="flex flex-col space-y-1.5">
        <Label>New Apartment</Label>
        <Toggle 
          id="isNewApartment" 
          checked={investmentParams.isNewApartment} 
          onChange={(checked) => handleInvestmentChange('isNewApartment', checked)} 
        />
      </div>
      {investmentParams.isNewApartment ? (
        <div className="flex flex-col space-y-1.5">
          <Label>VAT Rate</Label>
          <div className="font-bold">{investmentParams.vatRate}%</div>
        </div>
      ) : (
        <SliderWithValue
          label="Transfer Tax Rate"
          id="transferTaxRate"
          value={investmentParams.transferTaxRate}
          min={0}
          max={15}
          step={0.1}
          onChange={(value) => handleInvestmentChange('transferTaxRate', value)}
        />
      )}
      <div className="flex flex-col space-y-1.5">
        <Label>Israeli Tax Rate</Label>
        <div className="font-bold">{investmentParams.israeliTaxRate}%</div>
      </div>
    </div>
  </div>
);

export default TaxDetails;