export default {
    namespaced: true,
    state: () => ({
        article: null,
    }),
    mutations: {
        ['SET_ARTICLE'](state, article) {
            state.article = article
        }
    },
    actions: {},
    getters: {
        getArticle: state => {
            return state.article
        }
    }
}
