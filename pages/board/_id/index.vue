<template>
    <div class="board-detail">
        <div class="section main-body tree-task">
            <div class="container">
                <nav class="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li>
                            <n-link to="/">Bubblask</n-link>
                        </li>
                        <li>
                            <n-link to="/board">Board</n-link>
                        </li>
                        <li class="is-active">
                            <n-link :to="`/board/${board.slug}`" aria-current="page">{{ board.title }}</n-link>
                        </li>
                    </ul>
                </nav>
                <div class="columns">
                    <div class="column is-4">
                        <div class="media" style="margin-bottom: 1rem">
                            <div class="media-left" v-if="board.media || updating">
                                <b-skeleton width="96px" height="96px" active v-if="loading"></b-skeleton>
                                <avatar v-else class="is-96x96" v-model="board.media" :can-update="updating"/>
                            </div>
                            <div class="media-content">
                                <div v-if="loading">
                                    <b-skeleton width="100%" height="1rem" active/>
                                    <b-skeleton width="96px" height="1rem" active/>
                                    <b-skeleton width="96px" height="1rem" active/>
                                </div>
                                <ce v-else :editable="updating" class="title" elm="h1" v-model="board.title"/>
                            </div>
                        </div>
                        <div class="content" v-if="updating || board.description">
                            <div v-if="loading">
                                <b-skeleton width="100%" height="1rem" active/>
                                <b-skeleton width="80%" height="1rem" active/>
                                <b-skeleton width="70%" height="1rem" active/>
                            </div>
                            <ce v-else :editable="updating" elm="p"
                                v-model="board.description"
                                placeholder="Description"/>
                        </div>
                        <div class="columns is-variable is-2 is-mobile"
                             v-if="board && board.user && currentUser && currentUser.id === board.user.id">
                            <div class="column" v-if="!updating && board.kind === 'TEMPLATE'">
                                <div class="button is-fullwidth is-primary" @click="useBoard">Clone</div>
                            </div>
                            <div class="column" v-if="!updating && ['DEFAULT', 'GHOST'].includes(board.kind)">
                                <div class="button is-fullwidth is-primary" @click="launchBoard()">Launch</div>
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
                                <b-dropdown append-to-body v-model="board.kind" aria-role="list">
                                    <button class="button is-small" type="button" slot="trigger">
                                        <template>
                                            <span>{{ kinds[board.kind].title }}</span>
                                        </template>
                                        <x-icon name="chevron-down"></x-icon>
                                    </button>
                                    <b-dropdown-item v-for="val in Object.keys(kinds)" :key="val"
                                                     :value="val" aria-role="listitem">
                                        <div class="media">
                                            <div class="media-content">
                                                <h3>{{ kinds[val].title }}</h3>
                                                <small>{{ kinds[val].help }}</small>
                                            </div>
                                        </div>
                                    </b-dropdown-item>
                                </b-dropdown>
                            </div>
                            <div class="level-right">
                                <b-dropdown position="is-bottom-left" :trap-focus="true">
                                    <div slot="trigger" class="navbar-item clickable">
                                        <x-icon name="cogs"></x-icon>
                                        <span>Options</span>
                                    </div>
                                    <b-dropdown-item custom style="min-width: 300px;">
                                        <div class="level is-mobile">
                                            <div class="level-left">Enable to search</div>
                                            <div class="level-right">
                                                <b-switch :rounded="false" v-model="board.settings.allow_search"/>
                                            </div>
                                        </div>
                                        <div class="level is-mobile">
                                            <div class="level-left">Private</div>
                                            <div class="level-right">
                                                <b-switch :rounded="false" v-model="board.is_private"/>
                                            </div>
                                        </div>
                                        <div class="field" v-if="board.is_private">
                                            <b-input icon="pound" expanded v-model="board.password" type="password"
                                                     password-reveal
                                                     placeholder="Password to access"/>
                                        </div>
                                        <div class="level is-mobile">
                                            <div class="level-left">Collaborate</div>
                                            <div class="level-right">
                                                <b-switch :rounded="false" v-model="board.settings.collaborate"/>
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
                        <task-board :tasks="storeTasks" :board="board" :readonly="!updating"/>
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
import {Task} from "@/plugins/task";
import {SnackbarProgrammatic as Snackbar} from 'buefy';

export default {
    name: "TemplateDetail",
    components: {TaskBoard, BInput, BTagInput, Avatar},
    async fetch() {
        this.loading = true;
        if (this.$route.params.id !== 'visual') {
            this.board = await this.$axios.$get(`/task/boards/${this.$route.params.id}/`);
        } else {
            this.board = {
                title: "Your Work",
                description: "Manage your task on a tree!",
                slug: null
            };
        }
        let rp = await this.$axios.$get('/task/tasks/', {
            params: {
                board: this.board ? this.board.id : null,
                page_size: 100
            }
        });
        this.board.tasks = rp.results;
        this.board = {
            ...this.board,
            text_tags: this.board['hash_tags'] ? this.board['hash_tags'].map(x => x.title) : [],
            settings: this.board.settings ? this.board.settings : {}
        }
        this.boardSlug = this.board['slug'];
        this.loading = false;
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
            loading: false,
            kinds: {
                "GHOST": {
                    title: "Ghost",
                    help: "No-one can see your tasks"
                },
                "DEFAULT": {
                    title: "Default",
                    help: "Anyone can add and run workspace's tasks"
                },
                "TEMPLATE": {
                    title: "Template",
                    help: "The board can be clone but task can't run!"
                },
            }
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
                    } else if (this.board.kind === 'TEMPLATE') {
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
            const fields = ['title', 'description', 'slug', 'text_tags', 'kind', 'media', 'settings'];
            fields.forEach(field => {
                if (field === 'media' && this.board['media']) {
                    data[field] = this.board['media'].id;
                } else {
                    data[field] = this.board[field];
                }
            });
            if (this.currentUser && this.currentUser.id === this.board.user.id) {
                this.$axios.$put(`/task/boards/${this.boardSlug}/`, data).then(res => {
                    Snackbar.open({
                        message: "BOARD_UPDATE_SUCCESS",
                        type: 'is-warning',
                    });
                    if (res.slug !== this.boardSlug) {
                        this.$router.replace({path: `/board/${res.slug}`});
                        this.boardSlug = res.slug;
                    }
                }).finally(() => {
                    this.updating = false;
                })
            }
        },
        useBoard() {
            this.$axios.$post(`/task/boards/${this.board.id}/clone/`).then(res => {
                this.$router.replace({path: `/board/${res.slug}`});
                Snackbar.open({
                    message: "BOARD_CLONE_SUCCESS",
                    type: 'is-success',
                });
            }).catch(() => {
                Snackbar.open({
                    message: "BOARD_CLONE_FAILED",
                    type: 'is-danger',
                });
            })
        },
        launchBoard() {
            this.join(this.board).then(() => {
                this.$router.replace({path: '/'})
            })
        },
        async syncTask() {
            if (!this.board.tasks) return;
            for (let i = 0; i < this.board.tasks.length; i++) {
                await this.$store.commit('task/ADD_TASK', new Task({
                    ...this.board.tasks[i],
                    board: this.board.tasks[i]['board_id'],
                    parent: this.board.tasks[i]['parent_id'],
                    user: this.board.tasks[i]['user'],
                    assignee: this.board.tasks[i]['assignee'],
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

        .level {
            padding: 0 .75rem .25rem;
        }
    }
}
</style>
