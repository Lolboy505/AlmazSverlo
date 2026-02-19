import { Sparkles, GraduationCap, ShieldPlus } from 'lucide-react';
import { useState, useEffect, useRef, memo } from 'react';
import { Col } from 'react-bootstrap';
import styles from './AboutMe.module.css';
import animation from './Animation.module.css';

const SLIDE_TEXTS = [
    { id: 1, text: "Работаю без посредников — отвечаю за результат лично" },
    { id: 2, text: "Мой опыт — ваша гарантия результата" },
    { id: 3, text: "Прямой контакт с мастером — гарантия лучшей цены" },
];
const TEXTS_FIN = [...SLIDE_TEXTS, SLIDE_TEXTS[0]];

const CONTENT = {
    desc: `Обращаясь ко мне, вы не платите диспетчерам и менеджерам.`,
    exp: `Мой опыт и современные технологии позволяют добиваться идеального результата даже в самых сложных материалах.`,
    rep: "Ценю свою репутацию, поэтому обеспечиваю персональный подход к каждому заказу",
    work: "Работаю чисто, оперативно и на совесть — будь то частный сектор или крупный строительный объект."
};

const AboutMe = (sizes) => {
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [index, setIndex] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        let interval;
        const startSlider = () => {
            interval = setInterval(() => {
                setIsTransitioning(true);
                setIndex((prev) => prev + 1);
            }, 5600);
        };

        const handleVisibilityChange = () => {
            if (document.hidden) clearInterval(interval);
            else startSlider();
        };

        startSlider();
        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => {
            clearInterval(interval);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    const handleTransitionEnd = () => {
        if (index >= TEXTS_FIN.length - 1) {
            setIsTransitioning(false);
            setIndex(0);
        }
    };

    return (
        <Col
            {...sizes}
            className={`p-0 overflow-hidden d-flex flex-column justify-content-center align-items-center align-items-lg-start ${styles.mainCard}`}
        >
            <div className={`${styles.sliderContainer}`}>
                <div className="redLineShadow mt-1" style={{ width: '90%', margin: 'auto', }} />
                <div className={`overflow-hidden`}>
                    <div
                        ref={sliderRef}
                        onTransitionEnd={handleTransitionEnd}
                        className={`${styles.sliderInner} ${!isTransitioning ? styles.noTransition : ''}`}
                        style={{
                            transform: `translateX(-${index * 100}%)`,
                            transition: isTransitioning ? 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
                        }}
                    >
                        {TEXTS_FIN.map((arr, i) => (
                            <h3 key={i} className={styles.slide}>
                                <span className={styles.accent}>{arr.text}</span>
                            </h3>
                        ))}
                    </div>
                </div>
            </div>

            <div className="px-3 pb-3 d-flex flex-column justify-content-center align-items-center">
                <div className={styles.descriptionMain}>
                    {CONTENT.desc}
                </div>

                <div className={styles.featuresGrid}>
                    <GraduationCap className={`${animation.animSvg} ${animation.d1} ${styles.iconSize}`} />
                    <div className={styles.featureText}>{CONTENT.exp}</div>

                    <ShieldPlus className={`${animation.animSvg} ${animation.d2} ${styles.iconSize}`} />
                    <div className={styles.featureText}>{CONTENT.rep}</div>

                    <Sparkles className={`${animation.animSvg} ${animation.d3} ${styles.iconSize}`} />
                    <div className={styles.featureText}>{CONTENT.work}</div>
                </div>
            </div>
        </Col>
    );
};

export default AboutMe