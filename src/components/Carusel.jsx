'use client';
import { Carousel } from 'flowbite-react';

import Img from '../img/click.png';

const CarouselCustom = () => {
  return (
    <Carousel>
      <img
        alt='...'
        src='https://click.uz/click/images/premium/mockup-uz.png'
      />
      <img alt='...' src='https://click.uz/click/images/clickstart_new.png' />
      <img alt='...' src='https://click.uz/click/images/clickup.png' />
      <img alt='...' src='https://click.uz/click/images/verify/mockup-uz.png' />
      <img alt='...' src={Img} />
    </Carousel>
  );
};
export default CarouselCustom;
