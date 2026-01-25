import { Truck, Clock, MapPin, Shield } from 'lucide-react';
import { Container, Row, Col } from "react-bootstrap"
import ImageWithFallback from "../additional/ImageWithFallback";
import { addressTow, fromTimeTow, phone, scheduleTow, toTimeTow } from '../additional/contactData';
import busImg from "@/images/BusEd.png";

const urlPhotoZapas = 'https://avatars.mds.yandex.net/i?id=cf5df4551e7390bfdb07fe60056d6df9_l-9699538-images-thumbs&n=13'

let data = [
    {
        icon: Clock,
        title: "ВРЕМЯ РАБОТЫ",
        description: `С ${fromTimeTow} до ${toTimeTow} часов`,
        descriptionAdd: `График работы: ${scheduleTow}`,
    },
    {
        icon: MapPin,
        title: "РАБОТАЕМ",
        description: addressTow,
    },
    {
        icon: Shield,
        title: "ЛЮБОЕ АВТО",
        description: "До 5 тонн, а также перевозка бусов с МАКСИ базой",
    },
]

function createInfoPanels() {
    return data.map((arr, index) => {
        let Icon = arr.icon
        return (
            <div
                key={index + 100}
                className="d-flex align-items-center justify-content-center p-3"
                style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "16px",
                    flex: "1 1 calc(50% - 10px)",
                    minWidth: "200px",
                    transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                    e.currentTarget.style.borderColor = "var(--color-red-600)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                }}
            >
                <div
                    className="p-2 d-flex align-items-center justify-content-center"
                    style={{
                        width: "50px",
                        height: "50px",
                        background: "rgba(172, 0, 0, 1)",
                        borderRadius: "10px",
                        flexShrink: 0,
                    }}
                >
                    <Icon size={40} />
                </div>

                <div
                    style={{
                        width: "100%",
                        color: 'white',
                    }}
                    className="p-2 d-flex flex-column text-center"
                >
                    <span
                        className="text-white fw-bold pb-2"
                        style={{ fontSize: "0.9rem", lineHeight: "1.2" }}
                    >
                        {arr.title}
                    </span>
                    <span
                        className="text-neutral-500"
                        style={{ fontSize: "0.8rem" }}
                    >
                        {arr.description}
                        <br />
                        {arr.descriptionAdd && arr.descriptionAdd}
                    </span>
                </div>
            </div>
        )
    })
}

export default function TowService() {
    return (
        <Container
            fluid
            className='px-3 px-sm-5'
            style={{
                background: "black"
            }}
        >
            <Row>
                <Col className='pt-5'>
                    <h1
                        id="AddService"
                        style={{
                            color: "white",
                        }}
                        className='h2 text-center '>
                        ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ
                    </h1>
                </Col>
            </Row>
            <Row className="justify-content-center py-5 px-2">
                <Col
                    xs={12} lg={10}
                    style={{
                        background: "#1a1a1a",
                        borderRadius: "35px",
                        border: "1px solid rgba(255,255,255,0.1)",
                        overflow: "hidden",
                        padding: 0
                    }}
                >
                    <Row className="g-0 align-items-stretch">
                        <Col xs={12} lg={6} className="order-1 order-lg-2">
                            <div style={{ height: "100%", minHeight: "300px", position: "relative" }}>
                                <ImageWithFallback
                                    src={busImg}
                                    alt="Услуги эвакуатора"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover"
                                    }}
                                />
                            </div>
                        </Col>
                        <Col xs={12} lg={6} className="order-2 order-lg-1 p-4 p-md-5">
                            <div className="d-flex align-items-center gap-3 mb-4">
                                <div className="p-2 bg-red-600 rounded-3" >
                                    <Truck size={50} color="white" />
                                </div>
                                <h2 className="text-white fw-bold mb-0">Услуги эвакуатора</h2>
                            </div>

                            <p
                                className="text-neutral-400 mb-4"
                                style={{ fontSize: "1.2rem", lineHeight: "1.6rem", color: "rgba(255, 255, 255, 0.7)" }}
                            >
                                Профессиональная помощь на дороге.
                                <br />
                                Быстро, надежно.
                            </p>

                            <div className="row mb-4">
                                <div className="col-12">
                                    <div
                                        className="gap-4"
                                        style={{
                                            display: "grid",
                                            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                                        }}
                                    >
                                        {createInfoPanels()}
                                    </div>
                                </div>
                            </div>

                            <a
                                href={"tel:+" + phone}
                                className="d-flex d-flex align-items-center justify-content-center gap-3 text-white px-5 py-3 rounded-pill transition-all"
                                style={{
                                    background: "var(--color-red-600)",
                                    textDecoration: "none",
                                    fontWeight: "700",
                                    boxShadow: "0 8px 20px rgba(220, 38, 38, 0.3)"
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-3px)"}
                                onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                            >
                                <Truck size={40} />
                                <span>ВЫЗВАТЬ ЭВАКУАТОР</span>
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
