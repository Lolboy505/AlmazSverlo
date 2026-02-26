import { Container, Row, Col } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer'
import { MATERIALS } from '@/constants/contactData.js'
import styleTitle from "./Materials.module.css"
import MaterialsContent from './MaterialsContent'


export default function Materials() {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <Container className="my-5">
            <Row className='justify-content-center overflow-hidden'>
                <Col className={`col-12 col-lg-12 ${styleTitle.mainWrapper}`}>
                    <Row className="mb-4 justify-content-center">
                        <Col className={`col-10 ${styleTitle.headerCard}`}>
                            <div className={`redLineShadow`} />
                            <h2 className={`${styleTitle.title} mt-1`}>
                                {MATERIALS.title}
                            </h2>
                            <div className={styleTitle.pointer_container}>
                                <div ref={ref} className={`${styleTitle.pointer} ${inView ? styleTitle.animate : ''}`} />
                                <div className={`${styleTitle.shadow} ${inView ? styleTitle.animateShadow : ''}`} />
                            </div>
                            <div className={`redLineShadow mt-1`} />
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <ul className="m-0 p-0 col-10 d-flex flex-wrap justify-content-center g-md-4">
                            {MATERIALS.MaterialsList.map((material, index) => (
                                <MaterialsContent
                                    key={index}
                                    material={material}
                                />
                            ))}
                        </ul>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}