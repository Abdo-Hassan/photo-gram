import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const Modal = ({ selectedImage }) => {
  return (
    <Fragment>
      {selectedImage && (
        <div className='backdrop'>
          <img src={selectedImage.url} alt='enlarged pic' />
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  selectedImage: state.userImage.selectedImage,
});

export default connect(mapStateToProps)(Modal);
