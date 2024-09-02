import React from 'react';
import { Label } from './Label';
import SliderWithValue from './SliderWithValue';

const TaxDetails = ({ taxDetails, handleTaxChange }) => (
  <div>
    <h3>Taxes</h3>
    <div>
      <div>
        <input
          type="checkbox"
          id="isNewApartment"
          checked={taxDetails.isNewApartment}
          onChange={(e) => handleTaxChange('isNewApartment', e.target.checked)}
        />
        <Label htmlFor="isNewApartment">New Apartment</Label>
      </div>
      {taxDetails.isNewApartment ? (
        <div>
          <Label>VAT Rate</Label>
          <div>{taxDetails.vatRate}%</div>
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