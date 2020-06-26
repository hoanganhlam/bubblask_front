export default {
    namespaced: true,
    state: () => ({
        user: null,
        token: null,
        loggedIn: false,
        openAuth: false
    }),
    mutations: {
        ['SET_USER'](state, user) {
            state.user = user
            state.loggedIn = !!user
        },
        ['SET_TOKEN'](state, token) {
            state.token = token
        },
        ['SET_OPEN_AUTH'](state, stt) {
            state.openAuth = stt
        }
    },
    actions: {},
    getters: {
        getUser: state => {
            return state.user
        }
    }
}
