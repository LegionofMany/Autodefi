export const money = (value: number, decimals = 2) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(value);

export const number = (value: number) => new Intl.NumberFormat('en-US').format(value);

export const pct = (value: number) => `${value.toFixed(2)}%`;
