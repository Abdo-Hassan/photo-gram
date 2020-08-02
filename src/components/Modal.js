import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { hideSelectedImage } from '../redux/reducers/image/imageAction';

const Modal = ({ selectedImage, hideSelectedImage }) => {
  const handelClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      hideSelectedImage();
    }
  };

  return (
    <Fragment>
      {selectedImage && (
        <div className='backdrop' onClick={handelClick}>
          <img src={selectedImage.url} alt='enlarged pic' />
        </div>
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
