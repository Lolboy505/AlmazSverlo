import { Container, Row, Col, Nav } from "react-bootstrap"
import { formatPhoneNumber, phone, phoneTow } from "@/components/additional/js/contactData.js";
import { useAppState } from "@/components/additional/jsx/StateContext.jsx"
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "tween", ease: 'easeOut', duration: 0.4 }
    }
};

export default function Hero() {
    const { isReady } = useAppState();
    const isBot = typeof navigator !== 'undefined' && navigator.userAgent.includes("HeadlessChrome");
    const shouldShow = isReady || isBot;

    return (
        <Container
            id="home"
            fluid
            className="text-center p-0 hero-main-container"
        >
            <div className="hero-overlay">
                {shouldShow && (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="content-wrapper"
                    >
                        <Row className="pt-5 text-center m-0">
                            <Col className="p-0 m-0">
                                <h1 className="p-0 m-0 d-flex flex-column justify-content-center align-items-center fw-bold text-uppercase hero-h1-main">
                                    <motion.span variants={itemVariants} className="d-block mainTxt">Алмазное сверление</motion.span>
                                    <motion.span variants={itemVariants} className="col-4 d-block hero-amp">&</motion.span>
                                    <motion.span variants={itemVariants} className="d-block mainTxt">Услуги эвакуатора</motion.span>
                                    <motion.span variants={itemVariants} className="d-block fw-normal mt-2 hero-sub-city">
                                        в Луганске и области
                                    </motion.span>
                                </h1>
                            </Col>
                        </Row>

                        <Row className="d-flex justify-content-center mt-1 m-0">
                            <Col md={8} lg={6} className="p-1">
                                <motion.div variants={itemVariants} className="hero-subtitle d-block px-4 py-2">
                                    <span className="d-block fw-bold callNumb">Звоните: {formatPhoneNumber(phone)}</span>
                                    <span className="d-block p-1">Профессиональные решения для стройки</span>
                                    <span className="d-block">Быстрая помощь на дорогах</span>
                                </motion.div>
                            </Col>
                        </Row>

                        <Row className="pt-2 pb-4 m-0">
                            <Col className="d-flex flex-column align-items-center">
                                <div className="col-12 col-md-8 d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3">
                                    <Nav.Link
                                        as={motion.a}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="m-0 p-0 col-8 col-sm-5 col-md-6 col-xl-5 col-xxl-4"
                                        href={`tel:+${phone}`}
                                    >
                                        <div className="btn-glitch-neon h5 p-3 m-0">Позвонить мастеру</div>
                                    </Nav.Link>

                                    <Nav.Link
                                        as={motion.a}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="m-0 p-0 col-8 col-sm-5 col-md-6 col-xl-5 col-xxl-4"
                                        href={`tel:+${phoneTow}`}
                                    >
                                        <div className="btn-glitch-neon h5 p-3 m-0">Вызвать эвакуатор</div>
                                    </Nav.Link>
                                </div>
                                <Nav.Link
                                    as={motion.a}
                                    variants={itemVariants}
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
                )}
            </div>
        </Container>
    )
}