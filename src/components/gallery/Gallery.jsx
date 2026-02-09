import { useState, useEffect } from 'react';
import previewImg from './previewImg.module.css'
import './Gallery.module.css';

//jpg,jpeg,png НЕТ только WEBP

const imagesModules = import.meta.glob('@/gallery/*.{webp,}', { eager: true });

const images = Object.entries(imagesModules).map(([path, module], index) => {
  return {
    id: index + 1,
    src: module.default,
    title: `Обьект №${index + 1}`,
  };
});

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPoint, setZoomPoint] = useState({ x: 50, y: 50 });
  const [isLoadedPrew, setLoadedPrew] = useState(false)
  const [isLoadedGal, setLoadedGal] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!e.key) return;
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
    setLoadedGal(false);
    setCurrentIndex((prev) => (prev + 1 === images.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIsZoomed(false);
    setLoadedGal(false);
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
    <div className="py-4 px-0"
      style={{
        background: "var(--color-card)",
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "20px",
      }}
    >
      <div
        style={{
          marginBottom: '20px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <h2
          className="
          mb-3 px-4 px-lg-6 py-2
          d-flex justify-content-center 
          text-center text-uppercase"
          style={{
            color: 'white',
            background: "var(--color-card)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5)',
          }}
        >
          Фото с обьектов
        </h2>
      </div>

      <div
        className="row g-2 g-lg-3 gap-2 
          justify-content-center"
      >
        {
          (!images.length) ?
            (
              <>
                <div className="text-center">
                  <h1>404</h1>
                  <br />
                  Sorry
                  <br />
                  something went wrong
                </div>
              </>
            )
            :
            (
              <>
                {!isLoadedPrew && (
                  <>
                    <div className="spinner-border "></div>
                    <br />
                    <div className="text-center">Загрузка...</div>
                  </>
                )}


                {
                  images.slice(0, 4).map((img, index) => (
                    <div
                      key={index}
                      className="col-5 col-md-5"
                      style={{
                      }}
                    >
                      <div
                        className="
                        position-relative overflow-hidden rounded shadow-sm bg-dark"
                        style={{
                          height: '250px',
                          cursor: 'pointer',
                        }}
                        onClick={() => setCurrentIndex(index)}
                      >
                        {!isLoadedPrew && <div className="spinner">Загрузка...</div>}
                        <img
                          src={img.src}
                          alt={img.title}
                          loading="lazy"
                          onLoad={() => setLoadedPrew(true)}
                          style={{
                            opacity: isLoadedPrew ? 1 : 0,
                            transition: 'opacity 0.3s ease-in-out',
                          }}
                          className="w-100 h-100 object-fit-cover"
                        />
                        <div
                          className={previewImg.hoverImg}
                        >
                          <span className="text-white text-center h5">Увеличить &#128269;</span>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </>
            )
        }
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
                className=" position-fixed start-0 top-50 translate-middle-y px-3 d-block"
                style={{
                  fontSize: '3rem',
                  zIndex: 11,
                  textDecoration: 'none',
                  background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0.35) 100%)',
                  borderRadius: '0 10px 10px 0',
                  cursor: 'pointer',
                }}
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              >
                <div
                  style={{
                    zIndex: 13,
                    userSelect: 'none',
                    WebkitUserSelect: 'none',
                    msUserSelect: 'none',
                    WebkitTapHighlightColor: 'transparent',
                  }}
                >
                  <div>
                    ‹
                  </div>
                </div>
              </div>
              <div
                className=" position-fixed end-0 top-50 translate-middle-y px-3 d-block"
                style={{
                  fontSize: '3rem',
                  zIndex: 11,
                  textDecoration: 'none',
                  background: 'linear-gradient(-90deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0.35) 100%)',
                  borderRadius: '10px 0 0 10px',
                  cursor: 'pointer',
                }}
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              >
                <div
                  style={{
                    zIndex: 13,
                    userSelect: 'none',
                    WebkitUserSelect: 'none',
                    msUserSelect: 'none',
                    WebkitTapHighlightColor: 'transparent',
                  }}
                >
                  <div
                    style={{ pointerEvents: 'none' }}
                  >
                    ›
                  </div>
                </div>
              </div>
            </>
          )}

          <div
            className="position-relative"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              minHeight: '40%',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden rounded shadow-lg bg-black">
              {isLoadedGal && (<>
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
                    cursor: 'pointer',
                    zIndex: 10,
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

              </>)}

              {!isLoadedGal && (
                <div
                  className="position-relative d-flex flex-column align-items-center"
                  style={{
                    zIndex: 11,
                    margin: 'auto',
                    width: '300px',
                    height: '300px',
                  }}
                >
                  <div
                    className="spinner-border"
                    role="status"
                    style={{
                      marginTop: '60%',
                      marginRight: '5%',
                      width: '4rem',
                      height: '4rem'
                    }}
                  >
                  </div>
                </div>
              )}

              <img
                key={currentIndex}
                src={images[currentIndex].src}
                alt={images[currentIndex].title}
                onLoad={() => setLoadedGal(true)}
                style={{
                  cursor: isZoomed ? 'zoom-out' : 'zoom-in',
                  transform: isZoomed ? 'scale(2.5)' : 'scale(1)',
                  transition: 'transform 0.3s ease-in-out',
                  transformOrigin: `${zoomPoint.x}% ${zoomPoint.y}%`,
                  maxHeight: isZoomed ? '90vh' : '80vh',
                  opacity: isLoadedGal ? 1 : 0,
                }}
                className="img-fluid d-block"
                onClick={handleImageClick}
              />
            </div>

            {!isZoomed && isLoadedGal && (
              <div className="mt-3 text-center text-white position-relative">
                <div className="fs-4 mb-0">{images[currentIndex].title}</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
