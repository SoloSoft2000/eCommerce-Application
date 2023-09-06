export interface SwiperComponentProps {
  images: string[];
}

export interface ModalSliderProps {
  images: string[];
  selectedIndex: number;
  onClose: () => void;
}
