import React, { useState } from 'react';

const SmartImage = ({ 
  src, 
  alt, 
  className = '', 
  style = {}, 
  onError,
  fallbackSrc = '/images/gallery/placeholder-disco.svg',
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = (e) => {
    if (!hasError && imgSrc !== fallbackSrc) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
    if (onError) {
      onError(e);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      style={style}
      onError={handleError}
      {...props}
    />
  );
};

export default SmartImage;
