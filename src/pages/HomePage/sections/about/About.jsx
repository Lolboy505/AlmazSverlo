import { Container, Row, Col } from 'react-bootstrap';
import GalleryMe from '@/pages/HomePage/sections/gallery/GalleryMe';
import AboutMe from './AboutMe';
import styles from './About.module.css';

export default function About() {
    return (
        <Container
            className={`overflow-hidden d-flex flex-column text-white ${styles.aboutContainer}`}
        >
            <Row className="mt-2 justify-content-center">
                <Col xs={12} sm={12} className="p-0">
                    <Row
                        className={`g-2 gap-lg-2
                                   d-flex flex-column align-items-center 
                                   align-items-lg-start 
                                   flex-lg-row 
                                   justify-content-lg-center
                                   ${styles.mainRow}`}
                    >
                        <AboutMe sm={10} lg={5} xl={5} />
                        <GalleryMe sm={10} lg={5} xl={6} />
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}