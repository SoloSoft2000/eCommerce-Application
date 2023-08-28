import React, { useEffect, useState } from 'react';
import Img from '../assets/images/img-03.png';
import EarringsImage from '../assets/images/img-02.png';
import NecklacesImage from '../assets/images/img-04.png';
import RingsImage from '../assets/images/img-01.png';
// import NecklacesImage from '../assets/images/catalog/Necklases.jpg';
// import RingsImage from '../assets/images/catalog/Rings.jpg';
// import EarringsImage from '../assets/images/catalog/Earrings.jpg';
import GoldNeclaces from '../assets/images/catalog/GoldNeclaces.jpg';
import SilverNeclaces from '../assets/images/catalog/SilverNeclaces.jpg';
import PearlNeclaces from '../assets/images/catalog/PearlNeclace.jpg';
import GoldRing from '../assets/images/catalog/GoldRing.jpg';
import SilverRing from '../assets/images/catalog/SilverRing.jpg';
import CategoryCover from '../сomponents/catalog/CategoryCover';
import getProducstCategories, {
  CategoryTree,
} from '../utils/sdk/getProductsCategories';
import MainCategoryCover from '../сomponents/MainCategoryCover';

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

function MainCatalogPage({
  title,
}: {
  [key: string]: string;
}): React.JSX.Element {
  const [categoriesCover, setCategoriesCover] = useState<CategoryTree[]>([]);

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
      {title && <h2 className="text-3xl font-bold mb-6">{title}</h2>}
      <div className="w-full flex flex-wrap gap-10 justify-center">
        {categoriesCover.map((category, index) => (
          <div key={index} className="flex flex-col gap-10 justify-center">
            <div className="w-full min-w-[20rem]">
              <MainCategoryCover
                name={category.name['en-US']}
                img={categoryImageMap[category.name['en-US']] || Img}
              />
            </div>
            {category.children && category.children.length > 0 && (
              <div className="flex gap-4 flex-wrap justify-center">
                {category.children.map((childCategory, childIndex) => (
                  <CategoryCover
                    key={`child-${childIndex}`}
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
