import React from 'react';
import { Label } from './Label';
import SliderWithValue from './SliderWithValue';

const TaxDetails = ({ taxDetails, handleTaxChange }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4">Taxes</h3>
    <div className="space-y-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          id="isNewApartment"
          checked={taxDetails.isNewApartment}
          onChange={(e) => handleTaxChange('isNewApartment', e.target.checked)}
          className="mr-2 h-4 w-4"
        />
        <Label htmlFor="isNewApartment" className="cursor-pointer">New Apartment</Label>
      </div>
      {taxDetails.isNewApartment ? (
        <div className="flex items-center justify-between">
          <Label>VAT Rate</Label>
          <div className="font-bold">{taxDetails.vatRate}%</div>
        </div>
      ) : (
        <SliderWithValue
          label="Transfer Tax Rate"
          id="transferTaxRate"
          value={taxDetails.transferTaxRate}
          min={0}
          max={15}
          step={0.1}
          onChange={(value) => handleTaxChange('transferTaxRate', value)}
        />
      )}
      <SliderWithValue
        label="Israeli Tax Rate"
        id="israeliTaxRate"
        value={taxDetails.israeliTaxRate}
        min={0}
        max={50}
        step={0.1}
        onChange={(value) => handleTaxChange('israeliTaxRate', value)}
      />
    </div>
  </div>
);

export default TaxDetails;