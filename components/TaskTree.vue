<template>
    <div class="task">
        <div>
            <div class="notification media">
                <div class="media-content">
                    <h4 class="title">{{task.title}}</h4>
                    <small class="field">{{task.interval * task.tomato}}m</small>
                </div>
                <div class="media-right clickable" v-if="!['stopped', 'complete'].includes(task.status)">
                    <div class="button is-small" @click="task_add">
                        <x-icon name="plus"></x-icon>
                    </div>
                </div>
            </div>
        </div>
        <div class="tasks" v-if="task.children && task.children.length">
            <task-graph v-for="child in task.children" :key="child.id" :value="child" @down="handle" @add="handle_add"
                        @deleted="$emit('deleted', $event)"/>
        </div>
    </div>
</template>

<script>
    import {Task} from "../plugins/task";

    export default {
        name: "Task",
        props: {
            value: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        },
        data() {
            return {
                task: this.value,
            }
        },
        computed: {
            style() {
                if (this.task.temp_setting) {
                    return {
                        top: this.task.temp_setting.top + 'px',
                        left: this.task.temp_setting.left + 'px'
                    }
                }
                return {}
            },
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
            },
        },
        methods: {
            handle(data) {
                this.$emit('down', data);
            },
            async task_add() {
                let st = this.$store.state.config.settings.timer;
                let task = new Task({
                    tomato: st.tomato,
                    update: true,
                    parent: this.task.id !== 0 ? this.task.id : undefined,
                    board: this.task.board
                });
                this.$emit('add', task);
            },
            async handle_add(task) {
                this.$emit('add', task);
            },
        }
    }
</script>

<style lang="scss">

</style>
