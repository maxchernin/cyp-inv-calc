import React from 'react';
import { Typography, Grid, Paper, Box } from '@mui/material';
import { formatNumber } from '../utils/calculations';

const ResultsDisplay = ({ results, propertyDetails, investmentParams }) => (
  <Box>
    <Typography variant="h6" gutterBottom>Investment Returns for {investmentParams.years} Years</Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Paper elevation={2} sx={{ p: 2, backgroundColor: 'success.main', color: 'success.contrastText' }}>
          <Typography variant="subtitle1" gutterBottom>Initial Costs</Typography>
          <Typography>Upfront Payment: €{formatNumber(results.upfrontPayment)}</Typography>
          <Typography>Monthly Payment: €{formatNumber(results.monthlyPayment)}</Typography>
          <Typography>Transfer Tax: €{formatNumber(results.transferTax)}</Typography>
          <Typography>VAT: €{formatNumber(propertyDetails.totalPrice * investmentParams.vatRate / 100)}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper elevation={2} sx={{ p: 2, backgroundColor: 'info.main', color: 'info.contrastText' }}>
          <Typography variant="subtitle1" gutterBottom>Investment Overview</Typography>
          <Typography>Total Investment: €{formatNumber(results.totalInvestment)}</Typography>
          <Typography>Inc. VAT: €{formatNumber(results.totalInvestment + (propertyDetails.totalPrice * investmentParams.vatRate / 100))}</Typography>
          <Typography>Final Value: €{formatNumber(results.finalValue)}</Typography>
          <Typography>Appreciation: €{formatNumber(results.totalAppreciation)}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper elevation={2} sx={{ p: 2, backgroundColor: 'warning.main', color: 'warning.contrastText' }}>
          <Typography variant="subtitle1" gutterBottom>Rental Income and Expenses</Typography>
          <Typography>Rental Income: €{formatNumber(results.totalRentalIncome)}</Typography>
          <Typography>Management Fees: €{formatNumber(results.totalManagementFees)}</Typography>
          <Typography>VAT Returns: €{formatNumber(results.totalVatReturns)}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper elevation={2} sx={{ p: 2, backgroundColor: 'error.main', color: 'error.contrastText' }}>
          <Typography variant="subtitle1" gutterBottom>Taxes and Returns</Typography>
          <Typography>Israeli Tax: €{formatNumber(results.totalIsraeliTax)}</Typography>
          <Typography>Total Return: €{formatNumber(results.totalReturn)}</Typography>
          <Typography>ROI: {results.roi.toFixed(2)}%</Typography>
        </Paper>
      </Grid>
    </Grid>
  </Box>
);

export default ResultsDisplay;