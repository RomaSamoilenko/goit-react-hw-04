import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

function ImageModal({ image, isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      {image && image.urls.regular && (
        <img
          className={css.image}
          src={image.urls.regular}
          alt={image.alt_description}
          onClick={onClose}
        />
      )}
    </Modal>
  );
}

export default ImageModal;