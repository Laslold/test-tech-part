import React from 'react';
import CarouselCard from './CarouselCard/';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = props => {
  const settings = {
    infinite: true,

    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const { handleClick, items } = props;
  const elements = items.map(el => (
    <CarouselCard key={el.id} itemData={el} handleClick={handleClick} />
  ));

  return <Slider {...settings}>{elements}</Slider>;
};

export default Carousel;
