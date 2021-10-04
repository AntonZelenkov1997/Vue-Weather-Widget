import {Module} from "vuex";

declare type RootState = {}

declare type settingsStateType = {
    cities: ArrayWeatherInfoType,
    currentCityBlockDrag: null | weatherInfoType
}

declare type VuexModule<T> = Module<T, RootState>