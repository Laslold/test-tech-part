import React, { useCallback, useEffect, useState } from 'react';
import s from './favoritePage.module.css';
import GalleryCard from 'components/Card/GaleryCard';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteCars } from 'redux/favoriteCars/favoriteCars-selector';
import { remove } from 'redux/favoriteCars/favoriteCars-slice';
import Modal from 'components/Modal/Modal';
import ModalCard from 'components/Card/ModalCard/ModalCard';
import Aos from 'aos';
import 'aos/dist/aos.css';

const FavoritePage = () => {
  const favorCars = useSelector(getFavoriteCars);

  const dispatch = useDispatch();
  const [modal, setModal] = useState({
    isOpen: false,
    content: {},
  });
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const onFavorClick = useCallback(
    item => {
      dispatch(remove(item.id));
    },
    [dispatch]
  );
  const onCardClick = useCallback(
    content => {
      setModal({
        isOpen: true,
        content,
      });
    },
    [setModal]
  );
  const closeModal = useCallback(() => {
    setModal({
      content: {},
      isOpen: false,
    });
  }, [setModal]);
  const { isOpen, content } = modal;
  return (
    <>
      <div className={s.sectionHr}>
        <div className={s.colHr}>
          <div className={s.textBox}>
            <h1 data-aos="fade-down" className={s.sliderText}>
              Your favorite cars
            </h1>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className={s.sectionSl}>
        <div className={s.servicesWrapSl}>
          <div>
            <GalleryCard
              onFavorClick={onFavorClick}
              handleClick={onCardClick}
              items={favorCars}
            />
          </div>
        </div>
      </div>

      {isOpen && (
        <Modal close={closeModal}>
          <ModalCard content={content} />
        </Modal>
      )}
    </>
  );
};

export default FavoritePage;
