import React from 'react';
import Image from 'next/image';

interface ImageProps {
  src: string;
  alt: string;
  width: string;
  height: string;
  id?: string;
  subtitle?: string;
}

const ImageSlider: React.FC<ImageProps> = ({ src, alt, width, height, id, subtitle }) => {
  return (
      <div className="group flex" style={{width, height}}>
        <Image
          src={src}
          alt={alt}
          width={600}
          height={600}
          className="object-cover group-hover:brightness-50 rounded-xl"
          id={id}
        />
        {subtitle && (
            <div className={`invisible group-hover:visible absolute text-white text-left font-sans`} style={{width, height}}>
            {subtitle}
            </div>
        )}
      </div>
  );
};

export default ImageSlider;
