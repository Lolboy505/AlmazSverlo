import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import urlPDPC from '@/documents/PersonalDataProccessingConsent.pdf'
import urlPP from '@/documents/PrivacyPolicy.pdf'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { phone, email, formatPhoneNumber, fromTime, toTime } from '@/components/additional/contactData'
import CloseIcon from '../additional/CloseIcon';
import ContactItem from './ContactItem';

const nullForm = {
    name: '',
    phone: '',
    message: '',
    isAgreed: false,
}
export default function Contact() {
    const [formData, setFormData] = useState(nullForm);
    const [formDatalast, setFormDatalast] = useState(nullForm);

    let tmpFormData = nullForm

    let contactData = [
        {
            label: "Телефон",
            value: formatPhoneNumber(),
            href: "tel:+" + phone,
            icon: <Phone size={30} />,
        },
        {
            label: "Email",
            value: email,
            href: "mailto:" + email,
            icon: <Mail size={30} />,
        },
        {
            label: "Адрес",
            value: "Работаем по всему городу",
            href: null,
            icon: <MapPin size={30} />,
        },
        {
            label: "Режим работы",
            value: `Ежедневно с ${fromTime} до ${toTime}`,
            href: null,
            icon: <Clock size={30} />,
        },
    ]

    const replaceWrongText = (val) => {
        // Ограничиваем "залипание" символов (не более 5 одинаковых букв подряд)
        val = val.replace(/(.)\1{4,}/g, '$1$1$1$1');
        // не работает в во время onChange

        // удаляем потенциально опасные скриптовые символы < >
        val = val.replace(/[<>]/g, '');
        // Удаляем http, https и www, чтобы не спамили ссылками
        val = val.replace(/https?:\//gi, '');
        val = val.replace(/https?:\/\//gi, '');
        val = val.replace(/www\./gi, '');
        return val
    }

    const handleMessageChange = (e) => {
        let val = e.target.value;
        // 1. Ограничиваем длину (например, 600 символов)
        if (val.length > 600) {
            alert("Достигнут лимит символов (600 символов)")
            return;
        }
        // 2. Не даем начать сообщение с пробела или переноса строки
        val = val.replace(/^[ \n\r]+/, '');
        // 3. Запрещаем более 3-х переносов строк подряд (чтобы не тянули форму вниз)
        val = val.replace(/\n{4,}/g, '\n\n\n');
        setFormData(prev => ({ ...prev, message: val }));
    }

    const handleNameChange = (e) => {
        let value = e.target.value;
        if (value.length >= 30) {
            alert("Достигнуто максимальное кол-во букв");
            return null;
        }
        else if (value.length > 0) {
            // Не разрешаем ве лишнее всё лишнее (цифры, символы)
            if (/^[a-zA-Zа-яА-ЯёЁ\s-]+$/.test(value) && !/^[ -]/.test(value)) {
                value = value.replace(/\s\s+/g, ' ');
                value = value.replace(/--+/g, '-');
                setFormData({ ...formData, name: value });
            }
            else {
                alert("Начинаться имя должно с буквы.\nИмя может содержать только буквы, пробелы и дефис.");
            }
        }
        else {
            setFormData({ ...formData, name: '' });
        }
    };

    const formatPhone = (value) => {
        if (!value) return '';
        const phoneNumber = value.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length;

        if (phoneNumberLength < 2) return `+${phoneNumber}`;
        if (phoneNumberLength < 5) return `+${phoneNumber[0]} (${phoneNumber.slice(1, 4)}`;
        if (phoneNumberLength < 8) return `+${phoneNumber[0]} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4)}`;
        if (phoneNumberLength < 10) return `+${phoneNumber[0]} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7)}`;
        return `+${phoneNumber[0]} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`;
    };

    const handlePhoneChange = (e) => {
        const input = e.target.value;
        const onlyNums = input.replace(/[^\d]/g, ''); // Удаляем все нечисловые символы
        if (onlyNums.length <= 11) {
            setFormData({ ...formData, phone: onlyNums });
        }
    };

    const isWrongForm = () => {
        if (formData.name.trim() === '') {
            alert('Пожалуйста, введите ваше имя.');
            return true;
        }
        else if (formData.phone.trim() === '') {
            alert('Пожалуйста, введите ваш телефон.');
            return true;
        }
        else if (!/^7\d{10}$/.test(formData.phone.trim())) {
            alert('Пожалуйста, введите ваш номер телефона корректно. \n+7 (XXX) XXX-XX-XX');
            return true;
        }
        else if (!formData.isAgreed) {
            alert('Вы не согласились на обработку персональных данных и политику конфиденциальности')
            return true
        }
        else if (
            formDatalast.message === formData.message &&
            formDatalast.name === formData.name &&
            formDatalast.phone === formData.phone
        ) {
            alert("Вы уже отправляли эту заявку")
            return true
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // ДОДЕЛАТЬ отправку формы
        if (isWrongForm()) {
            return null
        }
        else {
            tmpFormData = {
                name: replaceWrongText(formData.name),
                phone: replaceWrongText(formData.phone),
                message: replaceWrongText(formData.message),
                isAgreed: formData.isAgreed
            }
            setFormDatalast(tmpFormData)
            //далее отправляем tmp-шку
            setFormData((tmpFormData))
            // console.log()
            alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
        }
    };

    const handleClear = () => {
        setFormData(nullForm)
    }

    return (
        <Container id="contact" className="py-5" style={{ background: 'black' }}>
            <div className="text-center mb-5">
                <h2 className="text-white fw-bold mb-3" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
                    Свяжитесь с нами
                </h2>
                <p className="text-neutral-400 mx-auto" style={{ maxWidth: "600px" }}>
                    Оставьте заявку, и наш специалист перезвонит вам для консультации.
                </p>
            </div>

            <Row className="g-4">
                <Col lg={5}>
                    <div className="h-100 d-flex flex-column gap-4">
                        <div className="p-4 rounded-4" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <h3 className="text-center display-7 mb-4 fw-bold">Контактная информация</h3>
                            <div className="d-flex flex-column gap-3">
                                {
                                    contactData.map((item, index) => (
                                        <ContactItem
                                            key={index}
                                            {...item}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </Col>

                <Col lg={7} id='order'>
                    <div className="p-4 p-md-5 rounded-4 h-100" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <h3 className="text-white h4 mb-4 fw-bold text-center text-md-start">Оставить заявку</h3>

                        <form onSubmit={handleSubmit}>
                            <div className="row g-1">

                                <div className="col-md-12 flex-column flex-md-row d-flex m-0 p-0 gap-2">
                                    <div className="flex-md-fill m-0 p-0">
                                        <div className="mb-3">
                                            <label className="text-neutral-400 small d-block mb-1">Ваше имя *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Иван"
                                                required
                                                value={formData.name}
                                                onChange={(e) => handleNameChange(e)}
                                                className="bg-transparent text-white p-3 custom-input w-100 rounded-3"
                                                style={{ border: '1px solid #6c757d', outline: 'none' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-md-fill m-0 p-0 ">
                                        <div className="mb-3">
                                            <label className="text-neutral-400 small d-block mb-1">Телефон *</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="+7 (___) ___-__-__"
                                                required
                                                value={formatPhone(formData.phone)}
                                                onChange={handlePhoneChange}
                                                className="bg-transparent border-secondary text-white p-3 custom-input w-100 rounded-3"
                                                style={{ border: '1px solid #6c757d', outline: 'none' }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="mb-4">
                                        <label className="text-neutral-400 small d-block mb-1">Сообщение</label>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleMessageChange}
                                            placeholder="Опишите ваш проект..."
                                            className="bg-transparent border-secondary text-white p-3 custom-input w-100 rounded-3"
                                            style={{ border: '1px solid #6c757d', outline: 'none', resize: 'none' }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3 form-check text-start">
                                <input
                                    type="checkbox"
                                    name="acess"
                                    id="privacy_policy"
                                    className="form-check-input"
                                    required
                                    onClick={() => (setFormData((prev) => ({ ...prev, isAgreed: !prev.isAgreed })))}
                                />

                                <span className="form-check-label text-white-50 shadow-sm">
                                    Я согласен на обработку <a
                                        href={urlPDPC}
                                        className="text-decoration-underline text-white"
                                    >
                                        персональных данных
                                    </a> и согласен с <a
                                        href={urlPP}
                                        className="text-decoration-underline text-white"
                                    >
                                        политикой конфиденциальности
                                    </a>
                                </span>
                            </div>

                            <button
                                type="submit"
                                className="w-100 py-3 fw-bold d-flex align-items-center justify-content-center gap-2 rounded-3 shadow-lg"
                                style={{
                                    background: 'var(--color-red-600)',
                                    border: 'none',
                                    color: 'white',
                                    cursor: 'pointer'
                                }}
                            >
                                <Send size={18} /> ОТПРАВИТЬ ЗАЯВКУ
                            </button>

                            <button
                                onClick={handleClear}
                                className='w-100 my-3 py-2 fw-bold d-flex align-items-center justify-content-center gap-2 rounded-3 shadow-lg'
                                style={{
                                    background: 'grey',
                                    border: 'none',
                                    color: 'white',
                                    cursor: 'pointer'
                                }}
                            >
                                <CloseIcon /> очистка формы
                            </button>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

