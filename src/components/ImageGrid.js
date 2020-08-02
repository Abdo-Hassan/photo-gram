import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getImages,
  getSelectedImage,
} from '../redux/reducers/image/imageAction';
import { motion } from 'framer-motion';

const ImageGrid = ({ getImages, images, getSelectedImage }) => {
  useEffect(() => {
    const unSub = getImages();
    return () => unSub();
  }, [getImages]);

  return (
    <div className='img-grid'>
      {images &&
        images.map((image) => (
          <motion.div
            whileHover={{ opacity: 1 }}
            layout
            className='img-wrap'
            key={image.id}
            onClick={() => getSelectedImage(image)}
          >
            <motion.img
              src={image.url}
              alt='uploaded pic'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
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
