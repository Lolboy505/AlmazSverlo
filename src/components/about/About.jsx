import { Container, Row, Col } from 'react-bootstrap';
import Gallery from '@/components/gallery/Gallery';
import { useState, useEffect, useRef } from 'react';
import styles from './Slider.module.css';

let discription = "Обращаясь ко мне, вы не платите диспетчерам и менеджерам. Мой опыт и современные технологии позволяют добиваться идеального результата даже в самых сложных материалах. Ценю свою репутацию, поэтому обеспечиваю персональный подход к каждому заказу. Работаю чисто, оперативно и на совесть — будь то частный сектор или крупный строительный объект."

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
        const interval = setInterval(() => {
            setIndex((prev) => prev + 1);
            setIsTransitioning(true);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleTransitionEnd = () => {
        if (index === textsFin.length - 1) {
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
                overflow: 'visible',
            }}
        >
            <Container fluid className="pt-4"
                style={{
                    overflow: 'hidden',
                    background: "black",
                }}
            >
                <Row
                    className="p-1 p-md-3 px-md-5 g-4 d-flex flex-column flex-lg-row justify-content-center align-items-center"
                    style={{
                        overflow: 'hidden',
                        fontFamily: "Golos Text",
                    }}
                >
                    <div
                        style={{
                            maxWidth: "1100px",
                        }}
                        className='px-3 px-md-4'
                    >
                        <h2
                            className={styles.sliderContainer}
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
                        <p className="display-7 my-4"
                            style={{
                                fontWeight: "400",
                            }}
                        >
                            {discription}
                        </p>
                        <p
                            className="display-7"
                            style={{
                                color: "grey",
                            }}
                        >
                            {textSecond}
                        </p>
                    </div>

                    <Gallery />

                </Row>
            </Container>
        </Container >
    );
}
