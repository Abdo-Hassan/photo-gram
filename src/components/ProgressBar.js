import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { connect } from 'react-redux';
import { addImage } from '../redux/reducers/image/imageAction';

const ProgressBar = ({ addImage, image }) => {
  const { url, progress } = useStorage(image);
  console.log(progress, url);

  useEffect(() => {
    if (url) {
      addImage(null);
    }
  }, [url, addImage]);

  return <div className='progress-bar' style={{ width: progress + '%' }}></div>;
};

const mapStateToProps = (state) => ({
  image: state.userImage.image,
});

const mapDispatchToProps = (dispatch) => ({
  addImage: (image) => dispatch(addImage(image)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar);
