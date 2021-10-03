import Vue from 'vue'
import Vuex from 'vuex'

import settingsComponentStore from "./settingsComponentStore/settingsComponentStore";

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        settingsComponentStore
    }
})

export default store;