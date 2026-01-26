const nameOrg = "AlmazSverlo"
const phone = "79597777777" // указывать только цифры
const email = "info@drilling.ru"
const telegram = "https://t.me"
const vkontakte = "https://vk.com"
const address = "Работаем по всему городу"
const addressTow = "По всему городу и области"

const schedule = "Пн-Cб"
const fromTime = '8:00'
const toTime = '20:00' 

const scheduleTow = "Пн-Сб"
const fromTimeTow = '6:00'
const toTimeTow = '22:00'

const fullName = "Фамилия Имя Отчество" 
const TIN = "56165165116" // ИНН
const PSRNSP = "372487349973274" // ОГРНИП

function formatPhoneNumber(){
    return `+${phone[0]} (${phone[1]}${phone[2]}${phone[3]}) ${phone[4]}${phone[5]}${phone[6]}-${phone[7]}${phone[8]}-${phone[9]}${phone[10]}`;
}

export {
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
    // функции
    formatPhoneNumber,
}