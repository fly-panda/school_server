export default {
  state: {
    curtime: '',
    type: '',
    title: '',
    url: '',
    status: '',
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
    }
  },
  actions: {
  }
}
