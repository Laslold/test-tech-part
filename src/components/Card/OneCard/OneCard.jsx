import { memo } from 'react';
import Button from '../../../shared/Button/Button';
import s from './card.module.css';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

const OneCard = props => {
  const { itemData, handleClick, onFavorClick, isFavorite } = props;
  const {
    make,
    id,
    img,
    model,
    year,
    type,

    accessories,

    rentalPrice,
    rentalCompany,
    address,
  } = itemData;
  const sliceString = address.split(',').splice(1);

  return (
    <li className={s.item}>
      <div className={s.image}>
        <img src={img} alt={model} />
      </div>
      <div
        onClick={() => onFavorClick(itemData, isFavorite ? 'remove' : 'add')}
      >
        {isFavorite ? (
          <MdFavorite className={s.isActiveIcon} />
        ) : (
          <MdFavoriteBorder className={s.icon} />
        )}
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
        <div className={s.descript}>
          <div className={s.company}>
            <div>{sliceString} </div>
            <div>{rentalCompany}</div>
          </div>
          <div className={s.tech}>
            <div>{type}</div>
            <div className={s.model}>{model}</div>
            <div className={s.model}>{id}</div>
            <div>{accessories}</div>
          </div>
        </div>
      </div>
      <Button onClick={() => handleClick(itemData)} variant="primary">
        Learn more
      </Button>
    </li>
  );
};

const MemoizedCard = memo(OneCard);

export default MemoizedCard;
