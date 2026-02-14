import { useState, useEffect } from 'react';

const CookieNotice = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        // Проверяем localStorage
        const consent = localStorage.getItem('cookie-accepted');

        // Проверяем, не Puppeteer ли это (чтобы не сохранять баннер в статику)
        const isPuppeteer = navigator.userAgent.includes("HeadlessChrome");

        if (!consent && !isPuppeteer) {
            setShow(true);
        }
    }, []);
    const handleAccept = () => {
        localStorage.setItem('cookie-accepted', 'true');
        setShow(false);
    };
    if (!show) return null;
    return (
        <div className="cookie-notice">
            <p>
                Для анализа работы сайта используются файлы cookie и сервис Яндекс.Метрика. Продолжая использование сайта, вы соглашаетесь с условиями <a href="/privacy.html" target="_blank">Политики конфиденциальности</a>.
            </p>
            <button className="cookie-btn" onClick={handleAccept}>ОК</button>
        </div>
    );
};

export default CookieNotice;