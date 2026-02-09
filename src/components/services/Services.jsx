import { Container, Row, Col } from 'react-bootstrap';
import { Drill, Home, Droplet, Wind, Zap, Settings } from 'lucide-react';
import { uslugi } from '../additional/sizes.js';
import cardStyle from "./Services.module.css"

const services = [
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

export default function Services() {
  return (
    <Container
      className="py-0 py-lg-5 px-4"
      style={{
        background: "black",
        color: "white",
      }}
      fluid
    >
      <Row>
        <h2
          className="mb-4 mb-lg-5 text-center text-uppercase"
          style={{
            fontSize: uslugi,
          }}
        >
          Услуги алмазного сверления
        </h2>
      </Row>
      <Row className="mx-sm-5 mx-md-2 mx-xl-5 g-4 justify-content-center">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-4"
            >
              <div className={cardStyle.cardContainer}>
                <div
                  className={cardStyle.iconWrapper}
                >
                  <Icon size={32} color="white" />
                </div>

                <h3
                  className="text-white fw-bold mb-3"
                  style={{
                    fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                    textShadow: "0 0 10px rgba(255,0,0,0.2)"
                  }}
                >
                  {service.title}
                </h3>

                <p
                  className="text-neutral-400 m-0 p-0"
                  style={{
                    fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)",
                    lineHeight: "1.6"
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </Row>
    </Container>
  );
}
