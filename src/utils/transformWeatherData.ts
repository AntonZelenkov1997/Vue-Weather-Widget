import generateUniqueId from "./generateUniqueId";


type transformWeatherType = (weatherInfoArray: weatherInfoType, lengthOfArray: number) => weatherInfoType

// Функция, изменяющая и переопределяющая некоторые свойства объекта города с погодой
const transformWeatherData: transformWeatherType = (weatherInfoArray, lengthOfArray) => ({
    ...weatherInfoArray,

    // Т.к. в ответе от сервера мы не получаем уникальный id - я его генерирую самостоятельно
    // Это полезно при отображении Vue - списков с указанием key
    id: generateUniqueId(),

    // Задаём порядок элемента. Порядок определяет какое положение он занимает в отображаемом списке.
    order: lengthOfArray
})

export default transformWeatherData