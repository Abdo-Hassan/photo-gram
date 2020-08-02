import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import { connect } from 'react-redux';
import { addImage } from '../redux/reducers/image/imageAction';
import { timestamp, firestore, storage } from '../firebase';

const UploadForm = ({ addImage, image }) => {
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);
  const types = ['image/png', 'image/jpeg', 'image/jpg'];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      addImage(selected);
      // refrences
      const storageRef = storage.ref(selected.name);
      const collectionRef = firestore.collection('images');

      storageRef.put(selected).on(
        'state_changed',
        (snapshot) => {
          let percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(percentage);
        },
        (error) => {
          setError(error.message);
        },
        async () => {
          const url = await storageRef.getDownloadURL();
          const createdAt = timestamp();
          collectionRef.add({ url, createdAt });
          setUrl(url);
          setError(null);
        }
      );
    } else {
      addImage(null);
      setError('Please select an image file ( png of jpeg or jpg )');
    }
  };

  return (
    <form>
      <label htmlFor='imageUpload'>
        <input type='file' onChange={changeHandler} id='imageUpload' />
        <span>+</span>
      </label>
      <div className='output'>
        {error && <div className='error'>{error}</div>}
        {image && <div>{image.name}</div>}
        {image && (
          <ProgressBar
            addImage={addImage}
            image={image}
            url={url}
            progress={progress}
          />
        )}
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  image: state.userImage.image,
});

const mapDispatchToProps = (dispatch) => ({
  addImage: (image) => dispatch(addImage(image)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);
