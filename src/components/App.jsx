import React, { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';
import { Loader } from './Loader';
import { fetchPosts } from '../servises/api';
import styles from '../styles.module.css';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const data = await fetchPosts({ q: query, page });
        setImages(prevImages => [...prevImages, ...data.hits]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (query && page === 1) {
      setImages([]);
      fetchImages();
    } else if (page > 1) {
      fetchImages();
    }
  }, [query, page]);

  const handleSearchSubmit = newQuery => {
    setQuery(newQuery);
    setPage(+1);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = selectedImage => {
    setShowModal(true);
    setSelectedImage(selectedImage);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <div className={styles.app}>
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && !images.length && <Loader />}
      {!!images.length && (
        <Button onLoadMore={handleLoadMore} loading={loading} />
      )}
      {showModal && <Modal image={selectedImage} onClose={handleCloseModal} />}
    </div>
  );
};
