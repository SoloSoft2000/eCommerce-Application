import { LineItem } from '@commercetools/platform-sdk';

export interface BasketItemProps {
  lineItem: LineItem;
  removeFromCart: (itemId: string) => void;
  updateCartTotal: () => void;
}
