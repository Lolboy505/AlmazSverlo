import { Container, Row, Col, Nav } from "react-bootstrap"
import { phone, phoneTow, HEADER } from "@/constants/contactData.js"
import { useAppState } from "@/context/AppState/AppStateContext.jsx"
import { usePageReady } from "@/hooks/usePageReady"
import { motion } from "framer-motion"
import style from "./HeroStyle.module.css"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "tween", ease: 'easeOut', duration: 0.4 }
    }
}

export default function Hero() {
    const shouldShow = usePageReady()

    return (
        <Container
            id="home"
            fluid
            className={`text-center p-0 ${style.HeroMainContainer}`}
        >
            <div className={style.HeroOverlay}>
                {shouldShow && (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <Row className="pt-5 text-center m-0">
                            <Col className="p-0 m-0">
                                <h1 className={`${style.HeroH1Main} p-0 m-0 d-flex flex-column justify-content-center align-items-center fw-bold text-uppercase`}>
                                    <motion.span variants={itemVariants} className={`d-block ${style.MainTxt}`}>
                                        {HEADER.f1}
                                    </motion.span>
                                    <motion.span variants={itemVariants} className={`col-4 d-block ${style.HeroAmp}`}>
                                        {HEADER.f2}
                                    </motion.span>
                                    <motion.span variants={itemVariants} className={`d-block ${style.MainTxt}`}>
                                        {HEADER.f3}
                                    </motion.span>
                                    <motion.span variants={itemVariants} className={`d-block fw-normal mt-2 ${style.HeroSubCity}`}>
                                        {HEADER.f4}
                                    </motion.span>
                                </h1>
                            </Col>
                        </Row>

                        <Row className="d-flex justify-content-center mt-1 m-0">
                            <Col md={8} lg={6} className="p-1">
                                <motion.div variants={itemVariants} className={`${style.HeroSubTitle} d-block px-4 py-2`}>
                                    <span className={`d-block fw-bold ${style.CallNumb}`}>{HEADER.call}</span>
                                    <span className="d-block p-1">{HEADER.d1}</span>
                                    <span className="d-block">{HEADER.d2}</span>
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
                                    <div className={`${style.BtnViewServices}`}>
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