import { LocalizedString } from '@commercetools/platform-sdk';

export interface BasketItemProps {
  name: LocalizedString;
  imageUrl: string;
  price: number;
  removeFromCart: () => void;
}
