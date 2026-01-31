import { Container, Row, Col, Nav } from "react-bootstrap"
import { buttonStyle } from "../additional/buttonStyle"
import redWall from '@/images/RedWallMobail.jpeg';
import style from './hero.module.css'

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
                height: 'clamp(400px, 30vh, 600px)',
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
                className="gap-2"
                style={{
                    background: "linear-gradient(180deg , rgb(0,0,0,0.01) , black)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <Row className="pt-4 px-2">
                    <h1
                        className={style.global__h1}
                    >
                        АЛМАЗНОЕ СВЕРЛЕНИЕ В ЛУГАНСКЕ
                    </h1>
                </Row>
                <Row className="d-flex justify-content-center">
                    <h2
                        className="px-4"
                        style={{ ...style_hero }}
                    >
                        Профессиональное сверление отверстий различного диаметра под все виды коммуникаций
                    </h2>
                </Row>
                <Row className=" d-flex flex-column align-items-center justify-content-center pb-5 pt-2 pt-lg-4">
                    <Nav.Link
                        className=" d-flex text-center justify-content-center col-8 col-md-6 col-lg-5 col-xl-4"
                        href="#order"
                        onMouseEnter={(event) => setHovered(event)}
                        onMouseLeave={(event) => setUnhovered(event)}
                        style={{ ...buttonStyle }}
                    >
                        <div className="h5 mb-1">
                            Оформить заказ
                        </div>
                    </Nav.Link>
                    <Nav.Link
                        className="mt-2 d-flex text-center justify-content-center col-6 col-md-5 col-lg-4 col-xl-3"
                        href="#AddService"
                        onMouseEnter={(event) => setHovered(event)}
                        onMouseLeave={(event) => setUnhovered(event)}
                        style={{
                            ...buttonStyle,
                            background: 'var(--color-red-700)',
                        }}
                    >
                        <div className="h6 mb-1">
                            Дополнительные услуги
                        </div>
                    </Nav.Link>
                </Row>
            </div>
        </Container>
    )
}

let style_hero = {
    fontSize: "clamp(1rem, 4vw, 1.3rem)",
}
