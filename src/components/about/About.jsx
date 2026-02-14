import { Container, Row, Col } from 'react-bootstrap';
import GalleryMe from '@/components/gallery/GalleryMe';
import AboutMe from './AboutMe';

export default function About() {

    return (
        <Container
            fluid
            className="flex flex-column"
            style={{
                color: "white",
            }}
        >
            <Row
                className="mt-2 d-flex align-items-center justify-content-center"
            >
                <Col
                    className="px-0 col-12"
                >
                    <Row
                        className="g-0 gap-3 
                            d-flex flex-column flex-lg-row 
                            justify-content-center align-items-center 
                            align-items-lg-start"
                        style={{
                            fontFamily: "Golos Text",
                            textShadow: '0 0 20px black',
                        }}
                    >
                        <AboutMe />
                        <Col
                            className="col-11 col-lg-5 "
                        >
                            <GalleryMe />
                        </Col>
                    </Row>
                </Col>
            </Row >
        </Container >
    );
}
