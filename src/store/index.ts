import Vue from 'vue'
import Vuex from 'vuex'

import settingsComponentStore from "./settingsComponentStore/settingsComponentStore";
import {RootState} from "../types/vuex";

Vue.use(Vuex)

const store = new Vuex.Store<RootState>({
    modules: {
        settingsComponentStore
    }
})

export default store;