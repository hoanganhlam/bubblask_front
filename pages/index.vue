<template>
    <div>
        <div class="hero is-primary" v-bind:class="{'is-fullheight': timer > 0}" v-bind:style="style">
            <div class="hero-body">
                <div class="container pomodoro">
                    <div class="wrap">
                        <div class="timer">
                            <div class="title uppercase">{{ mode }}</div>
                            <div class="timer--clock">
                                <div class="minutes-group clock-display-grp" ref="minutes">
                                    <div class="first number-grp">
                                        <div class="number-grp-wrp">
                                            <div class="num num-0"><p>0</p></div>
                                            <div class="num num-1"><p>1</p></div>
                                            <div class="num num-2"><p>2</p></div>
                                            <div class="num num-3"><p>3</p></div>
                                            <div class="num num-4"><p>4</p></div>
                                            <div class="num num-5"><p>5</p></div>
                                            <div class="num num-6"><p>6</p></div>
                                            <div class="num num-7"><p>7</p></div>
                                            <div class="num num-8"><p>8</p></div>
                                            <div class="num num-9"><p>9</p></div>
                                        </div>
                                    </div>
                                    <div class="second number-grp">
                                        <div class="number-grp-wrp">
                                            <div class="num num-0"><p>0</p></div>
                                            <div class="num num-1"><p>1</p></div>
                                            <div class="num num-2"><p>2</p></div>
                                            <div class="num num-3"><p>3</p></div>
                                            <div class="num num-4"><p>4</p></div>
                                            <div class="num num-5"><p>5</p></div>
                                            <div class="num num-6"><p>6</p></div>
                                            <div class="num num-7"><p>7</p></div>
                                            <div class="num num-8"><p>8</p></div>
                                            <div class="num num-9"><p>9</p></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="clock-separator"><p>:</p></div>
                                <div class="seconds-group clock-display-grp" ref="seconds">
                                    <div class="first number-grp">
                                        <div class="number-grp-wrp">
                                            <div class="num num-0"><p>0</p></div>
                                            <div class="num num-1"><p>1</p></div>
                                            <div class="num num-2"><p>2</p></div>
                                            <div class="num num-3"><p>3</p></div>
                                            <div class="num num-4"><p>4</p></div>
                                            <div class="num num-5"><p>5</p></div>
                                            <div class="num num-6"><p>6</p></div>
                                            <div class="num num-7"><p>7</p></div>
                                            <div class="num num-8"><p>8</p></div>
                                            <div class="num num-9"><p>9</p></div>
                                        </div>
                                    </div>
                                    <div class="second number-grp">
                                        <div class="number-grp-wrp">
                                            <div class="num num-0"><p>0</p></div>
                                            <div class="num num-1"><p>1</p></div>
                                            <div class="num num-2"><p>2</p></div>
                                            <div class="num num-3"><p>3</p></div>
                                            <div class="num num-4"><p>4</p></div>
                                            <div class="num num-5"><p>5</p></div>
                                            <div class="num num-6"><p>6</p></div>
                                            <div class="num num-7"><p>7</p></div>
                                            <div class="num num-8"><p>8</p></div>
                                            <div class="num num-9"><p>9</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4>A SIMPLE HACK FOR DEEP WORK</h4>
                        </div>
                    </div>
                    <div class="buttons timer-control">
                        <div v-if="(runningTask === null || !setting.is_strict)" class="button is-primary"
                             @click="task_break(5)">Short Break
                        </div>
                        <div v-if="(runningTask === null || !setting.is_strict)" class="button is-primary"
                             @click="task_break(10)">Long Break
                        </div>
                        <div v-if="runningTask && !setting.is_strict" class="button is-primary"
                             @click="$store.commit('task/SET_RUNNING', runningTask)">
                            <x-icon name="pause"/>
                        </div>
                        <div v-if="runningTask" class="button is-primary" @click="makeDone">
                            <x-icon name="check"/>
                        </div>
                    </div>
                    <div v-if="runningTask && !showNote && runningTask.description" class="button is-text"
                         @click="showNote = true">Show Note
                    </div>
                </div>
            </div>
        </div>
        <div v-if="!runningTask" class="hero is-secondary is-small" style="min-height: 50vh">
            <div class="hero-body">
                <div class="container small" v-if="setting.is_strict">
                    <div class="notification is-warning content">
                        <b>Strict mode</b>
                        <ul>
                            <li>You can't stop timer when working</li>
                            <li>You can't update running task</li>
                        </ul>
                    </div>
                </div>
                <div class="boards">
                    <task-board :tasks="tasks" :board="gb && gb.kind !== 'GHOST' ? gb : null"/>
                </div>
            </div>
        </div>
        <transition name="fade">
            <div v-if="!(runningTask || currentUser)" class="hero">
                <div class="hero-body">
                    <div class="container small content">
                        <h1 class="title">Bublask</h1>
                        <p>Bubblask is small application with many features that help you increase productivity by using
                            pomodoro technique.</p>
                        <p>Pomodoro technique divides your total working/studying time into sessions of 25 minutes.</p>
                        <ul>
                            <li>You have to just set the timer of 25 minutes and start studying. In these 25 minutes,
                                you
                                should focus only on whatever you have decided to study/work. Take care of that nothing
                                should interrupt you.
                            </li>
                            <li>After 25 minutes you have to take a break of 5 minutes. In these 5 minutes, you can do
                                anything. You can attend calls you missed in those 25 minutes or you can take a small
                                walk.
                                You can just relax!
                            </li>
                            <li>After 5 minutes you have to again start studying for 25 minutes.</li>
                            <li>After 4 sessions of 25 minutes, you can take a break of 15–20 minutes.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </transition>
        <b-modal :active.sync="showNote" scroll="keep">
            <div class="container small" v-if="runningTask">
                <div class="notification is-warning">
                    <div v-html="runningTask.description"></div>
                </div>
            </div>
        </b-modal>
        <b-modal :active.sync="askPassword" scroll="keep">
            <div class="container small" v-if="wsTemp">
                <div class="notification is-warning">
                    <div class="field">
                        Join {{ wsTemp.name }}
                    </div>
                    <label class="field has-addons">
                        <input v-model="wsPassword" class="input" placeholder="Enter Password"/>
                        <span class="control">
                            <span class="button is-primary" @click="joinWS(wsTemp)">Join</span>
                        </span>
                    </label>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
