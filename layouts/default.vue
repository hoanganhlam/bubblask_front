<template>
    <div v-bind:class="{'has-custom': $route.path === '/'}" v-bind:style="settings.color">
        <header v-if="!isRunning && !$route.path.includes('/workspace')" class="header">
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <n-link class="navbar-item logo" to="/">
                        <img src="/logo.svg" alt="Bubblask">
                        <span class="primary">BUBBLASK</span>
                        <span class="second">.com</span>
                    </n-link>
                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
                       @click="burgerActive = !burgerActive">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div class="navbar-menu" v-bind:class="{'is-active' : burgerActive}">
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div>
                                <span class="field">Total: </span>
                                <span class="value">{{ displayTasks.length }}</span>
                            </div>
                        </div>
                        <div class="navbar-item">
                            <div>
                                <span class="field">Time: </span>
                                <span class="value">{{ totalTime }}m</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <div v-bind:class="{'main-content': !isRunning}">
            <div class="sidebar" v-if="!isRunning" v-bind:class="{'active': forceSidebar}">
                <aside class="menu">
                    <div class="menu-child">
                        <ul class="menu-list">
                            <li>
                                <b-tooltip position="is-right" label="Leader board">
                                    <n-link to="/leaderboard"
                                            v-bind:class="{'is-active': $route.path === '/leaderboard'}">
                                        <x-icon name="poll"></x-icon>
                                    </n-link>
                                </b-tooltip>
                            </li>
                            <li>
                                <b-tooltip position="is-right" label="Board">
                                    <n-link to="/board" v-bind:class="{'is-active': $route.path === '/board'}">
                                        <x-icon name="board"></x-icon>
                                    </n-link>
                                </b-tooltip>
                            </li>
                        </ul>
                    </div>
                    <div class="menu-child">
                        <ul class="menu-list">
                            <li v-if="currentUser">
                                <b-tooltip position="is-right" label="Setting">
                                    <client-only>
                                        <b-dropdown class="elm" position="is-top-right" :trap-focus="true">
                                            <template slot="trigger" class="clickable">
                                                <x-icon name="cogs"></x-icon>
                                            </template>
                                            <b-dropdown-item custom>
                                                <Options v-model="settings"></Options>
                                            </b-dropdown-item>
                                        </b-dropdown>
                                    </client-only>
                                </b-tooltip>
                            </li>
                            <li>
                                <b-tooltip position="is-right" label="Strict Mode">
                                    <label class="elm b-checkbox checkbox">
                                        <input type="checkbox" v-model="strictTemp">
                                    </label>
                                </b-tooltip>
                            </li>
                            <li v-if="!Boolean(currentUser)">
                                <x-dropdown :can-close="['escape']" class="elm" position="is-top-right"
                                            :force-active="openAuth" @active-change="openLogin($event)">
                                    <div slot="trigger" ref="lgButton">
                                        <x-icon name="account"/>
                                    </div>
                                    <div class="dropdown-item" style="min-width: 335px">
                                        <div class="notification is-warning">Login to manage and track your work!</div>
                                        <div class="field" v-if="!logging">
                                            <label class="label">Username</label>
                                            <div class="control">
                                                <label>
                                                    <input v-model="form.username" class="input" type="text"
                                                           placeholder="Username"/>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="field" v-if="!logging">
                                            <div class="field-body">
                                                <div class="field">
                                                    <label class="label">Firstname</label>
                                                    <b-input v-model="form.first_name" type="text" placeholder="John"/>
                                                </div>
                                                <div class="field">
                                                    <label class="label">Lastname</label>
                                                    <b-input v-model="form.last_name" type="text" placeholder="Due"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label class="label">Email</label>
                                            <div class="control has-icons-right">
                                                <b-input v-model="form.email" type="email" placeholder="Email"/>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label class="label">Password</label>
                                            <div class="control has-icons-right">
                                                <b-input type="password" v-model="form.password" password-reveal
                                                         placeholder="Password"/>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="level is-mobile">
                                                <div>
                                                    <div class="field has-addons">
                                                        <div class="control">
                                                            <div class="button" @click="openLogin(false)">
                                                                <x-icon name="close"/>
                                                            </div>
                                                        </div>
                                                        <div class="control">
                                                            <div class="button" @click="logging = !logging">
                                                                <span>{{ logging ? 'Register' : 'Login' }}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="button is-primary" @click="handleSubmit">
                                                    <span>{{ logging ? 'Login' : 'Register' }}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="field" v-if="notify.msg">
                                            <div
                                                :class="`content notification ${notify.ssf ? 'is-light': 'is-danger'}`">
                                                <p v-if="typeof notify.msg === 'string'">{{ notify.msg }}</p>
                                                <ul v-else>
                                                    <li v-for="m in notify.msg">{{ m }}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </x-dropdown>
                            </li>
                            <li v-else>
                                <b-tooltip position="is-right" label="Report">
                                    <n-link to="/me">
                                        <x-icon name="report"></x-icon>
                                    </n-link>
                                </b-tooltip>
                            </li>
                            <li v-if="currentUser && $route.path === '/me'">
                                <b-tooltip position="is-right" label="Logout">
                                    <div class="elm" @click="logout()">
                                        <x-icon name="logout"></x-icon>
                                    </div>
                                </b-tooltip>
                            </li>
                        </ul>
                    </div>
                </aside>
                <div class="button sidebar-control" @click="forceSidebar = !forceSidebar">
                    <x-icon :name="forceSidebar ? 'chevron-left' : 'chevron-right'"></x-icon>
                </div>
            </div>
            <main class="main">
                <nuxt class="main-body"/>
                <footer class="footer" v-if="!isRunning">
                    <div class="container small">
                        <div class="level is-mobile">
                            <div class="level-left">
                                <div class="buttons">
                                    <div class="button is-text">About</div>
                                    <n-link to="/privacy" class="button is-text">Privacy</n-link>
                                </div>
                            </div>
                            <div class="level-right">
                                <p><strong>Made</strong> with ❤️</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
        <board-bar/>
    </div>
