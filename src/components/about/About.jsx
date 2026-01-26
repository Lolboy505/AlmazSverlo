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

let textSecond = null

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
                    overflow: 'hidden',
                    background: "var(--color-container)",
                    borderRadius: "20px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
            >
                <Row
                    className="p-1 p-md-3 px-md-5 g-4 d-flex flex-column 
                    flex-lg-row justify-content-center align-items-center
                    align-items-lg-start"
                    style={{
                        overflow: 'hidden',
                        fontFamily: "Golos Text",
                    }}
                >
                    <Col
                        lg={6}
                        xl={5}
                        className="pt-4 d-flex flex-column 
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
                        <p className=" my-4 mt-3 px-2 px-md-3"
                            style={{
                                fontWeight: "400",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "1.2rem",
                                    margin: "0 0 10px 0",
                                    padding: "none",
                                }}
                            >
                                {discription1}
                            </div>
                            <div
                                style={{
                                    fontSize: "1.1rem",
                                    margin: "0 0 10px 0",
                                    padding: "none",
                                }}
                            >
                                {discription2}

                            </div>
                        </p>
                        <p
                            className="display-7"
                            style={{
                                color: "grey",
                            }}
                        >
                            {textSecond}
                        </p>
                    </Col>
                    <Col lg={6} xl={7} >
                        <Gallery />
                    </Col>
                </Row>
            </Container>
        </Container >
    );
}
