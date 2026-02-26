import { Container, Row, Col } from 'react-bootstrap';
import { SERVICES } from '@/constants/contactData';
import Style from "./Services.module.css"


function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <Col className="px-3 px-md-3 col-11 col-sm-10 col-md-6 col-lg-6 col-xl-5 col-xxl-4">
      <div className={`overflow-hidden ${Style.cardContainer}`}>
        <div className={`redLineShadow mb-3`} />
        <div className={Style.iconWrapper}>
          <Icon size={32} color="white" />
        </div>
        <h3 className={Style.cardTitle}>
          {service.title}
        </h3>
        <p className={Style.cardDescription}>
          {service.description}
        </p>
      </div>
    </Col>
  );
}

export default function Services() {

  return (
    <Container
      className="py-lg-5 px-0 overflow-hidden"
    >
      <Row>
        <Col className="p-3 mb-4 mb-lg-5">
          <h2
            className={`text-center text-uppercase ${Style.title}`}
          >
            {SERVICES.title}
          </h2>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col xs={12}>
          <Row className={`g-4 d-flex justify-content-center`}>
            {SERVICES.ServicesData.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
