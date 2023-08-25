import React, { useEffect, useState } from 'react';
import DetailedProductCard from '../сomponents/catalog/DetailedProductCard';
import returnProductById from '../utils/sdk/getDetailedProduct';
import setProductEl from '../utils/sdk/utils/handleDetailedProductData';
import { ProductCardProps } from '../helpers/interfaces/catalog/catalog-props';

function ProductPage(): React.JSX.Element {

  const [prodData, setProdData] = useState<ProductCardProps>();
 
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await returnProductById();
        const data = setProductEl(response);
        setProdData(data);
        console.log(data);
        console.log(response);
      } catch (err) {
        throw new Error(`Detailed product page: ${err}`);
      }
    };
    fetchData();
}, []);
  
return (
    <main className="container mx-auto">
     {prodData !== undefined && (
        <DetailedProductCard
          description={prodData.description}
          title={prodData.title}
          image={prodData.image}
          price={prodData.price}
          discount={prodData.discount}
          salePercent={prodData.salePercent}
        />
      )}
    </main>
  );
}

export default ProductPage;

