import { Container, Row, } from 'react-bootstrap';
import cursorImg from '@/images/WhiteCursor.png'
import stylePointer from "./PointerMover.module.css"
import MaterialsContent from './MaterialsContent';

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

    return (
        <Container
            style={{
                color: 'white',
                // background: "rgba(255, 2, 2, 0.12)"
            }}
            fluid
        >
            <Row>
                <div style={{
                    background: "linear-gradient(0deg , rgba(0,0,0,0.001) , black)",
                    height: "60px"
                }}>

                </div>
            </Row>
            <Row
                className='d-flex pb-4 justify-content-center'
            >
                <div
                    className='p-4'
                    style={{
                        // background: "var(--color-red-800)",             
                        background: "linear-gradient(145deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.18)",
                        borderRadius: "30px",
                        height: "100%",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",

                        width: "84%",
                        // background: "black",
                        // borderRadius: "25px",
                        // border: '1px solid rgb(64, 64, 64)',
                        // boxShadow: "0 0 20px var(--color-red-950)",
                        // textShadow: "0px 0px 3px rgba(0,0,0,0.8)",
                    }}
                >
                    <div className="d-flex row mb-2">
                        <div
                            className="mb-4"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                maxWidth: "600px",
                                minHeight: "150px",
                                margin: 'auto',
                                alignItems: 'center',
                                background: "rgba(255,255,255,0.1)",
                                borderRadius: "20px",
                                border: "2px solid rgba(64, 64, 64)",
                                boxShadow: "0 0 20px rgba(0,0,0,0.5), inset 0 0 30px rgba(0,0,0,0.5)",
                                padding: "15px 25px",
                            }}
                        >
                            <h2 className="text-center h1">
                                Работаем с материалами
                            </h2>
                            <div
                                className={stylePointer.pointer}
                                style={{
                                    backgroundImage: `url(${cursorImg})`,
                                }}
                                alt=""
                            >
                            </div>
                        </div>
                        <Container>
                            <Row className='g-3 justify-content-center' >
                                {materials.map((material, index) => (
                                    <MaterialsContent
                                        {...paramForContent}
                                        key={index}
                                        index={index}
                                        material={material}
                                    />
                                ))}
                            </Row>
                        </Container>
                    </div>
                </div>
            </Row>
            <Row>
                <div
                    style={{
                        width: "100%",
                        height: "60px",
                        background: "linear-gradient(180deg , rgba(0,0,0,0.001) , black)",
                    }}
                >
                </div>
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
        background: "linear-gradient(145deg, rgba(255, 255, 255, 0.16) 0%, rgba(255,255,255,0.05) 100%)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.18)",
        borderRadius: "30px",
        height: "100%",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        cursor: "pointer",

        // transition: "transform 0.3s ease",
        // background: "rgba(255,255,255,0.1)",
        // borderRadius: "20px",
        // border: "2px solid rgba(145, 0, 0, 1)",
        minWidth: "250px",
        width: "80%",
        // maxWidth: "500px",
        // boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        // alignItems: "center",
        // cursor: "pointer",
    },
    styleText: {
        marginLeft: '5px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        fontSize: "clamp(1rem, 1.6vw, 1.4rem)",
    },
    classNameFullContent: "col-12 col-md-6 d-flex justify-content-center justify-content-md-center",
    classNameContent: "gap-2 d-flex align-items-center p-2 px-3",
    imgColor: "var(--color-red-700)",
    imgSize: 25,
    classNameStyleText: "text-white h6 fw-bold mb-0",
}
