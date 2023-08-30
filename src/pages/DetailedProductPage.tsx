import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailedProductCard from '../сomponents/product/DetailedProductCard';
import returnProductById from '../utils/sdk/getDetailedProduct';
import setProductEl from '../utils/sdk/utils/handleDetailedProductData';
import { ProductCardProps } from '../helpers/interfaces/catalog/catalog-props';

function ProductPage(): React.JSX.Element {
  const { productId } = useParams();
  const [prodData, setProdData] = useState<ProductCardProps>();

  useEffect(() => {
    if (productId) {
      const fetchData = async (): Promise<void> => {
        try {
          const response = await returnProductById(productId);
          const data = setProductEl(response);
          setProdData(data);
          console.log(data);
          console.log(response);
          console.log(productId);
        } catch (err) {
          throw new Error(`Detailed product page: ${err}`);
        }
      };
      fetchData();
    }
  }, [productId]);

  return (
    <main className="container mx-auto">
      {prodData !== undefined && (
        <DetailedProductCard
          description={prodData.description}
          title={prodData.title}
          image={prodData.image}
          images={prodData.images}
          price={prodData.price}
          discount={prodData.discount}
          salePercent={prodData.salePercent}
        />
      )}
    </main>
  );
}

export default ProductPage;
