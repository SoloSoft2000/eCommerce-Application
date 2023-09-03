import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailedProductCard from '../сomponents/product/DetailedProductCard';
import returnProductById from '../utils/sdk/getDetailedProduct';
import { ProductCardProps } from '../helpers/interfaces/catalog/catalog-props';
import setProductWithId from '../utils/sdk/utils/handleDetailedProductData';
import BreadcrumbCatalog from '../сomponents/catalog/Breadcrumb';

function ProductPage(): React.JSX.Element {
  const { productId } = useParams();
  const [prodData, setProdData] = useState<ProductCardProps | undefined>();
  const [productImages, setProductImages] = useState<string[]>([]);

  useEffect(() => {
    if (productId) {
      const fetchData = async (): Promise<void> => {
        try {
          const response = await returnProductById(productId);
          const data = setProductWithId(response);
          setProdData(data);
          if (data.images) {
            setProductImages(data.images);
          }
        } catch (err) {
          throw new Error(`Detailed product page: ${err}`);
        }
      };
      fetchData();
    }
  }, []);
  return (
    <main className="container mx-auto">
      <BreadcrumbCatalog title={prodData?.title} />
      {prodData !== undefined && (
        <DetailedProductCard
          description={prodData.description}
          title={prodData.title}
          image={prodData.image}
          images={productImages}
          price={prodData.price}
          discount={prodData.discount}
          salePercent={prodData.salePercent}
          productBrand={prodData.productBrand}
          productStyle={prodData.productStyle}
        />
      )}
    </main>
  );
}

export default ProductPage;
