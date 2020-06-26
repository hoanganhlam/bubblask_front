<template>
    <div class="board-detail">
        <div class="section tree-task">
            <div class="container">
                <div v-if="board.media || updating" style="margin-bottom: 1rem">
                    <avatar v-model="board.media" :can-update="updating" image-size="thumb_728_200"/>
                </div>
                <div class="media subsection">
                    <div class="media-content">
                        <ce :editable="updating" class="title is-1" elm="h1" v-model="board.title"></ce>
                    </div>
                    <div class="media-right" v-if="currentUser && currentUser.id === board.user">
                        <div class="button is-small" v-if="!updating && board.is_interface" @click="useBoard">Use</div>
                        <div class="button is-small" v-if="!updating && !board.is_interface" @click="launchBoard">
                            Launch
                        </div>
                        <div class="button is-small" @click="handleUpdate" v-if="updating">
                            <x-icon name="check"></x-icon>
                        </div>
                        <div class="button is-small is-text" @click="updating = !updating">
                            <x-icon :name="!updating ? 'pen' : 'close'"></x-icon>
                        </div>
                    </div>
                </div>
                <ce v-if="updating || board.description" :editable="updating" class="subtitle" elm="p"
                    v-model="board.description"
                    placeholder="Description"/>
                <div class="level is-mobile" v-if="updating">
                    <div class="level-left">
                        <div class="field" v-if="board.parent === null">
                            <b-switch :rounded="false" v-model="board.is_interface">Template</b-switch>
                        </div>
                    </div>
                    <div class="level-right">
                        <b-dropdown position="is-bottom-left" :trap-focus="true">
                            <div slot="trigger" class="navbar-item clickable">
                                <x-icon name="cogs"></x-icon>
                                <span>Privacy</span>
                            </div>
                            <b-dropdown-item custom style="min-width: 300px;">
                                <div class="level is-mobile">
                                    <div class="level-left">Public</div>
                                    <div class="level-right">
                                        <b-switch :rounded="false" v-model="board.settings.is_public"></b-switch>
                                    </div>
                                </div>
                                <div class="level is-mobile">
                                    <div class="level-left">Team</div>
                                    <div class="level-right">
                                        <b-switch :rounded="false" v-model="board.settings.is_team"></b-switch>
                                    </div>
                                </div>
                                <div class="field" v-if="!board.settings.is_public && board.settings.is_team">
                                    <b-input expanded placeholder="Password"
                                             v-model="board.settings.password"></b-input>
                                    <p class="help">Use password to join!</p>
                                </div>
                                <div class="level is-mobile">
                                    <div class="level-left">Readonly</div>
                                    <div class="level-right">
                                        <b-switch :rounded="false" v-model="board.settings.is_readonly"></b-switch>
                                    </div>
                                </div>
                            </b-dropdown-item>
                        </b-dropdown>
                    </div>
                </div>
                <div class="field" v-if="updating">
                    <b-input icon="label" v-model="board.slug" placeholder="Board Slug"/>
                </div>
                <div class="field" v-if="updating">
                    <b-taginput icon="tag" placeholder="Hash tag" v-model="board.text_tags"></b-taginput>
                </div>
                <task-board :tasks="flat_tasks" :board="board" :readonly="readonly" tree @deleted="handleDeleted"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Avatar from "../../../components/Avatar";
    import BTaginput from "../../../components/taginput/Taginput";
    import BInput from "../../../components/input/Input";
    import {Task} from "../../../plugins/task";
    import TaskBoard from "../../../components/TaskBoard";
    import BDropdownItem from "../../../components/dropdown/DropdownItem";

    export default {
        name: "TemplateDetail",
        components: {BDropdownItem, TaskBoard, BInput, BTaginput, Avatar},
        async asyncData({$axios, params}) {
            let board = {
                title: "Your Work",
                description: "Manage your task on a tree!"
            };
            let query = {};
            if (params.id !== 'visual') {
                board = await $axios.$get(`/task/boards/${params.id}/`);
                query.board = board.id;
            }
            let flat_tasks = await $axios.$get('/task/tasks/', {
                params: query
            });
            return {
                flat_tasks,
                board: {
                    ...board,
                    text_tags: board.hash_tags ? board.hash_tags.map(x => x.title) : [],
                    settings: board.settings ? board.settings : {}
                },
                boardSlug: board.slug
            }
        },
        data() {
            return {
                updating: false
            }
        },
        head() {
            return {
                title: this.board.title + ' - Self Study - Tasks and Steps'
            }
        },
        computed: {
            storeTasks() {
                return this.$store.state.task.tasks.filter(x => {
                    if (this.board.id) {
                        return x.board === this.board.id && x.id;
                    } else {
                        return x.board === null;
                    }
                });
            },
            readonly() {
                if (this.board.is_interface) {
                    return true;
                }
                if (this.currentUser) {
                    if (this.board.id) {
                        if (this.currentUser.id === this.board.user) {
                            return !this.updating;
                        } else if (!this.board.settings.is_readonly) {
                            return !this.updating;
                        }
                    } else {
                        return !this.updating;
                    }
                }
                return true;
            }
        },
        methods: {
            handleUpdate() {
                let data = {};
                const fields = ['title', 'description', 'slug', 'text_tags', 'is_interface', 'media', 'settings'];
                fields.forEach(field => {
                    if (field === 'media' && this.board['media']) {
                        data[field] = this.board['media'].id;
                    } else {
                        data[field] = this.board[field];
                    }

                });
                if (this.currentUser && this.currentUser.id === this.board.user) {
                    this.$axios.$put(`/task/boards/${this.boardSlug}/`, data).then(res => {
                        if (res.slug !== this.boardSlug) {
                            this.$router.replace({path: `/board/${res.slug}`});
                            this.boardSlug = res.slug;
                        }
                    }).then(() => {
                        this.updating = false;
                    })
                }
            },
            handleDeleted(task) {
                let index = this.flat_tasks.map(x => x.id).indexOf(task.id);
                this.flat_tasks.splice(index, 1);
            },
            useBoard() {
                this.$axios.$post(`/task/boards/${this.board.id}/clone/`).then(res => {
                    this.$router.replace({path: `/board/${res.slug}`})
                }).catch(() => {

                })
            },
            launchBoard() {

            }
        },
        watch: {
            storeTasks: {
                deep: true,
                handler: function () {
                    let ids = this.flat_tasks.map(x => x.id);
                    this.storeTasks.forEach(item => {
                        if (!ids.includes(item.id)) {
                            this.flat_tasks.unshift(item);
                        }
                    })
                }
            }
        },
        mounted() {
            this.toTop();
        }
    }
</script>

<style lang="scss">
    .board-detail {
        min-height: calc(100vh - 40px);
        display: flex;
        flex-direction: column;
    }

    .section {
        flex: 0;
    }

    .tree-task {
        padding: 1rem 0;
        flex: 1;

        .task.master .task {
            position: relative;
        }

        .task {
            margin-bottom: .75rem;

            .tasks:not(:empty) {
                padding: 0 1rem .25rem;

                .task.is-active {
                    margin: 0 0 .75rem;
                }
            }

            .card {
                position: unset;
                box-shadow: unset;
                border: 0;
                .card-content {
                    padding: 0;
                }
            }

            .note {
                margin: 0;
            }

            &.is-active {
                margin: 0 -.75rem .75rem;
                padding: .75rem;
                background: #FAFAFA;

                .notification,
                .card {
                    background: #FAFAFA;
                }

                .tasks:not(:empty) {
                    padding: 0;
                }
            }

            .notification {
                padding: 1rem;
            }
        }
    }
</style>
