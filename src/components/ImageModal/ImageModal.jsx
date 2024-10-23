import Modal from "react-modal";
import css from "./ImageModal.module.css";
Modal.setAppElement("#root");
function ImageModal({ isOpen, onClose, photo }) {
  if (!photo) {
    return null;
  }
  return (
    <div className={css.modal}>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Image Modal"
        bodyOpenClassName="no-scroll"
      >
        <img
          className={css.img}
          src={photo.urls.regular}
          alt={photo.alt_description}
        />
        <p className={css.desc}>Author: {photo.user.name}</p>
        <p className={css.desc}>Likes: {photo.likes}</p>
        <button className={css.btn} onClick={onClose}>
          Close
        </button>
      </Modal>
    </div>
  );
}

export default ImageModal;
