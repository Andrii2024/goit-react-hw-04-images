import React from 'react';
import styles from '../styles.module.css';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className={styles.galleryItem} onClick={onClick}>
      <img
        src={image.webformatURL}
        alt=""
        className={styles.galleryItemImage}
      />
    </li>
  );
};

export default ImageGalleryItem;
