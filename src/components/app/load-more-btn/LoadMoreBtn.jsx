import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onLoadMoreBtn }) => {
  return (
    <button className={css.moreBtn} onClick={() => onLoadMoreBtn(prev => prev + 1)}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
