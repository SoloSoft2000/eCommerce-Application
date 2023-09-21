import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailedProductCard from '../сomponents/product/DetailedProductCard';
import returnProductById from '../utils/sdk/getDetailedProduct';
import { ProductCardProps } from '../helpers/interfaces/catalog/catalog-props';
import setProductWithId from '../utils/sdk/utils/handleDetailedProductData';
import BreadcrumbCatalog from '../сomponents/catalog/Breadcrumb';
import NotificationContext from '../utils/notification/NotificationContext';
import getCart from '../utils/sdk/basket/getCart';
import ButtonAddToCart from '../сomponents/ButtonAddToCart';
import ButtonRemoveFromCart from '../сomponents/ButtonRemoveFromCart';

function ProductPage(): React.JSX.Element {
  const { productId } = useParams();
  const [prodData, setProdData] = useState<ProductCardProps | undefined>();
  const [productImages, setProductImages] = useState<string[]>([]);
  const [updateCart, setUpdateCart] = useState(false);
  const [idInCart, setIdInCart] = useState<string | undefined>(undefined);
  const [updateFlag, setUpdateFlag] = useState(false);

  function resetIdInCart(): void {
    setIdInCart(undefined);
  }

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
  }, [productId, showNotification, updateCart]);

  useEffect(() => {
    if (updateFlag) {
      if (setUpdateCart) setUpdateCart(true);
      setUpdateFlag(false);
    } else if (prodData) {
      getCart()
        .then((cart) => {
          const productIdToFind = prodData.id;
          const lineItem = cart.lineItems.find(
            (item) => item.productId === productIdToFind
          );
          if (lineItem) {
            setIdInCart(lineItem.id);
            return lineItem.id;
          }
          return null;
        })
        .catch(() => setUpdateCart(false));
    }
  }, [updateFlag, prodData]);

  return (
    <main className="container mx-auto">
      <BreadcrumbCatalog title={prodData?.title} />
      {prodData !== undefined && (
        <>
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
          <div className="flex justify-end mr-[24%] max-md:justify-between max-md:mr-0">
            <ButtonAddToCart
              setUpdateFlag={setUpdateFlag}
              id={prodData.id}
              idInCart={idInCart}
              resetIdInCart={resetIdInCart}
            />
            <ButtonRemoveFromCart
              setUpdateFlag={setUpdateFlag}
              id={prodData.id}
              idInCart={idInCart}
              resetIdInCart={resetIdInCart}
            />
          </div>
        </>
      )}
    </main>
  );
}

export default ProductPage;
