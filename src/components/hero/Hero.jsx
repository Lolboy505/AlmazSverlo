import { Container, Row, Col, Nav } from "react-bootstrap"
import redWall from '@/images/RedWall_light.webp';
import { phone, phoneTow } from "../additional/contactData";

export default function Hero() {

    return (
        <Container
            id="home"
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
                    <Row className="pt-5 text-center">
                        <Col>
                            <h1 className="d-flex flex-column justify-content-center align-items-center fw-bold text-uppercase hero-h1-main">
                                <span className="d-block reveal-text delay-1 mainTxt">Алмазное сверление</span>
                                <span className="col-4 d-block reveal-text hero-amp delay-2">&</span>
                                <span className="d-block reveal-text delay-3 mainTxt">Услуги эвакуатора</span>
                                <span className="d-block reveal-text fw-normal mt-2 hero-sub-city delay-4">
                                    в Луганске и области
                                </span>
                            </h1>
                        </Col>
                    </Row>

                    <Row className="d-flex justify-content-center mt-1">
                        <Col md={8} lg={6} className="p-1">
                            <h3 className="hero-subtitle d-block px-4 py-2 delay-5">
                                <span className="d-block p-1 reveal-text text-white">
                                    Профессиональные решения для стройки.
                                </span>
                                <span className="d-block reveal-text text-white">
                                    Быстрая помощь на дорогах
                                </span>
                            </h3>
                        </Col>
                    </Row>

                    <Row className="pt-2 pb-4">
                        <Col className="d-flex flex-column align-items-center justify-content-center">
                            <div className="col-12 col-md-8 d-flex flex-column flex-sm-row align-items-center justify-content-center">
                                <Nav.Link
                                    className="col-9 col-sm-5 col-md-6 col-lg-5 col-xl-4 m-0 p-1 d-flex text-center justify-content-center reveal-btn delay-6"
                                    href={`tel:+${phone}`}
                                >
                                    <div className="btn-glitch-neon h5 p-3 m-0 px-lg-4">
                                        Позвонить мастеру
                                    </div>
                                </Nav.Link>
                                <Nav.Link
                                    className="col-9 col-sm-5 col-md-6 col-lg-5 col-xl-4 m-0 p-1 d-flex text-center justify-content-center reveal-btn delay-7"
                                    href={`tel:+${phoneTow}`}
                                >
                                    <div className="btn-glitch-neon h5 m-0 p-3 px-lg-4">
                                        Вызвать эвакуатор
                                    </div>
                                </Nav.Link>
                            </div>
                            <Nav.Link
                                href="#AddService"
                                className="col-8 col-sm-6 col-md-6 col-lg-5 col-xl-4 pt-3 d-flex text-center justify-content-center reveal-btn delay-8"
                            >
                                <div className="btn-view-services">
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

