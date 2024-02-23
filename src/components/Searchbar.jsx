import React, { useState } from 'react';
import styles from '../styles.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      setError('Error');
      return;
    }
    onSubmit(inputValue);
    setQuery(inputValue);
    setInputValue('');
    setError('');
  };

  return (
    <header className={styles.searchbar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        {query && <h2>Now you search: {query}</h2>}
        {error && <h2>Something went wrong!! Try again</h2>}
        <button type="submit" className={styles.button}>
          <span className={styles.buttonLabel}>Search</span>
        </button>

        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};
