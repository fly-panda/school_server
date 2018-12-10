export default {
  state: {
    curtime: '',
    data: '',
    type: '',
    title: '',
    url: '',
    status: '',
    width: '400',
    component: ''
  },
  getters: {
  },
  mutations: {
    modalStatus (state, param) {
      state.curtime = param.curtime
      state.type = param.type
      state.title = param.title
      state.url = param.url
      state.status = param.status
      state.component = param.component
      state.width = param.width || 400
      state.data = param.data
    }
  },
  actions: {
  }
}
