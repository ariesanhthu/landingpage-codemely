"use client"
import { useState, useEffect, useRef } from 'react';
import styles from './NumberCounter.module.css';

interface Props {
  start: number;
  end: number;
}

const NumberCounter: React.FC<Props> = ({ start, end }) => {
  const [count, setCount] = useState(start);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            setCount(start); // Reset count to start when the element is not visible
          }
        });
      },
      { threshold: 0.5 } // Detect when the element becomes fully visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    // Clean up observer on component unmount
    return () => observer.disconnect();
  }, [start]);

  useEffect(() => {
    // Increase count if it's less than the end value
    if (count < end) {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          const nextCount = prevCount + 1;
          return nextCount > end ? end : nextCount;
        });
      }, 0.001); // Adjust the interval as needed for desired animation speed

      // Clean up interval on component unmount
      return () => clearInterval(interval);
    }
  }, [count, end]);

  return (
    <div className={`text-3xl font-bold text-start mt-5 ${styles.counter}`}>
      {count}
    </div>
  );
};

export default NumberCounter;
