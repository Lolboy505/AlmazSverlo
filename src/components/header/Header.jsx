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
        <header className="sticky-top">
            <Navbar
                expanded={expanded}
                onToggle={() => setExpanded((exp) => !exp)}
                expand="xl"
                variant="dark"
                className={`${style.NavbarStyle} m-0 p-0 px-3`}
            >
                <Container fluid className="px-2 px-lg-5 py-1 d-flex justify-content-between align-items-center">
                    <Navbar.Brand href="#home" className="m-0">
                        <ImageWithFallback
                            src={logo}
                            alt="LogoBrand"
                            className={`${style.Logo}`}
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle
                        aria-controls="responsive-navbar-nav"
                        className={`${style.custom_toggler} d-flex d-xl-none align-items-center justify-content-center`}
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
                                    className={`${style.NameOrg} m-0 p-2 pt-0`}
                                >
                                    {nameOrg}
                                </span>
                                <div
                                    className="gap-2 p-1 d-flex flex-wrap justify-content-center"
                                >
                                    {dataLink.map((link, iter) => (
                                        link.href && (
                                            <Nav.Link
                                                key={iter}
                                                href={link.href}
                                                onClick={() => setExpanded(false)}
                                                className="p-2 gap-1
                                                btn-glitch-neon 
                                                text-white d-flex 
                                                align-items-center"
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
                className={`${style.BottomLine}`}
            >
            </div>
        </header >
    )
}
