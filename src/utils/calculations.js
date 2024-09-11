export const formatNumber = (num) => new Intl.NumberFormat('en-US').format(Math.round(num));

export const calculateRentalYield = (monthlyRent, totalPrice) => {
  const annualRent = monthlyRent * 12;
  return (annualRent / totalPrice) * 100;
};

export const calculateReturns = (state) => {
  const { totalPrice, upfrontPercentage, reservationFeePercentage, constructionMonths, appreciationRate, years, occupancyRate, monthlyRent, monthlyManagementFee, transferTaxRate, vatRate, israeliTaxRate, isNewApartment, acCost, furnitureCost } = state;

  const reservationFee = totalPrice * (reservationFeePercentage / 100);
  const upfrontPayment = (totalPrice * (upfrontPercentage / 100)) - reservationFee;
  const totalFirstPayment = upfrontPayment + reservationFee;
  const remainingPayment = totalPrice - totalFirstPayment;
  const monthlyPayment = remainingPayment / constructionMonths;

  const transferTax = isNewApartment ? 0 : totalPrice * (transferTaxRate / 100);

  // Include AC and furniture costs in the initial investment
  let totalInvestment = upfrontPayment + transferTax + acCost + furnitureCost;

  let currentValue = totalPrice;

  // Apply appreciation during construction period
  for (let i = 1; i <= constructionMonths; i++) {
    currentValue *= (1 + appreciationRate / 1200); // Monthly appreciation rate
    totalInvestment += monthlyPayment;
  }

  let totalRentalIncome = 0;
  let totalManagementFees = 0;
  let totalVatReturns = 0;
  let totalIsraeliTax = 0;

  const rentalYears = years - (constructionMonths / 12);

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

  // Remove AC and furniture costs from ongoing expenses
  const totalExpenses = totalManagementFees;

  const totalAppreciation = currentValue - totalPrice;
  const totalReturn = currentValue - totalInvestment + totalRentalIncome - totalExpenses - totalIsraeliTax + totalVatReturns;
  const roi = ((totalReturn / totalInvestment) * 100) / years;

  return {
    upfrontPayment,
    reservationFee,
    totalFirstPayment,
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
    transferTax,
    totalExpenses,
    acCost,
    furnitureCost
  };
};