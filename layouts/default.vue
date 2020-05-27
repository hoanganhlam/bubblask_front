<template>
    <div v-bind:class="{'has-custom': $route.path === '/'}" v-bind:style="settings.color">
        <header v-if="!$route.path.includes('/workspace')" class="header">
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="container is-fullwidth">
                    <div class="navbar-brand">
                        <n-link class="navbar-item logo" to="/">
                            <span class="primary">BUBBLASK</span>
                            <span class="second">.com</span>
                        </n-link>
                        <div class="navbar-item">
                            <n-link to="/leaderboard">LeaderBoard</n-link>
                        </div>
                        <div class="navbar-item">
                            <n-link to="/template">Template</n-link>
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
                            <div class="navbar-item">
                                <b-switch :rounded="false"
                                          :value="settings && settings.timer  ? settings.timer.is_strict : false"
                                          @input="setStrict"></b-switch>
                            </div>
                            <client-only v-if="currentUser">
                                <b-dropdown position="is-bottom-left" :trap-focus="true">
                                    <div slot="trigger" class="navbar-item clickable">
                                        <x-icon name="cogs"></x-icon>
                                    </div>
                                    <b-dropdown-item custom>
                                        <Options v-model="settings"></Options>
                                    </b-dropdown-item>
                                </b-dropdown>
                            </client-only>
                            <div class="navbar-item">
                                <b-dropdown v-if="!Boolean(currentUser)" position="is-bottom-left">
                                    <div class="clickable" slot="trigger">Login</div>
                                    <div class="dropdown-item" style="min-width: 335px">
                                        <div class="notification is-warning">Login to manage and track your work!</div>
                                        <div class="field" v-if="!logging">
                                            <label class="label">Username</label>
                                            <div class="control">
                                                <input v-model="form.username" class="input" type="text"
                                                       placeholder="Username">
                                            </div>
                                        </div>
                                        <div class="field" v-if="!logging">
                                            <div class="field-body">
                                                <div class="field">
                                                    <label class="label">Firstname</label>
                                                    <b-input v-model="form.first_name" type="text"
                                                             placeholder="John"/>
                                                </div>
                                                <div class="field">
                                                    <label class="label">Lastname</label>
                                                    <b-input v-model="form.last_name" type="text"
                                                             placeholder="Due"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label class="label">Email</label>
                                            <div class="control has-icons-right">
                                                <input v-model="form.email" class="input is-success" type="email"
                                                       placeholder="Email">
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
                                                <div class="level-left">
                                                    <div class="button is-text" @click="logging = !logging">
                                                        {{logging ? 'Register' : 'Login'}}
                                                    </div>
                                                </div>
                                                <div class="level-right">
                                                    <div class="button" @click="handleSubmit">{{logging ? 'Login' :
                                                        'Register'}}
                                                    </div>
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
                                <div class="grouped" v-else>
                                    <n-link to="/me">Report</n-link>
                                </div>
                            </div>
                            <div class="navbar-item clickable" v-if="currentUser && $route.path === '/me'"
                                 @click="logout()">
                                <x-icon name="logout"></x-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <main class="main-content">
            <nuxt/>
        </main>
        <footer class="footer">
            <div class="container small">
                <div class="level is-mobile">
                    <div class="level-left">
                        <div class="buttons">
                            <div @click="showAbout = !showAbout" class="button"
                                 v-bind:class="{'is-primary': showAbout}">
                                About
                            </div>
                            <n-link to="/privacy" class="button is-text">Privacy</n-link>
                        </div>
                    </div>
                    <div class="level-right">
                        <p><strong>Made</strong> with ❤️</p>
                    </div>
                </div>
            </div>
        </footer>
        <div class="ws-members" v-bind:style="{height: wsMinimize ? undefined : '300px'}">
            <div class="header">
                <div class="level is-mobile">
                    <div class="level-left">
                        <div @click="onOpenSelect" class="clickable">{{ws ? ws.name : 'Workspace'}}</div>
                    </div>
                    <div class="level-right clickable">
                        <div class="buttons">
                            <div class="button" v-if="ws" @click="openGroupForm(false)">
                                <x-icon name="cogs"></x-icon>
                            </div>
                            <div class="button" @click="wsMinimize = !wsMinimize">
                                <x-icon :name="wsMinimize ? 'maximize': 'minimize'"></x-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <transition name="fade">
                <div v-if="!wsMinimize" class="members">
                    <div class="wrapper">
                        <div class="level is-mobile" v-for="i in 15" :key="i">
                            <div class="level-left">
                                <div class="media">
                                    <div class="media-left">
                                        <avatar class="is-24x24"></avatar>
                                    </div>
                                    <div class="media-content">
                                        <b>Lam Hoang</b>
                                    </div>
                                </div>
                            </div>
                            <div class="level-right">
                                <small>200m</small>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
        <b-modal :active.sync="wsActive" scroll="keep">
            <div class="container small">
                <div class="group-selector has-background-white">
                    <div class="header">
                        <div class="media">
                            <input @input="searchWS()" v-model="wsSearch" class="input"
                                   placeholder="Search Workspace"/>
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
                    <div class="list">
                        <div class="media" v-for="i in 5" :key="i" v-if="wsResponse.results[i - 1]"
                             v-bind:class="{'is-active': ws && ws.id === wsResponse.results[i - 1].id}">
                            <div class="media-content">
                                <div><b>{{wsResponse.results[i - 1].name}}</b></div>
                                <small>By {{convertName(wsResponse.results[i - 1].user)}}</small>
                            </div>
                            <div class="media-left">
                                <div class="button is-text" @click="joinWS(wsResponse.results[i - 1])">
                                    {{ws && ws.id === wsResponse.results[i - 1].id ? 'Left' : 'Join'}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>
        <b-modal :active.sync="isActive" scroll="keep">
            <div class="modal-card" style="width: auto">
                <header class="modal-card-head">
                    <div class="level is-mobile" style="width: 100%">
                        <h4 class="level-left">Create new workspace</h4>
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
                                    <label class="label">Privacy</label>
                                    <b-switch :rounded="false" size="is-medium" v-model="formWS.isPrivate">Private
                                    </b-switch>
                                </div>
                                <div class="field" v-if="formWS.isPrivate">
                                    <label class="label">Password</label>
                                    <b-input v-model="formWS.password" type="password" password-reveal
                                             placeholder="Password to access workspace"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="formWS.isDone && wsURI" class="notification is-warning content">
                        <p>Share with your friends</p>
                        <b-input :value="wsURI"></b-input>
                    </div>
                </section>
                <footer class="modal-card-foot">
                    <button v-if="!formWS.isDone" class="button is-primary" @click="saveWS">Save</button>
                </footer>
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

    export default {
        components: {BTaginput, BInput, BDropdownItem, Avatar, Options},
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
                formWS: {
                    name: null,
                    isPrivate: false,
                    password: null,
                    isDone: false
                },
                isActive: false,
                wsURI: null,
                wsResponse: {
                    results: [],
                    count: 0
                },
                wsSearch: '',
                wsLoading: true,
                wsActive: false,
                wsMinimize: true,
                showAbout: true,
                settings: null,
                notify: {
                    msg: null,
                    ssf: true
                }
            }
        },
        methods: {
            initForm(data) {
                if (data) {
                    this.formWS = cloneDeep(data);
                } else {
                    this.formWS = {
                        name: null,
                        isPrivate: false,
                        password: null,
                        isDone: false
                    }
                }
            },
            async logout() {
                await this.$auth.logout();
                this.$router.replace({path: '/'});
                this.fetchTasks();
            },
            async handleSubmit() {
                if (this.logging) {
                    await this.$auth.login({
                        email: this.form.email,
                        password: this.form.password
                    }).then(res => {
                        if (res) {
                            this.showAbout = false;
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
                        this.notify.msg = []
                        fields.forEach(field => {
                            this.notify.msg.push(`${field} - ${error.response.data[field][0]}`)
                        });
                        this.notify.ssf = false;
                    });
                }
                let _this = this
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
                this.isActive = true;
            },
            saveWS() {
                if (typeof this.formWS.id === "undefined") {
                    this.$axios.$post('/general/workspaces/', this.formWS).then(res => {
                        this.formWS.isDone = true;
                        this.wsURI = `https://bubblask.com?ws=${res.id}`;
                        this.joinWS(res);
                    });
                } else {
                    this.$axios.$put(`/general/workspaces/${this.formWS.id}/`, this.formWS).then(res => {
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
                        page_size: 5
                    }
                });
                this.wsLoading = false;
            },
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
            fetchTasks() {
                this.$store.commit('task/SET_TASKS', []);
                if (this.currentUser) {
                    this.$axios.$get('/task/tasks/').then(res => {
                        for (let i = 0; i < res.length; i++) {
                            this.$store.commit('task/ADD_TASK', new Task(res[i]));
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
                let needUpdate = this.$store.state.task.tasks.filter(x => x.updating);
                for (let i = 0; i < needUpdate.length; i++) {
                    let res = null;
                    let task = _.cloneDeep(needUpdate[i]);
                    if (this.currentUser) {
                        if (task.parent === 0) {
                            task.parent = null
                        }
                        if (task.id) {
                            res = await this.$axios.$put(`/task/tasks/${task.id}/`, task)
                        } else {
                            res = await this.$axios.$post("/task/tasks/", task)
                        }
                    } else {
                        await this.$indexedDB.put(task);
                        res = {
                            id: task.uid
                        }
                    }
                    if (res) {
                        task.id = res.id;
                        task.force = true
                        if (res.parent === null) {
                            res.parent = 0
                        }
                        this.$store.commit('task/UPDATE_TASK', task)
                    }
                }
            },
            joinWS(ws) {
                this.$axios.$post(`/general/workspaces/${ws.id}/join/`, {}).then(res => {
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
            }
        },
        created() {
            this.settings = cloneDeep(this.$store.state.config.settings);
            if (this.currentUser !== null) {
                this.showAbout = false;
            }
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
            }
        },
        watch: {
            showAbout() {
                this.$store.commit('config/SET_SHOW_ABOUT', this.showAbout)
            },
            currentUser() {
                this.fetchTasks()
            },
            'formWS.isPrivate'() {
                if (this.formWS.isPrivate === false) {
                    this.formWS.password = null
                }
            }
        },
        mounted() {
            if (process.client) {
                let _this = this
                this.fetchTasks()
                setInterval(function () {
                    _this.push_late();
                }, 800);
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
        bottom: .75rem;
        width: 250px;
        background: #FFFFFF;
        padding: .75rem;
        box-shadow: 0 1px 5px 0 rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.02);
        display: flex;
        flex-direction: column;

        .header {
            font-size: 12px;

            svg {
                width: 12px;
            }

            .button {
                height: 1rem;
                border: 0;
                margin-bottom: 0;

                padding: 0 .25rem;
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
        font-family: serif;
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

            .subtitle,
            .title {
                color: var(--bg-color-primary-text);
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
