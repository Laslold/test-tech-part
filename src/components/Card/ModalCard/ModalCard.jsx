import React from 'react';
import s from './modalcard.module.css';
import Button from 'shared/Button/Button';
const ModalCard = props => {
  const { content } = props;

  const {
    make,
    id,
    img,
    model,
    year,
    type,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,

    address,
    rentalConditions,
    mileage,
  } = content;
  const handleClick = () => {
    const phoneNumber = '380730000000';
    window.location.href = `tel:${phoneNumber}`;
  };
  const sliceString = address.split(',').splice(1);
  const rental = rentalConditions.split('\n').map(item => (
    <li className={s.itemRental} key={item}>
      {item}
    </li>
  ));

  const acsesori = accessories.map(item => (
    <li className={s.itemAccess} key={item}>
      {item}
    </li>
  ));
  const funct = functionalities.map(item => (
    <li className={s.itemAccess} key={item}>
      {item}
    </li>
  ));
  const formatMile = mileage.toLocaleString('en-US');
  return (
    <div className={s.item}>
      <div className={s.image}>
        <img src={img} alt={model} />
      </div>
      <div className={s.cardInfo}>
        <div className={s.carName}>
          <div>{make} </div>
          <div className={s.mark}> {model} </div>
          <div>, {year}</div>
        </div>

        <div className={s.company}>
          <div>{sliceString} </div>
          <div>Id: {id}</div>
          <div>Year: {year}</div>
          <div>Type: {type} </div>
          <div>Fuel Consumption: {fuelConsumption}</div>
          <div>Engine Size: {engineSize}</div>
        </div>
        <div className={s.description}>{description}</div>
        <div className={s.acces}>
          <h3>Accessories and functionalities:</h3>
          <div>
            {<ul className={s.itemsAccsse}>{acsesori}</ul>}
            {<ul className={s.itemsAccsse}>{funct}</ul>}
          </div>
        </div>
        <div className={s.rental}>
          <h3>Rental Conditions:</h3>
          <div className={s.tech}>
            <div>{<ul className={s.itemsRental}>{rental}</ul>}</div>
          </div>
          <div className={s.dist}>
            <div>
              Mileage: <span>{formatMile}</span>
            </div>
            <div>
              Price: <span>{rentalPrice}</span>
            </div>
          </div>
        </div>
        <Button variant="primary" onClick={handleClick}>
          Rental car
        </Button>
      </div>
    </div>
  );
};

export default ModalCard;
