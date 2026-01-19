import { Container, Row, } from 'react-bootstrap';
import cursorImg from '@/images/WhiteCursor.png'
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
                background: "rgba(255, 2, 2, 0.15)"
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
                        width: "84%",
                        background: "var(--color-red-700)",
                        borderRadius: "25px",
                        boxShadow: "0 0 15px var(--color-red-700)",
                        textShadow: "0px 0px 3px rgba(0,0,0,0.8)",
                    }}
                >
                    <div className="d-flex row mb-2">
                        <div
                            className="mb-4"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                maxWidth: "600px",
                                margin: 'auto',
                                alignItems: 'center',
                                background: "rgba(255,255,255,0.1)",
                                borderRadius: "20px", 
                                border: "2px solid rgba(145, 0, 0, 1)",
                                boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                                padding: "15px 25px",
                            }}
                        >
                            <h2 className="text-center h1">
                                Работаем с материалами
                            </h2>
                            <h2>
                                <img src={cursorImg}
                                    style={{
                                        width: "30px",
                                        height: "auto",
                                        transform: " rotate(-180deg)",
                                    }}
                                    alt=""
                                />
                            </h2>
                        </div>
                        <Container>
                            <Row className='g-3 justify-content-center' >
                                {materials.map((material, index) => (
                                    <MaterialsContent {...paramForContent} key={index} index={index} material={material} />
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
        transition: "transform 0.3s ease",
        background: "rgba(255,255,255,0.1)",
        borderRadius: "20px", 
        border: "2px solid rgba(145, 0, 0, 1)",
        minWidth: "250px",
        width: "100%",
        maxWidth: "500px",
        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        alignItems: "center",
        cursor: "pointer",
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
