import { useState, useEffect } from 'react';
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
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Button
      onClick={scrollToTop}
      className={`${isVisible ? 'opacity-100' : 'opacity-0'} d-flex align-items-center justify-content-center shadow-lg transition-all rounded-circle`}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '50px',
        height: '50px',
        backgroundColor: 'var(--color-red-600)',
        border: 'none',
        visibility: isVisible ? 'visible' : 'hidden',
        transition: 'all 0.4s ease-in-out',
        transform: isVisible ? 'scale(1)' : 'scale(0)',
        zIndex: '1000',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0) scale(1)')}
    >
      <ChevronUp size={28} color="white" strokeWidth={3} />
    </Button>
  )
}
