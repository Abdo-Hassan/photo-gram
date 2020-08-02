import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { hideSelectedImage } from '../redux/reducers/image/imageAction';
import { motion } from 'framer-motion';

const Modal = ({ selectedImage, hideSelectedImage }) => {
  const handelClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      hideSelectedImage();
    }
  };

  return (
    <Fragment>
      {selectedImage && (
        <motion.div
          className='backdrop'
          onClick={handelClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.img
            src={selectedImage.url}
            alt='enlarged pic'
            initial={{ y: '-100vh' }}
            animate={{ y: 0 }}
          />
        </motion.div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  selectedImage: state.userImage.selectedImage,
});

const mapDispatchToProps = (dispatch) => ({
  hideSelectedImage: () => dispatch(hideSelectedImage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
