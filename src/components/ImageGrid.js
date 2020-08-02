import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getImages } from '../redux/reducers/image/imageAction';

const ImageGrid = ({ getImages, images }) => {
  useEffect(() => {
    const unSub = getImages();
    return () => unSub();
  }, [getImages]);

  return (
    <div className='img-grid'>
      {/* <img src={images ? images[3].url : null} alt='pic' /> */}
      images
    </div>
  );
};

const mapStateToProps = (state) => ({
  images: state.userImage.images,
});

const mapDispatchToProps = (dispatch) => ({
  getImages: () => dispatch(getImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
