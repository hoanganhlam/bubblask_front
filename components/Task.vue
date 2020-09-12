<template>
    <div class="task" v-if="task" v-bind:class="{'is-active': updateTree}">
        <div :id="`task-${task.id}`">
            <transition name="fade">
                <div class="notification media"
                     v-bind:class="{'is-warning': task.status === 'running'}">
                    <div class="media-left">
                        <div class="button" v-if="tree" @click="editing = !editing; updateTree = false"
                             v-bind:class="{'is-static': !children || children.length === 0}">
                            <x-icon name="tree"/>
                        </div>
                        <div v-else class="button is-small" @click="task_done()"
                             v-bind:class="{'is-static': ['stopped', 'complete'].includes(task.status)}">
                            <x-icon name="check"/>
                        </div>
                    </div>
                    <div class="media-content" @click="dblClick">
                        <ce placeholder="Untitled" elm="h4" class="title"
                            :editable="task.status !== 'running' && !readonly" @input="on_input()"
                            v-model="task.title"></ce>
                        <small v-if="tree" class="field">{{ task.interval * task.tomato }}m</small>
                        <b-rate :disabled="!editing || readonly" v-else class="is-small"
                                v-model="task.settings.priority" @input="setPriority"/>
                    </div>
                    <div class="media-right clickable" v-if="!['stopped', 'complete'].includes(task.status) && !tree">
                        <div class="buttons" v-if="!readonly">
                            <div class="button is-hidden-mobile is-text">
                                {{ task.times.length }} / {{ task.interval }}
                            </div>
                            <div v-if="task.status !== 'running'" class="button is-text is-hidden-mobile">
                                {{ fancyTimeFormat(task.totalTimeLeft()) }}
                            </div>
                            <div class="button" @click="task_run()">
                                <x-icon class="is-medium"
                                        :name="task.status ===  'running' ? 'pause' : 'play'"/>
                            </div>
                        </div>
                        <div v-else class="button is-small" @click="task_add">
                            <x-icon name="plus"></x-icon>
                        </div>
                    </div>
                    <div class="media-right" v-else-if="tree">
                        <b-rate :disabled="readonly" :value="task.settings.priority" @input="setPriority"></b-rate>
                    </div>
                </div>
            </transition>
            <transition name="bounce">
                <div v-if="editing" class="card">
                    <div class="card-header" v-if="task.parent && !tree">
                        <ce placeholder="Untitled" elm="h4" class="card-header-title title"
                            :editable="task.status !== 'running' && !readonly" @input="on_input()"
                            v-model="task.title"></ce>
                    </div>
                    <div class="card-content" v-if="task.parent && !tree">
                        <b-rate custom-text="Priority" :disabled="!editing" class="is-small"
                                v-model="task.settings.priority" @input="setPriority"/>
                    </div>
                    <div class="card-content">
                        <ce v-if="!tree || updateTree" @input="on_input()" elm="div" class="note" placeholder="Note"
                            allow-paste-html
                            v-model="task.description"
                            :editable="!task.isRunning() && !readonly"></ce>
                        <draggable :list="children" @change="re_order" class="tasks" v-bind="dragOptions">
                            <task v-for="child in children"
                                  :key="child.id" :value="child" :readonly="readonly" :board="board" :tree="tree"
                                  @add="handle_add" @deleted="$emit('deleted', $event)"/>
                        </draggable>
                        <div class="field" v-if="task.id && (!tree || updateTree) && !readonly">
                            <div class="button is-text is-small is-fullwidth" @click="task_add">
                                <x-icon name="plus"/>
                                <span>Add child</span>
                            </div>
                        </div>
                        <div class="field" v-if="!tree || updateTree">
                            <label class="label">Estimate</label>
                            <b-number-input
                                :disabled="task.isRunning() || readonly"
                                :min="1"
                                :max="10"
                                controlsPosition="compact"
                                expanded size="is-small" v-model="task.interval"
                                @input="on_input()"
                            />
                        </div>
                    </div>
                    <div class="card-footer" v-if="(!tree || updateTree) && !readonly">
                        <div class="card-footer-item" @click="handle_delete">
                            <x-icon name="trash"></x-icon>
                        </div>
                    </div>
                    <div v-if="(!tree || updateTree)" class="close" @click="close()">
                        <x-icon name="minimize"></x-icon>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
