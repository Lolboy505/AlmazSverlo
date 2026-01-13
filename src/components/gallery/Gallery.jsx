import { useState, useEffect } from 'react';
import './Gallery.module.css';

const imagesModules = import.meta.glob('@/gallery/*.{jpg,jpeg,png}', { eager: true });

const images = Object.entries(imagesModules).map(([path, module], index) => {
  return {
    id: index + 1,
    src: module.default,
    title: `Работа №${index + 1}`,
  };
});

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPoint, setZoomPoint] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') setCurrentIndex(null);
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const nextSlide = () => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev + 1 === images.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleImageClick = (e) => {
    if (!isZoomed) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setZoomPoint({ x, y });
      setIsZoomed(true);
    } else {
      setIsZoomed(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>ФОТО С ОБЬЕКТОВ</h2>

      <div style={styles.grid}>
        {images.slice(0, 4).map((img, index) => (
          <div key={index} style={styles.thumbnail} onClick={() => setCurrentIndex(index)}>
            <img src={img.src} alt={img.title} style={styles.img} />
            <div style={styles.hoverOverlay}>Увеличить &#128269;</div>
          </div>
        ))}
      </div>

      {currentIndex !== null && (
        <div style={styles.lightbox} onClick={() => { setCurrentIndex(null); setIsZoomed(false); }}>
          {!isZoomed && (
            <button style={{ ...styles.navBtn, left: '20px' }} onClick={(e) => { e.stopPropagation(); prevSlide(); }}>‹</button>
          )}

          <div style={styles.content} onClick={(e) => e.stopPropagation()}>
            <img
              src={images[currentIndex].src}
              style={{
                ...styles.fullImg,
                cursor: isZoomed ? 'zoom-out' : 'zoom-in',
                transform: isZoomed ? 'scale(2)' : 'scale(1)',
                transition: 'transform 0.3s ease-in-out',
                transformOrigin: `${zoomPoint.x}% ${zoomPoint.y}%`,
              }}
              alt=""
              onClick={handleImageClick}
            />
            {!isZoomed && <p style={styles.caption}>
              {images[currentIndex].title}
              <button style={styles.closeBtn} onClick={() => { setCurrentIndex(null); setIsZoomed(false); }}>
                <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                  &times;
                </div>
              </button>
            </p>}
          </div>

          {!isZoomed && (
            <button style={{ ...styles.navBtn, right: '20px' }} onClick={(e) => { e.stopPropagation(); nextSlide(); }}>›</button>
          )}
        </div>
      )}
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '15px',
    marginTop: '20px'
  },
  thumbnail: {
    position: 'relative',
    height: '250px',
    cursor: 'pointer',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },
  img: { width: '100%', height: '100%', objectFit: 'cover', transition: '0.3s' },
  hoverOverlay: {
    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
    background: 'rgba(0,0,0,0.3)', color: '#fff', display: 'flex',
    alignItems: 'center', justifyContent: 'center', opacity: 0, transition: '0.3s'
  },
  lightbox: {
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
    background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center',
    justifyContent: 'center', zIndex: 1000000, padding: '20px'
  },
  content: {
    position: 'relative',
    maxWidth: '80%',
    maxHeight: '80%'
  },
  fullImg: {
    maxWidth: '100%',
    maxHeight: '80vh',
    borderRadius: '10px',
    boxShadow: '0 0 40px rgba(255, 255, 255, 0.5)'
  },
  caption: { color: '#fff', textAlign: 'center', marginTop: '10px', fontSize: 'clamp(1.5rem, 5vw, 1.8rem)' },
  navBtn: {
    position: 'absolute', background: 'rgba(0, 0, 0, 0.2)', border: 'none', color: '#fff',
    fontSize: '3rem', cursor: 'pointer', zIndex: 1010, padding: '20px', borderRadius: '50px',
  },
  closeBtn: {
    width: '40px', height: '40px',
    position: 'absolute', top: '0px', right: '0', background: 'var(--color-red-700)',
    border: '1px solid black', color: '#6e0000', fontSize: '2.5rem', cursor: 'pointer'
  }
};
