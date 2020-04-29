<template>
    <div>
        <header v-if="!$route.path.includes('/workspace')" class="header">
            <div class="container">
                <nav class="navbar" role="navigation" aria-label="main navigation">
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
                                                <input v-model="form.username" class="input" type="text" placeholder="Username">
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label class="label">Email</label>
                                            <div class="control has-icons-right">
                                                <input v-model="form.email" class="input is-success" type="email" placeholder="Email">
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label class="label">Password</label>
                                            <div class="control has-icons-right">
                                                <input v-model="form.password" class="input is-success" type="password" placeholder="Password">
                                            </div>
                                        </div>
                                        <div class="field">
                                            <div class="level">
                                                <div class="level-left">
                                                    <b-switch size="is-medium" :rounded="false" v-model="logging">Login
                                                    </b-switch>
                                                </div>
                                                <div class="level-right">
                                                    <div class="button" @click="handleSubmit">{{logging ? 'Login' : 'Register'}}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </b-dropdown>
                                <div class="grouped" v-else>
                                    <n-link to="/profile" class="button">Report</n-link>
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
    </div>
</template>
<script>
    export default {
        data() {
            return {
                burgerActive: false,
                logging: false,
                form: {
                    email: null,
                    password: null,
                    username: null
                }
            }
        },
        methods: {
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
            }
        }
    }
</script>

<style>

</style>
