import css from "./ImageCard.module.css";

const ImageCard = ({ url, title }) => {
  return (
    <div>
      <img src={url} alt={title} className={css.img} />
    </div>
  );
};

export default ImageCard;
