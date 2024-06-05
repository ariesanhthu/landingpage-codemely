import React from 'react';

interface CardProps {
  title: string;
  imageUrl: string;
  content: string[];
}

const AboutCard: React.FC<CardProps> = ({ title, imageUrl, content }) => {
  return (
    <div className="bg-opacity-50 rounded-xl shadow-lg bg-gray w-96 h-96">
      <div className='w-full flex justify-center'>
          <img src={imageUrl} alt={title} className="flex h-14 w-14 object-cover rounded-full m-5 mt-10" />
      </div>
      <h2 className="text-primary text-lg font-bold mb-2 text-center">{title}</h2>
      <ul className="list-disc list-list-outside ms-5 p-5">
        {content.map((item, index) => (
          <li key={index} className="text-left">
            {item}
        </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutCard;
