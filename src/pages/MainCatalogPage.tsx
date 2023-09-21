import React, { useContext, useEffect, useState } from 'react';
import Img from '../assets/images/img-03.png';
import EarringsImage from '../assets/images/img-02.png';
import NecklacesImage from '../assets/images/img-04.png';
import RingsImage from '../assets/images/img-01.png';
import GoldRing from '../assets/images/catalog/Rings.jpg';
import SilverEarrings from '../assets/images/catalog/Earrings.jpg';
import GoldEarrings from '../assets/images/catalog/GoldEarrings.jpg';
import GestoneEarrings from '../assets/images/catalog/GemstoneEarrings.jpg';
import PlainEarrings from '../assets/images/catalog/PlainEarrings.jpg';
import GoldNeclaces from '../assets/images/catalog/GoldNeclaces.jpg';
import SilverNeclaces from '../assets/images/catalog/SilverNeclaces.jpg';
import PearlNeclaces from '../assets/images/catalog/PearlNeclace.jpg';
import SilverRing from '../assets/images/catalog/SilverRing.jpg';
import AllProducts from '../assets/images/catalog/all.jpg';

import CategoryCover from '../сomponents/catalog/CategoryCover';
import getProducstCategories, {
  CategoryTree,
} from '../utils/sdk/getProductsCategories';
import MainCategoryCover from '../сomponents/MainCategoryCover';
import NotificationContext from '../utils/notification/NotificationContext';

const categoryImageMap: Record<string, string> = {
  Necklaces: NecklacesImage,
  Rings: RingsImage,
  Earrings: EarringsImage,
  All: AllProducts,
  'Gold necklaces': GoldNeclaces,
  'Silver necklaces': SilverNeclaces,
  'Pearl necklaces': PearlNeclaces,
  'Gold Rings': GoldRing,
  'Silver rings': SilverRing,
  'Silver Earrings': SilverEarrings,
  'Gold Earrings': GoldEarrings,
  'Gemstone earrings': GestoneEarrings,
  'Plain Earrings': PlainEarrings,
};

type MainCatalogData = {
  title?: string;
};

function MainCatalogPage({ title }: MainCatalogData): React.JSX.Element {
  const [categoriesCover, setCategoriesCover] = useState<CategoryTree[]>([]);

  const showNotification = useContext(NotificationContext);

  useEffect(() => {
    const fetchCategoriesCover = async (): Promise<void> => {
      try {
        const categoriesData = await getProducstCategories();
        setCategoriesCover(categoriesData);
      } catch (error) {
        showNotification(String(error), 'error');
      }
    };

    fetchCategoriesCover();
  }, []);

  return (
    <main className="container mx-auto py-10 flex flex-col items-center">
      {title && <h2 className="text-3xl font-bold mb-6">{title}</h2>}
      <div className="mb-5 w-full max-w-[65rem] overflow-hidden rounded-2xl">
        <MainCategoryCover name={'All products'} img={AllProducts} />
      </div>
      <div className="w-full flex flex-wrap gap-10 items-start justify-center">
        {categoriesCover.map((category, index) => (
          <div
            key={`${category}-${index}`}
            className="flex flex-col gap-6 justify-center"
          >
            <div className="w-[20rem]">
              <MainCategoryCover
                name={category.name['en-US']}
                img={categoryImageMap[category.name['en-US']] || Img}
              />
            </div>
            {category.children && category.children.length > 0 && (
              <div className="flex flex-col gap-4 items-center">
                {category.children.map((childCategory, childIndex) => (
                  <CategoryCover
                    key={`${childCategory}-${childIndex}`}
                    parentName={category.name['en-US']}
                    name={childCategory.name['en-US']}
                    img={categoryImageMap[childCategory.name['en-US']] || Img}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}

export default MainCatalogPage;
