import React from 'react';
import { formatNumber } from '../utils/calculations';

const ResultsDisplay = ({ results, propertyDetails, investmentParams }) => (
  <div>
    <h3>Investment Returns for {investmentParams.years} Years</h3>
    <div>
      <div>
        <h4>Initial Costs</h4>
        <div>
          <div>Upfront Payment: €{formatNumber(results.upfrontPayment)}</div>
          <div>Monthly Payment: €{formatNumber(results.monthlyPayment)}</div>
          <div>Transfer Tax: €{formatNumber(results.transferTax)}</div>
          <div>VAT: €{formatNumber(propertyDetails.totalPrice * investmentParams.vatRate / 100)}</div>
        </div>
      </div>
      <div>
        <h4>Investment Overview</h4>
        <div>
          <div>Total Investment: €{formatNumber(results.totalInvestment)}</div>
          <div>Inc. VAT: €{formatNumber(results.totalInvestment + (propertyDetails.totalPrice * investmentParams.vatRate / 100))}</div>
          <div>Final Value: €{formatNumber(results.finalValue)}</div>
          <div>Appreciation: €{formatNumber(results.totalAppreciation)}</div>
        </div>
      </div>
      <div>
        <h4>Rental Income and Expenses</h4>
        <div>
          <div>Rental Income: €{formatNumber(results.totalRentalIncome)}</div>
          <div>Management Fees: €{formatNumber(results.totalManagementFees)}</div>
          <div>VAT Returns: €{formatNumber(results.totalVatReturns)}</div>
        </div>
      </div>
      <div>
        <h4>Taxes and Returns</h4>
        <div>
          <div>Israeli Tax: €{formatNumber(results.totalIsraeliTax)}</div>
          <div>Total Return: €{formatNumber(results.totalReturn)}</div>
          <div>ROI: {results.roi.toFixed(2)}%</div>
        </div>
      </div>
    </div>
  </div>
);

export default ResultsDisplay;