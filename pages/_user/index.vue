<template>
    <div>
        <div class="hero is-light is-small">
            <div class="hero-body">
                <div class="container">
                    <div class="media">
                        <div class="media-left" style="margin-right: 2rem;">
                            <avatar v-model="profile.media" :can-update="updating" class="is-96x96"/>
                        </div>
                        <div class="media-content">
                            <h1 class="title" v-if="!updating">{{convertName(user)}}</h1>
                            <div class="columns is-grapless" style="margin-bottom: 0" v-else>
                                <div class="column">
                                    <ce elm="h1" class="title" :editable="true" placeholder="First name"
                                        v-model="user.first_name"></ce>
                                </div>
                                <div class="column">
                                    <ce elm="h1" class="title" :editable="true" placeholder="Last name"
                                        v-model="user.last_name"></ce>
                                </div>
                            </div>
                            <ce elm="div" :editable="updating" placeholder="Bio" class="subtitle"
                                v-model="profile.bio"/>
                            <div class="buttons">
                                <a :href="profile.links[field]" class="button is-small" target="_blank"
                                   v-for="field in Object.keys(profile.links)" :key="field" v-if="profile.links[field]">
                                    <x-icon :name="field"/>
                                </a>
                            </div>
                        </div>
                        <div class="media-right" v-if="currentUser && currentUser.id === user.id">
                            <div class="button is-text" @click="handleUpdate">
                                <x-icon name="pen"></x-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="container">
                <div v-if="!updating" class="columns is-multiline">
                    <div class="column is-12">
                        <calendar-heat-map
                            :values="[{ date: new Date('4/8/2020'), count: 16 },{ date: new Date('4/5/2020'), count: 1 }]"
                            :end-date="new Date()"/>
                    </div>
                    <div class="column is-6">
                        <div class="card">
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <h4>AVG. Day focus</h4>
                                    </div>
                                    <div class="media-right">
                                        <span class="title is-1">1</span>
                                        <span>d</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-6">
                        <div class="card">
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <h4>AVG. Delays/Interruptions</h4>
                                    </div>
                                    <div class="media-right">
                                        <span class="title is-1">8</span>
                                        <span>task</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-6">
                        <div class="card">
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <h4>Accurate estimates</h4>
                                    </div>
                                    <div class="media-right">
                                        <span class="title is-1">100</span>
                                        <span>%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-6">
                        <div class="card">
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <h4>AVG. Hours of work</h4>
                                    </div>
                                    <div class="media-right">
                                        <span class="title is-1">8</span>
                                        <span>h/day</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div v-else>
                    <h4 class="widget_title">Links</h4>
                    <div class="columns is-gapless is-mobile">
                        <div class="column is-3 v-center is-text field"><span>Website</span></div>
                        <div class="column is-9">
                            <b-input placeholder="https://bubblask.com" expanded v-model="profile.links.ws"></b-input>
                        </div>
                    </div>
                    <div class="columns is-gapless is-mobile">
                        <div class="column is-3 v-center is-text field"><span>Facebook</span></div>
                        <div class="column is-9">
                            <b-input placeholder="https://facebook.com/bubblask" expanded
                                     v-model="profile.links.fb"></b-input>
                        </div>
                    </div>
                    <div class="columns is-gapless is-mobile">
                        <div class="column is-3 v-center is-text field"><span>Twitter</span></div>
                        <div class="column is-9">
                            <b-input placeholder="https://twitter.com@/bubblask" expanded
                                     v-model="profile.links.tw"></b-input>
                        </div>
                    </div>
                    <div class="columns is-gapless is-mobile">
                        <div class="column is-3 v-center is-text field"><span>LinkedIn</span></div>
                        <div class="column is-9">
                            <b-input placeholder="https://linkedin.com/bubblask" expanded
                                     v-model="profile.links.li"></b-input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CalendarHeatMap from "../../components/CalendarHeatMap/index.vue";
    import Avatar from "../../components/Avatar";
    import Input from "../../components/input/Input";

    export default {
        name: "index",
        components: {
            Avatar,
            CalendarHeatMap,
            'b-input': Input
        },
        async asyncData({$axios, params}) {
            return {
                user: await $axios.$get(`/auth/users/${params.user}/`)
            }
        },
        data() {
            return {
                profile: {
                    links: {}
                },
                updating: false
            }
        },
        created() {
            if (this.user.profile) {
                this.profile = this.user.profile;
                if (!Boolean(this.profile.links)) {
                    this.profile.links = {};
                }
                if (!Boolean(this.profile.extra)) {
                    this.profile.extra = {};
                }
            }
        },
        methods: {
            handleUpdate() {
                if (this.updating === false) {
                    this.updating = true;
                } else {
                    this.save();
                }
            },
            save() {
                this.$axios.$put(`/auth/users/${this.user.username}/`, {
                    ...this.user,
                    profile: this.cleanData(this.profile)
                }).finally(() => {
                    this.updating = false;
                })
            }
        }
    }
</script>

<style scoped>

</style>
