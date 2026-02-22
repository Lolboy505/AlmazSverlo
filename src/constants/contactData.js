const nameOrg = "Алмаз-Помощь"
const phone = "79592022681" // указывать только цифры
const phoneTow = "79592022681"
const email = "paul.poluschin@yandex.ru"
const telegram = "https://t.me/AlmazPomosh"
const vkontakte = "https://vk.com"
const address = "Работаем по всему городу и области"
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
    f1: "Алмазное сверление",
    f2: "&",
    f3: "Услуги эвакуатора",
    f4: "в Луганске и области",
    call: `Звоните: ${formatPhoneNumber(phone)}`,
    d1: "Профессиональные решения для стройки",
    d2: "Быстрая помощь на дорогах",
}

export {
    // обьекты
    HEADER,
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