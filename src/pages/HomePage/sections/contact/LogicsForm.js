const [formData, setFormData] = useState(nullForm);
const [formDatalast, setFormDatalast] = useState(nullForm);
const [isLoading, setIsLoading] = useState(false)

const nullForm = {
    name: '',
    phone: '',
    message: '',
    isAgreed: false,
}

let tmpFormData = nullForm

let addressFetch = ''

const replaceWrongText = (val, flagZalip = true) => {
    // Ограничиваем "залипание" символов (не более 5 одинаковых букв подряд)
    if (flagZalip) {
        val = val.replace(/(.)\1{4,}/g, '$1$1$1$1');
    }
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
    else if (formData.isAgreed === false) {
        alert('Вы не согласились на обработку персональных данных и политику конфиденциальности')
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

const handleSubmit = async (e) => {
    e.preventDefault();

    if (isWrongForm() || isLoading) {
        return null
    }
    else {
        setIsLoading(true);

        tmpFormData = {
            name: replaceWrongText(formData.name),
            phone: replaceWrongText(formData.phone, false),
            message: replaceWrongText(formData.message),
            isAgreed: formData.isAgreed
        }

        try {
            const response = await axios.post(addressFetch, tmpFormData)

            if (response.data.success) {
                alert('Заявка отправлена успешно! ');
                console.log(`Заявка успешно отправлена на сервер:`, tmpFormData, response.data.success); // Для отладки

                setFormData(tmpFormData)
                setFormDatalast(tmpFormData)
            }
        } catch (error) {
            console.error('Ошибка:', error);
            alert(error.response?.data?.error || 'Ошибка при соединении с сервером');
        } finally {
            setIsLoading(false)
        }
    }
}

const handleClear = () => {
    setFormData(nullForm)
}