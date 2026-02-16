import { Container, Row, Col, Nav } from "react-bootstrap"
import { formatPhoneNumber, phone, phoneTow } from "@/components/additional/contactData.js";
import { useAppState } from "@/components/additional/StateContext"
import { motion } from "framer-motion";
import redWall from '@/images/RedWall_light.webp';

// 1. Настройка анимации (Варианты)
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            // Задержка между появлением каждой строчки
            // staggerChildren: 0.15, 
            delayChildren: 0.5,    // Общая задержка старта
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 40, damping: 15 }
    }
};

const btnVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { type: "spring", stiffness: 40, damping: 6 }
    }
};

export default function Hero() {
    const { isReady } = useAppState()

    const isBot = typeof navigator !== 'undefined' && navigator.userAgent.includes("HeadlessChrome");

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
                    <motion.div
                        variants={containerVariants}
                        initial={isBot ? "visible" : "hidden"}
                        animate={isReady || isBot ? "visible" : "hidden"}
                    >
                        <Row className="pt-5 text-center">
                            <Col>
                                <motion.h1 className="d-flex flex-column justify-content-center align-items-center fw-bold text-uppercase hero-h1-main">
                                    <motion.span variants={itemVariants} className="d-block mainTxt">Алмазное сверление</motion.span>
                                    <motion.span variants={itemVariants} className="col-4 d-block hero-amp">&</motion.span>
                                    <motion.span variants={itemVariants} className="d-block mainTxt">Услуги эвакуатора</motion.span>
                                    <motion.span variants={itemVariants} className="d-block fw-normal mt-2 hero-sub-city">
                                        в Луганске и области
                                    </motion.span>
                                </motion.h1>
                            </Col>
                        </Row>

                        <Row className="d-flex justify-content-center mt-1">
                            <Col md={8} lg={6} className="p-1">
                                <motion.h3 variants={itemVariants} className="hero-subtitle d-block px-4 py-2">
                                    <span className="d-block fw-bold callNumb">Звоните: {formatPhoneNumber(phone)}</span>
                                    <span className="d-block p-1">Профессиональные решения для стройки.</span>
                                    <span className="d-block">Быстрая помощь на дорогах</span>
                                </motion.h3>
                            </Col>
                        </Row>

                        <Row className="pt-2 pb-4">
                            <Col className="d-flex flex-column align-items-center justify-content-center">
                                <div className="col-12 col-md-8 d-flex flex-column flex-sm-row align-items-center justify-content-center">
                                    <Nav.Link
                                        as={motion.a}
                                        variants={btnVariants}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="m-0 p-0 col-9 col-sm-5 col-md-6 col-lg-5 col-xl-4 d-flex text-center justify-content-center"
                                        href={`tel:+${phone}`}
                                    >
                                        <div className="btn-glitch-neon h5 p-3 m-0 px-lg-4">Позвонить мастеру</div>
                                    </Nav.Link>

                                    <Nav.Link
                                        as={motion.a}
                                        variants={btnVariants}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="m-0 p-3 col-9 col-sm-5 col-md-6 col-lg-5 col-xl-4 d-flex text-center justify-content-center"
                                        href={`tel:+${phoneTow}`}
                                    >
                                        <div className="btn-glitch-neon h5 m-0 p-3 px-lg-4">Вызвать эвакуатор</div>
                                    </Nav.Link>
                                </div>

                                <Nav.Link
                                    as={motion.a}
                                    variants={btnVariants}
                                    href="#AddService"
                                    className="pt-2 col-8 col-sm-6 col-md-6 col-lg-5 col-xl-4 d-flex text-center justify-content-center"
                                >
                                    <div className="btn-view-services">
                                        Просмотреть услуги эвакуатора
                                    </div>
                                </Nav.Link>
                            </Col>
                        </Row>
                    </motion.div>
                </Col>
            </Row >
        </Container >
    )
}

