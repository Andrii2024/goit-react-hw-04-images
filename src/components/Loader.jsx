import React from 'react';
import { Comment } from 'react-loader-spinner';
import styles from '../styles.module.css';
export const Loader = () => {
  return (
    <div className={styles.loader}>
      <Comment
        visible={true}
        height="280"
        width="280"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#fff"
        backgroundColor="#F4442E"
      />
    </div>
  );
};
