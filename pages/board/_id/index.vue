<template>
    <div class="board-detail">
        <div class="hero tree-task">
            <div class="hero-body">
                <div class="container">
                    <div class="columns">
                        <div class="column is-4">
                            <n-link to="/board" class="button is-fullwidth is-light" style="margin-bottom: 1.5rem;">
                                <x-icon name="chevron-left"></x-icon>
                                <span>Back</span>
                            </n-link>
                            <div class="media" style="margin-bottom: 1rem">
                                <div class="media-left" v-if="board.media || updating">
                                    <avatar class="is-48x48" v-model="board.media" :can-update="updating"/>
                                </div>
                                <div class="media-content">
                                    <ce :editable="updating" class="title" elm="h1" v-model="board.title"></ce>
                                </div>
                            </div>
                            <div class="notification is-light" v-if="updating || board.description">
                                <ce :editable="updating" elm="p"
                                    v-model="board.description"
                                    placeholder="Description"/>
                            </div>
                            <div class="columns is-variable is-2 is-mobile"
                                 v-if="currentUser && currentUser.id === board.user">
                                <div class="column" v-if="!updating && board['is_interface']">
                                    <div class="button is-fullwidth is-primary" @click="useBoard">Clone</div>
                                </div>
                                <div class="column" v-if="!updating && !board['is_interface']">
                                    <div class="button is-fullwidth is-primary" @click="launchBoard">Launch</div>
                                </div>
                                <div class="column" v-if="updating">
                                    <div class="button is-fullwidth" @click="handleUpdate">
                                        <x-icon name="check"></x-icon>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="button is-fullwidth" @click="updating = !updating">
                                        <x-icon :name="!updating ? 'pen' : 'close'"></x-icon>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="level is-mobile" v-if="updating">
                                <div class="level-left">
                                    <div class="field" v-if="board.parent === null">
                                        <b-switch :rounded="false" v-model="board['is_interface']">Template</b-switch>
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
                                                    <b-switch :rounded="false"
                                                              v-model="board.settings['is_public']"></b-switch>
                                                </div>
                                            </div>
                                            <div class="level is-mobile">
                                                <div class="level-left">Team</div>
                                                <div class="level-right">
                                                    <b-switch :rounded="false"
                                                              v-model="board.settings['is_team']"></b-switch>
                                                </div>
                                            </div>
                                            <div class="field"
                                                 v-if="!board.settings['is_public'] && board.settings['is_team']">
                                                <b-input expanded placeholder="Password"
                                                         v-model="board.settings.password"></b-input>
                                                <p class="help">Use password to join!</p>
                                            </div>
                                            <div class="level is-mobile">
                                                <div class="level-left">Readonly</div>
                                                <div class="level-right">
                                                    <b-switch :rounded="false"
                                                              v-model="board.settings['is_readonly']"></b-switch>
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
                                <b-tag-input icon="tag" placeholder="Hash tag" v-model="board.text_tags"/>
                            </div>
                            <task-board :tasks="storeTasks" :board="board" :readonly="updating"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Avatar from "../../../components/Avatar";
import BTagInput from "../../../components/taginput/Taginput";
import BInput from "../../../components/input/Input";
import TaskBoard from "../../../components/TaskBoard";
import BDropdownItem from "../../../components/dropdown/DropdownItem";
import {Task} from "@/plugins/task";

export default {
    name: "TemplateDetail",
    components: {BDropdownItem, TaskBoard, BInput, BTagInput, Avatar},
    async fetch() {
        if (this.$route.params.id !== 'visual') {
            this.board = await this.$axios.$get(`/task/boards/${this.$route.params.id}/`);
            let rp = await this.$axios.$get('/task/tasks/', {
                params: {
                    board: this.board.id,
                    page_size: 100
                }
            });
            this.board.tasks = rp.results;
        }
        this.board = {
            ...this.board,
            text_tags: this.board['hash_tags'] ? this.board['hash_tags'].map(x => x.title) : [],
            settings: this.board.settings ? this.board.settings : {}
        }
        this.boardSlug = this.board['slug'];
    },
    data() {
        return {
            updating: false,
            board: {
                title: "Your Work",
                description: "Manage your task on a tree!",
                slug: null
            },
            boardSlug: null,
        }
    },
    head() {
        return {
            title: this.board.title + ' - Self Study - Tasks and Steps'
        }
    },
    computed: {
        storeTasks() {
            if (process['server']) {
                return this.board.tasks.map(x => new Task({
                    ...x,
                    board: x['board_id'],
                    parent: x['parent_id'],
                    user: x['user_id'],
                }))
            }
            return this.hierarchy(this.$store.state.task.tasks, {idKey: 'id', parentKey: 'parent'}).filter(x => {
                if (this.board.id) {
                    return x.board === this.board.id && x.id;
                } else {
                    return x.board === null;
                }
            });
        },
        readonly() {
            if (this.currentUser) {
                if (this.board.id) {
                    if (this.currentUser.id === this.board.user) {
                        return !this.updating;
                    } else if (!this.board.settings['is_readonly']) {
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
        useBoard() {
            this.$axios.$post(`/task/boards/${this.board.id}/clone/`).then(res => {
                this.$router.replace({path: `/board/${res.slug}`})
            }).catch(() => {

            })
        },
        launchBoard() {
        },
        async syncTask() {
            if (!this.board.tasks) return;
            for (let i = 0; i < this.board.tasks.length; i++) {
                await this.$store.commit('task/ADD_TASK', new Task({
                    ...this.board.tasks[i],
                    board: this.board.tasks[i]['board_id'],
                    parent: this.board.tasks[i]['parent_id'],
                    user: this.board.tasks[i]['user_id'],
                }));
            }
        }
    },
    watch: {
        'board.tasks': {
            deep: true,
            handler: function () {
                this.syncTask();
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

    .section:first-child {
        .buttons {
            justify-content: center;
        }
    }
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
            padding: 0 .75rem .25rem;

            .task.is-active {
                margin: 0 0 .75rem;
            }
        }

        .card {
            .card-content {
                padding: 0;
            }
        }

        .note {
            margin: 0 0 1rem 0;
        }

        &.is-active {

            .label {
                margin-left: .75rem;
            }
        }

        .notification {
            padding: .75rem;
        }

        .field .label {
            padding: 0 .5rem;
        }
    }
}
</style>
