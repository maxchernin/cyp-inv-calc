import React, { useState, useMemo } from 'react';
import { Card, CardHeader, CardContent, CardTitle } from './components/Card';
import { Input } from './components/Input';
import { Label } from './components/Label';
import { Slider } from './components/Slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/Select';
import { Toggle } from './components/Toggle'; // Assuming you have a Toggle component
import { formatNumber, calculateRentalYield, calculateReturns } from './utils/calculations';

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
export default ApartmentInvestmentCalculator;

export function ApartmentInvestmentCalculator() {
  const [propertyDetails, setPropertyDetails] = useState({
    totalPrice: 300000,
    upfrontPercentage: 30,
    constructionMonths: 24,
  });

  const [investmentParams, setInvestmentParams] = useState({
    appreciationRate: 3,
    years: 7,
    occupancyRate: 100,
    monthlyRent: 1000,
    monthlyManagementFee: 100,
    transferTaxRate: 8,
    vatRate: 19,
    israeliTaxRate: 15,
    isNewApartment: true,
  });

  const handlePropertyChange = (key, value) => {
    setPropertyDetails(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  const handleInvestmentChange = (key, value) => {
    setInvestmentParams(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  const results = useMemo(() => calculateReturns({ ...propertyDetails, ...investmentParams }), [propertyDetails, investmentParams]);
  const rentalYield = useMemo(() => calculateRentalYield(investmentParams.monthlyRent, propertyDetails.totalPrice), [investmentParams.monthlyRent, propertyDetails.totalPrice]);

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
                  <Input id="totalPrice" value={propertyDetails.totalPrice} onChange={(e) => handlePropertyChange('totalPrice', Number(e.target.value))} className="bg-white text-black" />
                </div>
                <SliderWithValue
                  label="Upfront Payment"
                  id="upfrontPercentage"
                  value={propertyDetails.upfrontPercentage}
                  min={0}
                  max={100}
                  step={1}
                  onChange={(value) => handlePropertyChange('upfrontPercentage', value)}
                />
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="constructionMonths">Construction Period</Label>
                  <Select value={propertyDetails.constructionMonths.toString()} onValueChange={(value) => handlePropertyChange('constructionMonths', Number(value))}>
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
                  onChange={(value) => handleInvestmentChange('appreciationRate', value)}
                />
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="years">Investment Period (Years)</Label>
                  <Select value={investmentParams.years.toString()} onValueChange={(value) => handleInvestmentChange('years', Number(value))}>
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
                    onChange={(e) => handleInvestmentChange('occupancyRate', Number(e.target.value))}
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
                    onChange={(e) => handleInvestmentChange('monthlyRent', Number(e.target.value))} 
                    className="bg-white text-black"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="monthlyManagementFee">Monthly Management Fee (€)</Label>
                  <Input 
                    id="monthlyManagementFee" 
                    type="number"
                    value={investmentParams.monthlyManagementFee} 
                    onChange={(e) => handleInvestmentChange('monthlyManagementFee', Number(e.target.value))} 
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
                    onChange={(checked) => handleInvestmentChange('isNewApartment', checked)} 
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
                    onChange={(value) => handleInvestmentChange('transferTaxRate', value)}
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
                <div>VAT: €{formatNumber(propertyDetails.totalPrice * investmentParams.vatRate / 100)}</div>
              </div>
            </div>
            <hr className="border-t-2 border-white" />
            <div>
              <h3 className="text-xl font-semibold mb-2 border-b-2 pb-2">Investment Overview</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>Total Investment: €{formatNumber(results.totalInvestment)}</div>
                <div>Total Investment Inc. VAT: €{formatNumber(results.totalInvestment + (propertyDetails.totalPrice * investmentParams.vatRate / 100))}</div>
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