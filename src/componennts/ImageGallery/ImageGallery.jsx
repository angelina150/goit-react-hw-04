import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
const ImageGallery = ({ photos, onPhotoClick }) => {
  return (
    <div>
      <ul className={css.list}>
        {photos.map((photo) => (
          <li
            className={css.listItem}
            key={photo.id}
            onClick={() => onPhotoClick(photo)}
          >
            <ImageCard url={photo.urls.small} title={photo.alt_description} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
