export default {
    state: {
        curtime: '',
        data: {},
        status: '',

    },
    getters: {},
    mutations: {
        previewStatus(state, param) {
            state.curtime = param.curtime
            state.status = param.status
            state.data = param.data
        }
    },
    actions: {}
}