var state = {
    subdivision: [
        {value: 'Кадровая служба', label: 'Кадровая служба'},
        {value: 'Финансово-экономический отдел', label: 'Финансово-экономический отдел'},
        {value: 'Бухгалтерия', label: 'Бухгалтерия'},
        {value: 'Главный бухгалтер', label: 'Главный бухгалтер'},
        {value: 'Секретариат или офис-менеджер', label: 'Секретариат или офис-менеджер'},
        {value: 'Юридический отдел', label: 'Юридический отдел'},
        {value: 'Коммерческий сектор', label: 'Коммерческий сектор'},
        {value: 'Отдел продаж', label: 'Отдел продаж'},
        {value: 'Отдел закупок', label: 'Отдел закупок'},
        {value: 'Отдел развития и маркетинга', label: 'Отдел развития и маркетинга'},
        {value: 'Отдел контроля качества', label: 'Отдел контроля качества'}
    ]
}

var getters = {
  SUBDIVISION: (state) => {
    return state.subdivision
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
