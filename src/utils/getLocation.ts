
type callbackType = (position: GeolocationPosition) => void;
type getLocationType = (callback: callbackType) => void

const getLocation: getLocationType = (callback) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(callback);
    }
}

export default getLocation