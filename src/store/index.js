import Vue from 'vue'
import Vuex from 'vuex'
import users from './users'
import position from './directory/position'
import subdivision from './directory/subdivision'

Vue.use(Vuex);

function moduleUnion (modules) {
  let result = {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {}
  }
  for (let el of modules) {
    result.state = {...el.state, ...result.state}
    result.getters = {...el.getters, ...result.getters}
    result.mutations = {...el.mutations, ...result.mutations}
    result.actions = {...el.actions, ...result.actions}
  }
  return result
}

export const store = new Vuex.Store({
    modules: {
        users: users,
        Directory: moduleUnion([position, subdivision])
    }
})
