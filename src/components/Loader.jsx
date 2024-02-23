import React from 'react';
import { DNA } from 'react-loader-spinner';
import styles from '../styles.module.css';
export const Loader = () => {
  return (
    <div className={styles.loader}>
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};
