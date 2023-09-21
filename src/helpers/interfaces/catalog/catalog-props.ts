interface ProductCardProps {
  description: string;
  title: string;
  image?: string;
  price: string | number;
  discount?: string | number;
  salePercent?: string | number;
  id?: string;
  images?: string[] | undefined;
  productBrand?: string;
  productStyle?: string;
  idInCart?: string;
  setUpdateCart?: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ProductListProps {
  data: ProductCardProps[] | null;
}

interface BtnAddToCartProps {
  setUpdateFlag: React.Dispatch<React.SetStateAction<boolean>>;
  id?: string;
  idInCart?: string;
  btnCatalogClasses?: boolean;
  resetIdInCart?: () => void;
}

export { ProductCardProps, ProductListProps, BtnAddToCartProps };
