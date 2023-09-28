import React, { useState, useEffect } from 'react';
import './loader.css';

const LoadingAnimation = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  const [countdown, setCountdown] = useState(3);
  const [animationShown, setAnimationShown] = useState(false);
  let timer;

  useEffect(() => {
    const animationShownBefore = localStorage.getItem('animationShown');

    if (!animationShownBefore) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      setTimeout(() => {
        clearInterval(timer);
        setShowAnimation(false);

        localStorage.setItem('animationShown', 'true');
        setAnimationShown(true);
      }, 4000);
    } else {
      setShowAnimation(false);
      setAnimationShown(true);
    }

    return () => {
      clearInterval(timer);
    };
  }, []);

  if (animationShown) {
    return null;
  }

  return (
    <div className='loading-animation'>
      <h1>CARGANDO PROYECTO en <span>{countdown} seg</span> &nbsp;&nbsp;&nbsp;</h1>
      <div className='cube-loader'>        
        <div className='cube-top'></div>
        <div className='cube-wrapper'>
          <span style={{ '--i': 0 }} className='cube-span'></span>
          <span style={{ '--i': 1 }} className='cube-span'></span>
          <span style={{ '--i': 2 }} className='cube-span'></span>
          <span style={{ '--i': 3 }} className='cube-span'></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
