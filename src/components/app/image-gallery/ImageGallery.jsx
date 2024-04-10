import ImageCard from './image-card/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ items, setOpenedCard }) => {
  return (
    <ul className={css.imageGallery}>
      {items.map(item => {
        return (
          <li key={item.id} onClick={() => setOpenedCard(item)}>
            <ImageCard cardData={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
