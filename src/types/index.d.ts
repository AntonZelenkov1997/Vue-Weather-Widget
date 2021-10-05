// Частично-описательный тип схемы-ответа от сервера
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
    order: number,
    weather: [{
        description: string
    }]
}

declare type ArrayWeatherInfoType = Array<weatherInfoType>

declare enum localStorageKeys {
    settings = 'settings'
}