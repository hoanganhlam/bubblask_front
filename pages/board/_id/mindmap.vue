<template>
    <div id="visual" ref="visual" class="visual">
        <div id="vs-background" class="background"></div>
        <div class="wrapper">
            <task-graph readonly v-for="task in tasks" :key="task.id" :value="task" @down="mouse_down"
                        @add="handle_add_child" @board-update="openBoardModal"
                        @deleted="handle_delete_task"/>
        </div>
        <b-modal :active.sync="activeBoardUpdate" scroll="keep">
            <div class="modal-card" style="width: auto">
                <header class="modal-card-head">
                    <div class="level is-mobile" style="width: 100%">
                        <h4 class="level-left">Board Setting</h4>
                        <div class="level-right">
                            <button class="button is-small" type="button" @click="activeBoardUpdate = false">Cancel
                            </button>
                        </div>
                    </div>
                </header>
                <section class="modal-card-body">
                    <div v-if="boardF">
                        <div class="field">
                            <ce v-model="boardF.title" elm="h1" class="title" placeholder="Board title"></ce>
                        </div>
                        <div class="field">
                            <b-input v-model="boardF.slug" placeholder="Board title"/>
                        </div>
                        <div class="field">
                            <ce v-model="boardF.description" elm="div" class="notification is-light"
                                placeholder="description"/>
                        </div>
                        <div class="field">
                            <b-switch v-model="boardF.is_interface">Template</b-switch>
                        </div>
                        <div class="field">
                            <b-taginput placeholder="Hash tag" v-model="boardF.text_tags"></b-taginput>
                        </div>
                    </div>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-primary" @click="saveBoard">Save</button>
                </footer>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import {SVG} from '@svgdotjs/svg.js';
    import {Task} from "../../../plugins/task";
    import BInput from "../../../components/input/Input";
    import BTaginput from "../../../components/taginput/Taginput";

    const _ = require("lodash")

    export default {
        name: "visual",
        components: {BTaginput, BInput},
        async asyncData({$axios, params}) {
            let board = null;
            let query = {};
            if (params.id !== 'visual') {
                board = await $axios.$get(`/task/boards/${params.id}/`);
                query.board = board.id
            }
            let flat_tasks = await $axios.$get('/task/tasks/', {
                params: query
            })
            return {
                flat_tasks,
                board: board
            }
        },
        data() {
            return {
                startMove: false,
                offset: [],
                movingTask: null,
                drawing: null,
                lines: {},
                settings: {},
                documentSize: {
                    w: 9000,
                    h: 9000
                },
                tasks: [],
                activeBoardUpdate: false,
                boardF: null
            }
        },
        methods: {
            listenerDown(e) {
                if (this.movingTask === null) {
                    this.mouse_down({e})
                }
            },
            listenerUp(e) {
                this.startMove = false;
                this.offset = [];
                this.movingTask = null;
            },
            mouse_down({e, task}) {
                if (typeof task === "undefined") {
                    this.movingTask = this.tasks[0];
                } else {
                    this.movingTask = task;
                }
                let x = document.getElementById(`task-${this.movingTask.id}`)
                let elm = x.parentElement;

                this.startMove = true;
                this.offset = [
                    elm.offsetLeft - e.clientX,
                    elm.offsetTop - e.clientY
                ];
                this.draw(this.movingTask)
            },
            mouse_move(event) {
                if (this.startMove && this.movingTask) {
                    let elm = document.getElementById(`task-${this.movingTask.id}`).parentElement
                    event.preventDefault();
                    let mousePosition = {
                        x: event.clientX,
                        y: event.clientY
                    };
                    if (typeof this.settings[`T${this.movingTask.id}`] === 'undefined') {
                        this.$set(this.settings, `T${this.movingTask.id}`, {})
                    }
                    let left = mousePosition.x + this.offset[0];
                    let top = mousePosition.y + this.offset[1]
                    this.$set(this.settings[`T${this.movingTask.id}`], `left`, left)
                    this.$set(this.settings[`T${this.movingTask.id}`], `top`, top)
                    if (mousePosition.x <= 0 || mousePosition.y <= 0) {
                        return
                    }
                    elm.style.left = left + 'px';
                    elm.style.top = top + 'px';
                    this.draw(this.movingTask)
                }
            },
            draw(task) {
                if (document.getElementById(`task-${task.id}`) === null) return;
                let line = this.lines[`task-${task.id}`];
                let elm = document.getElementById(`task-${task.id}`).parentElement;
                if (typeof task.parent === "number") {
                    let parent_elm = document.getElementById(`task-${task.parent}`).parentElement;
                    let pp = this.getOffset(parent_elm);
                    let pc = this.getOffset(elm);

                    let setting = this.settings[`T${task.id}`]
                    let p1c = setting ? setting.p1c : 5;
                    let p2c = setting ? setting.p2c : 1;
                    let arrow = setting ? setting.arrow : 'bottom';
                    let vertical = setting ? setting.vertical : false;
                    if (pc.center.x < pp.points[0].x) {
                        if (pc.center.y > pp.points[0].y && pc.center.y < pp.points[6].y) {
                            vertical = false
                            p1c = 7;
                            p2c = 3;
                        }
                    } else if (pc.center.x > pp.points[0].x && pc.center.x < pp.points[2].x) {
                        if (pc.center.y < pp.points[0].y) {
                            vertical = true
                            p1c = 1;
                            p2c = 5;
                        } else if (pc.center.y > pp.points[6].y) {
                            vertical = true
                            p1c = 5;
                            p2c = 1;
                        }
                    } else {
                        if (pc.center.y > pp.points[0].y && pc.center.y < pp.points[6].y) {
                            p1c = 3;
                            p2c = 7;
                            vertical = false
                        }
                    }

                    let p1 = pp.points[p1c];
                    let p2 = pc.points[p2c];
                    let p11 = {
                        x: vertical ? p1.x : pp.center.x + (pc.center.x - pp.center.x) * 0.5,
                        y: vertical ? pp.center.y + (pc.center.y - pp.center.y) * 0.5 : p1.y
                    };
                    let p21 = {
                        x: vertical ? p2.x : pp.center.x + (pc.center.x - pp.center.x) * 0.5,
                        y: vertical ? pp.center.y + (pc.center.y - pp.center.y) * 0.5 : p2.y
                    };

                    // Save setting
                    if (typeof this.settings[`T${task.id}`] === 'undefined') {
                        this.$set(this.settings, `T${task.id}`, {})
                    }
                    this.$set(this.settings[`T${task.id}`], `p1c`, p1c)
                    this.$set(this.settings[`T${task.id}`], `p2c`, p2c)
                    this.$set(this.settings[`T${task.id}`], `arrow`, arrow)
                    this.$set(this.settings[`T${task.id}`], `vertical`, vertical)

                    if (line) line.remove()
                    // DRAW
                    this.lines[`task-${task.id}`] = this.drawing.path(`M ${p1.x} ${p1.y} L${p11.x} ${p11.y} L${p21.x} ${p21.y} L${p2.x} ${p2.y}`).stroke({
                        color: '#cccccc',
                        width: 2,
                        linecap: 'round',
                        dasharray: 8.3
                    }).fill("transparent")
                    this.lines[`task-${task.id}`].attr('marker-end', `url(#arrow-${arrow})`)
                }
                if (task.children) {
                    task.children.forEach(child => {
                        this.draw(child)
                    })
                }
            },
            initDraw(tasks) {
                if (tasks) {
                    tasks.forEach(task => {
                        this.draw(task)
                        this.initDraw(task.children)
                    })
                }
            },
            saveSetting: _.debounce(function () {
                if (this.board) {
                    this.$axios.$put(`/task/boards/${this.board.slug}/`, {
                        task_graph_setting: this.settings
                    })
                } else {
                    this.$axios.$put(`/auth/users/${this.currentUser.username}/`, {
                        task_graph_setting: this.settings
                    }).then(() => {
                        this.$store.commit('config/SET_SETTING_GRAPH', _.cloneDeep(this.settings));
                    })
                }
            }, 1000),
            async handle_add_child(task) {
                let instance = await this.$axios.$post("/task/tasks/", task);
                this.flat_tasks.push(instance);
                this.init();
                if (this.board === null) {
                    instance = new Task(instance);
                    await this.$store.commit('task/ADD_TASK', instance);
                    if (this.currentUser === null) {
                        await this.$indexedDB.add(instance);
                    }
                }
            },
            async handle_delete_task(task) {
                const find_all = (task, out) => {
                    out.push(task);
                    if (task.children) {
                        task.children.forEach(t => {
                            out.concat(find_all(t, out))
                        })
                    }
                    return out;
                };
                let deleted_tasks = find_all(task, []);
                for (let i = 0; i < deleted_tasks.length; i++) {
                    let t = deleted_tasks[i];
                    if (i > 0) {
                        await this.$axios.$delete(`/task/tasks/${t.id}/`)
                    }
                    let index = this.flat_tasks.map(x => x.id).indexOf(t.id);
                    if (index >= 0) {
                        let line = this.lines[`task-${t.id}`];
                        line.remove();
                        this.flat_tasks.splice(index, 1);
                    }
                }
            },
            init() {
                this.flat_tasks.forEach(task => {
                    task.temp_setting = this.settings[`T${task.id}`];
                });
                let tree_tasks = this.hierarchy(this.flat_tasks, {idKey: 'id', parentKey: 'parent'});
                tree_tasks.forEach(task => task.parent = 0);
                let parent_task = new Task({
                    id: 0,
                    temp_setting: this.settings[`T0`],
                    title: this.board ? this.board.title : 'Workspace',
                    board: this.board ? this.board.id : undefined
                });
                parent_task.children = tree_tasks;
                this.tasks = [
                    parent_task
                ];
            },
            saveBoard() {
                let data = {}
                const fields = ['title', 'description', 'slug', 'text_tags', 'is_interface'];
                fields.forEach(field => {
                    data[field] = this.boardF[field]
                });
                if (this.currentUser && this.currentUser.id === this.board.user) {
                    this.$axios.$put(`/task/boards/${this.board.slug}/`, data).then(res => {
                        this.boardF = null;
                        if (res.slug !== this.board.slug) {
                            this.$router.replace({path: `/template/${res.slug}`});
                        }
                        this.board = res;
                        this.tasks[0].title = res.title;
                    }).finally(() => {
                        this.activeBoardUpdate = false
                    })
                }
            },
            openBoardModal() {
                if (this.board) {
                    this.boardF = _.cloneDeep(this.board)
                    this.activeBoardUpdate = true
                }
            }
        },
        mounted() {
            if (process.client) {
                let _this = this;
                document.addEventListener('mousedown', this.listenerDown);
                document.addEventListener('mouseup', this.listenerUp);
                document.addEventListener('mousemove', this.mouse_move);
                let elm = document.getElementById("visual")
                this.drawing = SVG().addTo('#vs-background').size(elm.clientWidth, elm.clientWidth);
                this.drawing.defs().path("M5,0 0,2.5 5,5 3.5,3 3.5,2z").id("raphael-marker-classic");
                this.drawing.marker(10, 10, function (add) {
                    add.use("raphael-marker-classic").rotate(0).fill('#CCC')
                }).ref(5, 2.5).id("arrow-top");
                this.drawing.marker(10, 10, function (add) {
                    add.use("raphael-marker-classic").rotate(180).fill('#CCC')
                }).ref(5, 2.5).id("arrow-bottom");
                this.drawing.marker(10, 10, function (add) {
                    add.use("raphael-marker-classic").rotate(270).fill('#CCC')
                }).ref(5, 2.5).id("arrow-right");
                this.drawing.marker(10, 10, function (add) {
                    add.use("raphael-marker-classic").rotate(90).fill('#CCC')
                }).ref(5, 2.5).id("arrow-left");
                if (this.settings) {
                    this.initDraw(this.tasks);
                }
            }
        },
        watch: {
            settings: {
                deep: true,
                handler: function () {
                    this.saveSetting();
                }
            },
            flat_tasks: {
                deep: true,
                handler: function () {
                    this.init();
                    this.initDraw(this.tasks);
                }
            }
        },
        created() {
            if (this.board) {
                this.settings = this.board.settings ? this.board.settings.task_graph_setting : {};
            } else {
                this.settings = this.$store.state.config.settings.task_graph_setting ? _.cloneDeep(this.$store.state.config.settings.task_graph_setting) : {};
            }
            this.init()
        },
        beforeDestroy() {
            document.removeEventListener("mousedown", this.listenerDown)
            document.removeEventListener("mouseup", this.listenerUp)
            document.removeEventListener("mousemove", this.mouse_move)
        }
    }
</script>

<style lang="scss">
    .visual {
        position: relative;
        min-height: calc(100vh - 40px);
        overflow: hidden;
        background-image: linear-gradient(#F5F5F5 1px, transparent 1px), linear-gradient(90deg, #F5F5F5 1px, transparent 1px);
        background-size: 23px 23px;
        cursor: move;

        .wrapper,
        .background {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }

        .task {
            position: absolute;
            min-width: 250px;

            .tasks {
                position: relative;

                .task {
                    left: 1rem;
                }
            }
        }
    }
</style>
