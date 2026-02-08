import { useState } from 'react'
import { Phone, Mail } from 'lucide-react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { TelegramIcon, VkIcon } from './Icons'
import { buttonStyle } from '../additional/buttonStyle'
import { nameOrg } from '../additional/contactData'
import { email, phone, telegram, vkontakte, formatPhoneNumber } from '../additional/contactData'
import style from './Header.module.css'
import logo from '@/images/LogoRed.png';
import ImageWithFallback from "../additional/ImageWithFallback"

let themeColor = "black"

export default function Header() {
    const [expanded, setExpanded] = useState(false);
    let dataLink = [
        {
            text: "Контакты",
            child: null,
            href: "#contact",
        },
        {
            text: null,
            child: <Mail style={{ filter: "drop-shadow(0px 1px 0.5px rgba(0, 0, 0, 1))" }} />,
            href: "mailto:" + email,
        },
        // {
        //     text: null,
        //     child: <VkIcon />,
        //     href: vkontakte,
        // },
        {
            text: null,
            child: <TelegramIcon />,
            href: telegram,
        },
        {
            text: formatPhoneNumber(phone),
            child: <Phone />,
            href: "tel:+" + phone,
        },
    ]

    function setHovered(e) {
        if (e) {
            e.currentTarget.style.boxShadow = "0 8px 15px rgba(0,0,0,0.5)"
            e.currentTarget.style.transform = "translateY(-3px)"
        }
    }

    function setUnhovered(e) {
        if (e) {
            e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.2), inset 0 -3px 0 rgba(0,0,0,0.3)"
            e.currentTarget.style.transform = "translateY(0)"
        }
    }

    return (
        <header className="sticky-top" style={{
            zIndex: 1000,
            backgroundColor: themeColor,
        }}>
            <Navbar
                expanded={expanded}
                onToggle={() => setExpanded(!expanded)}
                expand="md"
                variant="dark"
                className="m-0 p-0 px-3 flex-column "
                style={{
                    backgroundColor: themeColor,
                    textShadow: "0px 1.5px 0px rgba(0, 0, 0, 0.8)",
                    transition: 'all 0.3s ease'
                }}
            >
                <Container fluid className="px-2 px-lg-5 py-2 d-flex justify-content-between align-items-center">
                    <Navbar.Brand href="#home" className="m-0">
                        <ImageWithFallback
                            src={logo}
                            alt="LogoBrand"
                            style={{ maxWidth: "130px", height: "auto" }}
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle
                        aria-controls="responsive-navbar-nav"
                        className={`border-0 shadow-none ${style.custom_toggler}`}
                        style={{
                            backgroundColor: "var(--color-red-600)",
                            padding: "8px 10px",
                            borderRadius: "8px"
                        }}
                    >
                        <div className={`${style.burger_icon}`}>
                            <span className={`${style.burger_line}`}></span>
                            <span className={`${style.burger_line}`}></span>
                            <span className={`${style.burger_line}`}></span>
                        </div>
                    </Navbar.Toggle>

                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav className="align-items-center w-100">
                            <div className="d-flex flex-column flex-md-row w-100 align-items-center justify-content-between">
                                <h2
                                    className="m-0 ms-md-3 p-2 text-center fw-bold text-uppercase"
                                    style={{
                                        fontFamily: "Golos Text",
                                        fontSize: "clamp(1.5rem, 4vw, 1.8rem)"
                                    }}
                                >
                                    {nameOrg}
                                </h2>
                                <div
                                    className="gap-1 p-1 d-flex flex-wrap justify-content-center"
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
                                                onMouseEnter={setHovered}
                                                onMouseLeave={setUnhovered}
                                                style={buttonStyle}
                                                className="text-white d-flex align-items-center gap-2"
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
                    borderBottom: '1px solid var(--color-red-700)',
                    width: '100%',
                    height: '2px',
                }}
            >
            </div>
        </header >
    )
}
