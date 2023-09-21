import { LineItem } from '@commercetools/platform-sdk';

function getPrice(lineItem: LineItem): number {
  if (lineItem.price.discounted) {
    return lineItem.price.discounted.value.centAmount / 100;
  }
  return lineItem.price.value.centAmount / 100;
}

function getDiscountedPrice(lineItem: LineItem): number | undefined {
  if (
    lineItem.discountedPricePerQuantity &&
    lineItem.discountedPricePerQuantity.length > 0
  ) {
    const totalDiscountedPrice = lineItem.discountedPricePerQuantity.reduce(
      (accumulator, discountedPriceForQuantity) => {
        const { discountedPrice } = discountedPriceForQuantity;
        if (
          discountedPrice &&
          discountedPrice.value &&
          discountedPrice.value.centAmount
        ) {
          return accumulator + discountedPrice.value.centAmount;
        }
        return accumulator;
      },
      0
    );

    return totalDiscountedPrice / 100;
  }

  return undefined;
}

function calculateTotalCart(lineItems: LineItem[]): number {
  return lineItems.reduce((acc, lineItem) => acc + getPrice(lineItem), 0);
}

export { getPrice, getDiscountedPrice, calculateTotalCart };
