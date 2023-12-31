
import React, { useState, useEffect } from 'react';

function BackToTopButton  ()  {
  const [isVisible, setIsVisible] = useState(false);


  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop} style={{ position: 'fixed', bottom: '20px', right: '20px', padding: '10px', cursor: 'pointer',border:"none" ,outline:"none"}}>
          Back to Top
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