const _ = require("lodash");
import {Task} from "~/plugins/task";

export default {
    name: "Task",
    props: {
        value: {
            type: Object,
            default: () => {
                return {}
            }
        },
        readonly: {
            type: Boolean,
            default: false
        },
        tree: {
            type: Boolean,
            default: false
        },
        board: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    data() {
        let task = this.value;
        if (task.settings === null) {
            task.settings = {}
        }
        if (task.children && task.settings.order) {
            task.children.forEach(x => {
                x.order = x.id ? task.settings.order.indexOf(x.id) : 0
            });
            task.children.sort((a, b) => a.order - b.order);
        }
        return {
            editing: false,
            task: task,
            updateTree: false,
            children: task.children,
            fetchChild: false,
        }
    },
    computed: {
        dragOptions() {
            return {
                animation: 0,
                group: "description",
                disabled: this.readonly,
                ghostClass: "ghost"
            }
        }
    },
    watch: {
        value: {
            deep: true,
            handler: function () {
                this.task = new Task({
                    ...this.value,
                    settings: this.value.settings ? this.value.settings : {}
                });
            }
        },
        'value.children': {
            deep: true,
            handler: function (val) {
                let v = _.cloneDeep(val);
                v.forEach(x => {
                    x.order = x.id && this.task.settings.order ? this.task.settings.order.indexOf(x.id) : 0
                });
                v.sort((a, b) => a.order - b.order);
                this.children = v;
            }
        },
        task: {
            deep: true,
            handler: function () {
                this.$emit('input', {
                    ...this.task,
                    children: this.children
                });
            }
        },
        editing() {
            this.$emit('editing', this.editing);
        },
    },
    methods: {
        init() {
            this.$axios.$get('/task/tasks/', {
                params: {
                    board: this.task.board,
                    page_size: 100,
                    statuses: this.board && this.board['is_interface'] ? undefined : ['pending', 'running', 'stopping'].toString(),
                    parent: this.value.id,
                    user: this.currentUser ? this.currentUser.id : undefined
                }
            }).then(async (res) => {
                for (let i = 0; i < res.results.length; i++) {
                    await this.$store.commit('task/ADD_TASK', new Task({
                        ...res.results[i],
                        board: res.results[i]['board_id'],
                        parent: res.results[i]['parent_id'],
                        user: res.results[i]['user_id'],
                    }));
                }
            })
            this.fetchChild = true;
        },
        dblClick() {
            if (this.task.id === 0) {
                this.$emit('board-update');
            } else {
                this.editing = true;
            }
            if (this.tree) {
                this.updateTree = true;
            }
            if (!this.fetchChild && this.children.length === 0) {
                this.init();
            }
        },
        close() {
            this.updateTree = false;
            this.editing = false;
        },
        on_input: _.debounce(function () {
            if (this.task) {
                this.sendUpdate();
            }
        }, 500),
        async task_run() {
            this.playSource('audio_press');
            if (this.children.length === 0) {
                await this.$store.commit('task/SET_RUNNING', this.task);
            } else {
                this.editing = true;
            }
        },
        async task_done() {
            if (this.children.length === 0) {
                this.task.changeStatus('complete');
                await this.$store.commit('task/UPDATE_TASK', this.task);
            } else {
                this.editing = true;
            }
        },
        async task_add() {
            let st = this.$store.state.config.settings.timer;
            let task = new Task({
                tomato: st.tomato,
                update: true,
                parent: this.task.id !== 0 ? this.task.id : undefined,
                board: this.board.id
            });
            this.$emit('add', task);
        },
        async handle_add(task) {
            this.$emit('add', task);
        },
        async handle_delete() {
            await this.$axios.$delete(`/task/tasks/${this.task.id}/`);
            this.$store.commit('task/REMOVE_TASK', this.task);
            this.editing = false;
            this.$emit('deleted', this.task);
        },
        re_order() {
            this.task.settings.order = this.children.map(x => x.id);
            this.sendUpdate();
        },
        setPriority(value) {
            this.task.settings.priority = value;
            this.sendUpdate();
        },
        async sendUpdate() {
            this.task.update = true;
            await this.$store.commit('task/UPDATE_TASK', _.cloneDeep(this.task));
        }
    }
}
</script>

<style lang="scss">

</style>
