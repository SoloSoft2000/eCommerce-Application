import { ProductProjection } from '@commercetools/platform-sdk';
import { ProductCardProps } from '../../../helpers/interfaces/catalog/catalog-props';

function setDataElements(data: ProductProjection[]): ProductCardProps[] {
  const items = data.map((item): ProductCardProps => {
    const description = item.description ? item.description['en-US'] : '';
    const title = item.name ? item.name['en-US'] : '';
    const pricesList = item.masterVariant.prices;
    const price =
      pricesList && pricesList[0]
        ? (pricesList[0].value.centAmount / 100).toFixed(2)
        : '';
    const discount =
      pricesList && pricesList[0].discounted
        ? (pricesList[0].discounted.value.centAmount / 100).toFixed(2)
        : '';
    const imagesArray = item.masterVariant.images;
    const imageCover = imagesArray ? imagesArray[0].url : '';
    const salePercent =
      price && discount
        ? (((+price - +discount) / +discount) * 100).toFixed()
        : '';
    const productAttributes = item.masterVariant.attributes;
    const productStyle = productAttributes ? productAttributes[1].value[0] : '';
    const productBrand = productAttributes ? productAttributes[0].value[0] : '';

    return {
      id: item.id,
      description,
      title,
      price,
      discount,
      salePercent,
      productBrand,
      productStyle,
      image: imageCover,
    };
  });
  return items;
}

export default setDataElements;
