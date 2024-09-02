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
    <div className="max-w-7xl mx-auto p-4 space-y-4">
      <h1 className="text-3xl font-bold text-center mb-6">Cyprus Apartment Investment Calculator for Israeli Investors</h1>
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <CardContent className="p-4 space-y-4">
            <PropertyDetails propertyDetails={state} handlePropertyChange={handleChange} />
            <InvestmentParameters investmentParams={state} handleInvestmentChange={handleChange} rentalYield={rentalYield} />
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-green-500 to-teal-500 text-white">
          <CardContent className="p-4">
            <ResultsDisplay results={results} propertyDetails={state} investmentParams={state} />
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <CardContent className="p-4 space-y-4">
            <RentalDetails rentalDetails={state} handleRentalChange={handleChange} />
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <CardContent className="p-4 space-y-4">
            <TaxDetails taxDetails={state} handleTaxChange={handleChange} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ApartmentInvestmentCalculator;