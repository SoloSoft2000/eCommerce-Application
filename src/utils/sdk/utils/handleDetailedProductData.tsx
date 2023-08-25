import { ProductProjection } from '@commercetools/platform-sdk';
import { ProductCardProps } from '../../../helpers/interfaces/catalog/catalog-props';

function setProductEl(data: ProductProjection): ProductCardProps {
  const description = data.description ? data.description['en-US'] : '';
  const title = data.name ? data.name['en-US'] : '';
  const pricesList = data.masterVariant.prices;
  const price = pricesList && pricesList[0] ? (pricesList[0].value.centAmount / 100).toFixed(2) : '';
  const imagesArray = data.masterVariant.images;
  const imageCover = imagesArray ? imagesArray[0].url : '';
  const discount =
  pricesList && pricesList[0].discounted ? (pricesList[0].discounted.value.centAmount / 100).toFixed(2) : '';
  const salePercent = price && discount ? (((+price - +discount) / +discount) * 100).toFixed() : '';
  return {
    description,
    title,
    price,
    discount,
    salePercent,
    image: imageCover,
  };
}

export default setProductEl;
