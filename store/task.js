export default {
    namespaced: true,
    state: () => ({
        openTask: null,
    }),
    mutations: {
        ['SET_OPEN_TASK'](state, task) {
            state.openTask = task
        }
    },
    actions: {},
    getters: {
        getOpenTask: state => {
            return state.openTask
        }
    }
}
