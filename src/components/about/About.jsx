import { Container, Row, Col } from 'react-bootstrap';
import Gallery from '@/components/gallery/Gallery';
import { useState, useEffect, useRef } from 'react';
import styles from './Slider.module.css';

let discription1 = `Обращаясь ко мне, вы не платите диспетчерам и менеджерам.`
let discription2 = `Мой опыт и современные технологии позволяют добиваться идеального результата даже в самых сложных материалах. Ценю свою репутацию, поэтому обеспечиваю персональный подход к каждому заказу. Работаю чисто, оперативно и на совесть — будь то частный сектор или крупный строительный объект.`

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

export default function About() {
    const [index, setIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const sliderRef = useRef(null);

    useEffect(() => {
        let interval;

        const startSlider = () => {
            interval = setInterval(() => {
                setIsTransitioning(true);
                setIndex((prevIndex) => prevIndex + 1);
            }, 6000);
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
        <Container
            fluid
            className="flex flex-column"
            style={{
                color: "white",
            }}
        >
            <Row
                className="mt-2 d-flex align-items-center justify-content-center"
            >
                <Col
                    className="px-0 col-12"
                >
                    <Row
                        className="g-0 gap-3 row-12
                            d-flex flex-column flex-lg-row 
                            justify-content-center align-items-center 
                            align-items-lg-start"
                        style={{
                            fontFamily: "Golos Text",
                            textShadow: '0 0 20px black',
                        }}
                    >
                        <Col
                            className="col-11 col-lg-5 d-flex flex-column 
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
                            <div className="p-4" style={{ fontWeight: "400" }}>
                                <div
                                    className="p-2 px-0"
                                    style={{
                                        fontSize: "clamp(1rem, 5vw , 1.7rem)",
                                    }}
                                >
                                    {discription1}
                                </div>

                                <div
                                    className="p-2 px-0"
                                    style={{
                                        fontSize: "clamp(1rem, 3.5vw, 1.5rem)",
                                        lineHeight: "1.2",
                                    }}
                                >
                                    {discription2}
                                </div>
                            </div>

                        </Col>
                        <Col
                            className="col-11 col-lg-5"
                        >
                            <Gallery />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container >
    );
}
