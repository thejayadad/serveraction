'use client'
// components/ImagePreview.js
import React, { useEffect, useRef } from 'react';

const ImagePreview = ({ imageUrl }) => {
  const imgPreviewRef = useRef(null);

  useEffect(() => {
    if (imgPreviewRef.current) {
      imgPreviewRef.current.src = imageUrl;
    }
  }, [imageUrl]);

  return (
    <img
      ref={imgPreviewRef}
      id="img-preview"
      className="mt-4 max-w-full h-auto"
      alt="Image Preview"
    />
  );
};

export default ImagePreview;
