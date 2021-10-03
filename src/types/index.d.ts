declare type weatherInfoType = {
    id: number,
    name: string,
    main: {
        temp: number,
        temp_min: number,
        temp_max: number
    },
    sys: {
        country: string
    },
    order: number
}

declare type ArrayWeatherInfoType = Array<weatherInfoType>

declare enum localStorageKeys {
    settings = 'settings'
}