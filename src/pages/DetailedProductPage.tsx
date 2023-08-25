import React, { useEffect } from 'react';
import DetailedProductCard from '../сomponents/catalog/DetailedProductCard';
import returnProductById from '../utils/sdk/getDetailedProduct';
import setProductEl from '../utils/sdk/utils/handleDetailedProductData';

function ProductPage(): React.JSX.Element {
  
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await returnProductById();
        const data = setProductEl(response);
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
      <DetailedProductCard />
    </main>
  );
}

export default ProductPage;
