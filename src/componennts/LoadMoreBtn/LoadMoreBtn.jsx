import css from "./LoadMoreBtn.module.css";
function LoadMoreBtn({ onClick }) {
  return (
    <div className={css.wrapper}>
      <button className={css.btn} onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

export default LoadMoreBtn;
