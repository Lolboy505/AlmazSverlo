import { Container, Row, Col, Nav } from "react-bootstrap"
import { buttonStyle } from "../additional/buttonStyle"
import redWall from '@/images/RedWall_light.webp';
import { phone } from "../additional/contactData";

export default function Hero() {
    function setHovered(e) {
        if (e) {
            e.currentTarget.style.boxShadow = "0 0px 30px rgba(255, 255, 255, 0.3)"
            e.currentTarget.style.transform = "translateY(-3px)"
        }
    }

    function setUnhovered(e) {
        if (e) {
            e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.2), inset 0 -3px 0 rgba(0,0,0,0.3)"
            e.currentTarget.style.transform = "translateY(0)"
        }
    }
    return (
        <Container
            style={{
                backgroundImage: `url(${redWall})`,
                backgroundSize: "cover",
                color: "white",
                textShadow: "1px 2px 0px rgba(0, 0, 0, 0.8)",
                fontSize: "clamp(1px, 2vh, 28px)",
                overflowX: 'hidden',
            }}
            fluid
            className="text-center p-0 mb-5"
        >
            <Row className="p-0 m-0">
                <Col
                    className="p-0 m-0"
                    style={{
                        background: "linear-gradient(180deg , rgb(0,0,0,0.01) , black)",
                    }}
                >
                    <Row className="pt-5">
                        <Col className="">
                            <h1 className="fw-bold text-uppercase">
                                <span className={''}>Алмазное сверление</span>
                                <span className={"d-block"}>&</span>
                                <span className={''}>Услуги эвакуатора</span>
                                <span className="d-block fs-2 fw-normal mt-2">в Луганске и области</span>
                            </h1>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col className="p-1">
                            <h2
                                className="d-block px-4 py-2 fw-bold"
                                style={{
                                    fontSize: 'clamp(1.2rem, 50%, 1.5rem)',
                                }}
                            >
                                <span className="d-block">
                                    Профессиональные решения для стройки
                                </span>
                                <span className="d-block">
                                    и быстрая помощь на дорогах
                                </span>
                            </h2>
                        </Col>
                    </Row>
                    <Row className="pb-4">
                        <Col className="d-flex flex-column align-items-center justify-content-center">
                            <Nav.Link
                                className="col-9 col-sm-6 col-md-6 col-lg-5 col-xl-4 d-flex text-center justify-content-center"
                                href={`tel:+${phone}`}
                                onMouseEnter={(event) => setHovered(event)}
                                onMouseLeave={(event) => setUnhovered(event)}
                                style={{ ...buttonStyle }}
                            >
                                <div
                                    className="h5 mb-1 text-white text-decoration-none fw-bold hover-red"
                                >
                                    Позвонить мастеру
                                </div>
                            </Nav.Link>
                            <Nav.Link
                                className="col-9 col-sm-6 col-md-6 col-lg-5 col-xl-4 mt-2 d-flex text-center justify-content-center"
                                href="#AddService"
                                onMouseEnter={(event) => setHovered(event)}
                                onMouseLeave={(event) => setUnhovered(event)}
                                style={{
                                    ...buttonStyle,
                                    background: 'var(--color-red-700)',
                                }}
                            >
                                <div className="h5 mb-1">
                                    Вызвать эвакуатор
                                </div>
                            </Nav.Link>
                            <Nav.Link
                                className="mt-1"
                                href="#AddService"
                            >
                                <div
                                    style={{
                                        ...buttonStyle,
                                        background: 'var(--color-red-800)',
                                        margin: '2px',
                                        padding: '6px 12px'
                                    }}
                                    className="h6 mb-1"
                                >
                                    Просмотреть услуги эвакуатора
                                </div>
                            </Nav.Link>
                        </Col>
                    </Row>
                </Col>
            </Row >
        </Container >
    )
}

