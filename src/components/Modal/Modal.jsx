import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { GrClose } from 'react-icons/gr';
import s from './modal.module.css';

const modalRoot = document.getElementById('modal-root');
const Modal = ({ close, children }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleClose);
    return () => document.removeEventListener('keydown', handleClose);
  });

  const handleClose = ({ code, target, currentTarget }) => {
    if (code === 'Escape' || target === currentTarget) {
      close();
      return;
    }
  };

  return createPortal(
    <div className={s.overlay} onClick={handleClose}>
      <div className={s.modal}>
        <GrClose className={s.modalClose} onClick={close} />

        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
