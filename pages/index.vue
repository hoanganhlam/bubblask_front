<template>
    <div>
        <div class="hero is-dark" v-bind:class="{'is-fullheight': timer > 0}">
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
                    <div class="buttons timer-control" v-bind:class="{'hidden': runningTask}">
                        <div class="button is-primary" @click="startBreak(5)">Short Break</div>
                        <div class="button is-primary" @click="startBreak(10)">Long Break</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero is-small">
            <div class="hero-body">
                <div class="container">
                    <h2 class="title is-mobile is-4 has-text-centered">Task</h2>
                    <div class="level is-mobile">
                        <div class="level-left">
                            <div class="buttons" style="margin-left: -.85rem;">
                                <div class="button is-text">
                                    <span class="field">Total: </span>
                                    <span class="value">{{tasks.length}}</span>
                                </div>
                                <div class="button is-text">
                                    <span class="field">Time: </span>
                                    <span class="value">{{totalTime}}m</span>
                                </div>
                            </div>
                        </div>
                        <div class="level-right">
                            <b-switch :rounded="false" v-model="setting.rigid"></b-switch>
                        </div>
                    </div>
                    <div v-if="setting.rigid" class="notification content">
                        <b>Strict mode</b>
                        <ul>
                            <li>You can't stop timer when working</li>
                            <li>You can't update running task</li>
                        </ul>
                    </div>
                    <div class="task" v-for="(task, i) in displayTasks" :key="i"
                         v-bind:class="{'is-editing': editing === i}"
                         @input="handleInput(i)">
                        <transition name="fade">
                            <div @dblclick="editing = i" class="notification media"
                                 v-bind:class="{'is-warning': task.isRunning()}">
                                <div class="media-left">
                                    <div class="button is-small" @click="done(task)"
                                         v-bind:class="{'is-static': ['stopped', 'complete'].includes(task.status)}">
                                        <x-icon name="check"/>
                                    </div>
                                </div>
                                <div class="media-content">
                                    <ce placeholder="Untitled" elm="h4" class="title" :editable="!task.isRunning()"
                                        v-model="task.title"></ce>
                                    <small class="field">{{task.interval * task.tomato}}m</small>
                                </div>
                                <div class="media-right clickable" v-if="!['stopped', 'complete'].includes(task.status)">
                                    <div class="buttons">
                                        <div class="button is-hidden-mobile is-text">
                                            {{task.times.length}} / {{task.interval}}
                                        </div>
                                        <div v-if="!task.isRunning()" class="button is-text is-hidden-mobile">
                                            {{fancyTimeFormat(task.timeLeft())}}
                                        </div>
                                        <div class="button" @click="run(task)">
                                            <x-icon class="is-medium"
                                                    :name="task.status ===  'running' ? 'pause' : 'play'"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </transition>
                        <transition name="bounce">
                            <div v-if="editing === i" class="card">
                                <div class="card-header" @dblclick="editing = -1">
                                    <div class="card-header-title">
                                        <ce elm="h4" class="title" placeholder="Untitled" v-model="task.title"></ce>
                                    </div>
                                </div>
                                <div class="card-content">
                                    <ce elm="p" class="note notification" placeholder="Note" v-model="task.note" :editable="!task.isRunning()"></ce>
                                    <div class="field">
                                        <label class="label">Estimate</label>
                                        <b-number-input
                                            :disabled="!task.isRunning()"
                                            :min="1"
                                            :max="10"
                                            controlsPosition="compact"
                                            expanded size="is-small" v-model="task.interval" @input="handleInput(i)"/>
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
                    <div class="notification task has-text-centered" @click="add">
                        <x-icon name="plus"/>
                        <span>Add Task</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero is-warning is-small">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">Bublask</h1>
                    <q>You have to completely shift your thinking, it takes you a while to get into it and it takes
                        you a while to get back and remember where you were…We found about 82 percent of all
                        interrupted work is resumed on the same day. But here’s the bad news — it takes an average
                        of 23 minutes and 15 seconds to get back to the task.</q>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const IndexedDB = process.server ? null : require('../plugins/IndexedDB')
    import {Task} from "../plugins/task";
    import moment from "moment";

    const _ = require("lodash")

    export default {
        head() {
            return {
                title: this.title,
                meta: [
                    {hid: 'description', name: 'description', content: 'My custom description'}
                ]
            }
        },
        data() {
            return {
                tasks: [],
                setting: {
                    tomato: 25,
                    short_break: 5,
                    long_break: 10,
                    rigid: false
                },
                editing: -1,
                timer: 0,
                indexedDb: null,
                mode: "POMODORO"
            }
        },
        computed: {
            totalTime() {
                let out = 0
                this.tasks.forEach(task => {
                    out = out + this.setting.tomato * task.interval
                })
                return out
            },
            runningTask() {
                let running = this.tasks.filter(item => item.status === 'running')
                return running.length ? running[running.length - 1] : null
            },
            title() {
                if (this.timer) {
                    return this.fancyTimeFormat(this.timer) + " - Bubblask"
                }
                return "Bubblask - Online Pomodoro Timer - Best pomodoro tool!"
            },
            displayTasks() {
                return this.tasks.filter(x => !['stopped', 'complete'].includes(x.status))
            }
        },
        methods: {
            async add() {
                const task = new Task({tomato: this.setting.tomato, updating: true})
                await this.pushCreateTask(task)
                this.tasks.push(task)
            },
            run(task) {
                this.mode = "POMODORO"
                let running_tasks = this.tasks.filter(item => item.status === 'running' && item.uid !== task.uid)
                for (let i = 0; i < running_tasks.length; i++) {
                    this.timer = running_tasks[i].changeStatus(this.setting.rigid ? 'stopped' : 'stopping', this.timer)
                    this.pushUpdateTask(running_tasks[i], 'stopped')
                }
                if (task.status === 'pending') {
                    task.changeStatus('running')
                } else if (task.status === 'running') {
                    task.changeStatus('stopping', this.timer)
                } else if (task.status === 'stopping') {
                    task.changeStatus('running')
                }
                this.pushUpdateTask(task)
            },
            done(task) {
                this.pushUpdateTask(task, 'complete')
                this.playSource('audioPress')
            },
            async pushUpdateTask(task, flag) {
                if (flag || ['stopped', 'complete'].includes(task.status)) {
                    if (flag) task.changeStatus(flag)
                }
                this.indexedDB.put(task).then(x => {
                }).catch(x => {
                    console.log(x);
                })
            },
            async pushCreateTask(task) {
                this.indexedDB.add(task).then(
                );
            },
            async pushLate() {
                if (this.currentUser) {
                    let needUpdate = this.tasks.filter(x => x.updating)
                    for (let i = 0; i < needUpdate.length; i++) {
                        let res = null
                        if (needUpdate[i].id) {
                            res = await this.$axios.$put(`/task/tasks/${needUpdate[i].id}/`, needUpdate[i])
                        } else {
                            res = await this.$axios.$post("/task/tasks/", needUpdate[i])
                        }
                        if (res) {
                            needUpdate[i].updating = false
                        }
                    }
                }
            },
            moveTXT(flag, index, time) {
                let elm = this.$refs[flag]
                if (!elm) return
                for (let i = 0; i < elm.children.length; i++) {
                    let display = elm.children[i].querySelector(`.number-grp-wrp`)
                    let child = elm.children[i].querySelector(`.num-${time[index + i]}`)
                    display.style.transform = `translate3d(0px, -${child.offsetTop}px, 0px)`
                }
            },
            runTimer() {
                if (this.timer > 0) {
                    let fTime = this.fancyTimeFormat(this.timer)
                    this.moveTXT('seconds', 6, fTime)
                    this.moveTXT('minutes', 3, fTime)
                    this.timer = this.timer - 1
                } else {
                    this.moveTXT('seconds', 3, "00:00:00")
                    this.moveTXT('minutes', 6, "00:00:00")
                }
            },
            startBreak(m) {
                this.mode = m === 5 ? "Short Break" : "Long Break"
                if (!this.setting.rigid) {
                    let running_tasks = this.tasks.filter(item => item.status === 'running')
                    for (let i = 0; i < running_tasks.length; i++) {
                        running_tasks[i].changeStatus('stopping', this.timer)
                        this.pushUpdateTask(running_tasks[i])
                    }
                    this.timer = m * 60
                    this.toTop(48)
                }
            },
            toTop(range = 0) {
                const myDiv = document.getElementById('__layout');
                myDiv.scrollTop = range;
                document.body.scrollTop = range;
                document.documentElement.scrollTop = range;
            },
            handleInput(index) {
                this.tasks[index].updating = true
            },
            playSource(flag) {
                if (this[flag]) {
                    this[flag].play()
                }
            }
        },
        async mounted() {
            let _this = this
            const syncDB = async function () {
                if (_this.currentUser) {
                    _this.indexedDB.clearAll(async () => {
                        let res = await _this.$axios.$get('/task/tasks/')
                        if (res.length) {
                            for (let i = 0; i < res.length; i++) {
                                let task = new Task(res[i])
                                _this.indexedDB.add(task).then(() => {
                                    _this.tasks.push(task)
                                })
                            }
                        }
                    })
                } else {
                    _this.indexedDB.readAll(function (cursor) {
                        if (!['complete', 'stopped'].includes(cursor.value.status)) {
                            _this.tasks.push(new Task(cursor.value))
                        }
                    });
                }
            }
            const handleERR = function (e) {

            }
            const handleUP = function (e) {

            }
            if (process.client) {
                this.audioRang = new Audio("/sound/001.wav");
                this.audioPress = new Audio("/sound/002.mp3");
                const SimpleIndexedDB = IndexedDB.default.IndexedDB
                this.indexedDB = new SimpleIndexedDB('bubblask');
                this.indexedDB.open(syncDB, handleERR(), handleUP, "title", "uid", [])
            }
            setInterval(function () {
                _this.runTimer()
            }, 1000)
            setInterval(function () {
                _this.pushLate()
            }, 3000)
        },
        watch: {
            timer() {
                if (this.timer === 0 && this.runningTask) {
                    if (this.runningTask.times.length < this.runningTask.interval) {
                        this.timer = this.runningTask.changeStatus('running', this.timer)
                    } else {
                        this.done(this.runningTask)
                        this.timer = 0
                    }
                    this.playSource('audioRang')
                }
            },
            runningTask() {
                this.timer = 0
                if (this.runningTask) {
                    this.timer = this.runningTask.getTimer((task) => {
                        this.pushUpdateTask(task)
                    })
                    this.toTop(48)
                } else {
                    this.toTop(0)
                }
            }
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
</style>
