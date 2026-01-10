import { Container, Row, Col, Nav } from "react-bootstrap"
import { buttonStyle } from "../additional/buttonStyle"
import redWall from '@/images/RedWallMobail.jpeg'; // 1. Импортируем

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
                height: 'clamp(300px, 30vh, 600px)',
                backgroundImage: `url(${redWall})`,
                backgroundSize: "cover",
                color: "white",
                textShadow: "1px 2px 0px rgba(0, 0, 0, 0.8)",
                fontSize: "clamp(1px, 2vh, 28px)",
                overflow: "hidden"
            }}
            fluid
            className="text-center p-0"
        >
            <div 
                style={{
                    background: "linear-gradient(180deg , rgb(0,0,0,0.01) , black)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                }}
            >
                <Row className="pt-4 ">
                    <h1
                        className="h1"
                    >
                        АЛМАЗНОЕ СВЕРЛЕНИЕ
                    </h1>
                </Row>
                <Row>
                    <p className="h2">
                        разных диаметров
                    </p>
                </Row>
                <Row>
                    <p className="h7">
                        Профессиональное сверление отверстий под все виды коммуникаций
                    </p>
                </Row>
                <Row className=" d-flex justify-content-center pb-5 ">
                    <Nav.Link
                        className="d-flex text-center 
                        justify-content-center col-6 col-lg-3"
                        href="#order"
                        onMouseEnter={(event) => setHovered(event)}
                        onMouseLeave={(event) => setUnhovered(event)}
                        style={{ ...buttonStyle }}
                    >
                        Оформить заказ
                    </Nav.Link>
                </Row>
            </div>
        </Container>
    )
}

