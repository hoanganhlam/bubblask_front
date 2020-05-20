<template>
    <div>
        <div class="hero is-primary" v-bind:class="{'is-fullheight': timer > 0}" v-bind:style="customStyle">
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
                        <draggable v-model="activeTasks" v-bind="dragOptions" :move="on_move"
                                   @change="re_order"
                                   @start="isDragging=true" @end="isDragging = false">
                            <div class="task" v-for="(task, i) in activeTasks" :key="i"
                                 v-bind:class="{'is-editing': editing === i}"
                                 @input="on_input(i)">
                                <transition name="fade">
                                    <div @dblclick="editing = i" class="notification media"
                                         v-bind:class="{'is-warning': task.isRunning()}">
                                        <div class="media-left">
                                            <div class="button is-small" @click="task_done(task)"
                                                 v-bind:class="{'is-static': ['stopped', 'complete'].includes(task.status)}">
                                                <x-icon name="check"/>
                                            </div>
                                        </div>
                                        <div class="media-content">
                                            <ce placeholder="Untitled" elm="h4" class="title"
                                                :editable="!task.isRunning()"
                                                v-model="task.title"></ce>
                                            <small class="field">{{task.interval * task.tomato}}m</small>
                                        </div>
                                        <div class="media-right clickable"
                                             v-if="!['stopped', 'complete'].includes(task.status)">
                                            <div class="buttons">
                                                <div class="button is-hidden-mobile is-text">
                                                    {{task.times.length}} / {{task.interval}}
                                                </div>
                                                <div v-if="!task.isRunning()" class="button is-text is-hidden-mobile">
                                                    {{fancyTimeFormat(task.timeLeft())}}
                                                </div>
                                                <div class="button" @click="task_run(task)">
                                                    <x-icon class="is-medium"
                                                            :name="task.status ===  'running' ? 'pause' : 'play'"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </transition>
                                <transition name="bounce">
                                    <div v-if="editing === i" class="card">
                                        <div class="card-content">
                                            <ce elm="p" class="note" placeholder="Note" v-model="task.description"
                                                :editable="!task.isRunning()"></ce>
                                            <div class="field">
                                                <label class="label">Estimate</label>
                                                <b-number-input
                                                    :disabled="task.isRunning()"
                                                    :min="1"
                                                    :max="10"
                                                    controlsPosition="compact"
                                                    expanded size="is-small" v-model="task.interval"
                                                    @input="on_input(i)"
                                                />
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <div class="card-footer-item" @click="editing = -1">
                                                <x-icon name="close"></x-icon>
                                            </div>
                                        </div>
                                    </div>
                                </transition>
                            </div>
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
                editing: -1,
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
                isDragging: false
            }
        },
        computed: {
            dragOptions() {
                return {
                    animation: 0,
                    group: "description",
                    disabled: false,
                    ghostClass: "ghost"
                };
            },
            tasks() {
                return this.$store.state.task.tasks
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
            title() {
                if (this.timer) {
                    return this.fancyTimeFormat(this.timer) + " - Bubblask"
                }
                return "Bubblask - Online Pomodoro Timer - Best pomodoro tool!"
            },
            showAbout() {
                return this.$store.state.config.showAbout
            },
            customStyle() {
                let img = this.$store.state.config.settings.color.background;
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
                this.activeTasks = _.cloneDeep(val.filter(x => !['stopped', 'complete'].includes(x.status)));
                this.activeTasks.forEach(x => {
                    x.order = x.id ? this.taskOrder.indexOf(x.id) : 0
                });
                this.activeTasks.sort((a, b) => a.order - b.order)
            },
            async task_break(m) {
                this.mode = m === 5 ? "Short Break" : "Long Break";
                if (!this.setting.is_strict) {
                    let running = _.cloneDeep(this.runningTask);
                    if (running) {
                        running.changeStatus('stopping', this.timer);
                        await this.push_update_task(running);
                    }
                    this.timer = m * 60;
                    this.toTop(0);
                }
            },
            async task_add() {
                this.push_post_task(new Task({tomato: this.setting.tomato, updating: true}));
            },
            async task_run(task) {
                if (this.runningTask) {
                    let running = _.cloneDeep(this.runningTask);
                    if (running.uid !== task.uid) {
                        running.changeStatus('stopping', this.timer);
                        this.push_update_task(running)
                    } else {
                        if (!this.setting.is_strict) {
                            running.changeStatus('stopping', this.timer);
                            this.push_update_task(running)
                        }
                        return
                    }
                }
                task.changeStatus('running');
                this.push_update_task(task)
            },
            async task_done(task) {
                task.changeStatus('complete');
                this.push_update_task(task)
            },
            async push_update_task(task) {
                await this.$store.commit('task/UPDATE_TASK', task)
            },
            async push_post_task(task) {
                await this.$store.commit('task/ADD_TASK', task);
                if (this.currentUser === null) {
                    await this.$indexedDB.add(task);
                }
                this.re_order();
            },
            async push_late() {
                let needUpdate = this.tasks.filter(x => x.updating);
                for (let i = 0; i < needUpdate.length; i++) {
                    let res = null;
                    let task = _.cloneDeep(needUpdate[i]);
                    if (this.currentUser) {
                        if (task.id) {
                            res = await this.$axios.$put(`/task/tasks/${task.id}/`, task)
                        } else {
                            res = await this.$axios.$post("/task/tasks/", task)
                        }
                    }
                    else {
                        await this.$indexedDB.put(task);
                        res = {
                            id: task.uid
                        }
                    }
                    if (res) {
                        task.id = res.id;
                        task.updating = false;
                        this.push_update_task(task)
                    }
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
            on_input: _.debounce(function (index) {
                this.activeTasks[index].updating = true;
                this.push_update_task(this.activeTasks[index]);
            }, 500),
            on_move({relatedContext, draggedContext}) {
                const relatedElement = relatedContext.element;
                const draggedElement = draggedContext.element;
                return (
                    (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
                );
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
            }
        },
        async mounted() {
            const _this = this;
            setInterval(function () {
                _this.run_timer();
            }, 1000);
            setInterval(function () {
                _this.push_late();
            }, 800);
        },
        watch: {
            timer() {
                if (this.timer <= 0 && this.runningTask) {
                    let running = this.runningTask;
                    running.changeStatus('stopping', 0);
                    this.push_update_task(running)
                }
            },
            runningTask() {
                // Lay timer cua running task
                if (this.runningTask) {
                    this.mode = 'Pomodoro';
                    this.timer = this.runningTask.timer();
                    this.toTop();
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
</style>
