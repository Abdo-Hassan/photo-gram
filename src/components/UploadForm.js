import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import { connect } from 'react-redux';
import { addImage } from '../redux/reducers/image/imageAction';

const UploadForm = ({ addImage, image }) => {
  const [error, setError] = useState(null);
  const types = ['image/png', 'image/jpeg', 'image/jpg'];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      addImage(selected);
      setError(null);
    } else {
      addImage(null);
      setError('Please select an image file ( png of jpeg or jpg )');
    }
  };

  console.log(image);

  return (
    <form>
      <label htmlFor=''>
        <input type='file' onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className='output'>
        {error && <div className='error'>{error}</div>}
        {image && <div>{image.name}</div>}
        {image && <ProgressBar />}
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  image: state.userImages.image,
});

const mapDispatchToProps = (dispatch) => ({
  addImage: (image) => dispatch(addImage(image)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);
