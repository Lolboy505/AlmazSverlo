import { Phone, Mail } from 'lucide-react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { TelegramIcon, VkIcon } from './Icons'
import { buttonStyle } from '../additional/buttonStyle'
import { email, phone, telegram, vkontakte, formatPhoneNumber } from '../additional/contactData'
import './Header.module.css'
import logo from '@/images/LogoRed.png';
import ImageWithFallback from "../additional/ImageWithFallback"

let themeColor = "black"

export default function Header() {
    let dataLink = [
        {
            text: "Оформить заказ",
            child: null,
            href: "#order",
        },
        {
            text: "Контакты",
            child: null,
            href: "#contact",
        },
        {
            text: null,
            child: <Mail />,
            href: "mailto:" + email,
        },
        {
            text: null,
            child: <VkIcon />,
            href: vkontakte,
        },
        {
            text: null,
            child: <TelegramIcon />,
            href: telegram,
        },
        {
            text: formatPhoneNumber(),
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
        <header
            className="sticky-top"
            style={{
                zIndex: 10
            }}
        >
            <Navbar
                collapseOnSelect
                expand="md"
                sticky='top'
                className='d-flex flex-column'
                style={{
                    backgroundColor: themeColor,
                    color: "white",
                    textShadow: "0px 1.5px 0px rgba(0, 0, 0, 0.8)"
                }}
            >
                <Container className="px-2">
                    <Navbar.Brand href="#home" className="m-0">
                        <ImageWithFallback
                            src={logo}
                            alt="LogoBrand"
                            style={{ maxWidth: "120px", height: "auto" }}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle
                        onMouseEnter={(event) => setHovered(event)}
                        onMouseLeave={(event) => setUnhovered(event)}
                        aria-controls="responsive-navbar-nav"
                        style={{
                            backgroundColor: "var(--color-red-600)",
                            borderRadius: "8px",
                            transition: "all 0.3s ease",
                            boxShadow: "0 4px 6px rgba(0,0,0,0.2), inset 0 -3px 0 rgba(0,0,0,0.3)",
                            transform: "translateY(0)",
                        }}
                    />
                    <Navbar.Collapse
                        id="responsive-navbar-nav"
                    >
                        <Nav
                            className="w-100 d-flex flex-column 
                            align-items-end justify-content-end 
                            py-0 py-md-0 gap-0
                            "
                        >
                            <div
                                className="top__section 
                                w-100 d-flex flex-column flex-md-row 
                                align-items-center justify-content-between 
                                py-0 py-md-0 gap-0"
                            >
                                <div
                                    className="d-flex flex-column align-items-center my-2 mx-2 my-md-0"
                                    style={{ fontFamily: "Golos Text" }}
                                >
                                    <h2
                                        className="mb-0 text-center fw-bold"
                                    >
                                        АЛМАЗНОЕ СВЕРЛЕНИЕ
                                    </h2>
                                </div>
                                <div
                                    className="d-flex flex-wrap justify-content-center justify-content-lg-end"
                                >
                                    {dataLink.map((Link, iter) => {
                                        // выводит Кнопки у которых должна быть обязательно ссылка 
                                        if (Link.href) {
                                            return (
                                                <Nav.Link
                                                    key={iter}
                                                    href={Link.href}
                                                    onMouseEnter={(event) => setHovered(event)}
                                                    onMouseLeave={(event) => setUnhovered(event)}
                                                    style={buttonStyle}
                                                    className='text-white'
                                                >
                                                    {(Link.child && Link.text) ? (
                                                        <>
                                                            {Link.child}
                                                            {Link.text}
                                                        </>) :
                                                        Link.text ? Link.text : Link.child ? Link.child : null}
                                                </Nav.Link>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <div
                    className="bottom__section mt-1"
                    style={{
                        borderBottom: '1px solid grey',
                        width: '100%',
                    }}
                >
                </div>
            </Navbar>
        </header>
    )
}
