import { ProductProjection } from '@commercetools/platform-sdk';
import { useDispatch } from 'react-redux';
import { setProductsArray } from '../../reducers/productsListReducer';

type ProductCardProps = {
  description: string;
  title: string;
  image: string;
  price: string | number;
  sale?: string | null;
};

function setDataElements(data: ProductProjection[]): void {
  const dispatch = useDispatch();

  const items = data.map((item): ProductCardProps => {
    const description = item.description ? item.description['en-US'] : '';
    const title = item.name ? item.name['en-US'] : '';
    const price =
      item.masterVariant.prices && item.masterVariant.prices[0]
        ? item.masterVariant.prices[0].value.centAmount / 100
        : 'Not allowed';

    const image = item.masterVariant.images
      ? item.masterVariant.images[0].url
      : '';
    return {
      description,
      title,
      price,
      image,
    };
  });
  console.log(items);
  dispatch(setProductsArray(items));
}

export default setDataElements;
