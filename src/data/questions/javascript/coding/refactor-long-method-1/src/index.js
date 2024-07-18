export const code = `export const processSalesData = () => {
  // Filter valid sales records
  let validSales = [];
  for (let i = 0; i < salesData.length; i++) {
    if (salesData[i].amount > 0) {
      validSales.push(salesData[i]);
    }
  }

  // Calculate total sales
  let totalSales = 0;
  for (let i = 0; i < validSales.length; i++) {
    totalSales += validSales[i].amount;
  }

  return totalSales;
};
`;
