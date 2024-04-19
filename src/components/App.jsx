import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchImages } from '../img-api.jsx';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageModal from './ImageModal/ImageModal';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    async function fetchData() {
      try {
        const { results, total } = await fetchImages(query, page);
        setImages(prevImages => [...prevImages, ...results]);
        setTotalResults(total);
        if (total === 0) {
          setError(true);
          toast.error('No images found for your query.');
        }
      } catch (error) {
        setError(true);
        toast.error('Failed to get images');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, page]);

  const handleSearch = value => {
    setImages([]);
    setPage(1);
    setQuery(value);
    setError(false);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = image => {
    setModal(true);
    setSelectedImage(image);
  };
  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <div>
      <Toaster position="top right" />
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {loading && <Loader />}
      <ImageGallery images={images} handleImageClick={handleImageClick} />
      {images.length > 0 && images.length < totalResults && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {modal && (
        <ImageModal
          isOpen={modal}
          onClose={handleCloseModal}
          image={selectedImage}
        />
      )}
    </div>
  );
}

export default App;