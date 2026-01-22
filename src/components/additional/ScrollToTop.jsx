import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Плавная прокрутка
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div
      className="p-3"
      style={{
        position: 'sticky',
        bottom: '10px',
        width: 'fit-content',
        marginLeft: 'auto',
        marginRight: '10px',
        zIndex: 9,
        flexDirection: 'column',
      }}
    >
      <Button
        onClick={scrollToTop}
        className={`rounded-circle d-flex align-items-center justify-content-center shadow-lg transition-all ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: 'var(--color-red-600)',
          border: 'none',
          visibility: isVisible ? 'visible' : 'hidden',
          transition: 'all 0.4s ease-in-out',
          transform: isVisible ? 'scale(1)' : 'scale(0)',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0) scale(1)')}
      >
        <ChevronUp size={28} color="white" strokeWidth={3} />
      </Button>
    </div>
  );
};
