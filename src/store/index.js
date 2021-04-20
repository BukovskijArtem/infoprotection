import Vue from 'vue'
import Vuex from 'vuex'
import users from './users'
import position from './position'
import subdivision from './subdivision'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        users: users,
        position: position,
        subdivision: subdivision
    }
})
