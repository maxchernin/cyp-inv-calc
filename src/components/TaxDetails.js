import React from 'react';
import { Typography, FormControlLabel, Switch } from '@mui/material';
import SliderWithValue from './SliderWithValue';

const TaxDetails = ({ taxDetails, handleTaxChange }) => (
  <div>
    <Typography variant="h6" gutterBottom>Taxes</Typography>
    <FormControlLabel
      control={
        <Switch
          checked={taxDetails.isNewApartment}
          onChange={(e) => handleTaxChange('isNewApartment', e.target.checked)}
        />
      }
      label="New Apartment"
    />
    {taxDetails.isNewApartment ? (
      <Typography>VAT Rate: {taxDetails.vatRate}%</Typography>
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
    <Typography>
      Israeli Tax Rate: {taxDetails.israeliTaxRate}%
    </Typography>
  </div>
);

export default TaxDetails;