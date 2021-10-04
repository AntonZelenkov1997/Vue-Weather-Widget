import axios from "axios";
import {WEATHER_API_KEY, WEATHER_BASE_URI} from "../../API/API";
import {saveToLocalStorage} from "../../utils/localStorageUtils";
import transformWeatherData from "../../utils/transformWeatherData";
import {settingsStateType, VuexModule} from "../../types/vuex";




type settingsComponentStoreType = VuexModule<settingsStateType>

const settingsComponentStore: settingsComponentStoreType = {
    state: () => ({
        cities: [] as ArrayWeatherInfoType,
        currentCityBlockDrag: null as weatherInfoType | null
    }),

    actions: {
        async SET_NEW_CITY({commit, getters}, payload: string) {
            try {
                const response = await axios({
                    method: "GET",
                    url: WEATHER_BASE_URI,
                    params: {
                        q: payload,
                        APPID: WEATHER_API_KEY,
                        units: 'metric',
                    }
                })

                commit('SET_NEW_CITY', transformWeatherData(response.data, getters.GET_CITIES.length))

            } catch (e) {
                alert("Failed to get data for this city :'(")
            }
        },

        async SET_NEW_CITY_BY_LAT_AND_LON({commit, getters}, payload: GeolocationPosition) {
            try {
                const response = await axios({
                    method: "GET",
                    url: WEATHER_BASE_URI,
                    params: {
                        lat: payload.coords.latitude,
                        lon: payload.coords.longitude,
                        APPID: WEATHER_API_KEY,
                        units: 'metric',
                    }
                })

                commit('SET_NEW_CITY', transformWeatherData(response.data, getters.GET_CITIES.length))

            } catch (e) {
                alert("Failed to get data for this city :'(")
            }
        },

        DELETE_CITY_SETTINGS({commit, getters}, payload: weatherInfoType['id']) {

            const allWeatherStore: ArrayWeatherInfoType = [...getters.GET_CITIES];
            const newCities = allWeatherStore.filter((city: weatherInfoType) => city.id !== payload)

            newCities.forEach((city, index) => city.order = index)


            commit('DELETE_CITY_SETTINGS', newCities)
        },


        SET_CURRENT_CITY_BLOCK_DRAG({commit}, payload: weatherInfoType) {
            commit('SET_CURRENT_CITY_BLOCK_DRAG', payload)
        },


        SET_CHANGE_ORDER({commit, getters}, payload: weatherInfoType) {
            const allWeatherStore: ArrayWeatherInfoType = [...getters.GET_CITIES];

            const currentState: weatherInfoType = {...getters.GET_CURRENT_CITY_BLOCK_DRAG};
            const overComponent: weatherInfoType = {...payload};

            allWeatherStore.forEach((weather) => {
                if (weather.id === currentState.id) {
                    weather.order = overComponent.order
                }

                if (weather.id === overComponent.id) {
                    weather.order = currentState.order
                }
            })

            commit('SET_CHANGE_ORDER', allWeatherStore)

        }
    },

    mutations: {
        SET_NEW_CITY(state, payload: weatherInfoType) {
            state.cities = [...state.cities, payload]
            saveToLocalStorage('settings', state.cities);
        },

        DELETE_CITY_SETTINGS(state, payload: ArrayWeatherInfoType) {
            state.cities = payload
            saveToLocalStorage('settings', state.cities);
        },

        SET_CURRENT_CITY_BLOCK_DRAG(state, payload: weatherInfoType) {
            state.currentCityBlockDrag = payload
        },

        SET_CHANGE_ORDER(state, payload: ArrayWeatherInfoType) {
            state.cities = payload
        }
    },

    getters: {
        GET_CITIES(state) {
            return state.cities.sort((a, b) => a.order - b.order)
        },

        GET_CITIES_IS_EMPTY(state) {
            return state.cities.length === 0
        },

        GET_CURRENT_CITY_BLOCK_DRAG(state) {
            return state.currentCityBlockDrag
        }
    }
}

export default settingsComponentStore