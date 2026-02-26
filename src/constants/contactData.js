import { Drill, Home, Droplet, Wind, Zap, Settings, Clock, MapPin, Shield, Phone } from 'lucide-react';

const ORG = "Алмаз-Помощь"
const nameOrg = `©2026 ${ORG}. Все права защищены.`
const publicOferta = "Информация на сайте не является публичной офертой (ст. 437 ГК РФ)."

const phone = "79592022681" // указывать только цифры
const phoneTow = "79592022681"
const email = "paul.poluschin@yandex.ru"
const telegram = "https://t.me/AlmazPomosh"
const telegramName = "@AlmazPomosh"
const vkontakte = "https://vk.com"
const address = "Работаю по всему городу и области"
const addressTow = "По всему городу и области"

const schedule = "Пн-Cб"
const fromTime = '8:00'
const toTime = '20:00'

const scheduleTow = "Пн-Сб"
const fromTimeTow = '6:00'
const toTimeTow = '22:00'

const fullName = "Полушин Павел Леонтьевич"
const TIN = "940201505065" // ИНН
const PSRNSP = "" // ОГРНИП

function formatPhoneNumber(phone = null) {
    if (phone === null) return
    return `+${phone[0]} (${phone[1]}${phone[2]}${phone[3]}) ${phone[4]}${phone[5]}${phone[6]}-${phone[7]}${phone[8]}-${phone[9]}${phone[10]}`;
}

const HEADER = {
    nameOrg: ORG
}

const HERO = {
    f1: "Алмазное сверление",
    f2: "&",
    f3: "Услуги эвакуатора",
    f4: "в Луганске и области",
    call: `Звоните: ${formatPhoneNumber(phone)}`,
    d1: "Профессиональные решения для стройки",
    d2: "Быстрая помощь на дорогах",
    btn1: "Позвонить мастеру",
    btn2: "Вызвать эвакуатор",
    btn3: "Просмотреть услуги эвакуатора",
}

const SERVICES = {
    title: "Алмазное бурение и сверление отверстий в Луганске",
    ServicesData: [
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
    ],
}

const MATERIALS = {
    title: "Алмазное сверление по типам поверхностей",
    MaterialsList: [
        'Железобетон', 'Монолит', 'Дикарь', 'Кирпич', 'Бетон',
        'Пенобетон', 'Газобетон', 'Природный камень', 'Асфальт',
        'Керамзитобетон',
    ],
}

const ABOUT = {
    Content: {
        desc: `Обращаясь ко мне, вы не платите диспетчерам и менеджерам.`,
        exp: `Мой опыт и современные технологии позволяют добиваться идеального результата даже в самых сложных материалах.`,
        rep: "Ценю свою репутацию, поэтому обеспечиваю персональный подход к каждому заказу",
        work: "Работаю чисто, оперативно и на совесть — будь то частный сектор или крупный строительный объект."
    },
    SlideTexts: [
        { id: 1, text: "Работаю без посредников — отвечаю за результат лично" },
        { id: 2, text: "Мой опыт — ваша гарантия результата" },
        { id: 3, text: "Прямой контакт с мастером — гарантия лучшей цены" },
    ],
}

const GALLERY = {
    title: "Галерея работ по бурению и сверлению",
    PreviewText: "Увеличить &#128269",
}

const TOW_SERVICE = {
    title1: "Эвакуатор Луганск",
    title2: "вызов 24/7",
    btn1: "Вызвать эвакуатор",
    des1: "Помощь на дороге",
    des2: "Быстро и надежно",
    ServiceData: [
        {
            icon: Clock,
            title: "время работы",
            description: `С ${fromTimeTow} до ${toTimeTow} ч. ${scheduleTow}`,
        },
        {
            icon: MapPin,
            title: "работаю",
            description: addressTow,
        },
        {
            icon: Shield,
            title: "любое авто",
            description: "До 5 тонн, бусы c MAXI базой т.д.",
        },
        {
            icon: Phone,
            title: "контакты",
            description: `Тел: ${formatPhoneNumber(phoneTow)}`,
        },
    ],
}

const GEO = {
    title: "Работаю по Луганску и ЛНР",
    des1: "Выезд на объекты и быстрая подача по договоренности в города:",
    des2: "И другие населенные пункты ЛНР и часть Ростовской области",
    cites: [
        'Луганск', 'Алчевск', 'Краснодон', 'Стаханов',
        'Антрацит', 'Свердловск', 'Лутугино', 'Перевальск',
        'Счастье', 'Ровеньки'
    ],
}

const CONTACT = {
    title1: "Заказать услуги частного мастера — ",
    title2: "Контакты",
    telegramName: telegramName,
    telegram: telegram,
    phone: phone,
    email: email,
    formatedPhone: formatPhoneNumber(phone),
    fromTime: fromTime,
    toTime: toTime,
    schedule: schedule,
    address: address,
    toTimeTow: toTimeTow,
    fromTimeTow: fromTimeTow,
}

const FOOTER = {
    nameOrg: nameOrg,
    publicOferta: publicOferta,
    fullName: fullName,
    tin: TIN,
}

export {
    // обьекты
    HEADER,
    HERO,
    SERVICES,
    MATERIALS,
    ABOUT,
    GALLERY,
    TOW_SERVICE,
    GEO,
    CONTACT,
    FOOTER,
    // переменные
    phone,
    email,
    telegram,
    vkontakte,
    TIN,
    PSRNSP,
    fullName,
    fromTime,
    toTime,
    fromTimeTow,
    toTimeTow,
    nameOrg,
    schedule,
    scheduleTow,
    address,
    addressTow,
    phoneTow,
    // функции
    formatPhoneNumber,
}