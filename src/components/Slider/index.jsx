import PropTypes from 'prop-types';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from '../Card';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { slides } from '../../utils/slides';

SwiperCore.use(Navigation);

export const Slider = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
          centeredSlides: false,
        },
      }}
      centeredSlides={true}
      slidesPerView={1}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Card title={slide.title} photo={slide.photo} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

Slider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
};
