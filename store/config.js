export default {
    namespaced: true,
    state: () => ({
        contentTypes: null,
        showAbout: true
    }),
    mutations: {
        ['SET_CONTENT_TYPE'](state, ct) {
            state.contentTypes = ct
        },
        ['SET_SHOW_ABOUT'](state, ct) {
            state.showAbout = ct
        }
    },
    actions: {},
    getters: {
        getCT: state => {
            return state.contentTypes
        }
    }
}
