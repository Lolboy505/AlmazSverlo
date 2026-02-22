import { Container, Row, Col } from 'react-bootstrap';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { TelegramIcon } from '../../../../components/additional/jsx/Icons';
import { phone, email, formatPhoneNumber, fromTime, toTime, schedule, address, toTimeTow, fromTimeTow } from '@/constants/contactData'
import ContactItem from './ContactItem';
import style from './Contact.module.css'

let filter = { filter: "drop-shadow(0px 1px 0.5px rgba(0, 0, 0, 1))" }
let mapYa = "https://yandex.ru/map-widget/v1/?um=constructor%3A1ded36965ecc1573ead6054582cbf6ebe1a3b47973a7e664fbcec8ef85f755f9&amp;source=constructor"

let contactData = [
    {
        label: "Телефон",
        value: formatPhoneNumber(phone),
        href: "tel:+" + phone,
        icon: <Phone size={30} style={filter} />,
    },
    {
        label: "Telegram",
        value: "@AlmazPomosh",
        href: "https://t.me/AlmazPomosh",
        icon: <TelegramIcon size={30} style={filter} />
    },
    {
        label: "Email",
        value: email,
        href: "mailto:" + email,
        icon: <Mail size={30} style={filter} />,
    },
    {
        label: "Адрес",
        value: address,
        href: null,
        icon: <MapPin size={30} style={filter} />,
    },
    {
        label: "Режим работы",
        value: `Алмазное сверление: ${schedule} с ${fromTime} до ${toTime}`,
        valueSec: `Эвакуатор: ${schedule} с ${fromTimeTow} до ${toTimeTow}`,
        href: null,
        icon: <Clock size={30} style={filter} />,
    },
]

export default function Contact() {

    // maybe logic form here
    return (
        <Container id="contact" className="py-5" >
            <div className="text-center mb-5">
                <h2
                    className="text-white mb-3 text-uppercase"
                    style={{ fontSize: "var(--size-main-title)" }}
                >
                    Заказать услуги частного мастера
                    <br />
                    Контакты
                </h2>
            </div>

            <Row className="g-2 d-flex justify-content-center">
                <Col xs={12}>
                    <div className="redLineShadow" />
                </Col>
                <Col
                    className={`col-12 col-lg-4`}
                >
                    <div className="d-flex flex-column">
                        <div
                            className="p-4 rounded-4"
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                            <div className="d-flex flex-column gap-4">
                                {
                                    contactData.map((item, index) => (
                                        <ContactItem
                                            key={index}
                                            {...item}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </Col>
                <Col
                    className={`col-12 col-lg-8`}
                >
                    <div
                        className="rounded-4 overflow-hidden h-100"
                        style={{
                            minHeight: '300px',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}
                    >
                        <iframe
                            loading="lazy"
                            src={mapYa}
                            width="100%"
                            height="100%"
                            allowFullScreen={true}
                            className={`${style.yaMaps}`}
                        >
                        </iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

