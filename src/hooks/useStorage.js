import { useState, useEffect } from 'react';
import { storage } from '../firebase';

const useStorage = (image) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // refrences
    const storageRef = storage.ref(image.name);
    storageRef.put(image).on(
      'state_change',
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
        setUrl(url);
      }
    );
  }, [image]);

  return { progress, url, error };
};

export default useStorage;
