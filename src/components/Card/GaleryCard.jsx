import React from 'react';
import OneCard from './OneCard/OneCard';

import s from '../Card/OneCard/card.module.css';
import { useSelector } from 'react-redux';
import { getFavoriteCars } from 'redux/favoriteCars/favoriteCars-selector';
const GalleryCard = props => {
  const { handleClick, items, onFavorClick } = props;
  const carsIdLS = useSelector(getFavoriteCars).map(el => el.id);

  const elements = items.map(el => (
    <OneCard
      key={el.id}
      itemData={el}
      handleClick={handleClick}
      onFavorClick={onFavorClick}
      isFavorite={carsIdLS.includes(el.id)}
    />
  ));

  return <ul className={s.items}>{elements}</ul>;
};

export default GalleryCard;