</template>

<script>
import Avatar from "../components/Avatar";
import BInput from "../components/input/Input";
import Options from "../components/options";
import {debounce, cloneDeep} from "lodash"
import {Task} from "~/plugins/task";
import Template from "../pages/board/index";
import BoardBar from "@/components/BoardBar";

export default {
    components: {BoardBar, Template, BInput, Avatar, Options},
    data() {
        return {
            colors: [],
            burgerActive: false,
            logging: true,
            form: {
                email: null,
                password: null,
                username: null,
                first_name: null,
                last_name: null
            },
            settings: null,
            notify: {
                msg: null,
                ssf: true
            },
            is_online: true,
            strictTemp: false,
            forceSidebar: true
        }
    },
    methods: {
        async logout() {
            await this.$auth.logout();
            await this.$router.replace({path: '/'});
            await this.fetchTasks();
        },
        async handleSubmit() {
            if (this.logging) {
                await this.$auth.login({
                    email: this.form.email,
                    password: this.form.password
                }).then(res => {
                    if (res) {
                        this.fetchTasks();
                        this.notify.msg = "Login successfully :D";
                    } else {
                        this.notify.msg = "Login Failed :(";
                        this.notify.ssf = false;
                    }
                })
            } else {
                this.$axios.post('/auth/rest-auth/registration/', {
                    ...this.form,
                    password1: this.form.password,
                    password2: this.form.password
                }).then((res) => {
                    if (res) {
                        this.logging = true;
                        this.notify.msg = "Register successfully, please login!";
                    } else {
                        this.notify.msg = "Register Failed :(";
                        this.notify.ssf = false;
                    }
                }).catch(error => {
                    let fields = Object.keys(error.response.data);
                    this.notify.msg = [];
                    fields.forEach(field => {
                        this.notify.msg.push(`${field} - ${error.response.data[field][0]}`)
                    });
                    this.notify.ssf = false;
                });
            }
            let _this = this;
            setTimeout(function () {
                _this.notify = {msg: null, ssf: true}
            }, 2000)
        },
        async setStrict(val) {
            if (this.currentUser) {
                await this.$axios.$put(`/auth/users/${this.currentUser.username}/`, {
                    is_strict: val
                })
            }
            this.$store.commit('config/SET_STRICT', val);
            this.settings.timer.is_strict = val;
        },
        async fetchTasks() {
            await this.$store.commit('task/SET_TASKS', []);
            if (this.currentUser) {
                await this.$axios.$get('/task/tasks/', {
                    params: {
                        board: this.gb && this.gb.kind !== 'GHOST' ? this.gb.id : undefined,
                        page_size: 100,
                        statuses: ['pending', 'running', 'stopping'].toString(),
                        user: this.currentUser.id
                    }
                }).then(async (res) => {
                    for (let i = 0; i < res.results.length; i++) {
                        await this.$store.commit('task/ADD_TASK', new Task({
                            ...res.results[i],
                            board: res.results[i]['board_id'],
                            parent: res.results[i]['parent_id'],
                            user: res.results[i]['user'],
                            assignee: res.results[i]['assignee'],
                        }));
                    }
                })
            } else {
                const _this = this;
                const syncDB = async function () {
                    _this.$indexedDB.readAll(function (cursor) {
                        if (!['complete', 'stopped'].includes(cursor.value.status)) {
                            _this.$store.commit('task/ADD_TASK', new Task(cursor.value));
                        }
                    });
                };
                _this.$indexedDB.open(
                    syncDB,
                    () => {
                    },
                    () => {
                    }, "title", "uid", []);
            }
        },
        async push_late() {
            let needUpdate = this.$store.state.task.tasks.filter(x => x.update && !x.updating);
            for (let i = 0; i < needUpdate.length; i++) {
                await this.$store.commit('task/UPDATE_TASK', {
                    ...needUpdate[i],
                    updating: true
                });
                let res = null;
                let task = _.cloneDeep(needUpdate[i]);
                if (this.gb && this.gb.kind !== "GHOST") {
                    task.board = this.gb;
                }
                if (this.currentUser) {
                    if (task.parent === 0) {
                        task.parent = null;
                    }
                    if (task.id) {
                        if (this.currentUser.id === task.user.id || (task.board && task.assignee && this.currentUser.id === task.assignee.id)) {
                            res = await this.$axios.$put(`/task/tasks/${task.id}/`, this.cleanData(task));
                        }
                    } else {
                        res = await this.$axios.$post("/task/tasks/", this.cleanData(task));
                    }
                } else {
                    await this.$indexedDB.put(task);
                    res = {
                        id: task.uid
                    }
                }
                if (res) {
                    task.id = res.id;
                    task.force = true;
                    task.update = false;
                    task.updating = false;
                    if (res.parent === null) {
                        res.parent = 0
                    }
                    task.user = res['user'];
                    if (this.gb && this.gb.kind !== "GHOST") {
                        task.board = this.gb.id;
                    }
                    await this.$store.commit('task/UPDATE_TASK', task);
                }
            }
        },
        awakeMe() {
            if (!this.is_online || this.currentUser === null) return;
            let dead_time_str = localStorage.getItem('time_off');
            let now = new Date();
            if (!dead_time_str) {
                let oldDateObj = new Date();
                let newDateObj = new Date();
                newDateObj.setTime(oldDateObj.getTime() + (5 * 60 * 1000));
            } else {
                let dead_time = new Date(dead_time_str);
                if (now > dead_time) {
                    this.$axios.$put(`/auth/users/${this.currentUser.username}/`, {
                        status: "offline"
                    }).then(() => {
                        this.is_online = false;
                    })
                }
            }
        }
    },
    created() {
        this.settings = cloneDeep(this.$store.state.config.settings);
        this.strictTemp = this.settings && this.settings.timer ? this.settings.timer.is_strict : false;
    },
    computed: {
        displayTasks() {
            return this.$store.state.task.tasks.filter(x => !['stopped', 'complete'].includes(x.status));
        },
        totalTime() {
            let out = 0;
            if (this.settings) {
                this.displayTasks.forEach(task => {
                    out = out + this.settings.timer.tomato * task.interval;
                })
            }
            return out;
        },
        gb() {
            return this.$store.state.config.board
        },
        isRunning() {
            return Boolean(this.$store.state.task.running);
        },
        openAuth() {
            return this.$store.state.auth.openAuth
        }
    },
    watch: {
        currentUser() {
            this.settings = cloneDeep(this.$store.state.config.settings);
            this.fetchTasks();
        },
        async gb() {
            await this.fetchTasks();
        },
        is_online() {
            if (this.is_online) {
                this.$axios.$put(`/auth/users/${this.currentUser.username}/`, {
                    status: "online"
                });
            }
        },
        strictTemp() {
            this.setStrict(this.strictTemp);
        },
    },
    async mounted() {
        if (process['client']) {
            let _this = this;
            await this.fetchTasks();
            setInterval(function () {
                _this.push_late();
                _this.awakeMe();
            }, 800);
            window.onmousemove = debounce(function () {
                _this.is_online = true;
                let oldDateObj = new Date();
                let newDateObj = new Date();
                newDateObj.setTime(oldDateObj.getTime() + (5 * 60 * 1000));
                localStorage.setItem('time_off', newDateObj.toISOString());
            }, 1000);
            // Track
            window.fhApp = 'bubblask';
            window.fhStyle = {
                left: '4.25rem',
                right: 'unset',
                bottom: '0'
            }
            let a = document.createElement("script");
            a.type = "text/javascript";
            a.src = 'https://featurehub.co/analytic.js';
            document.head.appendChild(a);
            let b = document.createElement("script");
            b.type = "text/javascript";
            b.src = 'https://featurehub.co/embed.js';
            document.head.appendChild(b);
        }
    }
}
</script>

