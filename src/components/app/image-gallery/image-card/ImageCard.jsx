import css from './ImageCard.module.css';

const ImageCard = ({ cardData }) => {
  return (
    <div className={css.imgCard}>
      <img className={css.image} src={cardData.urls.small} alt={cardData.alt_description} />
    </div>
  );
};

export default ImageCard;
