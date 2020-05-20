import Vue from 'vue';

export default {
    namespaced: true,
    state: () => ({
        running: null,
        tasks: []
    }),
    mutations: {
        ['SET_RUNNING'](state, task) {
            state.running = task;
        },
        ['SET_TASKS'](state, tasks) {
            state.tasks = tasks;
        },
        ['ADD_TASK'](state, task) {
            state.tasks.unshift(task);
            if (task.isRunning()) {
                state.running = task;
            }
        },
        ['UPDATE_TASK'](state, task) {
            if (task.isRunning()) {
                state.running = task;
            } else if (state.running && task.uid === state.running.uid) {
                state.running = null;
            }
            let index = state.tasks.map(x => x.uid).indexOf(task.uid);
            Vue.set(state.tasks, index, task);
        }
    },
    actions: {},
    getters: {}
}
