import Vue from 'vue';

export default {
    namespaced: true,
    state: () => ({
        running: null,
        tasks: [],
        timer: 0
    }),
    mutations: {
        ['SET_RUNNING'](state, task) {
            let updateTask = []
            if (task === null) {
                if (state.running) {
                    state.running.changeStatus('stopping')
                    updateTask.push(state.running)
                    state.running = null
                }
            } else {
                if (state.running && state.running.uid === task.uid) {
                    task.changeStatus('stopping');
                    state.running = null;
                } else {
                    if (state.running) {
                        state.running.changeStatus('stopping')
                        updateTask.push(state.running)
                    }
                    task.changeStatus('running');
                    state.running = task;
                }
                updateTask.push(task)
            }
            updateTask.forEach(t => {
                let index = state.tasks.map(x => x.uid).indexOf(t.uid)
                Vue.set(state.tasks, index, t);
            })
        },
        ['SET_TASKS'](state, tasks) {
            state.tasks = tasks;
        },
        ['ADD_TASK'](state, task) {
            state.tasks.unshift(task);
            task.check();
            if (task.isRunning()) {
                state.running = task;
            }
        },
        ['UPDATE_TASK'](state, task) {
            task.updating = !task.force;
            delete task.force
            let index = state.tasks.map(x => x.uid).indexOf(task.uid);
            if (index >= 0) {
                Vue.set(state.tasks, index, task);
            } else {
                state.tasks.push(task)
            }
        },
        ['REMOVE_TASK'](state, task) {
            let index = state.tasks.map(x => x.uid).indexOf(task.uid);
            state.tasks.splice(index, 1);
        }
    },
    actions: {},
    getters: {}
}
