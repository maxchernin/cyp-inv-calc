import React, { useState, useMemo } from 'react';
import { Card, CardHeader, CardContent, CardTitle } from './components/Card';
import { Input } from './components/Input';
import { Label } from './components/Label';
import { Slider } from './components/Slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/Select';
import { Toggle } from './components/Toggle';
import { formatNumber, calculateRentalYield, calculateReturns } from './utils/calculations';

const CONSTRUCTION_PERIODS = [12, 24, 36, 48, 60];
const MAX_INVESTMENT_YEARS = 20;
const INITIAL_STATE = {
  totalPrice: 300000, upfrontPercentage: 30, constructionMonths: 24,
  appreciationRate: 3, years: 7, occupancyRate: 100, monthlyRent: 1000,
  monthlyManagementFee: 100, transferTaxRate: 8, vatRate: 19, israeliTaxRate: 15,
  isNewApartment: true
};

const SliderWithValue = ({ label, id, value, min, max, step, onChange, unit = '%' }) => (
  <div className="flex flex-col space-y-1.5">
    <Label htmlFor={id}>{label} <span className="font-bold">{value}{unit}</span></Label>
    <Slider id={id} min={min} max={max} step={step} value={[value]} onValueChange={([newValue]) => onChange(newValue)} />
  </div>
);

export function ApartmentInvestmentCalculator() {
  const [state, setState] = useState(INITIAL_STATE);
  const handleChange = (key, value) => setState(prev => ({ ...prev, [key]: value }));

  const results = useMemo(() => calculateReturns(state), [state]);
  const rentalYield = useMemo(() => calculateRentalYield(state.monthlyRent, state.totalPrice), [state.monthlyRent, state.totalPrice]);

  const renderSection = (title, content) => (
    <div>
      <h3 className="text-xl font-semibold mb-2 border-b-2 pb-2">{title}</h3>
      <div className="grid grid-cols-3 gap-4">{content}</div>
    </div>
  );

  const renderInput = (label, id, value, onChange, type = "number") => (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} value={value} onChange={(e) => onChange(id, Number(e.target.value))} className="bg-white text-black" />
    </div>
  );

  const renderSelect = (label, id, value, options, onChange) => (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Select value={value.toString()} onValueChange={(value) => onChange(id, Number(value))}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option.toString()}>
              {option} {id === 'years' ? 'years' : 'months'}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );

  const renderResults = () => (
    <Card className="bg-gradient-to-r from-green-500 to-teal-500 text-white">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Investment Returns for {state.years} Years</CardTitle>
      </CardHeader>
      <CardContent>
        {['Initial Costs', 'Investment Overview', 'Rental Income and Expenses', 'Taxes and Returns'].map(section => (
          <React.Fragment key={section}>
            {renderSection(section, Object.entries(results)
              .filter(([key]) => key.startsWith(section.toLowerCase().split(' ')[0]))
              .map(([key, value]) => (
                <div key={key}>{key.replace(/([A-Z])/g, ' $1').trim()}: €{formatNumber(value)}</div>
              ))
            )}
            <hr className="border-t-2 border-white my-4" />
          </React.Fragment>
        ))}
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-4">
      <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Cyprus Apartment Investment Calculator for Israeli Investors</CardTitle>
        </CardHeader>
        <CardContent>
          {renderSection('Property Details', [
            renderInput('Total Apartment Price (€)', 'totalPrice', state.totalPrice, handleChange),
            <SliderWithValue key="upfront" label="Upfront Payment" id="upfrontPercentage" value={state.upfrontPercentage} min={0} max={100} step={1} onChange={(value) => handleChange('upfrontPercentage', value)} />,
            renderSelect('Construction Period', 'constructionMonths', state.constructionMonths, CONSTRUCTION_PERIODS, handleChange)
          ])}
          {renderSection('Investment Parameters', [
            <div key="yield" className="flex flex-col space-y-1.5"><Label>Annual Rental Yield</Label><div className="font-bold">{rentalYield.toFixed(2)}%</div></div>,
            <SliderWithValue key="appreciation" label="Annual Appreciation Rate" id="appreciationRate" value={state.appreciationRate} min={0} max={10} step={0.1} onChange={(value) => handleChange('appreciationRate', value)} />,
            renderSelect('Investment Period (Years)', 'years', state.years, [...Array(MAX_INVESTMENT_YEARS)].map((_, i) => i + 1), handleChange)
          ])}
          {renderSection('Rental Details', [
            renderInput('Annual Occupancy Rate (%)', 'occupancyRate', state.occupancyRate, handleChange),
            renderInput('Estimated Monthly Rent (€)', 'monthlyRent', state.monthlyRent, handleChange),
            renderInput('Monthly Management Fee (€)', 'monthlyManagementFee', state.monthlyManagementFee, handleChange)
          ])}
          {renderSection('Taxes', [
            <div key="newApartment" className="flex flex-col space-y-1.5"><Label>New Apartment</Label><Toggle id="isNewApartment" checked={state.isNewApartment} onCheckedChange={(checked) => handleChange('isNewApartment', checked)} /></div>,
            state.isNewApartment 
              ? <div key="vat" className="flex flex-col space-y-1.5"><Label>VAT Rate</Label><div className="font-bold">{state.vatRate}%</div></div>
              : <SliderWithValue key="transfer" label="Transfer Tax Rate" id="transferTaxRate" value={state.transferTaxRate} min={0} max={15} step={0.1} onChange={(value) => handleChange('transferTaxRate', value)} />,
            <div key="israeliTax" className="flex flex-col space-y-1.5"><Label>Israeli Tax Rate</Label><div className="font-bold">{state.israeliTaxRate}%</div></div>
          ])}
        </CardContent>
      </Card>
      {renderResults()}
    </div>
  );
}

export default ApartmentInvestmentCalculator;