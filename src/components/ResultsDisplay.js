import React from 'react';
import { formatNumber } from '../utils/calculations';

const ResultsDisplay = ({ results, propertyDetails, investmentParams }) => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold">Investment Returns for {investmentParams.years} Years</h3>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h4 className="font-semibold mb-2">Initial Costs</h4>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>Upfront Payment: €{formatNumber(results.upfrontPayment)}</div>
          <div>Monthly Payment: €{formatNumber(results.monthlyPayment)}</div>
          <div>Transfer Tax: €{formatNumber(results.transferTax)}</div>
          <div>VAT: €{formatNumber(propertyDetails.totalPrice * investmentParams.vatRate / 100)}</div>
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Investment Overview</h4>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>Total Investment: €{formatNumber(results.totalInvestment)}</div>
          <div>Inc. VAT: €{formatNumber(results.totalInvestment + (propertyDetails.totalPrice * investmentParams.vatRate / 100))}</div>
          <div>Final Value: €{formatNumber(results.finalValue)}</div>
          <div>Appreciation: €{formatNumber(results.totalAppreciation)}</div>
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Rental Income and Expenses</h4>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>Rental Income: €{formatNumber(results.totalRentalIncome)}</div>
          <div>Management Fees: €{formatNumber(results.totalManagementFees)}</div>
          <div>VAT Returns: €{formatNumber(results.totalVatReturns)}</div>
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Taxes and Returns</h4>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>Israeli Tax: €{formatNumber(results.totalIsraeliTax)}</div>
          <div>Total Return: €{formatNumber(results.totalReturn)}</div>
          <div>ROI: {results.roi.toFixed(2)}%</div>
        </div>
      </div>
    </div>
  </div>
);

export default ResultsDisplay;