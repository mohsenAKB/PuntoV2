// src/components/Slider/Slide.tsx
import React from 'react';
import { SlideProps } from '../types';

const Slide: React.FC<SlideProps> = ({ image, title, description, badge }) => {
  return (
    <div className="slide">
      <img src={image} alt={title} />
      {/* <h2>{title}</h2> */}
      <p>{description}</p>

      {badge && <span className="slide__badge">{badge}</span>}
    </div>
  );
};

export default Slide;
