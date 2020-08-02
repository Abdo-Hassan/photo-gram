import React, { useEffect } from 'react';

const ProgressBar = ({ url, addImage, image, progress }) => {
  useEffect(() => {
    if (url) {
      addImage(null);
    }
  }, [url, addImage, image]);

  return <div className='progress-bar' style={{ width: progress + '%' }}></div>;
};

export default ProgressBar;
