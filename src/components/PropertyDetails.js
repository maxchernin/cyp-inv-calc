import React from 'react';
import { TextField, Select, MenuItem, FormControl, Grid } from '@mui/material';
import { Label } from './Label';

const PropertyDetails = ({ propertyDetails, handlePropertyChange }) => {
  const reservationFeeAmount = (propertyDetails.totalPrice * propertyDetails.reservationFeePercentage) / 100;

  return (
    <div>
      <h3>Property Details</h3>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Label htmlFor="totalPrice">Total Price (€)</Label>
          <TextField
            id="totalPrice"
            type="number"
            value={propertyDetails.totalPrice}
            onChange={(e) => handlePropertyChange('totalPrice', Number(e.target.value))}
            fullWidth
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <Label htmlFor="upfrontPercentage">Upfront Payment (%)</Label>
          <TextField
            id="upfrontPercentage"
            type="number"
            value={propertyDetails.upfrontPercentage}
            onChange={(e) => handlePropertyChange('upfrontPercentage', Number(e.target.value))}
            fullWidth
            variant="outlined"
            size="small"
            inputProps={{ min: 0, max: 100 }}
          />
        </Grid>
        <Grid item xs={3}>
          <Label htmlFor="reservationFeePercentage">Reservation Fee (%)</Label>
          <TextField
            id="reservationFeePercentage"
            type="number"
            value={propertyDetails.reservationFeePercentage}
            onChange={(e) => handlePropertyChange('reservationFeePercentage', Number(e.target.value))}
            fullWidth
            variant="outlined"
            size="small"
            inputProps={{ min: 0, max: 100 }}
          />
        </Grid>
        <Grid item xs={3}>
          <Label htmlFor="reservationFeeAmount">Reservation Fee (€)</Label>
          <TextField
            id="reservationFeeAmount"
            type="number"
            value={reservationFeeAmount}
            onChange={(e) => handlePropertyChange('reservationFeePercentage', (Number(e.target.value) / propertyDetails.totalPrice) * 100)}
            fullWidth
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <Label htmlFor="constructionMonths">Construction Period</Label>
          <FormControl fullWidth>
            <Select
              id="constructionMonths"
              value={propertyDetails.constructionMonths}
              onChange={(e) => handlePropertyChange('constructionMonths', Number(e.target.value))}
            >
              {[12, 24, 36, 48, 60].map((months) => (
                <MenuItem key={months} value={months}>{months / 12} years</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default PropertyDetails;