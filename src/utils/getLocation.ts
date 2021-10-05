type callbackType = (position: GeolocationPosition) => void;
type getLocationType = (callback: callbackType) => void

// Функция, которая получает местоположение пользователя
const getLocation: getLocationType = (callback) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(callback);
    }
}

export default getLocation