import React, { useEffect, useState } from 'react';
import { Button } from './ScrollButton.styled';
import buttonIcon from '../../../img/up-button.png';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    };
    window.addEventListener('touchmove', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('touchmove', handleScroll);
    };
  }, []);

  return (
    <Button>
      <img
        src={buttonIcon}
        alt=""
        onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }}
      ></img>
    </Button>
  );
};

export default ScrollButton;
