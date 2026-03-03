import { useEffect, useRef, useState } from 'react';
import "./YandexMap.css"

const YandexMap = () => {
    const mapContainerRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (mapContainerRef.current && mapContainerRef.current.children.length === 0) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.charset = 'utf-8';
            script.async = true;
            script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ad43f149a46431da9f7aab8ef186632d0048fcdb56f9acd5a379f916ac75eef7e&width=100%&height=500&lang=ru_RU&scroll=true";

            script.onload = () => setIsLoaded(true);
            mapContainerRef.current.appendChild(script);
        }
    }, []);

    return (
        <div className="position-relative overflow-hidden rounded shadow-lg map-dark-container">
            {!isLoaded && (
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center bg-dark z-3">
                    <div className="spinner-border text-warning mb-3" role="status" style={{ width: '3rem', height: '3rem' }}>
                        <span className="visually-hidden">Загрузка...</span>
                    </div>
                    <p className="text-secondary small text-uppercase fw-bold tracking-wider">Загрузка карты...</p>
                </div>
            )}

            <div
                ref={mapContainerRef}
                className={`yandex-map-frame ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                style={{ transition: 'opacity 0.8s ease-in-out' }}
            >
            </div>
        </div>
    );
};

export default YandexMap;
