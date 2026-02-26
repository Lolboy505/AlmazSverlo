import { Sparkles, GraduationCap, ShieldPlus } from 'lucide-react';
import { useState, useEffect, useRef } from 'react'
import { Col } from 'react-bootstrap'
import { ABOUT } from '@/constants/contactData';
import styles from './AboutMe.module.css'
import animation from './Animation.module.css'


const TEXTS_FIN = [...ABOUT.SlideTexts, ABOUT.SlideTexts[0]]

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
                    {ABOUT.Content.desc}
                </div>

                <div className={styles.featuresGrid}>
                    <GraduationCap className={`${animation.animSvg} ${animation.d1} ${styles.iconSize}`} />
                    <div className={styles.featureText}>{ABOUT.Content.exp}</div>

                    <ShieldPlus className={`${animation.animSvg} ${animation.d2} ${styles.iconSize}`} />
                    <div className={styles.featureText}>{ABOUT.Content.rep}</div>

                    <Sparkles className={`${animation.animSvg} ${animation.d3} ${styles.iconSize}`} />
                    <div className={styles.featureText}>{ABOUT.Content.work}</div>
                </div>
            </div>
        </Col>
    );
};

export default AboutMe