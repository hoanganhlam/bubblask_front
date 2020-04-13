export default {
    namespaced: true,
    state: () => ({
        form: null,
    }),
    mutations: {
        ['SET_FORM'](state, form) {
            state.form = form
        }
    },
    actions: {},
    getters: {
        getForm: state => {
            return state.form
        }
    }
}
