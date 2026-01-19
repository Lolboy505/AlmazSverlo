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
      const key = e.key.toLowerCase();

      if (currentIndex === null) return;
      if (key === 'Escape') closeGallery();
      if (/^(arrowright|d|в|w|ц)$/.test(key)) nextSlide();
      if (/^(arrowleft|a|ф|s|ы)$/.test(key)) prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const closeGallery = () => {
    setCurrentIndex(null);
    setIsZoomed(false);
  };

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
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold">ФОТО С ОБЪЕКТОВ</h2>

      <div className="row g-3">
        {images.slice(0, 4).map((img, index) => (
          <div key={index} className="col-6 col-md-3">
            <div
              className="position-relative overflow-hidden rounded shadow-sm bg-dark"
              style={{ height: '250px', cursor: 'pointer' }}
              onClick={() => setCurrentIndex(index)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-100 h-100 object-fit-cover d-block transition-transform hover-zoom"
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50 opacity-0 hover-opacity-100 transition-opacity">
                <span className="text-white h6">Увеличить &#128269;</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {currentIndex !== null && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-2"
          style={{ zIndex: 10, background: 'rgba(0,0,0,0.95)' }}
          onClick={closeGallery}
        >
          {!isZoomed && (
            <>
              <div
                className="text-white position-fixed start-0 top-50 translate-middle-y px-3 d-block"
                style={{
                  fontSize: '3rem',
                  zIndex: 11,
                  textDecoration: 'none',
                  background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0.35) 100%)',
                  borderRadius: '0 10px 10px 0'
                }}
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              >
                <div>
                  ‹
                </div>
              </div>
              <div
                className="text-white position-fixed end-0 top-50 translate-middle-y px-3 d-block"
                style={{
                  fontSize: '3rem',
                  zIndex: 11,
                  textDecoration: 'none',
                  background: 'linear-gradient(-90deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0.35) 100%)',
                  borderRadius: '10px 0 0 10px',
                }}
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              >
                <div>
                  ›
                </div>
              </div>
            </>
          )}

          <div className="position-relative" style={{ maxWidth: '90%', maxHeight: '90%' }} onClick={(e) => e.stopPropagation()}>
            <div className="overflow-hidden rounded shadow-lg bg-black">
              <div
                className="position-absolute top-0 end-0 m-0"
                style={{
                  display: "flex",
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 'clamp(2rem, 2.5vw , 2.2rem)',
                  height: 'clamp(2rem, 2.5vw , 2.2rem)',
                  borderRadius: "0 0 0 10px",
                  background: "var(--color-red-600)",
                  color: "var(--color-red-700)",
                  zIndex: 1,
                }}
                onClick={closeGallery}
              >
                <span
                  style={{
                    background: 'var(--color-red-800)',
                    display: 'flex',
                    position: 'absolute',
                    height: '5px',
                    width: 'clamp(1rem, 2.5vw , 1.5rem)',
                    transform: 'rotate(45deg)'
                  }}>
                </span>
                <span
                  style={{
                    background: 'var(--color-red-800)',
                    display: 'flex',
                    position: 'absolute',
                    height: '5px',
                    width: 'clamp(1rem, 2.5vw , 1.5rem)',
                    transform: 'rotate(-45deg)'
                  }}
                >
                </span>
              </div>
              <img
                src={images[currentIndex].src}
                className="img-fluid d-block"
                style={{
                  cursor: isZoomed ? 'zoom-out' : 'zoom-in',
                  transform: isZoomed ? 'scale(2.5)' : 'scale(1)',
                  transition: 'transform 0.3s ease-in-out',
                  transformOrigin: `${zoomPoint.x}% ${zoomPoint.y}%`,
                  maxHeight: isZoomed ? '90vh' : '80vh' 
                }}
                alt=""
                onClick={handleImageClick}
              />
            </div>

            {!isZoomed && (
              <div className="mt-3 text-center text-white position-relative">
                <p className="fs-4 mb-0">{images[currentIndex].title}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}