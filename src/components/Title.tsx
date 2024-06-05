import React from 'react';

interface TitleProps {
  mainText: string;
  secondaryText: string;
  backgroundText: string;
}

const Title: React.FC<TitleProps> = ({ mainText, secondaryText, backgroundText }) => {
  return (
    <div className="relative flex justify-center items-center align-middle h-20 w-full">
      <div className="absolute z-0 text-8xl font-sans uppercase font-bold text-white opacity-10 tracking-widest">
        {backgroundText}
      </div>
      
      <div className="absolute m-auto text-4xl font-bold flex ">
        <p className='text-primary'>{mainText} <text className='text-white'>- {secondaryText}</text></p>
      </div>
    </div>

  
  );
};

export default Title;