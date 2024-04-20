import css from './ImageCard.module.css';

function ImageCard({ image, onImageClick }) {
  const handleClick = () => {
    onImageClick(image);
  };

  return (
    <div>
      <img
        onClick={handleClick}
        className={css.imgCard}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}

export default ImageCard;