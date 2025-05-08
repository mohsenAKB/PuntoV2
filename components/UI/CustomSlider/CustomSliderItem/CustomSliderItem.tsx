import { FC, ReactNode } from "react";
import { SwiperSlide, SwiperSlideProps } from "swiper/react";

export interface CustomSliderItemProps extends SwiperSlideProps {
  title: string
  children?: ReactNode
}

const CustomSliderItem: FC<CustomSliderItemProps> = (props): JSX.Element => {

  const { title } = props

  return (<SwiperSlide {...props} key={title} />)
}

export default CustomSliderItem