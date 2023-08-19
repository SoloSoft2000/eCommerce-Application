import React, { useEffect, useState } from 'react';
import { ProductProjection } from '@commercetools/platform-sdk';
import Filter from '../сomponents/catalog/Filter';
import ProductCard from '../сomponents/catalog/ProductCard';
import getProducts from '../utils/sdk/getProducts';

type ProductCardProps = {
  description: string;
  title: string;
  image: string;
  price: string | number;
  sale?: string | null;
};

function setDataElements(data: ProductProjection[]): ProductCardProps[] {
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
  return items;
}

function CatalogPage(): React.JSX.Element {
  const [data, setData] = useState<ProductCardProps[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        const products = await getProducts();
        setData(setDataElements(products));
      } catch (err) {
        console.log('Error fetching products:', err);
      }
    }

    fetchData();
  }, []);

  const items = data.map((item: ProductCardProps, index): React.JSX.Element => {
    const { description, title, image, price } = item;
    return (
      <ProductCard
        description={description}
        title={title}
        image={image}
        key={index}
        price={price}
        sale={null}
      />
    );
  });

  return (
    <main className="container mx-auto flex flex-wrap justify-between items-start pt-10">
      <Filter />
      <div className="flex w-3/4 justify-around items-center flex-wrap gap-8 md:gap-y-14">
        {...items}
      </div>
    </main>
  );
}

export default CatalogPage;
