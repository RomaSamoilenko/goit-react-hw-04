import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

function ImageGallery({ images, handleImageClick, totalResults, onLoadMore }) {
  const handleLoadMoreClick = () => {
    onLoadMore();
  };

  return (
    <div>
      <ul className={css.list}>
        {images.map((image, index) => (
          <li key={index} className={css.listItem}>
            <ImageCard
              image={image}
              onImageClick={() => handleImageClick(image)}
            />
          </li>
        ))}
      </ul>
      {images.length < totalResults && (
        <button onClick={handleLoadMoreClick} className={css.loadMoreBtn}>
          Load More
        </button>
      )}
    </div>
  );
}

export default ImageGallery;