import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from '../Card';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import museuLP from '../../assets/images/museu-da-lingua-portuguesa.png';
import mercadoMunicipal from '../../assets/images/mercado-municipal-sp.png';
import maspImg from '../../assets/images/masp.png';
import auditorioIbirapuera from '../../assets/images/auditorio-ibirapuera.png';
import parqueIndep from '../../assets/images/parque-da-independencia.jpg';

SwiperCore.use(Navigation);

export const Slider = () => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      breakpoints={{
        768: {
          slidesPerView: 2,
          centeredSlides: false,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      centeredSlides={true}
      slidesPerView={1}
    >
      <SwiperSlide>
        <Card title="Museu da Lingua Portuguesa" photo={museuLP} />
      </SwiperSlide>
      <SwiperSlide>
        <Card title="Mercado Municipal" photo={mercadoMunicipal} />
      </SwiperSlide>
      <SwiperSlide>
        <Card title="Auditório Ibirapuera" photo={auditorioIbirapuera} />
      </SwiperSlide>
      <SwiperSlide>
        <Card title="Museu de Artes de São Paulo" photo={maspImg} />
      </SwiperSlide>
      <SwiperSlide>
        <Card title="Parque da Independência" photo={parqueIndep} />
      </SwiperSlide>
    </Swiper>
  );
};
