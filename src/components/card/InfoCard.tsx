"use client"
import { useState, useEffect, useRef } from 'react';
// import { FaIcon } from 'react-icons/fa'; FaFacebook <FaDiscord /> IoLogoInstagram
import NumberCounter from './NumberCounter/NumberCounter';

interface InfoProps {
  title: string;
  description: string;
  start: number;
  end: number;
  link: string;
  colorName: string;
  iconName: string;
}

const InfoCard: React.FC<InfoProps> = ({ title, description, start, end, link, colorName, iconName }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsIntersecting(entry.isIntersecting);
        });
      },
      { threshold: 0 } // Detect when the element becomes fully visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    // Clean up observer on component unmount
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={cardRef} className={`bg-gray bg-opacity-70 rounded-lg w-5/12 h-1/2 p-5 flex flex-col `}style={{color: colorName}}>
        <div className={`flex items-center mb-4 `}>
          <div className="mr-2"></div>
          <h2 className={`border-l-4 pl-2 text-lg font-bold `} style={{color: colorName, borderColor: colorName}}>{title}</h2>
        </div>
        <p className="text-white pl-2">{description}</p>
        <div className='content-end h-full'>
          <NumberCounter start={start} end={end} />
          <a target="_blank" href={link} className="text-white hover:text-blue-500">Bấm vào đây để tham gia</a>
        </div>
    </div>
  );
};

export default InfoCard;
