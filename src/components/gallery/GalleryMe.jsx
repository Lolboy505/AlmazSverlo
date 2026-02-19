import { useState, useEffect, useCallback, memo } from 'react';
import styles from './previewImg.module.css';
import { Col } from 'react-bootstrap';

// Выносим обработку картинок за пределы компонента
const imagesModules = import.meta.glob('@/gallery/*.webp', { eager: true });
const IMAGES = Object.entries(imagesModules).map(([path, module], index) => ({
  id: index + 1,
  src: module.default,
  title: `Объект №${index + 1}`,
}));

const GalleryItem = memo(({ img, index, onClick }) => (
  <div className="col-5 col-md-5 mx-1 mx-md-1">
    <div className={styles.galleryCard} onClick={() => onClick(index)}>
      <img
        src={img.src}
        alt={img.title}
        loading="lazy"
        className="w-100 h-100 object-fit-cover"
      />
      <div className={styles.hoverOverlay}>
        <span className="text-white text-center h5">Увеличить &#128269;</span>
      </div>
    </div>
  </div>
));

const Preview = ({ imgs, setCurrentIndex }) => {
  const [textLoading, setTextLoading] = useState("");

  useEffect(() => {
    if (IMAGES.length > 0) return;
    const interval = setInterval(() => {
      setTextLoading((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="row g-2 g-lg-3 gap-2 justify-content-center">
      {IMAGES.length > 0 ? (
        IMAGES.slice(0, 4).map((img, index) => (
          <GalleryItem
            key={img.id}
            img={img}
            index={index}
            onClick={setCurrentIndex}
          />
        ))
      ) : (
        <div className="text-center py-5">
          <h3>Загрузка{textLoading}</h3>
        </div>
      )}
      <div class="redLineShadow mt-4 mb-1" style={{ width: '90%', transform: 'rotateZ(180deg)', margin: 'auto' }} />
    </div>
  )
}

const GalleryAlm = ({ currentIndex, setCurrentIndex, IMAGES }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPoint, setZoomPoint] = useState({ x: 50, y: 50 });
  const [isLoadedGal, setLoadedGal] = useState(false);

  const closeGallery = useCallback(() => {
    setCurrentIndex(null);
    setIsZoomed(false);
    setLoadedGal(false);
  }, []);

  const navigate = useCallback((direction) => {
    setIsZoomed(false);
    setLoadedGal(false);
    setCurrentIndex((prev) => {
      if (direction === 'next') return prev + 1 === IMAGES.length ? 0 : prev + 1;
      return prev === 0 ? IMAGES.length - 1 : prev - 1;
    });
  }, []);

  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if (key === 'escape') closeGallery();
      if (/^(arrowright|d|в)$/.test(key)) navigate('next');
      if (/^(arrowleft|a|ф)$/.test(key)) navigate('prev');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, closeGallery, navigate]);

  const handleZoom = (e) => {
    if (!isZoomed) {
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
      setZoomPoint({
        x: ((e.clientX - left) / width) * 100,
        y: ((e.clientY - top) / height) * 100
      });
    }
    setIsZoomed(!isZoomed);
  };

  return (
    <>
      {currentIndex !== null && (
        <div className={styles.modalOverlay} onClick={closeGallery}>
          <button className={styles.closeBtn} onClick={closeGallery}>
            <div className={styles.closeBtnX}>
              &times;
            </div>
          </button>

          {!isZoomed && (
            <>
              <div className={`${styles.navBtn} ${styles.prev}`} onClick={(e) => { e.stopPropagation(); navigate('prev'); }}>‹</div>
              <div className={`${styles.navBtn} ${styles.next}`} onClick={(e) => { e.stopPropagation(); navigate('next'); }}>›</div>
            </>
          )}

          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            {!isLoadedGal && (
              <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                <div className={`${styles.spinner} spinner-border text-light`}></div>
              </div>
            )}
            <img
              src={IMAGES[currentIndex].src}
              alt={IMAGES[currentIndex].title}
              onLoad={() => setLoadedGal(true)}
              onClick={handleZoom}
              className={styles.mainImg}
              style={{
                cursor: isZoomed ? 'zoom-out' : 'zoom-in',
                transform: isZoomed ? 'scale(2.5)' : 'scale(.9)',
                transformOrigin: `${zoomPoint.x}% ${zoomPoint.y}%`,
                opacity: isLoadedGal ? 1 : 0,
                display: isLoadedGal ? 'block' : 'none'
              }}
            />
            {!isZoomed && isLoadedGal && (
              <div className={styles.imgTitle}>{IMAGES[currentIndex].title}</div>
            )}
          </div>
        </div>
      )
      }
    </>
  )
}

export default function Gallery(sizes) {
  const [currentIndex, setCurrentIndex] = useState(null);

  return (
    <Col {...sizes} className={`ms-lg-4 p-0 overflow-hidden ${styles.galleryWrapper}`}>
      <h2 className={`mb-4 px-3 pb-2 ${styles.galleryTitle}`}>
        <div class="redLineShadow mb-2 mt-1" style={{ width: '94%', margin: 'auto' }} />
        Галерея работ по бурению и сверлению
      </h2>
      <Preview imgs={IMAGES} setCurrentIndex={setCurrentIndex} />
      <GalleryAlm IMAGES={IMAGES} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    </Col>
  )
}