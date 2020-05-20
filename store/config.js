import * as config from "../helpers/configs"

export default {
    namespaced: true,
    state: () => ({
        contentTypes: null,
        showAbout: true,
        settings: config.settings
    }),
    mutations: {
        ['SET_CONTENT_TYPE'](state, ct) {
            state.contentTypes = ct
        },
        ['SET_SHOW_ABOUT'](state, ct) {
            state.showAbout = ct
        },
        ['SET_SETTING_COLOR'](state, ct) {
            state.settings.color = ct
        },
        ['SET_SETTING_BACKGROUND'](state, ct) {
            state.settings.color.background = ct
        },
        ['SET_SETTING_ORDER'](state, ct) {
            state.settings.task_order = ct
        },
        ['SET_STRICT'](state, ct) {
            state.settings.timer.is_strict = ct
        },
        ['SET_SETTING'](state, ct) {
            if (ct) {
                state.settings = ct
            } else {
                state.settings = config.settings
            }
        },
    },
    actions: {
        setColorSetting(context, color) {
            context.commit('SET_SETTING_COLOR', color)
        }
    }
}
