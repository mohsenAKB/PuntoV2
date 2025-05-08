export interface SlideProps {
  image: string;
  title: string;
  description?: string;
  badge?: string;
  className?: string;
}

export interface SliderProps {
  slides: SlideProps[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showPageNumbers?: boolean;
  className?: string;
}
