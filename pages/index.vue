<template>
    <div>
        <div class="hero is-primary" v-bind:class="{'is-fullheight': timer > 0}" v-bind:style="style">
            <div class="hero-body">
                <div class="container pomodoro">
                    <div class="wrap">
                        <div class="timer">
                            <div class="title uppercase">{{mode}}</div>
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
                    <div class="buttons timer-control"
                         v-bind:class="{'hidden': !(runningTask === null || !setting.is_strict)}">
                        <div class="button is-primary" @click="task_break(5)">Short Break</div>
                        <div class="button is-primary" @click="task_break(10)">Long Break</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero is-secondary is-small" style="min-height: calc(50vh - 20px)">
            <div class="hero-body">
                <div class="container small">
                    <div v-if="setting.is_strict" class="notification is-warning content">
                        <b>Strict mode</b>
                        <ul>
                            <li>You can't stop timer when working</li>
                            <li>You can't update running task</li>
                        </ul>
                    </div>
                </div>
                <div class="boards">
                    <div class="board">
                        <div class="task has-text-centered" @click="task_add">
                            <div class="notification">
                                <x-icon name="plus"/>
                            </div>
                        </div>
                        <draggable v-model="activeTasks" v-bind="dragOptions" @change="re_order">
                            <task class="master" v-for="(task, i) in activeTasks" :key="i" :value="task"
                                  @add="handle_add_child"/>
                        </draggable>
                    </div>
                </div>
            </div>
        </div>
        <transition name="fade">
            <div v-if="showAbout" class="hero">
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
                        <h2 class="title is-4">Features</h2>
                        <div class="feature" v-for="(f, i) in features" :key="`f-${i}`">
                            <div class="media">
                                <div class="media-content">
                                    <strong class="value">{{f.title}}</strong>
                                    <p>{{f.description}}</p>
                                </div>
                                <div class="media-right">
                                    <div class="button is-text is-small">Show me</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import Avatar from "../components/Avatar";
    import {Task} from "../plugins/task";
    import draggable from 'vuedraggable'

    const _ = require("lodash")
    export default {
        components: {Avatar, draggable},
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
                mode: "POMODORO",
                features: [
                    {
                        title: 'Podomoro Timer',
                        description: 'Timer base on Podomoro Technique',
                        action: ''
                    },
                    {
                        title: 'Strict mode',
                        description: 'Especially, with strict mode, Bubblask take you work under the framework, while you\'re working you can\'t stop or update the task, you only can break when time out!',
                        action: ''
                    },
                    {
                        title: 'LeaderBoard',
                        description: 'That\'s make challenge, you can see how others work and compare your productivity with leader.',
                        action: ''
                    },
                    {
                        title: 'Report',
                        description: 'You can see how you work daily, weekly, monthly, even yearly',
                        action: ''
                    },
                    {
                        title: 'Save your work',
                        description: 'You can store your task on cloud, ',
                        action: ''
                    },
                    {
                        title: 'Personalized',
                        description: 'With Personalized you can custom your settings: color, audio and timer!',
                        action: ''
                    },
                    {
                        title: 'Group',
                        description: 'You can join or create any public group and work with your friends together in real time, I think that will make a challenge!',
                        action: ''
                    }
                ],
                activeTasks: [],
                dragOptions: {
                    animation: 0,
                    group: "description",
                    disabled: false,
                    ghostClass: "ghost"
                },
                board: null,
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
                let board = this.board && this.board.id ? this.board.id : null;
                return this.$store.state.task.tasks.filter(task => task.board === board);
            },
            runningTask() {
                return this.$store.state.task.running
            },
            setting() {
                return this.$store.state.config.settings.timer
            },
            taskOrder() {
                return this.$store.state.config.settings.task_order || []
            },
            showAbout() {
                return this.$store.state.config.showAbout
            },
            style() {
                let gSeting = this.$store.state.config.settings
                let img = gSeting.color ? gSeting.color.background : null;
                if (img) {
                    return {
                        backgroundImage: `url(${img.urls.full})`,
                        backgroundSize: 'cover'
                    }
                }
                return null
            }
        },
        methods: {
            init_task(val) {
                this.activeTasks = [];
                let temp = _.cloneDeep(val.filter(x => !['stopped', 'complete'].includes(x.status)));
                this.activeTasks = this.hierarchy(temp, {idKey: 'id', parentKey: 'parent'})
                this.activeTasks.forEach(x => {
                    x.order = x.id ? this.taskOrder.indexOf(x.id) : 0
                });
                this.activeTasks.sort((a, b) => a.order - b.order)
            },
            async task_break(m) {
                this.mode = m === 5 ? "Short Break" : "Long Break";
                await this.$store.commit('task/SET_RUNNING', null);
                if (!this.setting.is_strict) {
                    this.timer = m * 60;
                    this.toTop(41);
                }
            },
            async task_add() {
                let task = new Task({tomato: this.setting.tomato, updating: true})
                await this.$store.commit('task/ADD_TASK', task);
                if (this.currentUser === null) {
                    await this.$indexedDB.add(task);
                }
                this.re_order();
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
            re_order() {
                let order = this.activeTasks.map(x => x.id);
                if (this.currentUser) {
                    this.$axios.$put(`/auth/users/${this.currentUser.username}/`, {
                        task_order: order
                    }).then(res => {
                        this.$store.commit('config/SET_SETTING_ORDER', order);
                    })
                } else {
                    localStorage.setItem("task_order", order.toString());
                }
            },
            handle_add_child(task) {
                this.$store.commit('task/ADD_TASK', task);
                if (this.currentUser === null) {
                    this.$indexedDB.add(task);
                }
            }
        },
        async mounted() {
            const _this = this;
            setInterval(function () {
                _this.run_timer();
            }, 1000);
            if (this.runningTask) {
                this.mode = 'Pomodoro';
                let now = new Date();
                let due_date = new Date(this.runningTask.dueDate());
                this.timer = (due_date.getTime() - now.getTime()) / 1000;
                this.toTop(41);
            }
        },
        watch: {
            timer() {
                if (this.timer <= 0 && this.runningTask) {
                    this.runningTask.changeStatus('stopping', 0);
                }
            },
            runningTask() {
                // Lay timer cua running task
                if (this.runningTask) {
                    this.mode = 'Pomodoro';
                    let now = new Date();
                    let due_date = new Date(this.runningTask.dueDate());
                    this.timer = (due_date.getTime() - now.getTime()) / 1000;
                    this.toTop(41);
                } else {
                    this.timer = 0;
                }
            },
            tasks: {
                deep: true,
                handler: function (val, oldVal) {
                    this.init_task(val);
                }
            }
        },
        created() {
            this.init_task(this.tasks)
        }
    }
</script>

<style lang="scss">
    .timer-control {
        transition: visibility 0s, opacity 0.1s linear;
        opacity: 1;

        &.hidden {
            opacity: 0;
        }
    }

    /* bounce */
    .bounce-enter-active {
        animation: moveUp .25s;
    }

    .bounce-leave-active {
        animation: moveUp .25s reverse;
    }

    @keyframes moveUp {
        0% {
            top: 100px;
        }
        100% {
            bottom: 0;
        }
    }

    .feature {
        border: 1px #EEEEEE solid;
        padding: .5rem .75rem;
        margin-bottom: .5rem;
        background: #FFFFFF;
    }

    .boards {
        margin-top: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .board {
            min-width: 500px;
            max-width: 500px;
            margin: 0 .5rem;
        }
    }

    .task.master {
        position: relative;

        .task {
            position: unset;

            .card {
                top: 5%;
            }
        }
    }
</style>
