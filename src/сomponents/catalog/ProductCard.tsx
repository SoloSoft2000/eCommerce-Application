import React from 'react';
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
      {props.discount && (
        <div className="absolute flex justify-center items-center w-12 h-12 top-3 right-3 p-2 bg-white rounded-full">
          -{props.salePercent}%
        </div>
      )}
      <div className="w-full object-bottom w-[18rem] h-[18rem] overflow-hidden rounded">
        <img
          className="object-cover w-full"
          src={props.image}
          alt={props.description}
        />
      </div>
      <div className="h-[12rem] px-2 pt-2 pb-4 flex flex-col gap-2 justify-between">
        <div>
          <p className="font-bold">
            {props.productBrand && (
              <Highlighter
                highlightClassName="bg-yellow-300"
                searchWords={textForHighLight.split(' ')}
                autoEscape={true}
                textToHighlight={props.productBrand}
              />
            )}
            {props.productStyle && (
              <span className="text-slate-500	font-normal	px-1">
                <Highlighter
                  highlightClassName="bg-yellow-300"
                  searchWords={textForHighLight.split(' ')}
                  autoEscape={true}
                  textToHighlight={props.productStyle}
                />
              </span>
            )}
          </p>
          <h4 className="font-bold text-xl mb-2">
            <Highlighter
              highlightClassName="bg-yellow-300"
              searchWords={textForHighLight.split(' ')}
              autoEscape={true}
              textToHighlight={props.title}
            />
          </h4>
          <p>
            <Highlighter
              highlightClassName="bg-yellow-200"
              searchWords={textForHighLight.split(' ')}
              autoEscape={true}
              textToHighlight={props.description}
            />
          </p>
        </div>
        <p>
          {props.discount && (
            <span className="mr-2 line-through text-amber-400">
              $ {props.price}
            </span>
          )}
          <span className="text-amber-600 text-xl">
            $ {props.discount ? props.discount : props.price}
          </span>
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
