import React, { useState, useMemo } from 'react';
import { Card, CardContent } from './components/Card';
import PropertyDetails from './components/PropertyDetails';
import InvestmentParameters from './components/InvestmentParameters';
import RentalDetails from './components/RentalDetails';
import TaxDetails from './components/TaxDetails';
import ResultsDisplay from './components/ResultsDisplay';
import { calculateRentalYield, calculateReturns } from './utils/calculations';
import { Switch } from './components/Switch';

const INITIAL_STATE = {
  totalPrice: 300000, upfrontPercentage: 30, constructionMonths: 24,
  appreciationRate: 3, years: 7, occupancyRate: 100, monthlyRent: 1000,
  monthlyManagementFee: 100, transferTaxRate: 8, vatRate: 19, israeliTaxRate: 15,
  isNewApartment: true
};

export function ApartmentInvestmentCalculator() {
  const [state, setState] = useState(INITIAL_STATE);
  const handleChange = (key, value) => setState(prev => ({ ...prev, [key]: value }));

  const results = useMemo(() => calculateReturns(state), [state]);
  const rentalYield = useMemo(() => calculateRentalYield(state.monthlyRent, state.totalPrice), [state.monthlyRent, state.totalPrice]);

  return (
    <div>
      <h1>Cyprus Apartment Investment Calculator for Israeli Investors</h1>
      <div>
        <Card>
          <CardContent>
            <PropertyDetails propertyDetails={state} handlePropertyChange={handleChange} />
            <InvestmentParameters investmentParams={state} handleInvestmentChange={handleChange} rentalYield={rentalYield} />
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <ResultsDisplay results={results} propertyDetails={state} investmentParams={state} />
          </CardContent>
        </Card>
      </div>
      <div>
        <Card>
          <CardContent>
            <RentalDetails rentalDetails={state} handleRentalChange={handleChange} />
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <TaxDetails taxDetails={state} handleTaxChange={handleChange} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ApartmentInvestmentCalculator;