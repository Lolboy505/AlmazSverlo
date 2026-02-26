import { memo } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ImageWithFallback from "@components/additional/jsx/ImageWithFallback";
import { TOW_SERVICE, phone } from '@constants/contactData.js';
import busImg from "@/images/BusEd.webp";
import styles from './TowStyle.module.css';


const InfoCard = memo(({ icon: Icon, title, description, subDescription }) => (
    <div className={styles.infoCardWrapper}>
        <div className={styles.infoCardIcon}>
            <Icon size={32} color="white" />
        </div>
        <div className={styles.infoCardContent}>
            <h4 className={styles.infoCardTitle}>{title}</h4>
            <p className={styles.infoCardText}>
                {description}
                {subDescription && <><br />{subDescription}</>}
            </p>
        </div>
    </div>
));

export default function TowService() {
    return (
        <Container className={`overflow-hidden ${styles.towServiceSection}`}>
            <Row className="mx-0">
                <Col>
                    <h2 id="AddService" className={styles.mainTitle}>
                        {TOW_SERVICE.title1} <br className="d-lg-none" />
                        <span>{TOW_SERVICE.title2}</span>
                    </h2>
                </Col>
            </Row>

            <Row className="justify-content-center pb-5">
                <Col xs={12} sm={11} xxl={11} className={styles.mainCardContainer}>
                    <Row>
                        <Col lg={7} className="p-0">
                            <div className={styles.imageWrapper}>
                                <ImageWithFallback
                                    src={busImg}
                                    alt="Эвакуатор для микроавтобусов Луганск"
                                    className={styles.imgCover}
                                />
                            </div>
                        </Col>

                        <Col lg={5} className={`${styles.mainCardAbout} p-4 px-md-5 py-md-4 d-flex flex-column align-items-center justify-content-center`}>
                            <div className={`redLineShadow mb-3`} />
                            <div className="mb-3 d-flex flex-column">
                                <h3
                                    className={`${styles.titleTow1} col-12`}
                                >
                                    {TOW_SERVICE.des1}
                                </h3>
                                <h3
                                    className={`${styles.titleTow2} col-12`}
                                >
                                    {TOW_SERVICE.des2}
                                </h3>
                            </div>

                            <div className={styles.infoGrid}>
                                {TOW_SERVICE.ServiceData.map((item, idx) => (
                                    <InfoCard key={idx} {...item} />
                                ))}
                            </div>

                            <a href={`tel:+${phone}`} className={`text-nowrap btn-glitch-neon px-4 py-2 mt-3`}>
                                {TOW_SERVICE.btn1}
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}