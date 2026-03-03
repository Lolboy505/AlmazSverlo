import { Container, Row, Col } from 'react-bootstrap'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { TelegramIcon } from "@/components/additional/jsx/Icons"
import { CONTACT } from '@/constants/contactData'
import ContactItem from './ContactItem';
import YandexMap from './YandexMap.jsx';
// @ts-ignore
import style from './Contact.module.css'

let filter = { filter: "drop-shadow(0px 1px 0.5px rgba(0, 0, 0, 1))" }
let contactData = [
    {
        label: "Телефон",
        value: CONTACT.formatedPhone,
        href: "tel:+" + CONTACT.phone,
        icon: <Phone size={30} style={filter} />,
    },
    {
        label: "Telegram",
        value: CONTACT.telegramName,
        href: CONTACT.telegram,
        icon: <TelegramIcon size={30} style={filter} />
    },
    {
        label: "Email",
        value: CONTACT.email,
        href: "mailto:" + CONTACT.email,
        icon: <Mail size={30} style={filter} />,
    },
    {
        label: "Адрес",
        value: CONTACT.address,
        href: null,
        icon: <MapPin size={30} style={filter} />,
    },
    {
        label: "Режим работы",
        value: `Алмазное сверление: ${CONTACT.schedule} с ${CONTACT.fromTime} до ${CONTACT.toTime}`,
        valueSec: `Эвакуатор: ${CONTACT.schedule} с ${CONTACT.fromTimeTow} до ${CONTACT.toTimeTow}`,
        href: null,
        icon: <Clock size={30} style={filter} />,
    },
]

export default function Contact() {

    return (
        <Container id="contact" className="py-5" >
            <div className="text-center mb-5">
                <h2
                    className="text-white mb-3 text-uppercase"
                    style={{ fontSize: "var(--size-main-title)" }}
                >
                    {CONTACT.title1}
                    <br className="d-lg-none" />
                    {CONTACT.title2}
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
                        <YandexMap />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

