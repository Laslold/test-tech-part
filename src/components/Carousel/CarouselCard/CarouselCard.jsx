import React from 'react';
import Button from '../../../shared/Button/Button';
import s from './caruoselcard.module.css';

const CarouselCard = props => {
  const { itemData, handleClick } = props;
  const {
    make,

    img,
    model,
    year,

    rentalPrice,
  } = itemData;
  const phoneClick = () => {
    const phoneNumber = '380730000000';
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <li className={s.item}>
      <div className={s.image}>
        <img src={img} alt={model} />
      </div>

      <div className={s.card}>
        <div className={s.cardInfo}>
          <div className={s.carName}>
            <div>{make} </div>
            <div className={s.mark}>{model},</div>
            <div> {year}</div>
          </div>
          <div className={s.carPrice}>{rentalPrice}</div>
        </div>
      </div>
      <div className={s.slBtn}>
        <Button variant="tertiary" onClick={phoneClick}>
          Rental car
        </Button>
        <Button variant="secondary" onClick={() => handleClick(itemData)}>
          Learn more
        </Button>
      </div>
    </li>
  );
};

export default CarouselCard;
