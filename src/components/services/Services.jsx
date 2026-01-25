import { Container, Row, Col } from 'react-bootstrap';
import { Drill, Home, Droplet, Wind, Zap, Settings } from 'lucide-react';

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
      className="py-0 py-lg-5 px-0"
      style={{
        background: "black",
        color: "white",
      }}
      fluid
    >
      <Container className='pb-4'>
        <Row>
          <h1 className="text-center mb-4">
            НАШИ УСЛУГИ
          </h1>
        </Row>
        <Row className="g-4 justify-content-center">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="col-12 col-md-6 col-lg-4"
              >
                <div
                  style={{
                    background: "linear-gradient(145deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    borderRadius: "30px",
                    height: "100%",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    cursor: "pointer"
                  }}
                  className="p-3 d-flex flex-column align-items-center text-center"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-12px)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.4)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0px)";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                  }}
                >
                  <div className="mb-3 d-flex justify-content-center align-items-center"
                    style={{
                      background: "var(--color-red-700)",
                      borderRadius: "18px",
                      width: "60px",
                      height: "60px",
                      boxShadow: "0 8px 20px rgba(185, 28, 28, 0.4)",
                      flexShrink: 0
                    }}
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
    </Container>
  );
}
