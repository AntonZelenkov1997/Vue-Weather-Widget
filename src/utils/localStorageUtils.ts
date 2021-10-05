type saveToLocalStorageType = (key: keyof typeof localStorageKeys, settings: ArrayWeatherInfoType) => void

// Функция, выполняющая сохранение пользовательских настроек в localStorage
const saveToLocalStorage: saveToLocalStorageType = (key, settings) => localStorage.setItem(key, JSON.stringify(settings));



type getFromLocalStorageType = (key: keyof typeof localStorageKeys) => ArrayWeatherInfoType

// Функция, выполняющая получение пользовательских настроек из localStorage
const getFromLocalStorage: getFromLocalStorageType = (key) => JSON.parse(<string>localStorage.getItem(key))



type localStorageKeyIsEmptyType = (key: keyof typeof localStorageKeys) => boolean

// Функция, выполняющая проверку существуют ли какие-либо настройки в localStorage.
// Примечание: при первой загрузке пользователя виджет показывает погоду согласно его местоположению.
// Если пользователь удалит все свои настройки из виджета, то при следующем заходе на страницу виджет НЕ БУДЕТ
// показывать погоду по его местоположению. Это сделано НАМЕРЕННО, т.к. пользователь выявил желание не сохранять погоду
// согласно его местоположению.
const localStorageKeyIsEmpty: localStorageKeyIsEmptyType = (key) => !Boolean(JSON.parse(<string>localStorage.getItem(key)))




export {saveToLocalStorage, getFromLocalStorage, localStorageKeyIsEmpty}