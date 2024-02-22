import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';
import { Loader } from './Loader';
import { fetchPosts } from '../servises/api';
import styles from '../styles.module.css';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    showModal: false,
    selectedImage: null,
    loading: false,
  };

  handleSearchSubmit = async query => {
    await this.setState({
      images: [],
      query,
      page: 1,
    });
    this.fetchImages();
  };

  handleLoadMore = () => {
    this.setState(
      prevState => ({ page: prevState.page + 1 }),
      this.fetchImages
    );
  };

  handleImageClick = selectedImage => {
    this.setState({ showModal: true, selectedImage });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, selectedImage: null });
  };

  fetchImages = async () => {
    const { query, page } = this.state;
    this.setState({ loading: true });

    try {
      const data = await fetchPosts({ q: query, page });
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { images, showModal, selectedImage, loading } = this.state;

    return (
      <div className={styles.app}>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {loading && !images.length && <Loader />}
        {!!images.length && (
          <Button onLoadMore={this.handleLoadMore} loading={loading} />
        )}
        {showModal && (
          <Modal image={selectedImage} onClose={this.handleCloseModal} />
        )}
      </div>
    );
  }
}

export default App;
