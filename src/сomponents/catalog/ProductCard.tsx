import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Highlighter from 'react-highlight-words';
import { useSelector } from 'react-redux';
import { RootState } from '../../utils/reducers/store';
import { ProductCardProps } from '../../helpers/interfaces/catalog/catalog-props';

function ProductCard(props: ProductCardProps): React.JSX.Element {
  const textForHighLight = useSelector(
    (state: RootState) => state.products.text
  );

  return (
    <div className="border-[1px] border-zinc-200 w-[18rem] h-[30rem] h-auto bg-white hover:drop-shadow-lg rounded relative cursor-pointer overflow-hidden">
      <div className="w-full object-bottom w-[18rem] h-[18rem] overflow-hidden rounded">
        {props.image ? (
          <LazyLoadImage
            className="object-cover w-full"
            width={288}
            height={288}
            effect="blur"
            src={props.image}
            alt={props.description}
          />
        ) : (
          <Skeleton />
        )}
      </div>
      {props.discount && (
        <div className="absolute flex justify-center items-center w-12 h-12 top-3 right-3 p-2 bg-white rounded-full">
          -{props.salePercent || <Skeleton />}%
        </div>
      )}
      <div className="h-[12rem] px-2 pt-2 pb-4 flex flex-col gap-2 justify-between">
        <div>
          <p className="font-bold">
            {props.productBrand ? (
              <Highlighter
                highlightClassName="bg-yellow-300"
                searchWords={textForHighLight.split(' ')}
                autoEscape={true}
                textToHighlight={props.productBrand}
              />
            ) : (
              <Skeleton />
            )}
            {props.productStyle ? (
              <span className="text-slate-500	font-normal	px-1">
                <Highlighter
                  highlightClassName="bg-yellow-300"
                  searchWords={textForHighLight.split(' ')}
                  autoEscape={true}
                  textToHighlight={props.productStyle}
                />
              </span>
            ) : (
              <Skeleton />
            )}
          </p>
          <h4 className="font-bold text-xl mb-2">
            {props.title ? (
              <Highlighter
                highlightClassName="bg-yellow-300"
                searchWords={textForHighLight.split(' ')}
                autoEscape={true}
                textToHighlight={props.title}
              />
            ) : (
              <Skeleton />
            )}
          </h4>
          <p className="overflow-hidden max-h-[3rem]">
            {props.description ? (
              <Highlighter
                highlightClassName="bg-yellow-200"
                searchWords={textForHighLight.split(' ')}
                autoEscape={true}
                textToHighlight={props.description}
              />
            ) : (
              <Skeleton />
            )}
          </p>
        </div>
        <p>
          {props.discount && (
            <span className="mr-2 line-through text-amber-400">
              $ {props.price || <Skeleton />}
            </span>
          )}
          {props.price ? (
            <span className="text-amber-600 text-xl">
              $ {props.discount ? props.discount : props.price}
            </span>
          ) : (
            <Skeleton />
          )}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
