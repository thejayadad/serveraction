'use client'
import React from 'react';

const ImagePreview = ({ imageUrl }) => {
  return (
    <img
      id="img-preview"
      src={imageUrl}
      className="mt-4 max-w-full h-auto"
      alt="Image Preview"
    />
  );
};

export default ImagePreview;
