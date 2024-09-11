import React, { useState, useMemo } from 'react';
import { Card, CardContent, Typography, Grid, Container } from '@mui/material';
import PropertyDetails from './components/PropertyDetails';
import InvestmentParameters from './components/InvestmentParameters';
import RentalDetails from './components/RentalDetails';
import TaxDetails from './components/TaxDetails';
import ResultsDisplay from './components/ResultsDisplay';
import { calculateRentalYield, calculateReturns } from './utils/calculations';

const INITIAL_STATE = {
  totalPrice: 300000,
  upfrontPercentage: 30,
  reservationFeePercentage: 5,
  constructionMonths: 24,
  appreciationRate: 3,
  years: 3,
  occupancyRate: 100,
  monthlyRent: 1000,
  monthlyManagementFee: 100,
  transferTaxRate: 8,
  vatRate: 19,
  israeliTaxRate: 15,
  isNewApartment: true,
  acCost: 1000,
  furnitureCost: 5000
};

export function ApartmentInvestmentCalculator() {
  const [state, setState] = useState(INITIAL_STATE);
  const handleChange = (key, value) => {
    if (key !== 'israeliTaxRate') {
      console.log(`Updating ${key} to ${value}`);  // Add this line
      setState(prev => ({ ...prev, [key]: value }));
    }
  };

  const results = useMemo(() => calculateReturns(state), [state]);
  const rentalYield = useMemo(() => calculateRentalYield(state.monthlyRent, state.totalPrice), [state.monthlyRent, state.totalPrice]);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <PropertyDetails propertyDetails={state} handlePropertyChange={handleChange} />
              <InvestmentParameters investmentParams={state} handleInvestmentChange={handleChange} rentalYield={rentalYield} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <RentalDetails rentalDetails={state} handleRentalChange={handleChange} />
              <TaxDetails taxDetails={state} handleTaxChange={handleChange} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <ResultsDisplay results={results} propertyDetails={state} investmentParams={state} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ApartmentInvestmentCalculator;