import { ProductProjection } from '@commercetools/platform-sdk';
import { ProductCardProps } from '../../../helpers/interfaces/catalog/catalog-props';

function setDataElements(data: ProductProjection[]): ProductCardProps[] {
  const items = data.map((item): ProductCardProps => {
    const description = item.description ? item.description['en-US'] : '';
    const title = item.name ? item.name['en-US'] : '';
    const pricesList = item.masterVariant.prices;
    const price =
      pricesList && pricesList[0] ? pricesList[0].value.centAmount / 100 : '';
    const imagesArray = item.masterVariant.images;
    const imageCover = imagesArray ? imagesArray[0].url : '';
    return {
      description,
      title,
      price,
      image: imageCover,
    };
  });
  return items;
}

export default setDataElements;
