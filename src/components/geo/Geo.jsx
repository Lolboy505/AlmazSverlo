import { Container, Row, Col } from 'react-bootstrap';
import { MapPin, ChevronRight } from 'lucide-react';
import style from './styleGeo.module.css';

const CITIES = [
    'Луганск', 'Алчевск', 'Краснодон', 'Стаханов',
    'Антрацит', 'Свердловск', 'Лутугино', 'Перевальск',
    'Счастье', 'Ровеньки'
];

export default function GeoLocation() {
    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col xs={12} sm={11} xxl={11} className="p-0">
                    <div className={style.geoWrapper}>

                        <div className="mb-4">
                            <div className={`redLineShadow mb-3`} />
                            <div className="d-flex align-items-center">
                                <MapPin
                                    size={50}
                                    color="var(--color-red-700)"
                                    className="me-3 flex-shrink-0"
                                />
                                <h2 className={style.titleGeo}>
                                    Работаю по Луганску и ЛНР
                                </h2>
                            </div>
                            <p className={`${style.dopDes} mt-3 ps-1 ms-md-4`}>
                                Выезд на объекты и быстрая подача по договоренности в города:
                            </p>
                        </div>

                        <Row className="g-3 ms-md-4">
                            {CITIES.map((city) => (
                                <Col key={city} xs={6} md={4} lg={3}>
                                    <div className={style.cityCard}>
                                        <span className={style.city}>
                                            {city}
                                        </span>
                                        <ChevronRight
                                            size={16}
                                            color="var(--color-red-600)"
                                            style={{
                                                opacity: 0.5,
                                                transition: 'all 0.3s ease'
                                            }}
                                        />
                                    </div>
                                </Col>
                            ))}

                            <Col xs={12} className="mt-4">
                                <div className={style.footerDes}>
                                    и другие населенные пункты ЛНР и часть Ростовской области
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}