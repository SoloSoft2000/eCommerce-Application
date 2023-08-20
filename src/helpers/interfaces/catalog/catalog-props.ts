interface ProductCardProps {
  description: string;
  title: string;
  image: string;
  price: string | number;
  sale?: string | null;
}

interface ProductListProps {
  data: ProductCardProps[] | null;
}

export { ProductCardProps, ProductListProps };
