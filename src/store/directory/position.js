var state = {
    position: [
        {value: 'Генеральный директор', label: 'Генеральный директор'},
        {value: 'Главный инженер', label: 'Главный инженер'},
        {value: 'Директор по сбыту продукции', label: 'Директор по сбыту продукции'},
        {value: 'Главный бухгалтер', label: 'Главный бухгалтер'},
        {value: 'Бухгалтеры по участкам учета', label: 'Бухгалтеры по участкам учета'},
        {value: 'Маркетолог', label: 'Маркетолог'},
        {value: 'Менеджеры по закупкам сырья', label: 'Менеджеры по закупкам сырья'},
        {value: 'Менеджеры по продажам', label: 'Менеджеры по продажам'}
    ]
}

var getters = {
  POSITION: (state) => {
    return state.position
  }
}

var mutations = {
}

var actions = {
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
