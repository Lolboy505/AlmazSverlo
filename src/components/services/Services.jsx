import { Container, Row, Col } from 'react-bootstrap';
import { Drill, Home, Droplet, Wind, Zap, Settings } from 'lucide-react';
import cardStyle from "./Services.module.css"


const SERVICES_DATA = [
  {
    icon: Home,
    title: 'Вентиляционные системы',
    description: 'Сверление технологических отверстий для приточно-вытяжной вентиляции и систем дымоудаления.',
  },
  {
    icon: Droplet,
    title: 'Водоснабжение и канализация',
    description: 'Сверление отверстий для монтажа магистралей водопровода, септиков и узлов водоотведения.',
  },
  {
    icon: Wind,
    title: 'Климатическое оборудование',
    description: 'Высокоточное алмазное сверление под трассы кондиционеров и установку систем КИВ/рекуператоров.',
  },
  {
    icon: Zap,
    title: 'Электрические сети',
    description: 'Устройство каналов для скрытой электропроводки и прокладки силовых кабелей в бетоне, кирпичей, и т.д.',
  },
  {
    icon: Drill,
    title: 'Широкий диапазон диаметров',
    description: 'Работа с высокоармированным бетоном и камнем. Возможность бурения короноками до 350 мм. Есть наклонное сверление.',
  },
  {
    icon: Settings,
    title: 'Алмазная резка проемов',
    description: 'Формирование и расширение дверных или оконных проемов в несущих стенах и перекрытиях.',
  },
];

function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <Col className="overflow-hidden px-3 px-md-3 col-11 col-sm-10 col-md-6 col-lg-6 col-xl-5 col-xxl-4">
      <div className={cardStyle.cardContainer}>
        <div className={`redLineShadow mb-3`} />
        <div className={cardStyle.iconWrapper}>
          <Icon size={32} color="white" />
        </div>
        <h3 className={cardStyle.cardTitle}>
          {service.title}
        </h3>
        <p className={cardStyle.cardDescription}>
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
            className="text-center text-uppercase"
            style={{
              fontSize: 'var(--size-main-title)',
            }}
          >
            Алмазное бурение и сверление отверстий в Луганске
          </h2>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        {/* <Col xs={12} className="d-none d-md-flex">
          <div className="redLineShadow mb-4" />
        </Col> */}
        <Col xs={12} className="">
          <Row className={`g-4 d-flex justify-content-center`}>
            {SERVICES_DATA.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
