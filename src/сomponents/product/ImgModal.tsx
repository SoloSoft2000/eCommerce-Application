import React from "react";
import { GrClose } from 'react-icons/gr';
import { ImgModalProps } from "../../helpers/interfaces/product/slider-props";

const ImgModal = ({ isOpen, onClose, image }: ImgModalProps): React.JSX.Element | null => {
    const clickOutsideModal = (event: React.MouseEvent): void => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    };
  
    if (isOpen) {
      return (
        <div
          className="flex fixed justify-center items-center w-full h-full top-0 left-0 bg-black bg-opacity-60 z-20"
          onClick={clickOutsideModal} 
        >
          <div className="relative bg-white p-4 shadow-md text-center" onClick={(e: React.MouseEvent): void => e.stopPropagation()}>
            <img src={image} alt="large product image" style={{ width: '35vw' }} />
            <button
              className="absolute top-4 right-4 cursor-pointer"
              onClick={onClose}
            >
              <GrClose className='m-1 p-1 bg-gray-100 hover:bg-white rounded-none w-7 h-7' />
            </button>
          </div>
        </div>
      );
    }
  
    return null;
  };

export default ImgModal;
