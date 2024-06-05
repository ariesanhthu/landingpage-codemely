import React from 'react';

const ImageGallery: React.FC = () => {
  const renderImages = () => {
    const images = [];
    for (let i = 1; i <= 12; i++) {
      const imageName = `brand-${i}`;
      images.push(
        <div key={i} className="w-1/6 p-1">
          <img src={`/brand/${imageName}.png`} alt={imageName} className="w-10/12 h-auto" />
        </div>
      );
    }
    return images;
  };

  return (
    <div className="flex flex-wrap">
      {renderImages()}
    </div>
  );
};

export default ImageGallery;
