<template>
    <div v-bind:class="{'has-custom': $route.path === '/'}" v-bind:style="settings.color">
        <header v-if="!isRunning && !$route.path.includes('/workspace')" class="header">
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="container is-fullwidth">
                    <div class="navbar-brand">
                        <n-link class="navbar-item logo" to="/">
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
                                    <span class="value">{{displayTasks.length}}</span>
                                </div>
                            </div>
                            <div class="navbar-item">
                                <div>
                                    <span class="field">Time: </span>
                                    <span class="value">{{totalTime}}m</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <div v-bind:class="{'main-content': !isRunning}">
            <div class="sidebar" v-if="!isRunning">
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
                                <b-dropdown :can-close="['escape']" class="elm" position="is-top-right"
                                            :force-active="openAuth" @active-change="openLogin($event)">
                                    <div slot="trigger">
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
                                                                <span>{{logging ? 'Register' : 'Login'}}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="button is-primary" @click="handleSubmit">
                                                    <span>{{logging ? 'Login' : 'Register'}}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="field" v-if="notify.msg">
                                            <div
                                                :class="`content notification ${notify.ssf ? 'is-light': 'is-danger'}`">
                                                <p v-if="typeof notify.msg === 'string'">{{notify.msg}}</p>
                                                <ul v-else>
                                                    <li v-for="m in notify.msg">{{m}}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </b-dropdown>
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
            </div>
            <main class="main">
                <nuxt class="main-body"/>
                <footer class="footer" v-if="!isRunning">
                    <div class="container small">
                        <div class="level is-mobile">
                            <div class="level-left">
                                <div class="buttons">
                                    <div class="button">About</div>
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
        <div class="ws-members" v-bind:style="{height: wsMinimize ? undefined : '300px'}">
            <div class="header">
                <div class="media" v-if="currentUser">
                    <div class="media-content">
                        <div class="buttons has-addons">
                            <button class="button" @click="onOpenSelect">
                                <x-icon name="chevron-down"></x-icon>
                            </button>
                            <button class="button is-selected" @click="openGroupForm(false)">
                                <b class="clickable">{{ws ? ws.name : 'Create Workspace'}}</b>
                            </button>
                        </div>
                    </div>
                    <div class="media-right">
                        <div class="buttons">
                            <div class="button" @click="wsMinimize = !wsMinimize">
                                <x-icon :name="wsMinimize ? 'maximize': 'minimize'"></x-icon>
                            </div>
                        </div>
                    </div>
                </div>
                <div @click="openLogin(true)" class="button is-fullwidth" v-else>Login to join Workspace</div>
            </div>
            <transition name="fade">
                <div v-if="!wsMinimize && ws" class="members">
                    <div class="wrapper" v-if="wsMembers.length">
                        <div class="level is-mobile" v-for="user in wsMembers" :key="user.id">
                            <div class="level-left">
                                <div class="media">
                                    <div class="media-left">
                                        <avatar :class="user.profile.extra.status" class="is-24x24"
                                                :value="user.profile.media"/>
                                    </div>
                                    <div class="media-content">
                                        <b>{{convertName(user)}}</b>
                                    </div>
                                </div>
                            </div>
                            <div class="level-right">
                                <small>{{getScore(user).toFixed(2)}}m</small>
                            </div>
                        </div>
                    </div>
                    <div class="wrapper" v-if="loadingMember">
                        <div class="level" v-for="i in 5" :key="i">
                            <div class="skeleton-user"></div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
        <b-modal :active.sync="wsActive" scroll="keep">
            <div class="container small">
                <div class="group-selector has-background-white">
                    <div class="header">
                        <div>
                            <p class="notification is-warning">Focus to work of meeting with others</p>
                        </div>
                        <div class="media">
                            <b-input expanded @input="searchWS()" v-model="wsSearch" placeholder="Enter keyword..."/>
                        </div>
                    </div>
                    <div class="list">
                        <div class="media" v-for="i in 5" :key="i" v-if="wsResponse.results[i - 1]"
                             v-bind:class="{'is-active': ws && ws.id === wsResponse.results[i - 1].id}">
                            <div class="media-content">
                                <div>
                                    <x-icon v-if="wsResponse.results[i - 1].board" name="board"
                                            class="is-small"></x-icon>
                                    <b>{{wsResponse.results[i - 1].name}}</b>
                                </div>
                                <small>By {{convertName(wsResponse.results[i - 1].user)}}</small>
                            </div>
                            <div class="media-right" v-if="ws && ws.id === wsResponse.results[i - 1].id">
                                <div class="button is-small" @click="joinWS(wsResponse.results[i - 1])">
                                    <span>Left</span>
                                    <x-icon name="logout"></x-icon>
                                </div>
                            </div>
                            <div class="media-right" v-else>
                                <b-dropdown v-if="wsResponse.results[i - 1].isPrivate" position="is-bottom-left"
                                            append-to-body aria-role="menu" trap-focus>
                                    <div class="button is-small" slot="trigger">
                                        <span>Join</span>
                                        <x-icon name="shield-lock"></x-icon>
                                    </div>
                                    <b-dropdown-item aria-role="menu-item" :focusable="false" custom>
                                        <div class="field has-addons" style="min-width: 280px;">
                                            <b-input v-model="wsPassword" expanded placeholder="Enter Password"/>
                                            <div class="control">
                                                <div class="button is-primary"
                                                     @click="joinWS(wsResponse.results[i - 1])">Join
                                                </div>
                                            </div>
                                        </div>
                                    </b-dropdown-item>
                                </b-dropdown>
                                <div v-else class="button is-small" @click="joinWS(wsResponse.results[i - 1])">
                                    <span>Join</span>
                                    <x-icon name="shield-open"></x-icon>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="has-background-light">
                        <div class="media">
                            <div class="media-left">
                                <div class="button is-static">OR</div>
                            </div>
                            <div class="media-content">
                                <b-input @input="searchCode" v-model="wsCode" placeholder="Enter Code"></b-input>
                            </div>
                        </div>
                        <div class="media">
                            <div class="media-left">
                                <div class="button is-static">OR</div>
                            </div>
                            <div class="media-content">
                                <div class="button is-fullwidth" @click="openGroupForm(true)">Create
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>
        <b-modal :active.sync="isActive" scroll="keep">
            <div class="container small">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <div class="level is-mobile" style="width: 100%">
                            <h4 class="level-left"><b>Create new workspace</b></h4>
                            <div class="level-right">
                                <div class="buttons">
                                    <div class="button is-small" @click="isActive = false">Cancel</div>
                                    <div v-if="ws" class="button is-small" @click="joinWS(ws)">Left</div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <section class="modal-card-body">
                        <div v-if="!formWS.isDone">
                            <div class="field">
                                <ce v-model="formWS.name" elm="h1" class="title" placeholder="Workspace name"></ce>
                            </div>
                            <div class="field">
                                <div class="field-body">
                                    <div class="field">
                                        <b-switch :rounded="false" size="is-medium" v-model="formWS.isPrivate">Private
                                        </b-switch>
                                    </div>
                                    <div class="field" v-if="formWS.isPrivate">
                                        <b-input expanded v-model="formWS.password" type="password" password-reveal
                                                 placeholder="Password to access workspace"/>
                                    </div>
                                </div>
                            </div>
                            <div class="field" v-if="!formWS.id">
                                <div class="field-body">
                                    <div class="field">
                                        <b-switch :rounded="false" size="is-medium" v-model="formWS.hasBoard">Board
                                        </b-switch>
                                    </div>
                                    <div class="field" v-if="formWS.hasBoard">
                                        <b-input expanded v-model="formWS.board_name" placeholder="Board name"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="formWS.isDone && wsURI" class="notification is-warning content">
                            <p>Share with your friends</p>
                            <b-input :value="wsURI"></b-input>
                        </div>
                    </section>
                    <footer class="modal-card-foot" v-if="canUpdateWS">
                        <button v-if="!formWS.isDone" class="button is-primary is-fullwidth" @click="saveWS">Save
                        </button>
                    </footer>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import BDropdownItem from "../components/dropdown/DropdownItem";
    import Avatar from "../components/Avatar";
    import BInput from "../components/input/Input";
    import BTaginput from "../components/taginput/Taginput";
    import Options from "../components/options";
    import {debounce, cloneDeep} from "lodash"
    import {Task} from "../plugins/task";
    import Template from "../pages/board/index";

    const DEFAULT_FORM = {
        name: null,
        isPrivate: false,
        password: null,
        isDone: false,
        hasBoard: false,
        boardName: null
    };

    export default {
        components: {Template, BTaginput, BInput, BDropdownItem, Avatar, Options},
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
                formWS: DEFAULT_FORM,
                isActive: false,
                wsURI: null,
                wsResponse: {
                    results: [],
                    count: 0
                },
                wsSearch: '',
                wsCode: null,
                wsLoading: true,
                wsActive: false,
                wsMinimize: true,
                wsPassword: null,
                wsMembers: [],
                settings: null,
                notify: {
                    msg: null,
                    ssf: true
                },
                loadingMember: false,
                cloneReport: {},
                is_online: true,
                strictTemp: false
            }
        },
        methods: {
            initForm(data) {
                if (data) {
                    this.formWS = cloneDeep(data);
                } else {
                    this.formWS = this.formWS = DEFAULT_FORM;
                }
                this.formWS.isDone = false;
            },
            async logout() {
                await this.$auth.logout();
                this.$router.replace({path: '/'});
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
            openGroupForm(flag) {
                if (flag) {
                    this.initForm();
                } else {
                    this.initForm(this.ws);
                }
                if (this.canUpdateWS) {
                    this.isActive = true;
                }
            },
            saveWS() {
                if (typeof this.formWS.id === "undefined") {
                    this.$axios.$post('/general/workspaces/', this.formWS).then(res => {
                        this.formWS = DEFAULT_FORM;
                        this.formWS.isDone = true;
                        this.wsURI = `https://bubblask.com?ws=${res.id}`;
                        this.joinWS(res);
                    });
                } else {
                    this.$axios.$put(`/general/workspaces/${this.formWS.id}/`, this.formWS).then(res => {
                        this.formWS = DEFAULT_FORM;
                        this.formWS.isDone = true;
                        this.wsURI = `https://bubblask.com?ws=${res.id}`;
                    });
                }
            },
            async fetchWS() {
                this.wsLoading = true;
                this.wsResponse = await this.$axios.$get('/general/workspaces/', {
                    params: {
                        search: this.wsSearch ? this.wsSearch : undefined,
                        code: this.wsCode ? this.wsCode : undefined,
                        page_size: 5
                    }
                });
                this.wsLoading = false;
            },
            searchCode: debounce(function () {
                this.wsSearch = null;
                this.fetchWS();
            }, 500),
            searchWS: debounce(function () {
                this.fetchWS();
            }, 500),
            onOpenSelect() {
                if (!this.wsActive) {
                    this.fetchWS();
                }
                this.wsActive = true;
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
                            board: this.ws && this.ws.board ? this.ws.board.id : undefined
                        }
                    }).then(async (res) => {
                        for (let i = 0; i < res.length; i++) {
                            await this.$store.commit('task/ADD_TASK', new Task(res[i]));
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
            async fetchMembers() {
                if (this.ws) {
                    this.loadingMember = true;
                    this.wsMembers = await this.$axios.$get(`/general/workspaces/${this.ws.id}/members/`);
                    this.loadingMember = false;
                } else {
                    this.wsMembers = [];
                }
            },
            async push_late() {
                let needUpdate = this.$store.state.task.tasks.filter(x => x.updating);
                for (let i = 0; i < needUpdate.length; i++) {
                    let res = null;
                    let task = _.cloneDeep(needUpdate[i]);
                    if (this.ws) {
                        task.ws = this.ws.id;
                    }
                    if (this.currentUser) {
                        console.log(this.currentUser);
                        if (task.parent === 0) {
                            task.parent = null;
                        }
                        if (task.id) {
                            if (this.currentUser.id === task.user) {
                                res = await this.$axios.$put(`/task/tasks/${task.id}/`, task);
                            }
                        } else {
                            res = await this.$axios.$post("/task/tasks/", task);
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
                        if (res.parent === null) {
                            res.parent = 0
                        }
                        task.user = res.user;
                        await this.$store.commit('task/UPDATE_TASK', task);
                    }
                }
            },
            joinWS(ws) {
                this.$axios.$post(`/general/workspaces/${ws.id}/join/`, {password: this.wsPassword}).then(res => {
                    if (res.status) {
                        if (this.ws && this.ws.id === ws.id) {
                            this.$store.commit('config/SET_WS', null);
                            this.wsMinimize = true;
                        } else {
                            this.$store.commit('config/SET_WS', ws);
                            this.wsMinimize = false;
                        }
                        this.wsActive = false;
                        this.isActive = false;
                    }
                });
            },
            getScore(user) {
                if (user && this.ws && this.cloneReport) {
                    return this.cloneReport[user.id] / 60;
                }
                return 0;
            },
            connectSocket() {
                if (this.ws) {
                    let pusher = new Pusher('eccf1067acf541fbc5d4', {
                        cluster: 'ap1'
                    });
                    let channel = pusher.subscribe(`ws_${this.ws.id}`);
                    channel.bind('change-user-score', function (data) {
                        if (data) {
                            this.cloneReport[data.user] = data.score;
                        }
                    }.bind(this));
                    channel.bind('change-user-status', function (data) {
                        if (data) {
                            let index = this.wsMembers.map(u => u.id).indexOf(data.user);
                            if (index >= 0) {
                                this.wsMembers[index].profile.extra.status = data.status;
                            }
                        }
                    }.bind(this));
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
            ws() {
                return this.$store.state.config.ws
            },
            isRunning() {
                return Boolean(this.$store.state.task.running);
            },
            canUpdateWS() {
                if (typeof this.formWS.id === "undefined") {
                    return true;
                } else {
                    return this.currentUser && this.currentUser.id === this.formWS.user.id;
                }
            },
            openAuth() {
                return this.$store.state.auth.openAuth
            }
        },
        watch: {
            currentUser() {
                this.settings = cloneDeep(this.$store.state.config.settings);
            },
            'formWS.isPrivate'() {
                if (this.formWS.isPrivate === false) {
                    this.formWS.password = null
                }
            },
            async ws() {
                if (this.ws) {
                    this.wsMinimize = false;
                    this.cloneReport = cloneDeep(this.ws.report);
                } else {
                    this.cloneReport = {};
                }
                this.fetchTasks();
                this.fetchMembers();
                this.connectSocket();
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
            }
        },
        async mounted() {
            if (process.client) {
                let _this = this;
                await this.fetchTasks();
                setInterval(function () {
                    _this.push_late();
                    _this.awakeMe();
                }, 800);
                this.connectSocket();
                window.onmousemove = debounce(function () {
                    _this.is_online = true;
                    let oldDateObj = new Date();
                    let newDateObj = new Date();
                    newDateObj.setTime(oldDateObj.getTime() + (5 * 60 * 1000));
                    localStorage.setItem('time_off', newDateObj.toISOString());
                }, 1000)
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
        min-width: 280px;
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
        margin-bottom: 1rem;
    }

    .has-custom {
        .button.is-primary {
            background: var(--btn-color);
            color: var(--btn-text-color);
        }

        .hero.is-primary {
            background-size: cover;
            background: var(--bg-color-primary);
            color: var(--bg-color-primary-text);

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
