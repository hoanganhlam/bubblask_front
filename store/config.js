import * as config from "../helpers/configs"

export default {
    namespaced: true,
    state: () => ({
        contentTypes: null,
        showAbout: true,
        settings: config.settings,
        ws: null
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
        ['SET_SETTING_GRAPH'](state, ct) {
            state.settings.task_graph_setting = ct
        },
        ['SET_STRICT'](state, ct) {
            state.settings.timer.is_strict = ct
        },
        ['SET_SETTING'](state, ct) {
            if (ct) {
                state.settings = {
                    color: ct.color ? ct.color : config.settings.color,
                    timer: ct.timer ? ct.timer : config.settings.timer,
                    task_order: ct.task_order ? ct.task_order : config.settings.task_order,
                    notification: ct.notification ? ct.notification : config.settings.notification,
                    task_graph_setting: ct.task_graph_setting ? ct.task_graph_setting : config.settings.task_graph_setting
                }
            } else {
                state.settings = config.settings
            }
        },
        ['SET_WS'](state, ct) {
            state.ws = ct
        },
    },
    actions: {
        setColorSetting(context, color) {
            context.commit('SET_SETTING_COLOR', color)
        }
    }
}
