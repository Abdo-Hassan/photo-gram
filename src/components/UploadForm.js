import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { addImage } from '../redux/reducers/image/imageAction';
import { googleSignIn } from '../redux/reducers/auth/authAction';
import { timestamp, firestore, storage } from '../firebase';
import { motion } from 'framer-motion';

const UploadForm = ({ addImage, image, googleSignIn, currentUser }) => {
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
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
          setError(null);
          setProgress(null);
          addImage(null);
        }
      );
    } else {
      addImage(null);
      setError('Please select an image file ( png of jpeg or jpg )');
    }
  };

  console.log('currentUser', currentUser);

  return (
    <Fragment>
      <form>
        <label htmlFor='imageUpload'>
          <input type='file' onChange={changeHandler} id='imageUpload' />
          <span>+</span>
        </label>
        <div className='output'>
          {error && <div className='error'>{error}</div>}
          {image && (
            <Fragment>
              <div>{image.name}</div>
              <motion.div
                className='progress-bar'
                initial={{ width: 0 }}
                animate={{ width: progress + '%' }}
              ></motion.div>
            </Fragment>
          )}
        </div>
      </form>
      <button onClick={() => googleSignIn()}>googleSignIn</button>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.userAuth.currentUser,
  image: state.userImage.image,
});

const mapDispatchToProps = (dispatch) => ({
  addImage: (image) => dispatch(addImage(image)),
  googleSignIn: () => dispatch(googleSignIn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);
