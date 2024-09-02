import React from 'react';
import { formatNumber } from '../utils/calculations';

const ResultsDisplay = ({ results, propertyDetails, investmentParams }) => (
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
);

export default ResultsDisplay;