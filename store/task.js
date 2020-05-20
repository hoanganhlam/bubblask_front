import Vue from 'vue'

export default {
    namespaced: true,
    state: () => ({
        running: null,
        tasks: []
    }),
    mutations: {
        ['SET_RUNNING'](state, task) {
            state.running = task
        },
        ['SET_TASKS'](state, tasks) {
            state.tasks = tasks
        },
        ['ADD_TASK'](state, task) {
            state.tasks.unshift(task)
            if (task.isRunning()) {
                state.running = task
            }
        },
        ['REMOVE_TASK'](state, task) {
            state.tasks.splice(state.tasks.map(x => x.uid).indexOf(task.uid), 1)
        },
        ['UPDATE_TASK'](state, task) {
            let index = state.tasks.map(x => x.uid).indexOf(task.uid)
            Vue.set(state.tasks, index, task)
        }
    },
    actions: {},
    getters: {}
}
