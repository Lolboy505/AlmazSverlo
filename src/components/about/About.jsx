import { Container, Row, Col } from 'react-bootstrap';
import ImageWithFallback from '../additional/ImageWithFallback';

let textFirst = "Алмазное бурение - наш конек. Выполняем работы любой сложности: используем возможности современных технологий для идеального результата на вашем объекте."
let textSecond = "Для нас важно чистое и точное сверление отверстий в бетоне, кирпиче и камне. Работаем на совесть, обеспечивая персональный подход к каждому заказу — от частного дома до крупных строительных площадок."

let firstImg = "https://avatars.mds.yandex.net/i?id=85392f245c38e942e6ecd8d4074cf89e44a0c6cb-4935694-images-thumbs&n=13"
let secondImg = "https://images.deal.by/78439577_w640_h640_sverlenie-otverstij-pod.jpg"

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
                            maxWidth: "1000px",
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
                    <div className="d-flex flex-column flex-md-row gap-5 justify-content-center align-items-center px-3 pb-5">
                        <ImageWithFallback
                            className="col-12 col-md-6 col-lg-5"
                            src={firstImg}
                            alt="Процесс работы"
                            style={{
                                ...styleImg,
                                transform: "rotate(-3deg)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "rotate(0deg) scale(1.05)";
                                e.currentTarget.style.zIndex = "10";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "rotate(-3deg) scale(1)";
                                e.currentTarget.style.zIndex = "1";
                            }}
                        />

                        <ImageWithFallback
                            className="col-12 col-md-6 col-lg-5"
                            src={secondImg}
                            alt="Оборудование"
                            style={{
                                ...styleImg,
                                transform: "rotate(3deg) translateY(20px)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "rotate(0deg) scale(1.05)";
                                e.currentTarget.style.zIndex = "10";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "rotate(3deg) translateY(20px) scale(1)";
                                e.currentTarget.style.zIndex = "1";
                            }}
                        />
                    </div>
                </Row>
            </Container>
        </Container >
    );
}
