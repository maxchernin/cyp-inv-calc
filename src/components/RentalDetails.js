import React from 'react';
import { TextField, Typography, Box, Grid } from '@mui/material';
import { Label } from './Label';
import SliderWithValue from './SliderWithValue';

const RentalDetails = ({ rentalDetails, handleRentalChange }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
      Rental Details
    </Typography>
    <Box sx={{ mb: 3 }}>
      <SliderWithValue
        label="Annual Occupancy Rate (%)"
        id="occupancyRate"
        value={rentalDetails.occupancyRate}
        min={0}
        max={100}
        step={1}
        onChange={(value) => handleRentalChange('occupancyRate', value)}
      />
    </Box>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Label htmlFor="monthlyRent">Estimated Monthly Rent (€)</Label>
        <TextField
          id="monthlyRent"
          type="number"
          value={rentalDetails.monthlyRent}
          onChange={(e) => handleRentalChange('monthlyRent', Number(e.target.value))}
          fullWidth
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Label htmlFor="monthlyManagementFee">Monthly Management Fee (€)</Label>
        <TextField
          id="monthlyManagementFee"
          type="number"
          value={rentalDetails.monthlyManagementFee}
          onChange={(e) => handleRentalChange('monthlyManagementFee', Number(e.target.value))}
          fullWidth
          variant="outlined"
          size="small"
        />
      </Grid>
    </Grid>
  </Box>
);

export default RentalDetails;