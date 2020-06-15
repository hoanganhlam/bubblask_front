<template>
    <div class="board">
        <div class="media" v-if="!readonly">
            <div class="media-content">
                <div class="task has-text-centered" @click="handle_add">
                    <div class="notification">
                        <x-icon name="plus"/>
                    </div>
                </div>
            </div>
            <n-link class="media-right" to="/board/visual">
                <div class="task">
                    <div class="notification">
                        <x-icon name="file-tree-outline"/>
                    </div>
                </div>
            </n-link>
        </div>
        <draggable v-if="!loading && activeTasks.length" v-model="activeTasks" v-bind="dragOptions" @change="handle_order">
            <task class="master" v-for="(task, i) in activeTasks" :key="i" :value="task" :readonly="readonly"
                  :tree="tree"
                  @add="handle_add_child" @editing="disabledDrag = $event" @deleted="$emit('deleted', $event)"/>
        </draggable>
        <div v-if="loading" class="tasks">
            <div class="task" v-for="i in 5" :key="i">
                <div class="notification media">
                    <div class="skeleton-task"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const _ = require("lodash");
    import {Task} from "../plugins/task";

    export default {
        name: "TaskBoard",
        props: {
            tasks: {
                default: () => [],
                type: Array
            },
            board: {
                default: null,
                type: Object
            },
            readonly: {
                default: false,
                type: Boolean
            },
            tree: {
                default: false,
                type: Boolean
            }
        },
        data() {
            return {
                activeTasks: [],
                disabledDrag: this.readonly,
                loading: false,
                boardSlug: this.board ? this.board.slug : null
            }
        },
        computed: {
            dragOptions() {
                return {
                    animation: 0,
                    group: "description",
                    disabled: this.disabledDrag,
                    ghostClass: "ghost"
                }
            },
            taskOrder() {
                if (this.board && this.board.id) {
                    return this.board.settings && this.board.settings.task_order ? this.board.settings.task_order : [];
                } else {
                    return this.$store.state.config.settings.task_order || [];
                }
            },
            timerSetting() {
                return this.$store.state.config.settings.timer
            },
        },
        methods: {
            init_task(val) {
                this.activeTasks = [];
                let temp = _.cloneDeep(val.filter(x => !['stopped', 'complete'].includes(x.status)));
                this.activeTasks = this.hierarchy(temp, {idKey: 'id', parentKey: 'parent'});
                this.activeTasks.forEach(x => {
                    x.order = x.id ? this.taskOrder.indexOf(x.id) : 0
                });
                this.activeTasks.sort((a, b) => a.order - b.order);
            },
            handle_order() {
                let order = this.activeTasks.map(x => x.id);
                if (this.currentUser) {
                    if (this.board && this.board.id) {
                        this.$axios.$put(`/task/boards/${this.boardSlug}/`, {
                            task_order: order
                        })
                    } else {
                        this.$axios.$put(`/auth/users/${this.currentUser.username}/`, {
                            task_order: order
                        }).then(() => {
                            this.$store.commit('config/SET_SETTING_ORDER', order);
                        })
                    }
                } else {
                    localStorage.setItem("task_order", order.toString());
                }
            },
            handle_add_child(task) {
                this.$store.commit('task/ADD_TASK', task);
                if (this.currentUser === null) {
                    this.$indexedDB.add(task);
                }
            },
            async handle_add() {
                let task = new Task({
                    tomato: this.timerSetting.tomato,
                    updating: true,
                    board: this.board ? this.board.id : null
                });
                await this.$store.commit('task/ADD_TASK', task);
                if (this.currentUser === null) {
                    await this.$indexedDB.add(task);
                }
                this.handle_order();
            }
        },
        watch: {
            tasks: {
                deep: true,
                handler: function (val, oldVal) {
                    this.init_task(val);
                    if (val.length === 0) {
                        this.loading = true;
                        setTimeout(function () {
                            this.loading = false;
                        }.bind(this), 800)
                    }
                }
            },
            readonly() {
                this.disabledDrag = this.readonly;
            }
        },
        created() {
            this.init_task(this.tasks);
        }
    }
</script>

<style scoped>

</style>