import Avatar from "../components/Avatar";
import TaskBoard from "../components/TaskBoard";

const _ = require("lodash");
export default {
    components: {TaskBoard, Avatar},
    head() {
        return {
            title: this.title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Bubblask is small application with many features that help you increase productivity by using pomodoro technique.'
                }
            ]
        }
    },
    data() {
        return {
            timer: 0,
            mode: "POMODORO TIMER",
            showNote: false,
            wsPassword: null,
            askPassword: false,
            wsTemp: null
        }
    },
    computed: {
        title() {
            if (this.timer) {
                return this.fancyTimeFormat(this.timer) + " - Bubblask"
            }
            return "Bubblask - Online Pomodoro Timer - Best pomodoro tool!"
        },
        tasks() {
            let board = this.gb && this.gb.kind !== 'GHOST' ? this.gb.id : null;
            return this.hierarchy(this.$store.state.task.tasks, {idKey: 'id', parentKey: 'parent'}).filter(x => {
                return x.board === board;
            });
        },
        runningTask() {
            return this.$store.state.task.running
        },
        setting() {
            return this.$store.state.config.settings.timer
        },
        style() {
            let gSeting = this.$store.state.config.settings;
            let img = gSeting.color ? gSeting.color.background : null;
            if (img) {
                return {
                    backgroundImage: `url(${img.urls.full})`,
                    backgroundSize: 'cover'
                }
            }
            return null;
        },
        gb() {
            return this.$store.state.config.board
        },
    },
    methods: {
        async task_break(m) {
            this.mode = m === 5 ? "Short Break" : "Long Break";
            await this.$store.commit('task/SET_RUNNING', null);
            if (!this.setting.is_strict) {
                this.timer = m * 60;
                this.toTop(41);
            }
        },
        move_text(flag, index, time) {
            let elm = this.$refs[flag];
            if (!elm) return;
            for (let i = 0; i < elm.children.length; i++) {
                let display = elm.children[i].querySelector(`.number-grp-wrp`);
                let child = elm.children[i].querySelector(`.num-${time[index + i]}`);
                display.style.transform = `translate3d(0px, -${child.offsetTop}px, 0px)`;
            }
        },
        run_timer() {
            if (this.timer > 0) {
                let fTime = this.fancyTimeFormat(this.timer);
                this.move_text('seconds', 6, fTime);
                this.move_text('minutes', 3, fTime);
                this.timer = this.timer - 1;
            } else {
                this.move_text('seconds', 3, "00:00:00");
                this.move_text('minutes', 6, "00:00:00");
            }
        },
        joinWS(ws) {
            this.$axios.$post(`/general/workspaces/${ws.id}/join/`, {password: this.wsPassword}).then(res => {
                if (res.status) {
                    this.$store.commit('config/SET_WS', ws);
                }
                this.$router.replace({path: '/'});
                this.askPassword = false;
            });
        },
        async makeDone() {
            let clone = _.cloneDeep(this.runningTask);
            await this.$store.commit('task/SET_RUNNING', null);
            clone.changeStatus('complete');
            await this.$store.commit('task/UPDATE_TASK', clone);
        }
    },
    async mounted() {
        const _this = this;
        setInterval(function () {
            _this.run_timer();
        }, 1000);
        if (this.runningTask) {
            let now = new Date();
            let due_date = new Date(this.runningTask.dueDate());
            this.timer = (due_date.getTime() - now.getTime()) / 1000;
            this.toTop(41);
        }
        if (this.$route.query.ws) {
            if (this.currentUser && this.currentUser.profile.setting.ws !== this.$route.query.ws) {
                this.$axios.$get(`/general/workspaces/${this.$route.query.ws}/`).then(res => {
                    if (res.isPrivate) {
                        this.wsTemp = res;
                        this.askPassword = true;
                    } else {
                        this.joinWS(res);
                    }
                }).catch(() => {
                    this.$router.replace({path: '/'});
                });
            } else {

            }
        }
        this.toTop();
    },
    watch: {
        timer() {
            if (this.timer <= 0 && this.runningTask) {
                this.runningTask.changeStatus('stopping', 0);
            }
            if (this.timer === 3) {
                this.playSource('audio_rang');
            }
        },
        runningTask() {
            // Lay timer cua running task
            if (this.runningTask) {
                this.mode = this.runningTask.title;
                let now = new Date();
                let due_date = new Date(this.runningTask.dueDate());
                this.timer = (due_date.getTime() - now.getTime()) / 1000;
                this.toTop(41);
            } else {
                this.timer = 0;
                this.mode = "POMODORO TIMER";
            }
            this.showNote = false;
        }
    }
}
</script>

<style lang="scss">
</style>
