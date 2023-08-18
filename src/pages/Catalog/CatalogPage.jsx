import GalleryCard from 'components/Card/GaleryCard';
import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import s from './catalogPage.module.css';
import Modal from 'components/Modal/Modal';
import ModalCard from 'components/Card/ModalCard/ModalCard';
import Button from 'shared/Button/Button';
import Select from 'react-select';
import { ImDownload } from 'react-icons/im';
import { getAdverts, searchAdverts } from 'shared/api';

import { add, remove } from '../../redux/favoriteCars/favoriteCars-slice';
import Aos from 'aos';
import 'aos/dist/aos.css';

const CatalogPage = () => {
  const [page, setPage] = useState(1);

  const [filterBrand, setFilterBrand] = useState(null);

  const [contents, setContent] = useState({
    items: [],
    loading: false,
    error: null,
    total: true,
  });

  const [modal, setModal] = useState({
    isOpen: false,
    content: {},
  });

  const { items, total } = contents;

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      setContent(prevContent => ({
        ...prevContent,
        loading: true,
        error: null,
      }));

      try {
        const data = await getAdverts(page);

        setContent(prevContent => ({
          ...prevContent,
          items: [...prevContent.items, ...data],
          loading: false,
          total: data.length === 0 ? false : true,
        }));
      } catch (error) {
        setContent(prevContent => ({
          ...prevContent,
          loading: false,
          error,
        }));
      }
    };

    fetchPosts();
  }, [page]);

  useEffect(() => {
    const getFilteredItems = async () => {
      setContent(prevContent => ({
        ...prevContent,
        loading: true,
        error: null,
      }));

      const data = await searchAdverts(filterBrand.value);
      if (!data) {
        setContent(prevContent => ({
          ...prevContent,
          loading: false,
        }));
      }
      setContent(prevContent => ({
        ...prevContent,
        items: data,
        loading: false,
      }));
    };
    if (filterBrand) {
      getFilteredItems();
      return;
    }
    Aos.init({ duration: 2000 });
  }, [filterBrand]);

  const onCardClick = useCallback(
    content => {
      setModal({
        isOpen: true,
        content,
      });
    },
    [setModal]
  );

  const loadMore = useCallback(() => {
    setPage(prevPage => prevPage + 1);
  }, [setPage]);

  const closeModal = useCallback(() => {
    setModal({
      content: {},
      isOpen: false,
    });
  }, [setModal]);

  const onFavorClick = useCallback(
    (item, operationName) => {
      if (operationName === 'add') {
        dispatch(add(item));
        return;
      }

      if (operationName === 'remove') {
        dispatch(remove(item.id));
        return;
      }
    },
    [dispatch]
  );

  const { isOpen, content } = modal;

  return (
    <>
      <div className={s.sectionHr}>
        {items.length > 0 && total && (
          <Button onClick={loadMore} variant="four">
            <ImDownload /> Load more
          </Button>
        )}

        <Select
          value={filterBrand}
          onChange={setFilterBrand}
          placeholder="Input mark"
          options={[
            { value: 'buick', label: 'Buick' },
            { value: 'volvo', label: 'Volvo' },
            { value: 'hummer', label: 'Hummer' },
            { value: 'subaru', label: 'Subaru' },
            { value: 'mitsubishi', label: 'Mitsubishi' },
            { value: 'nissan', label: 'Nissan' },
            { value: 'gmc', label: 'GMC' },
            { value: 'hyundai', label: 'Hyundai' },
            { value: 'lincoln', label: 'Lincoln' },
            { value: 'bentley', label: 'Bentley' },
            { value: 'honda', label: 'Honda' },
            { value: 'ford', label: 'Ford' },
            { value: 'chevrolet', label: 'Chevrolet' },
            { value: 'bmw', label: 'BMW' },
            { value: 'mercedes-benz', label: 'Mercedes-Benz' },
            { value: 'audi', label: 'Audi' },
            { value: 'tesla', label: 'Tesla' },

            { value: 'mazda', label: 'Mazda' },
            { value: 'lexus', label: 'Lexus' },
            { value: 'volkswagen', label: 'Volkswagen' },
            { value: 'porsche', label: 'Porsche' },
          ]}
        />

        <div className={s.colHr}>
          <div className={s.textBox}>
            <h1 data-aos="fade-down" className={s.sliderText}>
              Choose Your Car
            </h1>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className={s.sectionSl}>
        <div className={s.servicesWrapSl}>
          <div>
            <GalleryCard
              items={items}
              handleClick={onCardClick}
              onFavorClick={onFavorClick}
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

export default CatalogPage;
