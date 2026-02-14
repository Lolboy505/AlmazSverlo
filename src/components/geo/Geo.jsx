import { Container, Row, Col } from 'react-bootstrap';
import { MapPin, ChevronRight } from 'lucide-react';


export default function GeoLocation() {
    const cities = [
        'Луганск', 'Алчевск', 'Краснодон', 'Стаханов',
        'Антрацит', 'Свердловск', 'Лутугино', 'Перевальск',
        'Счастье', 'Ровеньки'
    ];
    let sizeTitle = 'clamp(1.1rem, 4vw, 1.8rem)'
    let sizeDes = '1rem'

    return (
        <Container fluid className="py-5" style={{ background: '#000', color: '#fff' }}>
            <Row className="justify-content-center">
                <Col xs={12} lg={11} xl={10}>
                    <div style={{
                        background: 'var(--color-card)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '24px',
                        padding: 'clamp(20px, 5vw, 40px)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                    }}>

                        <div className="mb-4">
                            <div style={{
                                width: '100%',
                                height: '4px',
                                background: 'var(--color-red-600)',
                                borderRadius: '2px',
                                marginBottom: '15px',
                                boxShadow: '0 0 15px var(--color-red-600)'
                            }} />
                            <div className="d-flex flex-row align-items-center">
                                <MapPin size={50} color="var(--color-red-700)" className="me-3 flex-shrink-0" />
                                <h2 className="fw-bold text-uppercase"
                                    style={{
                                        fontSize: sizeTitle,
                                        letterSpacing: '1px',
                                        margin: 0,
                                    }}>
                                    Работаю по Луганску и всей Луганской области
                                </h2>
                            </div>
                            <p
                                style={{
                                    opacity: 0.6,
                                    fontSize: sizeDes,
                                }}
                                className="mt-3 ps-1 ms-md-4"
                            >
                                Выезд на объекты и быстрая подача по договоренности в города:
                            </p>
                        </div>

                        <Row className="g-3 ms-md-4">
                            {cities.map((city) => (
                                <Col key={city} xs={6} md={4} lg={3}>
                                    <div
                                        className="city-card"
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.03)',
                                            border: '1px solid rgba(255, 255, 255, 0.08)',
                                            borderRadius: '12px',
                                            padding: '12px 15px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'between',
                                            transition: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            cursor: 'default'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = 'rgba(255, 0, 0, 0.1)';
                                            e.currentTarget.style.borderColor = 'var(--color-red-600)';
                                            e.currentTarget.style.transform = 'translateY(-3px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                                            e.currentTarget.style.transform = 'translateY(0px)';
                                        }}
                                    >
                                        <span style={{ fontSize: '0.95rem', fontWeight: '500', flex: 1 }}>{city}</span>
                                        <ChevronRight size={16} color="var(--color-red-600)" style={{ opacity: 0.5 }} />
                                    </div>
                                </Col>
                            ))}

                            <Col xs={12} className="mt-4">
                                <div style={{
                                    borderStyle: 'dashed',
                                    borderWidth: '1px',
                                    borderColor: 'rgba(255,255,255,0.2)',
                                    borderRadius: '12px',
                                    padding: '10px 20px',
                                    textAlign: 'center',
                                    fontSize: '0.85rem',
                                    opacity: 0.5
                                }}>
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
