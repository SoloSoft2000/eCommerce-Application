interface ProductCardProps {
  description: string;
  title: string;
  image: string;
  price: string | number;
  discount?: string | number;
  salePercent?: string | number;
  id?: string;
  images?: string[] | undefined;
}

interface ProductListProps {
  data: ProductCardProps[] | null;
}

export { ProductCardProps, ProductListProps };
