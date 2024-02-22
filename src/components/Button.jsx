import React from 'react';
import styles from '../styles.module.css';

const Button = ({ onLoadMore, loading }) => {
  return (
    <button className={styles.center} type="button" onClick={onLoadMore}>
      {loading ? 'Loading....' : 'Load more'}
    </button>
  );
};

export default Button;
