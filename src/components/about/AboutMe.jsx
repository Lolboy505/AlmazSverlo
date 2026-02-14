import { Sparkles, GraduationCap, ShieldPlus } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Slider.module.css';
import animation from './Animation.module.css';

export default function AboutMe() {
    const [isTransitioning, setIsTransitioning] = useState(true);
    const sliderRef = useRef(null);
    const [index, setIndex] = useState(0);

    let texts = [
        {
            id: 1,
            text: "Работаю без посредников — отвечаю за результат лично",
        },
        {
            id: 2,
            text: "Мой опыт — ваша гарантия результата",
        },
        {
            id: 3,
            text: "Прямой контакт с мастером — гарантия лучшей цены",
        },
    ]

    let textsFin = [...texts, texts[0]];

    let discription1 = `Обращаясь ко мне, вы не платите диспетчерам и менеджерам.`
    let dExp = `Мой опыт и современные технологии позволяют добиваться идеального результата даже в самых сложных материалах.`
    let dRep = "Ценю свою репутацию, поэтому обеспечиваю персональный подход к каждому заказу"
    let dWork = "Работаю чисто, оперативно и на совесть — будь то частный сектор или крупный строительный объект."

    let icons = {
        height: 'auto',
        width: 'clamp(45px, 5vw , 60px)',
    }

    let textStyle = {
        fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
        lineHeight: '1.4'
    }

    let textDesSize = "clamp(1.1rem, 5vw , 1.7rem)"

    useEffect(() => {
        let interval;

        const startSlider = () => {
            interval = setInterval(() => {
                setIsTransitioning(true);
                setIndex((prevIndex) => prevIndex + 1);
            }, 5600);
        };

        const stopSlider = () => clearInterval(interval);

        // Функция отслеживания возврата на вкладку
        const handleVisibilityChange = () => {
            if (document.hidden) {
                stopSlider();
            } else {
                startSlider();
            }
        };

        startSlider();
        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            stopSlider();
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    const handleTransitionEnd = () => {
        if (index >= textsFin.length - 1) {
            setIsTransitioning(false);
            setIndex(0);
        }
    };

    return (
        <Col
            className="col-11 col-lg-5 col-xxl-4 d-flex flex-column 
                                        justify-content-center align-items-center 
                                        align-items-lg-start"
            style={{
                background: "var(--color-card)",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
        >
            <div
                className={styles.sliderContainer}
                style={{
                    background: "var(--color-card)",
                    borderRadius: "12px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5)',
                    userSelect: 'none',
                }}
            >
                <div
                    ref={sliderRef}
                    onTransitionEnd={handleTransitionEnd}
                    className={`${styles.sliderInner} ${!isTransitioning ? styles.noTransition : ''}`}
                    style={{
                        transition: isTransitioning ? 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
                        transform: `translateX(-${index * 100}%`,
                    }}
                >
                    {textsFin.map((arr, i) => (
                        <h3 key={i} className={styles.slide}>
                            <span className={styles.accent}>
                                {arr.text}
                            </span>
                        </h3>
                    ))}
                </div>
            </div>
            <div
                className="px-3 pb-3 d-flex flex-column justify-content-center align-items-center ">
                <div
                    className="p-3 pt-4 text-center"
                    style={{
                        maxWidth: 'clamp(500px, 5vw, 800px)',
                        letterSpacing: '0.5px',
                        fontSize: textDesSize,
                    }}
                >
                    {discription1}
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr',
                    columnGap: '15px',
                    rowGap: '20px',
                    alignItems: 'start',
                    padding: '12px'
                }}>

                    <GraduationCap
                        className={`${animation.animSvg} ${animation.d1}`}
                        style={icons}
                    />
                    <div style={textStyle}>
                        {dExp}
                    </div>

                    <ShieldPlus
                        className={`${animation.animSvg} ${animation.d2}`}
                        style={icons}
                    />
                    <div style={textStyle}>
                        {dRep}
                    </div>

                    <Sparkles
                        className={`${animation.animSvg} ${animation.d3}`}
                        style={icons}
                    />
                    <div style={textStyle}>
                        {dWork}
                    </div>

                </div>
            </div>
        </Col>
    )
}