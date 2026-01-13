import { Container, Row, Col } from 'react-bootstrap';
import Gallery from '@/components/gallery/Gallery';

let textFirst = "Алмазное бурение - наш конек. Выполняем работы любой сложности: используем возможности современных технологий для идеального результата на вашем объекте."
let textSecond = "Работаем на совесть, обеспечивая персональный подход к каждому заказу — от частного дома до крупных строительных площадок."

let styleImg = {
    border: "3px solid var(--color-red-700)",
    borderRadius: "30px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    cursor: "pointer",
    zIndex: 1
};

const features = null;

export default function About() {
    return (
        <Container
            fluid
            className="flex flex-column"
            style={{
                color: "white",
                overflow: 'visible',
            }}
        >
            <Container fluid className="pt-4"
                style={{
                    overflow: 'hidden',
                    background: "black",
                }}
            >
                <Row
                    className="p-1 p-md-3 px-md-5 g-4 d-flex flex-column flex-lg-row justify-content-center align-items-center"
                    style={{
                        overflow: 'hidden',
                        fontFamily: "Golos Text",
                    }}
                >
                    <div
                        style={{
                            maxWidth: "1100px",
                        }}
                        className='px-3 px-md-4'
                    >
                        <h2
                            className="display-7 fw-bold"
                        >
                            Почему выбирают нас?
                        </h2>
                        <p className="display-7 my-4"
                            style={{
                                fontWeight: "400",
                            }}
                        >
                            {textFirst}
                        </p>
                        <p
                            className="display-7"
                            style={{
                                color: "grey",
                            }}
                        >
                            {textSecond}
                        </p>
                    </div>
                    <Gallery/>           
                </Row>
            </Container>
        </Container >
    );
}
