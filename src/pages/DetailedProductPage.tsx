import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailedProductCard from '../сomponents/product/DetailedProductCard';
import returnProductById from '../utils/sdk/getDetailedProduct';
import { ProductCardProps } from '../helpers/interfaces/catalog/catalog-props';
import setProductWithId from '../utils/sdk/utils/handleDetailedProductData';
import BreadcrumbCatalog from '../сomponents/catalog/Breadcrumb';
import NotificationContext from '../utils/notification/NotificationContext';
import getCart from '../utils/sdk/basket/getCart';

function ProductPage(): React.JSX.Element {
  const { productId } = useParams();
  const [prodData, setProdData] = useState<ProductCardProps | undefined>();
  const [productImages, setProductImages] = useState<string[]>([]);
  const [updateCart, setUpdateCart] = useState(false);
  const [idInCart, setIdInCart] = useState<string | undefined>(undefined); 

  const showNotification = useContext(NotificationContext);

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
          showNotification(` ${err}`, 'error');
        }
      };
      fetchData();
    }
  }, [productId, showNotification]);

  useEffect(() => {
    if (prodData) {
      getCart()
        .then((cart) => {
          const productIdToFind = prodData.id; 
          const lineItem = cart.lineItems.find((item) => item.productId === productIdToFind);
          if (lineItem) {
            setIdInCart(lineItem.id);
            console.log("Found item:", lineItem.id);
            return lineItem.id;
          } else {
            console.log("Item is not found in cart");
          }
        })
        .catch(() => setUpdateCart(false));
    }
  }, [prodData, updateCart]);

  return (
    <main className="container mx-auto">
      <BreadcrumbCatalog title={prodData?.title} />
      {prodData !== undefined && (
        <DetailedProductCard
          id={prodData.id}
          description={prodData.description}
          title={prodData.title}
          image={prodData.image}
          images={productImages}
          price={prodData.price}
          discount={prodData.discount}
          salePercent={prodData.salePercent}
          productBrand={prodData.productBrand}
          productStyle={prodData.productStyle}
          idInCart={idInCart}
          setUpdateCart={setUpdateCart}
        />
      )}
    </main>
  );
}

export default ProductPage;
