export type ImgSliderProps = {
  images: string[];
};

export interface SliderArrowProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

export interface SliderDotProps {
  isActive: boolean;
  onClick: () => void;
}
