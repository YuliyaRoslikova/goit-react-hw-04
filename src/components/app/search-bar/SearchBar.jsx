import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';
import { LuSearch } from 'react-icons/lu';

const SearchBar = ({ onSearchChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    const value = e.target.value.trim();
    setInputValue(value);
  };

  const onSubmit = e => {
    e.preventDefault();

    if (!inputValue) {
      toast.error('Please, enter search query.', {
        style: {
          padding: '10px',
        },
      });
    }

    onSearchChange(inputValue);
    setInputValue('');
  };

  return (
    <header className={css.headerBar}>
      <form className={css.headerForm} onSubmit={onSubmit}>
        <input
          className={css.headerInput}
          value={inputValue}
          type="text"
          placeholder="Search images and photos"
          onChange={handleChange}
        />
        <button className={css.headerBtn} type="submit">
          <LuSearch className={css.headerIkon} />
        </button>
      </form>
      <Toaster position="top-right" />
    </header>
  );
};

export default SearchBar;
