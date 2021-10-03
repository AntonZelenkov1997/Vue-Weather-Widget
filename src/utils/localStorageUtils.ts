type saveToLocalStorageType = (key: keyof typeof localStorageKeys, settings: ArrayWeatherInfoType) => void

const saveToLocalStorage: saveToLocalStorageType = (key, settings) => localStorage.setItem(key, JSON.stringify(settings));



type getFromLocalStorageType = (key: keyof typeof localStorageKeys) => ArrayWeatherInfoType

const getFromLocalStorage: getFromLocalStorageType = (key) => JSON.parse(<string>localStorage.getItem(key))



type localStorageKeyIsEmptyType = (key: keyof typeof localStorageKeys) => boolean

const localStorageKeyIsEmpty: localStorageKeyIsEmptyType = (key) => !Boolean(JSON.parse(<string>localStorage.getItem(key)))




export {saveToLocalStorage, getFromLocalStorage, localStorageKeyIsEmpty}