import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import css from './ImageModal.module.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
  },
  overlay: {
    backgroundColor: '#000000AA',
  },
};

Modal.setAppElement('#root');

const ImageModal = ({ img, setOpenedCard }) => {
  const [isOpen, setIsOpen] = useState(!!img);

  useEffect(() => {
    setIsOpen(!!img);
  }, [img]);

  function closeModal() {
    setIsOpen(false);
    setOpenedCard(null);
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <div>
        <img className={css.modalImage} src={img?.urls?.regular} alt={img?.alt_description} />
      </div>
    </Modal>
  );
};

export default ImageModal;
