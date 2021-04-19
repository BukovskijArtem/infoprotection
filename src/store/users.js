import axios from 'axios'

var state = {
    tableData: []
}

var getters = {
  TABLE_DATA: (state) => {
    return state.tableData
  }
}

var mutations = {
    SET_TABLE_DATA: (state, payload) => {
        state.tableData = payload
    }
}

var actions = {
    GET_TABLE_DATA: async (context) => {
        let result = await axios.get('http://localhost:3000/tableData')
        if (result.status === 200) {
          context.commit('SET_TABLE_DATA', result.data)
        }
    },
    POST_TABLE_DATA: async (context, payload) => {
        let result = await axios.post('http://localhost:3000/tableData', payload)
        context.commit('SET_TABLE_DATA', result.data)
    },
    DELETE_TABLE_DATA: async (context, payload) => {
        let result = await axios.delete(`http://localhost:3000/tableData/${payload}`)
        context.commit('SET_TABLE_DATA', result.data)
    },
    PUT_TABLE_DATA: async (context, payload) => {
        let result = await axios.put(`http://localhost:3000/tableData/${payload.id}`, payload)
        context.commit('SET_TABLE_DATA', result.data)
    }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
