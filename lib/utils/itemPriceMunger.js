export default function (items, prices) {
  return items.map((item, index) => {
    return {
      ...item, price: prices[index]
    };
  });
}
