import { Container, Row, Col } from 'react-bootstrap';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { TelegramIcon } from '../additional/Icons';
import { phone, email, formatPhoneNumber, fromTime, toTime, schedule, address } from '@/components/additional/contactData'
import ContactItem from './ContactItem';

let mapYa = "https://yandex.ru/map-widget/v1/?um=constructor%3A1ded36965ecc1573ead6054582cbf6ebe1a3b47973a7e664fbcec8ef85f755f9&amp;source=constructor"

export default function Contact() {
    let filter = { filter: "drop-shadow(0px 1px 0.5px rgba(0, 0, 0, 1))" }

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
            value: `Ежедневно с ${fromTime} до ${toTime}, График: ${schedule}`,
            href: null,
            icon: <Clock size={30} style={filter} />,
        },
    ]

    // maybe logic form here

    return (
        <Container id="contact" className="py-5" style={{ background: 'black' }}>
            <div className="text-center mb-5">
                <h2
                    className="text-white fw-bold mb-3"
                    style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
                    Заказать услуги частного мастера — Контакты
                </h2>
            </div>

            <Row className="g-2 d-flex justify-content-center">
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
                    className={`col-12 col-lg-7`}
                >
                    <div
                        className="rounded-4 overflow-hidden h-100"
                        style={{
                            minHeight: '300px',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}
                    >
                        <iframe
                            src={mapYa}
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allowFullScreen={true}
                            style={{
                                display: 'block',
                                filter: 'invert(100%) hue-rotate(180deg) brightness(80%) contrast(85%)'
                            }}
                        >
                        </iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

