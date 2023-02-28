// const formatter = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD'
// });

// const price = 1234.56;
// const formattedPrice = formatter.format(price);

export function formatPrice(price) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  return formatter.format(price);
}
// console.log(formattedPrice); // "$1,234.56"