<template>
    <div>
        <header v-if="!$route.path.includes('/workspace')" class="header is-warning">
            <div class="container">
                <nav class="navbar is-warning" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <n-link class="navbar-item logo" to="/">
                            <span class="primary">BUBBLASK</span>
                            <span class="second">.com</span>
                        </n-link>
                        <b-dropdown @active-change="onOpenSelect">
                            <div class="navbar-item clickable" slot="trigger">Workspace</div>
                            <b-dropdown-item paddingless custom aria-role="menuitem">
                                <div class="group-selector">
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
                                        <div class="media" v-for="i in 5" :key="i" v-if="wsResponse.results[i - 1]">
                                            <div class="media-content">
                                                <div><b>{{wsResponse.results[i - 1].name}}</b></div>
                                                <small>By {{convertName(wsResponse.results[i - 1].user)}}</small>
                                            </div>
                                            <div class="media-left">
                                                120
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </b-dropdown-item>
                        </b-dropdown>
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
                                <n-link to="/leaderboard">LeaderBoard</n-link>
                            </div>
                            <div class="navbar-item">
                                <b-dropdown v-if="!Boolean(currentUser)" position="is-bottom-left">
                                    <div class="clickable" @click="handleClick(true)" slot="trigger">Report
                                    </div>
                                    <div class="dropdown-item" style="min-width: 350px">
                                        <div class="notification is-warning">Login to manage and track your work!</div>
                                        <div class="field" v-if="!logging">
                                            <label class="label">Username</label>
                                            <div class="control">
                                                <input v-model="form.username" class="input" type="text"
                                                       placeholder="Username">
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
                                                <input v-model="form.password" class="input is-success" type="password"
                                                       placeholder="Password">
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="level">
                                                <div class="level-left">
                                                    <b-switch size="is-medium" :rounded="false" v-model="logging">Login
                                                    </b-switch>
                                                </div>
                                                <div class="level-right">
                                                    <div class="button" @click="handleSubmit">{{logging ? 'Login' :
                                                        'Register'}}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </b-dropdown>
                                <div class="grouped" v-else>
                                    <n-link to="/profile">Report</n-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        <main class="main-content">
            <nuxt/>
        </main>
        <footer class="footer">
            <div class="container">
                <div class="level is-mobile">
                    <div class="level-left">
                        <div class="buttons">
                            <div @click="showAbout = !showAbout" class="button" v-bind:class="{'is-primary': showAbout}">
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
        <div class="ws-members">
            <div class="header">
                <div class="level is-mobile">
                    <div class="level-left">
                        <b>Yearhone</b>
                    </div>
                    <div class="level-right clickable" @click="openGroupForm(false)">
                        <x-icon name="cogs"></x-icon>
                    </div>
                </div>
            </div>
            <div class="members">
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
        </div>
        <b-modal :active.sync="isActive" scroll="keep">
            <div class="modal-card" style="width: auto">
                <header class="modal-card-head">
                    <div class="level is-mobile" style="width: 100%">
                        <h4 class="level-left">Create new workspace</h4>
                        <div class="level-right">
                            <button class="button is-small" type="button" @click="isActive = false">Back</button>
                        </div>
                    </div>
                </header>
                <section class="modal-card-body">
                    <div v-if="!formWS.isDone">
                        <div class="field">
                            <ce v-model="formWS.name" elm="h1" class="title" placeholder="Workspace name"></ce>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <label class="label">Privacy</label>
                                <b-switch v-model="formWS.isPrivate">Private</b-switch>
                            </div>
                            <div class="field" v-if="formWS.isPrivate">
                                <label class="label">Password</label>
                                <input v-model="formWS.password" class="input" type="password"
                                       placeholder="Password to access workspace">
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
    import debounce from "lodash/debounce"

    export default {
        components: {BTaginput, BInput, BDropdownItem, Avatar},
        data() {
            return {
                burgerActive: false,
                logging: true,
                form: {
                    email: null,
                    password: null,
                    username: null
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
                showAbout: true
            }
        },
        methods: {
            initForm() {
                this.formWS = {
                    name: null,
                    isPrivate: false,
                    password: null,
                    isDone: false
                }
            },
            handleClick(flag) {

            },
            async handleSubmit() {
                if (this.logging) {
                    let res = await this.$auth.login({
                        email: this.form.email,
                        password: this.form.password
                    }).then(res => {
                    }).catch(err => {
                        console.log(err);
                    })
                } else {
                    await this.$axios.$post('/auth/rest-auth/registration/', this.form).then(res => {
                        this.logging = true
                    }).catch(err => {
                        console.log(err);
                    })
                }
            },
            openGroupForm(flag) {
                this.initForm()
                this.isActive = true
            },
            saveWS() {
                this.$axios.$post('/general/workspaces/', this.formWS).then(res => {
                    this.formWS.isDone = true
                    this.wsURI = `https://bubblask.com?ws=${res.id}`
                })
            },
            async fetchWS() {
                this.wsLoading = true
                this.wsResponse = await this.$axios.$get('/general/workspaces/', {
                    params: {
                        search: this.wsSearch ? this.wsSearch : undefined,
                        page_size: 5
                    }
                })
                this.wsLoading = false
            },
            searchWS: debounce(function () {
                this.fetchWS()
            }, 500),
            onOpenSelect(stt) {
                if (stt) {
                    this.fetchWS()
                }
            }
        },
        created() {
            if (this.currentUser !== null) {
                this.showAbout = false
            }
        },
        watch: {
            showAbout() {
                this.$store.commit('config/SET_SHOW_ABOUT', this.showAbout)
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
        right: 1.5rem;
        height: 400px;
        bottom: 1.5rem;
        width: 280px;
        background: #FFFFFF;
        padding: 1rem;
        box-shadow: 0 1px 5px 0 rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.02);
        overflow: hidden;
        display: flex;
        flex-direction: column;

        .header {
            padding-bottom: 1rem;
        }

        .members {
            flex: 1;
            position: relative;

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
</style>
