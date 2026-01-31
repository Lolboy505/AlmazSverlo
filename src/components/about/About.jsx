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
            }, 6000); // Твой интервал
        };

        const stopSlider = () => clearInterval(interval);

        // Функция отслеживания возврата на вкладку
        const handleVisibilityChange = () => {
            if (document.hidden) {
                stopSlider();
            } else {
                // Когда вернулись — сбрасываем индекс на валидный и запускаем заново
                startSlider();
            }
        };

        // Запускаем при монтировании
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
            className="flex flex-column m-0 p-0 "
            style={{
                color: "white",
                overflow: 'visible',
            }}
        >
            <Container
                fluid
                className="pt-4 p-2"
                style={{
                    overflow: "hidden",
                }}
            >
                <Row
                    className="p-1 p-md-3 px-md-0 g-4 gap-4
                    d-flex flex-column flex-lg-row 
                    justify-content-center align-items-center align-items-lg-start"
                    style={{
                        overflow: 'hidden',
                        fontFamily: "Golos Text",
                        textShadow: '0 0 20px black',
                    }}
                >
                    <Col
                        className="p-3 m-0 col-11 col-lg-5 d-flex flex-column 
                        justify-content-center align-items-center 
                        align-items-lg-start"
                        style={{
                            background: "var(--color-card)",
                            borderRadius: "12px",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                    >

                        <h2
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
                                    <div key={i} className={styles.slide}>
                                        <span className={styles.accent}>
                                            {arr.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </h2>
                        <div className="p-4 pb-0" style={{ fontWeight: "400" }}>
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
                        className="col-11 col-lg-5 p-0 m-0"
                    >
                        <Gallery />
                    </Col>
                </Row>
            </Container>
        </Container >
    );
}
