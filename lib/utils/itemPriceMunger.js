export default function (items, prices, images) {
    return items.map((item, index) => {
      return {
        ...item, price: prices[index], image: images[index]
      };
    });
  }
  