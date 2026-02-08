import { Container, Row, Col } from 'react-bootstrap'
import cursorImg from '@/images/WhiteCursor.png'
import stylePointer from "./PointerMover.module.css"
import MaterialsContent from './MaterialsContent'
import { useInView } from 'react-intersection-observer'

const materials = [
    'ЖЕЛЕЗОБЕТОН',
    'МОНОЛИТ',
    'ДИКАРЬ',
    'КИРПИЧ',
    'БЕТОН',
    'ПЕНОБЕТОН',
    'ГАЗОБЕТОН',
    'ПРИРОДНЫЙ КАМЕНЬ',
    'АСФАЛЬТ',
    'КЕРАМЗИТОБЕТОН',
];

export default function Materials() {
    const { ref, inView } = useInView({
        threshold: 0.4,
        triggerOnce: true,
    });

    return (
        <Container
            fluid
        >
            <Row
                className='my-5 d-flex justify-content-center'
            >
                <Col
                    className='py-4 col-12 col-sm-11'
                    style={{
                        background: "linear-gradient(145deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.18)",
                        borderRadius: "30px",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    }}
                >
                    <Row
                        className="mb-4 d-flex justify-content-center"
                    >
                        <Col
                            className="col-11 col-md-10"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                background: "rgba(255,255,255,0.1)",
                                borderRadius: "20px",
                                border: "2px solid rgba(64, 64, 64)",
                                boxShadow: "0 0 20px rgba(0,0,0,0.5), inset 0 0 30px rgba(0,0,0,0.5)",
                                padding: "18px 25px",
                            }}
                        >
                            <h2 className="text-center h1">
                                Работаем с материалами
                            </h2>
                            <div
                                ref={ref}
                                className={` ${stylePointer.pointer} ${inView ? stylePointer.animate : ''}`}
                                style={{
                                    backgroundImage: `url(${cursorImg})`,
                                }}
                                alt="cursorIMG"
                            >
                            </div>
                        </Col>
                    </Row>
                    <Row
                        className='d-flex justify-content-center'
                    >
                        <Col
                            className="col-12 d-flex row justify-content-center"
                        >
                            <Row className="p-0 col-12 d-flex justify-content-center">
                                {materials.map((material, index) => (
                                    <MaterialsContent
                                        key={index}
                                        {...paramForContent}
                                        material={material}
                                    />
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

const paramForContent = {
    styleImg: {
        background: "white",
        width: "35px",
        height: "35px",
        borderRadius: "100%",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: "0",
    },
    styleBorder: {
        userSelect: 'none',
        WebkitUserSelect: 'none',
        msUserSelect: 'none',
        WebkitTapHighlightColor: 'transparent',

        willChange: "transform",
        background: "rgba(255, 255, 255, 0.15)",
        border: "1px solid rgba(255,255,255,0.18)",
        borderRadius: "30px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        transition: "transform 0.5s cubic-bezier(0.175, 0.885, 0.22, 1.875)",
        cursor: "pointer",
        minWidth: "250px",
        height: "100%",
        width: "100%",
    },
    styleText: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        paddingLeft: '5px',
        textOverflow: 'ellipsis',
        fontSize: "clamp(1rem, 4vw, 1.3rem)",
        textTransform: 'uppercase',
    },
    classNameFullContent: "p-1 mb-1 col-12 col-sm-6 col-lg-5 d-flex justify-content-center justify-content-md-center",
    classNameContent: "py-2 px-3 gap-2 d-flex align-items-center",
    imgColor: "var(--color-red-600)",
    imgSize: 25,
    classNameStyleText: "text-white fw-bold mb-0",
}
