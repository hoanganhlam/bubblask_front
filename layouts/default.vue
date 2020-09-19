<template>
    <div v-bind:class="{'has-custom': $route.path === '/'}" v-bind:style="settings.color">
        <div v-bind:class="{'main-content': !isRunning}">
            <div class="sidebar" v-if="!isRunning" v-bind:class="{'active': forceSidebar}">
                <aside class="menu">
                    <div class="menu-child">
                        <ul class="menu-list">
                            <li>
                                <n-link class="logo" to="/" v-bind:class="{'is-active': $route.path === '/'}">
                                    <img src="/logo.svg" alt="Bubblask"/>
                                </n-link>
                            </li>
                        </ul>
                    </div>
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
                        <nav class="navbar" role="navigation" aria-label="main navigation">
                            <div class="navbar-brand">
                                <div class="sound-bar navbar-item clickable" @click="playing = !playing">
                                    <div class="bars" v-if="playing">
                                        <div class="bar"></div>
                                        <div class="bar"></div>
                                        <div class="bar"></div>
                                        <div class="bar"></div>
                                        <div class="bar"></div>
                                        <div class="bar"></div>
                                        <div class="bar"></div>
                                        <div class="bar"></div>
                                        <div class="bar"></div>
                                        <div class="bar"></div>
                                    </div>
                                    <div class="button">
                                        <x-icon :name="playing ? 'pause' : 'play'"/>
                                    </div>
                                </div>
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
                                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
                                   @click="burgerActive = !burgerActive">
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                </a>
                            </div>
                            <div class="navbar-menu" v-bind:class="{'is-active' : burgerActive}">
                                <div class="navbar-end">
                                    <n-link to="/privacy" class="navbar-item">Privacy</n-link>
                                    <p class="navbar-item">Made with ❤️</p>
                                </div>
                            </div>
                        </nav>
                        <board-bar/>
                    </div>
                </footer>
            </main>
        </div>
        <div id="music_list">
            <audio controls autoplay></audio>
        </div>
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
import {SnackbarProgrammatic as Snackbar} from 'buefy';

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
            forceSidebar: true,
            playing: false
        }
    },
    methods: {
        async logout() {
            await this.$auth.logout();
            await this.$router.replace({path: '/'});
            await this.fetchTasks();
        },
        async handleSubmit() {
            this.notify = {msg: null, ssf: true}
            if (this.logging) {
                await this.$auth.login({
                    email: this.form.email,
                    password: this.form.password
                }).then(res => {
                    if (res) {
                        this.fetchTasks();
                    }
                    this.notify.msg = "LOGIN_SUCCESS";
                }).catch(() => {
                    this.notify.msg = "LOGIN_FAIL";
                    this.notify.ssf = false;
                })
            } else {
                this.$axios.post('/auth/rest-auth/registration/', {
                    ...this.form,
                    password1: this.form.password,
                    password2: this.form.password
                }).then((res) => {
                    if (res) {
                        this.logging = true;
                        this.notify.msg = "REGISTER_SUCCESS";
                    } else {
                        this.notify.msg = "REGISTER_FAILED";
                        this.notify.ssf = false;
                    }
                }).catch(error => {
                    this.notify.msg = "REGISTER_FAILED";
                    this.notify.ssf = false;
                    let fields = Object.keys(error.response.data);
                    this.notify.fields = [];
                    fields.forEach(field => {
                        this.notify.fields.push(`${field}_${error.response.data[field][0]}`)
                    });
                    this.notify.ssf = false;
                });
            }
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
        },
        initAudio() {
            const files = [
                "1vo-SrAf-cd_61Cf9gA4OTGwmQLqTcTm-",
                "17CrXGkzHXul_m3fBUj1TRI1Q6ARitLhb",
                "1hmaOuM-xv0mUl1bgDdEqJLxwpOwIdQuc",
                "144D2pyG8d-QcJ_zcZdfpmeTgkLtMVQSz",
                "18sYxO-y-tbJpzoGmFukg9qRozMcDv62o",
                "1ANCvTOiSTALtZKe9IYx4MIcQMQJ8f-fE",
                "1Hmo8dQ0W0PVKtn9DxdiPyLugbu2jnSFv",
                "1N-kmHus4ZReAb8E14K2-TWczLy34pd6H",
            ];
            // Get the audio element
            this.music_player = document.querySelector("#music_list audio");

            // function for moving to next audio file
            const _this = this;

            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            function next() {
                // Check for last audio file in the playlist
                let ran = getRandomInt(0, 7);
                // Change the audio element source
                _this.music_player.src = `https://docs.google.com/uc?export=download&id=${files[ran]}`;
            }

            // Check if the player is selected
            if (!this.music_player) {
                throw "Playlist Player does not exists ...";
            } else {
                // Start the player
                this.music_player.src = `https://docs.google.com/uc?export=download&id=${files[getRandomInt(0, 7)]}`;
                this.music_player.pause();
                // Listen for the music ended event, to play the next audio file
                this.music_player.addEventListener('ended', next, false)
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
        notify: {
            deep: true,
            handler: function () {
                if (this.notify.msg) {
                    Snackbar.open({
                        duration: 10000,
                        message: this.notify.msg,
                        type: this.notify.ssf ? 'is-success' : 'is-warning',
                    });
                }
            }
        },
        playing() {
            if (this.playing) {
                this.music_player.play()
            } else {
                this.music_player.pause()
            }
        }
    },
    async mounted() {
        if (process['client']) {
            this.initAudio();
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
            if (document.body.clientWidth < 500) {
                _this.forceSidebar = false;
            }

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
        margin-top: .25rem;

        .wrapper {
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            overflow: auto;
            padding-right: .5rem;
            margin-right: -.5rem;
            display: flex;
            flex-direction: column;

            &::-webkit-scrollbar {
                width: 3px;
            }

            &::-webkit-scrollbar-track {
                background: #f1f1f1;
            }

            &::-webkit-scrollbar-thumb {
                background: #cacbd1;
            }

            .member {
                background: #F0F0F0;
                padding: .25rem;
                border-radius: 50px;
                margin: 0 .5rem;
            }

            .chat-form {
                padding: .5rem;
                background: #F9F9F9;
            }

            .chat-box {
                flex: 1;
                position: relative;
                margin-top: 1rem;

                .media {
                    padding: 0 .5rem;

                    .media-left {
                        margin-right: .75rem;
                    }
                }

                .media + .media {
                    border-top: 0;
                    margin-top: .5rem;
                    padding-top: 0;
                }
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

.bars {
    height: 24px;
    width: 50px;
    position: relative;
}

.bar {
    background: #666;
    bottom: 1px;
    height: 3px;
    position: absolute;
    width: 3px;
    animation: sound 0ms -800ms linear infinite alternate;
}

@keyframes sound {
    0% {
        opacity: .35;
        height: 3px;
    }
    100% {
        opacity: 1;
        height: 1rem;
    }
}

.bar:nth-child(1) {
    left: 1px;
    animation-duration: 474ms;
}

.bar:nth-child(2) {
    left: 5px;
    animation-duration: 433ms;
}

.bar:nth-child(3) {
    left: 9px;
    animation-duration: 407ms;
}

.bar:nth-child(4) {
    left: 13px;
    animation-duration: 458ms;
}

.bar:nth-child(5) {
    left: 17px;
    animation-duration: 400ms;
}

.bar:nth-child(6) {
    left: 21px;
    animation-duration: 427ms;
}

.bar:nth-child(7) {
    left: 25px;
    animation-duration: 441ms;
}

.bar:nth-child(8) {
    left: 29px;
    animation-duration: 419ms;
}

.bar:nth-child(9) {
    left: 33px;
    animation-duration: 487ms;
}

.bar:nth-child(10) {
    left: 37px;
    animation-duration: 442ms;
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
