import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import css from './SearchBar.module.css';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter text to search for images.');
      return;
    }
    onSearch(query);
  };

  return (
    <header>
      <form className={css.form} onSubmit={handleSubmit}>
        <FaMagnifyingGlass className={css.icon} size="14" />
        <input
          className={css.inputSearch}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}

export default SearchBar;