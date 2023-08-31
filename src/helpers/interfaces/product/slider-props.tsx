export interface SwiperComponentProps {
  images: string[];
}

export type ImgModalProps = {
  isOpen: boolean;
  onClose: () => void;
  image?: string;
};
