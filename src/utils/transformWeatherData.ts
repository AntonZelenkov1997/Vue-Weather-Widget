import generateUniqueId from "./generateUniqueId";


type transformWeatherType = (weatherInfoArray: weatherInfoType, lengthOfArray: number) => weatherInfoType

// Transform data weather and set some props
const transformWeatherData: transformWeatherType = (weatherInfoArray, lengthOfArray) => ({
    ...weatherInfoArray,
    id: generateUniqueId(),
    order: lengthOfArray
})

export default transformWeatherData