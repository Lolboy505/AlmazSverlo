import React from 'react';
import { Truck, Clock, MapPin, Shield, Phone } from 'lucide-react';
import { Container, Row, Col } from "react-bootstrap";
import ImageWithFallback from "../additional/ImageWithFallback";
import { addressTow, fromTimeTow, phone, scheduleTow, toTimeTow, phoneTow, formatPhoneNumber } from '../additional/contactData';
import busImg from "@/images/BusEd.webp";
import styles from './TowStyle.module.css';

const SERVICE_DATA = [
    {
        icon: Clock,
        title: "ВРЕМЯ РАБОТЫ",
        description: `С ${fromTimeTow} до ${toTimeTow} часов`,
        subDescription: `График работы: ${scheduleTow}`,
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
    {
        icon: Phone,
        title: "КОНТАКТЫ",
        description: `Номер телефона:`,
        subDescription: formatPhoneNumber(phoneTow)
    },
];

const InfoCard = ({ icon: Icon, title, description, subDescription }) => (
    <div className={styles.infoCardWrapper}>
        <div className={styles.infoCardIcon}>
            <Icon size={24} color="white" />
        </div>
        <div className={styles.infoCardContent}>
            <h4 className={styles.infoCardTitle}>{title}</h4>
            <p className={styles.infoCardText}>
                {description}
                {subDescription && <><br />{subDescription}</>}
            </p>
        </div>
    </div>
);

export default function TowService() {
    return (
        <Container fluid className={styles.towServiceSection}>
            <Row className="pt-5 mx-0">
                <Col>
                    <h2 id="AddService" className="h2 text-center text-white  fw-bold">
                        Дополнительные услуги
                    </h2>
                </Col>
            </Row>

            <Row className="justify-content-center py-5 px-2 px-md-4 mx-0">
                <Col xs={12} lg={10} xl={9} className={`${styles.mainCardContainer} p-0`}>
                    <Row className="g-0 w-100">
                        <Col xs={12} lg={6} className="order-1 order-lg-2">
                            <div className={styles.imageWrapper}>
                                <ImageWithFallback
                                    src={busImg}
                                    alt="Услуги эвакуатора"
                                    className={styles.imgCover}
                                />
                            </div>
                        </Col>

                        <Col xs={12} lg={6} className="order-2 order-lg-1 p-4 p-md-5 d-flex flex-column justify-content-center">
                            <div className="d-flex align-items-center gap-3 mb-4">
                                <div className={styles.headerIconBox}>
                                    <Truck size={32} color="white" />
                                </div>
                                <h2 className="text-white fw-bold mb-0 h3">Услуги эвакуатора</h2>
                            </div>

                            <p className={styles.heroText}>
                                Профессиональная помощь на дороге.<br />
                                Быстро, надежно.
                            </p>

                            <div className={`${styles.infoGrid} my-4`}>
                                {SERVICE_DATA.map((item, idx) => (
                                    <InfoCard key={idx} {...item} />
                                ))}
                            </div>

                            <a
                                href={`tel:+${phone}`}
                                className={styles.btnCallAction}
                                style={{
                                    margin: '0 auto',
                                }}>
                                ВЫЗВАТЬ ЭВАКУАТОР
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}