type generateDateType = () => string

// Функция, выполняющая получение текущего времени
const generateDate: generateDateType = () => {

    const fullDate: Date = new Date();

    const date: string = fullDate.toLocaleDateString('en-GB', { weekday: 'long' });
    const month: string = fullDate.toLocaleDateString('en-GB', { month: 'long' });
    const numberDay: number = fullDate.getDate();
    const year: number = fullDate.getFullYear()

    return `${date}, ${month} ${numberDay}, ${year}`
}

export default generateDate;