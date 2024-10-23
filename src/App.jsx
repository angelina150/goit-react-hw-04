import { useEffect, useState } from "react";
import getPhotosBySearchValue from "./services/api";
import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar";
import ImageModal from "./Components/ImageModal/ImageModal";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Loader from "./Components/Loader/Loader";
import ErrorMessage from "./Components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./Components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  const onSubmit = (searchTerm) => {
    setSearchValue(searchTerm);
    setPage(1);
    setPhotos([]);
  };

  useEffect(() => {
    if (!searchValue) return;

    async function fetchPhotosBySearchValue() {
      try {
        setIsLoading(true);
        const { data } = await getPhotosBySearchValue(searchValue, page);
        if (data.results.length === 0) {
          setError("No results found for your search.");
          setIsLoading(false);
          return;
        }
        setPhotos((prevPhotos) => [...prevPhotos, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPhotosBySearchValue();
  }, [searchValue, page]);

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      {photos.length > 0 && (
        <ImageGallery photos={photos} onPhotoClick={openModal} />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {page < totalPages && <LoadMoreBtn onClick={loadMoreImages} />}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        photo={selectedPhoto}
      />
    </div>
  );
}

export default App;
