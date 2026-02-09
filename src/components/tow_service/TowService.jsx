import { Clock, MapPin, Shield, Phone } from 'lucide-react';
import { Container, Row, Col } from "react-bootstrap";
import ImageWithFallback from "../additional/ImageWithFallback";
import { addressTow, fromTimeTow, phone, scheduleTow, toTimeTow, phoneTow, formatPhoneNumber } from '../additional/contactData';
import busImg from "@/images/BusEd.webp";
import styles from './TowStyle.module.css';
import { uslugi } from '../additional/sizes';

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
                    <h2
                        id="AddService"
                        className="mt-5 mb-lg-4 text-center text-uppercase"
                        style={{
                            letterSpacing: '1.5px',
                            fontSize: uslugi,
                        }}
                    >

                        Услуги эвакуатора
                    </h2>
                </Col>
            </Row>

            <Row className="py-4 justify-content-center">
                <Col
                    className={`${styles.mainCardContainer} col-12 col-sm-10`}
                >

                    <Row className="">
                        <Col className="col-12 col-lg-7 p-0">
                            <div className={styles.imageWrapper}>
                                <ImageWithFallback
                                    src={busImg}
                                    alt="Услуги эвакуатора"
                                    className={styles.imgCover}
                                />
                            </div>
                        </Col>

                        <Col className="p-4 p-md-5 col-12 col-lg-5 d-flex flex-column justify-content-center">
                            <div className="gap-3 mb-2">
                                <h3 className="text-white fw-bold mb-0 h4">
                                    <span className="d-block">
                                        Профессиональная помощь на дороге.
                                    </span>
                                    <span className="d-block">
                                        Быстро, надежно, качественно.
                                    </span>
                                </h3>
                            </div>

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
                                вызвать эвакуатор
                            </a>
                        </Col>
                    </Row >
                </Col >
            </Row >
        </Container >
    );
}