import css from './ImageCard.module.css';

const ImageCard = ({ cardData, setOpenedCard }) => {
  return (
    <div className={css.imgCard}>
      <img
        className={css.image}
        onClick={() => setOpenedCard(cardData)}
        src={cardData.urls.small}
        alt={cardData.alt_description}
      />
    </div>
  );
};

export default ImageCard;
