<template>
    <div class="task" v-bind:style="style">
        <div :id="`task-${task.id}`" @mousedown="handle({e: $event, task})">
            <transition name="fade">
                <div @dblclick="dblClick" class="notification media"
                     v-bind:class="{'is-warning': task.status === 'running'}">
                    <div class="media-left">
                        <div class="button is-small" @click="task_done()"
                             v-bind:class="{'is-static': ['stopped', 'complete'].includes(task.status)}">
                            <x-icon name="check"/>
                        </div>
                    </div>
                    <div class="media-content">
                        <ce placeholder="Untitled" elm="h4" class="title"
                            :editable="task.status !== 'running'" @input="on_input()"
                            v-model="task.title"></ce>
                        <small class="field">{{task.interval * task.tomato}}m</small>
                    </div>
                    <div class="media-right clickable" v-if="!['stopped', 'complete'].includes(task.status)">
                        <div class="buttons" v-if="!readonly">
                            <div class="button is-hidden-mobile is-text">
                                {{task.times.length}} / {{task.interval}}
                            </div>
                            <div v-if="task.status !== 'running'" class="button is-text is-hidden-mobile">
                                {{fancyTimeFormat(task.timeLeft())}}
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
                </div>
            </transition>
            <transition name="bounce">
                <div v-if="editing" class="card">
                    <div class="card-header" v-if="!graphing && task.parent">
                        <ce placeholder="Untitled" elm="h4" class="card-header-title title"
                            :editable="task.status !== 'running'" @input="on_input()"
                            v-model="task.title"></ce>
                    </div>
                    <div class="card-content">
                        <ce @input="on_input()" elm="p" class="note" placeholder="Note" v-model="task.description"
                            :editable="!task.isRunning()"></ce>
                        <div class="tasks" v-if="!graphing && task.children && task.children.length">
                            <task :graphing="graphing" :readonly="readonly" v-for="child in task.children"
                                  :key="child.id"
                                  :value="child"
                                  @add="handle_add"
                                  @down="handle"/>
                        </div>
                        <div class="field" v-if="task.id">
                            <div class="button is-text is-small is-fullwidth" @click="task_add">
                                <x-icon name="plus"/>
                                <span>Add child</span>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Estimate</label>
                            <b-number-input
                                :disabled="task.isRunning()"
                                :min="1"
                                :max="10"
                                controlsPosition="compact"
                                expanded size="is-small" v-model="task.interval"
                                @input="on_input()"
                            />
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="card-footer-item" @click="handle_delete">
                            <x-icon name="trash"></x-icon>
                        </div>
                    </div>
                    <div class="close" @click="editing = false">
                        <x-icon name="close"></x-icon>
                    </div>
                </div>
            </transition>
        </div>
        <div class="tasks" v-if="graphing && task.children && task.children.length">
            <task :graphing="graphing" :readonly="readonly" v-for="child in task.children" :key="child.id"
                  :value="child"
                  @down="handle" @add="handle_add" @deleted="$emit('deleted', $event)"/>
        </div>
    </div>
</template>

<script>
    const _ = require("lodash");
    import {Task} from "../plugins/task";

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
                default: false,
                type: Boolean
            },
            graphing: {
                default: false,
                type: Boolean
            },
            showChild: {
                default: false,
                type: Boolean
            }
        },
        data() {
            return {
                editing: false,
                task: this.value,
            }
        },
        watch: {
            value() {
                this.task = this.value
            },
            task: {
                deep: true,
                handler: function () {
                    this.$emit('input', this.task);
                }
            }
        },
        computed: {
            style() {
                if (this.task.temp_setting && this.graphing) {
                    return {
                        top: this.task.temp_setting.top + 'px',
                        left: this.task.temp_setting.left + 'px'
                    }
                }
                return {}
            },
        },
        methods: {
            handle(data) {
                this.$emit('down', data);
            },
            dblClick() {
                if (this.task.id === 0) {
                    this.$emit('board-update');
                } else {
                    this.editing = true;
                }
            },
            on_input: _.debounce(function () {
                if (this.task.id) {
                    this.task.updating = true;
                    this.$store.commit('task/UPDATE_TASK', _.cloneDeep(this.task));
                }
            }, 800),
            task_run() {
                this.$store.commit('task/SET_RUNNING', this.task);
            },
            task_done() {
                this.task.changeStatus('complete');
                this.$store.commit('task/UPDATE_TASK', this.task);
            },
            async task_add() {
                let st = this.$store.state.config.settings.timer
                let task = new Task({
                    tomato: st.tomato,
                    updating: true,
                    parent: this.task.id !== 0 ? this.task.id : undefined,
                    board: this.task.board
                });
                this.$emit('add', task);
            },
            async handle_add(task) {
                this.$emit('add', task);
            },
            async handle_delete() {
                await this.$axios.$delete(`/task/tasks/${this.task.id}/`)
                this.$store.commit('task/REMOVE_TASK', this.task);
                this.editing = false
                this.$emit('deleted', this.task)
            }
        }
    }
</script>

<style lang="scss">

</style>
