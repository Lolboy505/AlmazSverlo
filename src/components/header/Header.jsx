import { useState } from 'react'
import { Phone, Mail } from 'lucide-react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { TelegramIcon, VkIcon } from '../additional/jsx/Icons'
import { nameOrg } from '../../constants/contactData'
import { email, phone, telegram, vkontakte, formatPhoneNumber } from '../../constants/contactData'
import style from './Header.module.css'
import ImageWithFallback from "../additional/jsx/ImageWithFallback"

const logo = "/mLogo.jpg";
let icons = {
    height: 'auto',
    width: 'clamp(28px, 5vw , 35px)',
}
let themeColor = "black"

let dataLink = [
    {
        text: "Контакты",
        child: null,
        href: "#contact",
    },
    {
        text: null,
        child: <Mail style={{ ...icons, filter: "drop-shadow(0px 1px 0.5px rgba(0, 0, 0, 1))" }} />,
        href: "mailto:" + email,
    },
    // {
    //     text: null,
    //     child: <VkIcon />,
    //     href: vkontakte,
    // },
    {
        text: null,
        child: <TelegramIcon style={{ ...icons }} />,
        href: telegram,
    },
    {
        text: formatPhoneNumber(phone),
        child: <Phone />,
        href: "tel:+" + phone,
    },
]

export default function Header() {
    const [expanded, setExpanded] = useState(false);

    return (
        <header className="sticky-top" style={{
            zIndex: 5,
            backgroundImage: themeColor,
        }}>
            <Navbar
                expanded={expanded}
                onToggle={() => setExpanded((exp) => !exp)}
                expand="xl"
                variant="dark"
                className="m-0 p-0 px-3"
                style={{
                    backgroundColor: themeColor,
                    textShadow: "0px 1.5px 0px rgba(0, 0, 0, 0.8)",
                    transition: 'all 0.3s ease'
                }}
            >
                <Container fluid className="px-2 px-lg-5 py-1 d-flex justify-content-between align-items-center">
                    <Navbar.Brand href="#home" className="m-0">
                        <ImageWithFallback
                            src={logo}
                            alt="LogoBrand"
                            style={{ maxWidth: "clamp(82px,10vw,100px)", height: "auto" }}
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle
                        aria-controls="responsive-navbar-nav"
                        className={`d-flex d-xl-none align-items-center justify-content-center ${style.custom_toggler}`}
                    >
                        <div className={style.burger_icon}>
                            <span className={style.burger_line}></span>
                            <span className={style.burger_line}></span>
                            <span className={style.burger_line}></span>
                        </div>
                    </Navbar.Toggle>

                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav className="align-items-center w-100">
                            <div className="pb-1 d-flex flex-column flex-lg-row w-100 align-items-center justify-content-between">
                                <span
                                    className="m-0 p-2 pt-0"
                                    style={{
                                        fontFamily: "'Golos Text', sans-serif",
                                        fontSize: "clamp(1.4rem, 3.5vw, 1.7rem)",
                                        fontWeight: 900,
                                        textTransform: "uppercase",
                                        letterSpacing: ".4rem",
                                        lineHeight: "0.9",
                                    }}
                                >
                                    {nameOrg}
                                </span>
                                <div
                                    className="gap-2 p-1 d-flex flex-wrap justify-content-center"
                                    style={{
                                        minWidth: "2px",
                                    }}
                                >
                                    {dataLink.map((link, iter) => (
                                        link.href && (
                                            <Nav.Link
                                                key={iter}
                                                href={link.href}
                                                onClick={() => setExpanded(false)}
                                                className="
                                                p-2
                                                btn-glitch-neon 
                                                text-white d-flex 
                                                align-items-center gap-1"
                                            >
                                                {link.child}
                                                {link.text}
                                            </Nav.Link>
                                        )
                                    ))}
                                </div>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
            <div
                style={{
                    backgroundColor: 'black',
                    borderBottom: '1px solid var(--color-red-900)',
                    width: '100%',
                    height: '2px',
                }}
            >
            </div>
        </header >
    )
}
