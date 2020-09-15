<template>
    <div class="options">
        <div class="tabs is-boxed">
            <ul>
                <li v-bind:class="{'is-active': activeTab === 'c'}" @click="activeTab = 'c'">
                    <a>Customize</a>
                </li>
                <li v-bind:class="{'is-active': activeTab === 'n'}" @click="activeTab = 'n'">
                    <a>Notification</a>
                </li>
                <li v-bind:class="{'is-active': activeTab === 't'}" @click="activeTab = 't'">
                    <a>Timer</a>
                </li>
            </ul>
        </div>
        <div class="color-picker" v-if="activeTab === 'c'">
            <div class="level is-mobile" v-for="c in fieldColors" :key="c.field">
                <div class="level-left">
                    {{c.label}}
                </div>
                <div class="level-right">
                    <b-dropdown>
                        <div slot="trigger" class="button is-square"
                             v-bind:style="{background: data['color'][c.field]}">
                        </div>
                        <b-dropdown-item paddingless custom>
                            <color-picker
                                @input="updateColor(c.field, $event)"
                                :value="data['color'][c.field]"
                                :preset-colors="['#f00', '#00ff00', '#00ff0055', 'rgb(201, 76, 76)', 'rgba(0,0,255,1)', 'hsl(89, 43%, 51%)', 'hsla(89, 43%, 51%, 0.6)']"
                            />
                        </b-dropdown-item>
                    </b-dropdown>
                </div>
            </div>
            <b-dropdown class="is-fullwidth" aria-role="list">
                <div class="button is-fullwidth" slot="trigger">Set Background</div>
                <b-dropdown-item custom aria-role="listitem">
                    <Unsplash v-model="data['color']['background']"></Unsplash>
                </b-dropdown-item>
            </b-dropdown>
        </div>
        <div v-if="activeTab === 'n'">
            <div class="columns is-mobile">
                <div class="column">Wake me in(m)</div>
                <div class="column">
                    <div class="field is-grouped">
                        <b-number-input size="is-small" v-model="data.notification.wake_me" :min="5" type="is-primary"
                                        controls-position="compact"/>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="activeTab === 't'">
            <div class="columns is-mobile">
                <div class="column">Pomodoro</div>
                <div class="column">
                    <b-number-input size="is-small" v-model="data.timer.tomato" :min="25" type="is-primary"
                                    controls-position="compact"></b-number-input>
                </div>
            </div>
            <div class="columns is-mobile">
                <div class="column">Short Break</div>
                <div class="column">
                    <b-number-input size="is-small" v-model="data.timer.short_break" :min="5" type="is-primary"
                                    controls-position="compact"></b-number-input>
                </div>
            </div>
            <div class="columns is-mobile">
                <div class="column">Long Break</div>
                <div class="column">
                    <b-number-input size="is-small" v-model="data.timer.long_break" :min="10" type="is-primary"
                                    controls-position="compact"></b-number-input>
                </div>
            </div>
        </div>
        <div class="level is-mobile" style="margin-top: 1rem">
            <div class="level-left">
                <div class="button is-small is-fullwidth" @click="reset()">Reset</div>
            </div>
            <div class="level-right">
                <div class="button is-primary is-small is-fullwidth" @click="save">Save</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Chrome} from 'vue-color'
    import Unsplash from "../Unsplash"
    import * as config from "../../helpers/configs";
    import {cloneDeep} from 'lodash'

    export default {
        name: "Setting",
        props: {
            value: {
                default: () => {
                    return Object.assign({}, config.settings)
                }
            }
        },
        components: {
            'color-picker': Chrome,
            Unsplash
        },
        data() {
            return {
                data: Object.assign({}, config.settings),
                colors: [],
                fieldColors: [
                    {
                        field: '--btn-color',
                        label: 'Button Background',
                    },
                    {
                        field: '--btn-text-color',
                        label: 'Button Text',
                    },
                    {
                        field: '--bg-color-primary',
                        label: 'Background',
                    },
                    {
                        field: '--bg-color-primary-text',
                        label: 'Text Inside',
                    },
                    {
                        field: '--task-color',
                        label: 'Task Background',
                    },
                    {
                        field: '--task-text-color',
                        label: 'Task Text',
                    },
                ],
                activeTab: 'c'
            }
        },
        methods: {
            updateColor(field, val) {
                this.data.color[field] = val.hex
            },
            save() {
                this.$axios.$put(`/auth/users/${this.currentUser.username}/`, {
                    options: this.data
                }).then(res => {
                    this.$store.commit('auth/SET_USER', res);
                    this.$store.commit('config/SET_SETTING', res.profile.setting);
                })
            },
            reset() {
                this.data = Object.assign({}, config.settings);
                this.$store.commit('config/SET_SETTING_BACKGROUND', null);
            }
        },
        watch: {
            value: {
                deep: true,
                handler: function () {
                    this.data = this.value;
                }
            },
            data: {
                deep: true,
                handler: function () {
                    this.$emit('input', this.data);
                }
            }
        },
        created() {
            this.data = cloneDeep(this.$store.state.config.settings);
            if (typeof this.data.notification === 'undefined') {
                this.data.notification = {
                    wake_me: 5
                }
            }
        }
    }
</script>

<style lang="scss">
    .options {
        .color-picker .dropdown-content {
            padding-bottom: 0;
            padding-top: 0;
        }

        .color-picker {
            .dropdown.is-fullwidth {
                width: 100%;

                .dropdown-trigger {
                    width: 100%;
                }
            }
        }

        .columns {
            margin-bottom: 0;
        }

        .level:not(:last-child) {
            margin-bottom: .5rem;
        }

        .button.is-square {
            height: 1.5rem;
            width: 2rem;
        }

        .tabs a {
            color: #333 !important;
        }

        .tabs li.is-active a {
            color: brown;
        }
    }
</style>
