export interface SwiperComponentProps {
  images: string[];
}

export type ImgModalProps = {
  isOpen: boolean;
  onClose: () => void;
  image?: string;
  children?: React.ReactNode;  
};

export interface ModalSliderProps {
  images: string[];
  selectedIndex: number;
  onClose: () => void;
}
