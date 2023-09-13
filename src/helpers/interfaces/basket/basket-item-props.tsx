import { LocalizedString } from '@commercetools/platform-sdk';

export interface BasketItemProps {
  name: LocalizedString;
  imageUrl: string;
  price: number;
  quantity: number;
  removeFromCart: () => void;
  lineItemId: string;
  updateCartTotal: () => void;
}
