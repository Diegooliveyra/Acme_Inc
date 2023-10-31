export function moneyFormat(n: number) {
  if (!n) return;
  const options = {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  };

  return new Intl.NumberFormat('pt-BR', options).format(n);
}
