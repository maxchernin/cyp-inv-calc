import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardContent, CardTitle } from './components/Card';
import { Input } from './components/Input';
import { Label } from './components/Label';
import { Slider } from './components/Slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/Select';
import { Toggle } from './components/Toggle'; // Assuming you have a Toggle component

const formatNumber = (num) => new Intl.NumberFormat('en-US').format(Math.round(num));

const SliderWithValue = ({ label, id, value, min, max, step, onChange, unit = '%' }) => (
  <div className="flex flex-col space-y-1.5">
    <Label htmlFor={id}>
      {label} <span className="font-bold">{value}{unit}</span>
    </Label>
    <Slider 
      id={id} 
      min={min} 
      max={max} 
      step={step} 
      value={[value]} 
      onValueChange={([newValue]) => onChange(newValue)}
    />
  </div>
);

const calculateRentalYield = (monthlyRent, totalPrice) => {
  const annualRent = monthlyRent * 12;
  return (annualRent / totalPrice) * 100;
};

const calculateReturns = (params) => {
  const { totalPrice, upfrontPercentage, constructionMonths, appreciationRate, years, occupancyRate, monthlyRent, monthlyManagementFee, transferTaxRate, vatRate, israeliTaxRate, isNewApartment } = params;

  const upfrontPayment = totalPrice * (upfrontPercentage / 100);
  const remainingPayment = totalPrice - upfrontPayment;
  const monthlyPayment = remainingPayment / constructionMonths;

  let totalInvestment = upfrontPayment;
  for (let i = 1; i <= constructionMonths; i++) {
    totalInvestment += monthlyPayment;
  }

  let currentValue = totalPrice;
  let totalRentalIncome = 0;
  let totalManagementFees = 0;
  let totalVatReturns = 0;
  let totalIsraeliTax = 0;
  let transferTax = 0;

  const rentalYears = Math.max(0, years - (constructionMonths / 12));

  for (let i = 0; i < rentalYears; i++) {
    const yearlyRent = monthlyRent * 12 * (occupancyRate / 100);
    const yearlyManagementFee = monthlyManagementFee * 12;
    const yearlyVatReturn = (yearlyRent * (vatRate / 100)) / (1 + vatRate / 100);
    const yearlyIsraeliTax = (yearlyRent - yearlyManagementFee) * (israeliTaxRate / 100);
    
    totalRentalIncome += yearlyRent;
    totalManagementFees += yearlyManagementFee;
    totalIsraeliTax += yearlyIsraeliTax;
    if (i > 0) { // VAT returns start from the second year
      totalVatReturns += yearlyVatReturn;
    }
    currentValue *= (1 + appreciationRate / 100);
  }

  if (!isNewApartment) {
    transferTax = totalPrice * (transferTaxRate / 100);
    totalInvestment += transferTax;
  }

  const totalAppreciation = currentValue - totalPrice;
  const totalReturn = totalRentalIncome + totalAppreciation + totalVatReturns - totalManagementFees - totalIsraeliTax;
  const roi = (totalReturn / totalInvestment) * 100;

  return {
    upfrontPayment,
    monthlyPayment,
    totalInvestment,
    finalValue: currentValue,
    totalRentalIncome,
    totalManagementFees,
    totalVatReturns,
    totalIsraeliTax,
    totalAppreciation,
    totalReturn,
    roi,
    transferTax
  };
};