<style lang="scss">
.group-selector {
    min-width: 300px;

    .header {
        border-bottom: 1px solid #DDD;

        .media + .media {
            border-top: 0;
            padding-top: 0;
        }

        .button.is-static {
            cursor: auto;
        }
    }

    .list {
        margin-bottom: 0;
        box-shadow: unset;
    }

    .media {
        padding: .75rem 1rem;
        cursor: pointer;

        .is-expanded {
            width: 100%;
        }

        .media-content {
            line-height: 1;
        }
    }

    .media + .media {
        margin-top: 0;
    }
}

.ws-members {
    position: fixed;
    right: .75rem;
    bottom: 0;
    min-width: 320px;
    background: #FFFFFF;
    padding: .375rem;
    box-shadow: 0 1px 5px 0 rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.02);
    display: flex;
    flex-direction: column;

    .header {


        .button {

        }
    }

    .members {
        flex: 1;
        position: relative;
        margin-top: .75rem;

        .wrapper {
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            overflow: auto;
            padding-right: .5rem;
            margin-right: -.5rem;

            &::-webkit-scrollbar {
                width: 3px;
            }

            &::-webkit-scrollbar-track {
                background: #f1f1f1;
            }

            &::-webkit-scrollbar-thumb {
                background: #cacbd1;
            }
        }
    }

    .level + .level {
        border-top: 1px solid #f0f0f030;
        margin-top: .5rem;
        padding-top: .5rem;
    }

    .level:not(:last-child) {
        margin-bottom: 0;
    }
}

.widget_title {
    font-weight: bold;
    font-size: 16px;

    &:not(:last-child) {
        margin-bottom: 1rem;
    }
}

.has-custom {
    .button.is-primary {
        background: var(--btn-color);
        color: var(--btn-text-color);
    }

    .hero.is-primary {
        border-bottom: 1px solid #EEE;
        background-size: cover;
        background: var(--bg-color-primary);
        color: var(--bg-color-primary-text);

        &:not(.is-fullheight) {
            min-height: calc(50vh - 49px);
        }

        .button.is-text,
        .subtitle,
        .title {
            color: var(--bg-color-primary-text);
        }

        .button.is-text:hover {
            background: unset;
        }

        .timer {
            color: var(--bg-color-primary-text);

            .title {
                color: var(--bg-color-primary-text) !important;
            }
        }
    }

    .hero.is-secondary {
        background: var(--bg-color-secondary);

        a {
            color: var(--link-color);
        }

        .task {
            margin-bottom: .5rem;

            .notification {
                background: var(--task-color);
            }

            color: var(--task-text-color);
        }
    }
}

@media screen and (max-width: 1023px) {
    .has-custom {
        .navbar-menu {
            background-color: transparent;
            box-shadow: unset;
        }
    }
}
</style>
