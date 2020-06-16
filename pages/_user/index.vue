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
                            :values="chartValues"
                            :end-date="new Date()"/>
                    </div>
                    <div class="column is-6">
                        <div class="card">
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <h4>Focus</h4>
                                    </div>
                                    <div class="media-right">
                                        <span class="title is-1">{{reportData.total_focus.toFixed(1)}}</span>
                                        <span>h</span>
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
                                        <span class="title is-1">{{100 - reportData.accurate_estimates.toFixed(1)}}</span>
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
                                        <h4>AVG focus</h4>
                                    </div>
                                    <div class="media-right">
                                        <span class="title is-1">{{reportData.avg_focus.toFixed(1)}}</span>
                                        <span>m/day</span>
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
                                        <h4>Total complete</h4>
                                    </div>
                                    <div class="media-right">
                                        <span class="title is-1">{{reportData.total_task_done}}</span>
                                        <span>tasks</span>
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
                                        <h4>Total Delays/Interruptions</h4>
                                    </div>
                                    <div class="media-right">
                                        <span class="title is-1">{{reportData.total_task_delay}}</span>
                                        <span>tasks</span>
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
                                        <h4>Ranking</h4>
                                    </div>
                                    <div class="media-right">
                                        <span class="title is-1">{{reportData.rank}}</span>
                                        <span>th</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-12">
                        <div class="card">
                            <div class="card-content">
                                <div class="level">
                                    <div class="level-left">
                                        <h4>{{convertName(user)}}'s work time</h4>
                                    </div>
                                    <div class="level-right">{{convertName(user)}}'s timezone: {{user.profile.time_zone}}</div>
                                </div>
                                <time-chart :data="time_works"></time-chart>
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

    Array.range = function (a, b, step) {
        let A = [];
        A[0] = a;
        step = step || 1;
        while (a + step <= b) {
            A[A.length] = a += step;
        }
        return A;
    };

    Array.prototype.fill = function (val) {
        for (let i = 0; i < this.length; i++) {
            this[i] = val;
        }
        return this;
    };
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
                updating: false,
                report: {
                    total_task_done: 0,
                    total_task_delay: 0,
                    tracking: [],
                    accurate_estimates: 0
                },
                time_works: []
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
            this.fetchReport();
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
            },
            async fetchReport() {
                this.report = await this.$axios.$get(`/auth/users/${this.user.id}/reports/`);
                this.report.tracking.forEach(x => {
                    x.total_time = x.data.map(y => y.time_taken).reduce(function (a, b) {
                        return a + b;
                    }, 0);
                });
                let time_working = new Array(24).fill(0);
                this.report.tracking.forEach(record => {
                    record.data.forEach(d => {
                        let str_start = d['time_start'];
                        let str_stop = d['time_stop'];
                        if (str_start && str_stop) {
                            let time_start = new Date(str_start);
                            let time_stop = new Date(str_stop);
                            let ranges = Array.range(time_start.getHours(), time_stop.getHours())
                            ranges.forEach(r => {
                                time_working[r] = time_working[r] + 1;
                            })
                        }
                    })
                });
                let max = Math.max(...time_working);
                console.log(max);
                this.time_works = time_working.map(x => x / max);
            }
        },
        computed: {
            reportData() {
                let total = this.report.tracking.map(x => x.total_time).reduce(function (a, b) {
                    return a + b;
                }, 0);
                return {
                    total_task_done: this.report.total_task_done,
                    total_task_delay: this.report.total_task_delay,
                    total_focus: (this.user.profile.extra && this.user.profile.extra.temp_score ? this.user.profile.extra.temp_score : 0) / 3600,
                    avg_focus: this.report.tracking.length ? (((total ? total : 0) / this.report.tracking.length) / 60) : 0,
                    accurate_estimates: this.report.accurate_estimates / 60, // in minutes
                    rank: 0
                }
            },
            chartValues() {
                return this.report.tracking.map(x => {
                    return {
                        date: new Date(x.date_record),
                        count: x.total_time
                    }
                })
            },
            timeChart() {
                if (this.report.tracking.length) {

                }
                return [] // Numbers
            }
        }
    }
</script>

<style scoped>

</style>
