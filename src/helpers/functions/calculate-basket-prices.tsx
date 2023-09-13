import { LineItem } from '@commercetools/platform-sdk';

function getPrice(lineItem: LineItem): number {
  if (lineItem.price.discounted) {
    return lineItem.price.discounted.value.centAmount / 100;
  }
  return lineItem.price.value.centAmount / 100;
}

function calculateTotalCart(lineItems: LineItem[]): number {
  return lineItems.reduce((acc, lineItem) => acc + getPrice(lineItem), 0);
}

export { getPrice, calculateTotalCart };
