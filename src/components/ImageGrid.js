import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getImages,
  getSelectedImage,
} from '../redux/reducers/image/imageAction';

const ImageGrid = ({ getImages, images, getSelectedImage }) => {
  useEffect(() => {
    const unSub = getImages();
    return () => unSub();
  }, [getImages]);

  return (
    <div className='img-grid'>
      {images &&
        images.map((image) => (
          <div className='img-wrap' onClick={() => getSelectedImage(image)}>
            <img key={image.id} src={image.url} alt='uploaded pic' />
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  images: state.userImage.images,
});

const mapDispatchToProps = (dispatch) => ({
  getImages: () => dispatch(getImages()),
  getSelectedImage: (image) => dispatch(getSelectedImage(image)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
