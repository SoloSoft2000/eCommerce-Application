import React, { useEffect, useState } from 'react';
import Img from '../assets/images/img-03.png';
import NecklacesImage from '../assets/images/catalog/Necklases.jpg';
import RingsImage from '../assets/images/catalog/Rings.jpg';
import EarringsImage from '../assets/images/catalog/Earrings.jpg';
import GoldNeclaces from '../assets/images/catalog/GoldNeclaces.jpg';
import SilverNeclaces from '../assets/images/catalog/SilverNeclaces.jpg';
import PearlNeclaces from '../assets/images/catalog/PearlNeclace.jpg';
import GoldRing from '../assets/images/catalog/GoldRing.jpg';
import SilverRing from '../assets/images/catalog/SilverRing.jpg';
import CategoryCover from '../сomponents/catalog/CategoryCover';
import getProducstCategories from '../utils/sdk/getProductsCategories';

const categoryImageMap: Record<string, string> = {
  Necklaces: NecklacesImage,
  Rings: RingsImage,
  Earrings: EarringsImage,
  'Gold necklaces': GoldNeclaces,
  'Silver necklaces': SilverNeclaces,
  'Pearl necklaces': PearlNeclaces,
  'Gold Rings': GoldRing,
  'Silver rings': SilverRing,
};

function MainCatalogPage(): React.JSX.Element {
  const [categoriesCover, setCategoriesCover] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategoriesCover = async (): Promise<void> => {
      try {
        const categoriesData = await getProducstCategories();
        setCategoriesCover(categoriesData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategoriesCover();
  }, []);

  return (
    <main className="container mx-auto py-10 text-center">
      <h2 className="text-3xl font-bold mb-6">Enjoy Our Catalog</h2>
      <div className="flex flex-wrap gap-5 justify-center">
        {categoriesCover.map((category, index) => (
          <CategoryCover
            key={`${index}`}
            name={category}
            img={categoryImageMap[category] || Img}
          />
        ))}
      </div>
    </main>
  );
}

export default MainCatalogPage;
