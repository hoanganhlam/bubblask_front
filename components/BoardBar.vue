<template>
    <div class="board-bar">
        <div class="ws-members" v-bind:style="{height: minimize ? undefined : '50vh'}">
            <div class="header">
                <div class="media" v-if="currentUser">
                    <div class="media-content">
                        <b-tooltip label="Focus to work of meeting with others">
                            <button class="button is-text is-selected" @click="isActive = true">
                                <x-icon v-if="gb" :name="kind2Icon(gb.kind)"></x-icon>
                                <b class="clickable">{{ gb ? gb.title : 'Create workspace' }}</b>
                            </button>
                        </b-tooltip>
                    </div>
                    <div class="media-right">
                        <div class="buttons">
                            <div class="button is-text" @click="minimize = !minimize">
                                <x-icon :name="minimize ? 'maximize': 'minimize'"></x-icon>
                            </div>
                        </div>
                    </div>
                </div>
                <div @click="openLogin(true)" class="button is-text is-fullwidth" v-else>Login to join Workspace</div>
            </div>
            <transition name="fade">
                <div v-if="!minimize && gb" class="members">
                    <div class="wrapper" v-if="members.length">
                        <div class="member">
                            <div class="columns is-gapless">
                                <div class="column is-1" v-for="user in members" :key="user.id">
                                    <avatar :class="user.profile.extra && user.profile.extra.status"
                                            class="is-24x24"
                                            :value="user.profile.media"/>
                                </div>
                            </div>
                        </div>
                        <div class="chat-box">
                            <div class="wrapper" id="chat-box" ref="chat-box">
                                <div v-for="c in chat.results" :key="c.id" class="media">
                                    <div class="media-left">
                                        <avatar :class="c.user.profile.extra && c.user.profile.extra.status"
                                                class="is-24x24"
                                                :value="c.user.profile.media"/>
                                    </div>
                                    <div class="media-content">
                                        <b><small>{{ convertName(c.user) }}</small></b> <span>{{ c.msg }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="chat-form">
                            <b-input v-model="newMessage" placeholder="Message" @keyup.enter.native="send"/>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
        <b-modal :can-cancel="false" :active.sync="isActive" scroll="keep">
            <div class="modal-card">
                <header class="modal-card-head">
                    <div class="modal-card-title uppercase">
                        {{ form.title ? form.title : 'Create new workspace' }}
                    </div>
                    <div class="modal-card-icon">
                        <div class="buttons">
                            <div v-if="gb" class="button is-danger is-small" @click="join(gb)">Left</div>
                            <div class="button is-text is-small" @click="isActive = false">
                                <x-icon name="close"/>
                            </div>
                        </div>
                    </div>
                </header>
                <section class="modal-card-body">
                    <div>
                        <div class="field is-floating-label">
                            <label class="label">Name</label>
                            <div class="control is-clearfix">
                                <b-input :disabled="!authorised" size="is-medium" v-model="form.title"
                                         placeholder="Workspace name"/>
                            </div>
                        </div>
                        <div v-if="authorised" class="field is-floating-label">
                            <label class="label">Options</label>
                            <div class="control is-clearfix">
                                <div class="card">
                                    <div class="card-content">
                                        <div class="level is-mobile">
                                            <div class="level-left">Enable to search</div>
                                            <div class="level-right">
                                                <b-switch :rounded="false" v-model="form.settings.allow_search"/>
                                            </div>
                                        </div>
                                        <div class="level is-mobile">
                                            <div class="level-left">Private</div>
                                            <div class="level-right">
                                                <b-switch :rounded="false" v-model="form.is_private"/>
                                            </div>
                                        </div>
                                        <div class="field" v-if="form.is_private">
                                            <b-input icon="pound" expanded v-model="form.password" type="password"
                                                     password-reveal
                                                     placeholder="Password to access workspace"/>
                                        </div>
                                        <div class="level is-mobile">
                                            <div class="level-left">Collaborate</div>
                                            <div class="level-right">
                                                <b-switch :rounded="false" v-model="form.settings.collaborate"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="authorised" class="columns">
                            <div class="column">
                                <b-dropdown append-to-body v-model="form.kind" aria-role="list">
                                    <button class="button is-small" type="button" slot="trigger">
                                        <template>
                                            <span>{{ kinds[form.kind].title }}</span>
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
                            <div class="column">
                                <button v-if="authorised" class="button is-primary is-fullwidth" @click="save">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <div v-if="form.id && uri" class="notification is-warning content">
                    <p>Share with your friends</p>
                    <b-input :value="uri"></b-input>
                </div>
                <div v-if="!Boolean(form.id)" class="group-selector has-background-white">
                    <hr style="margin: 0;">
                    <div class="header">
                        <div class="media">
                            <b-input icon="search" expanded @input="search" placeholder="Enter keyword..."/>
                        </div>
                    </div>
                    <div class="list">
                        <div class="media" v-for="b in response.results" :key="b.id"
                             v-bind:class="{'is-active': gb && gb.id === b.id}">
                            <div class="media-left">
                                <x-icon :name="kind2Icon(b.kind)"></x-icon>
                            </div>
                            <div class="media-content">
                                <div><b>{{ b.title }}</b></div>
                                <small>By {{ convertName(b.user) }}</small>
                            </div>
                            <div class="media-right" v-if="gb && gb.id === b.id">
                                <div class="button is-small" @click="join(b)">
                                    <span>Left</span>
                                    <x-icon name="logout"></x-icon>
                                </div>
                            </div>
                            <div class="media-right" v-else>
                                <b-dropdown
                                    v-if="b.is_private" position="is-bottom-left"
                                    append-to-body aria-role="menu" trap-focus>
                                    <div class="button is-small" slot="trigger">
                                        <span>Join</span>
                                        <x-icon name="shield-lock"></x-icon>
                                    </div>
                                    <b-dropdown-item aria-role="menu-item" :focusable="false" custom>
                                        <div class="field has-addons" style="min-width: 280px;">
                                            <b-input icon="pound" v-model="password" type="password" expanded
                                                     placeholder="Enter Password"/>
                                            <div class="control">
                                                <div class="button is-primary" @click="join(b, password)">Join</div>
                                            </div>
                                        </div>
                                    </b-dropdown-item>
                                </b-dropdown>
                                <div v-else class="button is-small" @click="join(b)">
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
                                <b-input icon="pound" v-model="code" placeholder="Enter Code"/>
                            </div>
                            <div class="media-right">
                                <div class="button" @click="enterCode">Enter</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
import {cloneDeep, debounce} from "lodash";
import Avatar from "@/components/Avatar";

const DEFAULT = {
    title: null,
    kind: "GHOST",
    settings: {
        allow_search: true,
        collaborate: false
    }
};
export default {
    name: "BoardBar",
    components: {Avatar},
    data() {
        return {
            isActive: false,
            minimize: true,
            form: DEFAULT,
            members: [],
            loading: {
                member: false
            },
            response: {
                results: [],
                count: 0
            },
            code: null,
            password: null,
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
                    help: "Anyone can add and run workspace's tasks"
                },
            },
            chat: {
                results: [],
                count: 0
            },
            newMessage: null,
            channel: null
        }
    },
    methods: {
        init(data) {
            if (data) {
                this.form = cloneDeep({
                    ...data,
                    settings: data.settings ? data.settings : {
                        password: null,
                        is_private: false
                    }
                });
            } else {
                this.form = DEFAULT;
            }
        },
        search: debounce(function (text) {
            this.fetch(text);
        }, 500),
        async fetch(text) {
            this.response = await this.$axios.$get('/task/boards/', {
                params: {
                    search: text ? text : undefined,
                    kinds: 'GHOST,DEFAULT',
                    page_size: 5
                }
            });
        },
        enterCode() {

        },
        save() {
            if (typeof this.form.id === "undefined") {
                this.$axios.$post('/task/boards/', this.form).then(res => {
                    this.join(res);
                });
            } else {
                this.$axios.$put(`/task/boards/${this.form.slug}/`, this.cleanData(this.form)).then(res => {
                    this.$store.commit('config/SET_BOARD', res);
                });
            }
        },
        connectSocket() {
            if (this.gb && Pusher && typeof Pusher === 'function') {
                this.channel = null;
                let pusher = new Pusher('eccf1067acf541fbc5d4', {
                    cluster: 'ap1'
                });
                this.channel = pusher.subscribe(`board_${this.gb.id}`);
                this.channel.bind('change-user-score', function (data) {
                    if (data) {

                    }
                }.bind(this));
                this.channel.bind('change-user-status', function (data) {
                    if (data) {
                        let index = this.members.map(u => u.id).indexOf(data.user);
                        if (index >= 0) {
                            this.members[index].profile.extra.status = data.status;
                        }
                    }
                }.bind(this));
                this.channel.bind('new_message', function (data) {
                    if (data) {
                        this.chat.results.push(data);
                        this.toBottom();
                    }
                }.bind(this));
            }
        },
        async fetchMembers() {
            if (this.gb) {
                this.loading.member = true;
                let {results} = await this.$axios.$get(`/task/boards/${this.gb.id}/members/`, {
                    params: {
                        fields: 'user'
                    }
                });
                this.members = results.map(x => x.user);
                this.loading.member = false;
            } else {
                this.wsMembers = [];
            }
        },
        async fetchMessages() {
            if (this.gb) {
                this.loading.message = true;
                this.chat = await this.$axios.$get(`/task/boards/${this.gb.id}/messages/`, {
                    params: {
                        room: `BOARD_${this.gb.id}`
                    }
                }).then(res => {
                    return {
                        "count": res.count,
                        "results": res.results.reverse()
                    }
                });
                this.loading.message = false;
                this.toBottom();
            }
        },
        send() {
            if (this.gb && this.newMessage && this.newMessage.length >= 2)
                this.$axios.$post('/general/messages/', {
                    msg: this.newMessage,
                    room: `board_${this.gb.id}`
                }).then(() => {
                    this.newMessage = null;
                })
        },
        toBottom() {
            if (process['client']) {
                let elm = document.querySelector("#chat-box");
                if (elm) {
                    elm.scrollTo(0, elm.offsetHeight * 2);
                }
            }
        }
    },
    computed: {
        gb() {
            return this.$store.state.config.board
        },
        authorised() {
            if (typeof this.form.id === "undefined") {
                return true;
            } else {
                return this.currentUser && this.currentUser.id === this.form.user.id;
            }
        },
        uri() {
            return null
        },
    },
    watch: {
        gb() {
            if (this.gb) {
                this.minimize = false;
                this.init(this.gb);
                this.connectSocket();
                this.fetchMembers();
                this.fetchMessages();
            } else {
                this.init();
                this.minimize = true;
            }
        },
        isActive() {
            if (this.isActive && this.response.results.length === 0) {
                this.fetch(null)
            }
        }
    },
    mounted() {
        if (process['client']) {
            this.connectSocket();
            if (document.body.clientWidth < 500) {
                this.minimize = true;
            }
        }
    },
    created() {
        if (this.gb) {
            this.init(this.gb);
            this.fetchMembers();
            this.fetchMessages();
            this.minimize = false;
        } else {
            this.init();
            this.minimize = true;
        }
    }
}
</script>

<style lang="scss">
.board-bar {
    .notification:not(:last-child) {
        margin-bottom: 1rem;
    }

    .modal-card-title {
        font-size: 16px;
    }
}
</style>