export default function ApartmentInvestmentCalculator() {
  const [investmentParams, setInvestmentParams] = useState({
    totalPrice: 300000,
    upfrontPercentage: 30,
    constructionMonths: 24,
    appreciationRate: 3,
    years: 7,
    occupancyRate: 100,
    monthlyRent: 1000,
    monthlyManagementFee: 100,
    transferTaxRate: 8,
    vatRate: 19,
    israeliTaxRate: 15
  });

  const handleParamChange = (key, value) => {
    setInvestmentParams(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  const results = useMemo(() => calculateReturns(investmentParams), [investmentParams]);
  const rentalYield = useMemo(() => calculateRentalYield(investmentParams.monthlyRent, investmentParams.totalPrice), [investmentParams.monthlyRent, investmentParams.totalPrice]);

  return (
    <div className="space-y-4">
      <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Cyprus Apartment Investment Calculator for Israeli Investors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 border-b-2 pb-2">Property Details</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="totalPrice">Total Apartment Price (€)</Label>
                  <Input id="totalPrice" value={investmentParams.totalPrice} onChange={(e) => handleParamChange('totalPrice', Number(e.target.value))} className="bg-white text-black" />
                </div>
                <SliderWithValue
                  label="Upfront Payment"
                  id="upfrontPercentage"
                  value={investmentParams.upfrontPercentage}
                  min={0}
                  max={100}
                  step={1}
                  onChange={(value) => handleParamChange('upfrontPercentage', value)}
                />
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="constructionMonths">Construction Period</Label>
                  <Select value={investmentParams.constructionMonths.toString()} onValueChange={(value) => handleParamChange('constructionMonths', Number(value))}>
                    {[12, 24, 36, 48, 60].map((months) => (
                      <option key={months} value={months.toString()}>{months / 12} years</option>
                    ))}
                  </Select>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2 border-b-2 pb-2">Investment Parameters</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label>Annual Rental Yield</Label>
                  <div className="font-bold">{rentalYield.toFixed(2)}%</div>
                </div>
                <SliderWithValue
                  label="Annual Appreciation Rate"
                  id="appreciationRate"
                  value={investmentParams.appreciationRate}
                  min={0}
                  max={10}
                  step={0.1}
                  onChange={(value) => handleParamChange('appreciationRate', value)}
                />
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="years">Investment Period (Years)</Label>
                  <Select value={investmentParams.years.toString()} onValueChange={(value) => handleParamChange('years', Number(value))}>
                    <SelectTrigger className="bg-white text-black">
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                      {[...Array(20)].map((_, i) => (
                        <SelectItem key={i+1} value={(i+1).toString()}>{i+1} years</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2 border-b-2 pb-2">Rental Details</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="occupancyRate">Annual Occupancy Rate (%)</Label>
                  <Input 
                    id="occupancyRate" 
                    type="number" 
                    value={investmentParams.occupancyRate} 
                    onChange={(e) => handleParamChange('occupancyRate', Number(e.target.value))}
                    min={0}
                    max={100}
                    step={0.1}
                    className="bg-white text-black"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="monthlyRent">Estimated Monthly Rent (€)</Label>
                  <Input 
                    id="monthlyRent" 
                    type="number"
                    value={investmentParams.monthlyRent} 
                    onChange={(e) => handleParamChange('monthlyRent', Number(e.target.value))} 
                    className="bg-white text-black"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="monthlyManagementFee">Monthly Management Fee (€)</Label>
                  <Input 
                    id="monthlyManagementFee" 
                    type="number"
                    value={investmentParams.monthlyManagementFee} 
                    onChange={(e) => handleParamChange('monthlyManagementFee', Number(e.target.value))} 
                    className="bg-white text-black"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2 border-b-2 pb-2">Taxes</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label>New Apartment</Label>
                  <Toggle 
                    id="isNewApartment" 
                    checked={investmentParams.isNewApartment} 
                    onChange={(checked) => handleParamChange('isNewApartment', checked)} 
                  />
                </div>
                {investmentParams.isNewApartment ? (
                  <div className="flex flex-col space-y-1.5">
                    <Label>VAT Rate</Label>
                    <div className="font-bold">{investmentParams.vatRate}%</div>
                  </div>
                ) : (
                  <SliderWithValue
                    label="Transfer Tax Rate"
                    id="transferTaxRate"
                    value={investmentParams.transferTaxRate}
                    min={0}
                    max={15}
                    step={0.1}
                    onChange={(value) => handleParamChange('transferTaxRate', value)}
                  />
                )}
                <div className="flex flex-col space-y-1.5">
                  <Label>Israeli Tax Rate</Label>
                  <div className="font-bold">{investmentParams.israeliTaxRate}%</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-green-500 to-teal-500 text-white">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Investment Returns for {investmentParams.years} Years</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 border-b-2 pb-2">Initial Costs</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>Upfront Payment: €{formatNumber(results.upfrontPayment)}</div>
                <div>Monthly Contractor Return Payment: €{formatNumber(results.monthlyPayment)}</div>
                <div>Transfer Tax: €{formatNumber(results.transferTax)}</div>
                <div>VAT: €{formatNumber(investmentParams.totalPrice * investmentParams.vatRate / 100)}</div>
              </div>
            </div>
            <hr className="border-t-2 border-white" />
            <div>
              <h3 className="text-xl font-semibold mb-2 border-b-2 pb-2">Investment Overview</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>Total Investment: €{formatNumber(results.totalInvestment)}</div>
                <div>Total Investment Inc. VAT: €{formatNumber(results.totalInvestment + (investmentParams.totalPrice * investmentParams.vatRate / 100))}</div>
                <div>Final Property Value: €{formatNumber(results.finalValue)}</div>
                <div>Total Appreciation: €{formatNumber(results.totalAppreciation)}</div>
              </div>
            </div>
            <hr className="border-t-2 border-white" />
            <div>
              <h3 className="text-xl font-semibold mb-2 border-b-2 pb-2">Rental Income and Expenses</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>Total Rental Income: €{formatNumber(results.totalRentalIncome)}</div>
                <div>Management Fees: €{formatNumber(results.totalManagementFees)}</div>
                <div>VAT Returns: €{formatNumber(results.totalVatReturns)}</div>
              </div>
            </div>
            <hr className="border-t-2 border-white" />
            <div>
              <h3 className="text-xl font-semibold mb-2 border-b-2 pb-2">Taxes and Returns</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>Israeli Tax: €{formatNumber(results.totalIsraeliTax)}</div>
                <div>Total Return: €{formatNumber(results.totalReturn)}</div>
                <div>ROI: {results.roi.toFixed(2)}%</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
