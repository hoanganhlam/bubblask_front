exports.ids = [4];
exports.modules = {

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/TaskBoard.vue?vue&type=template&id=c3815e9e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"board"},[(!_vm.readonly && _vm.authorised)?_vm._ssrNode("<div class=\"media\">","</div>",[_vm._ssrNode("<div class=\"media-content\">","</div>",[_vm._ssrNode("<div class=\"task has-text-centered\">","</div>",[_vm._ssrNode("<div class=\"notification\">","</div>",[_c('x-icon',{attrs:{"name":"plus"}})],1)])]),_vm._ssrNode(" "),_c('n-link',{staticClass:"media-right",attrs:{"to":"/board/visual"}},[_c('div',{staticClass:"task"},[_c('div',{staticClass:"notification"},[_c('x-icon',{attrs:{"name":"file-tree-outline"}})],1)])])],2):_vm._e(),_vm._ssrNode(" "),(!_vm.loading && _vm.activeTasks.length)?_c('draggable',_vm._b({on:{"change":_vm.handle_order},model:{value:(_vm.activeTasks),callback:function ($$v) {_vm.activeTasks=$$v},expression:"activeTasks"}},'draggable',_vm.dragOptions,false),_vm._l((_vm.activeTasks),function(task,i){return _c('task',{key:i,staticClass:"master",attrs:{"value":task,"readonly":_vm.readonly,"tree":_vm.tree,"board":_vm.board},on:{"add":_vm.handle_add_child,"editing":function($event){_vm.disabledDrag = $event},"deleted":function($event){return _vm.$emit('deleted', $event)}}})}),1):_vm._e(),_vm._ssrNode(" "+((_vm.loading)?("<div class=\"tasks\">"+(_vm._ssrList((5),function(i){return ("<div class=\"task\"><div class=\"notification media\"><div class=\"skeleton-task\"></div></div></div>")}))+"</div>"):"<!---->"))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TaskBoard.vue?vue&type=template&id=c3815e9e&

// EXTERNAL MODULE: ./plugins/task.js
var plugins_task = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TaskBoard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const _ = __webpack_require__(2);


/* harmony default export */ var TaskBoardvue_type_script_lang_js_ = ({
  name: "TaskBoard",
  props: {
    tasks: {
      default: () => [],
      type: Array
    },
    board: {
      default: null,
      type: Object
    },
    readonly: {
      default: false,
      type: Boolean
    },
    tree: {
      default: false,
      type: Boolean
    }
  },

  data() {
    return {
      activeTasks: [],
      disabledDrag: this.readonly,
      loading: false,
      boardSlug: this.board ? this.board.slug : null
    };
  },

  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: this.disabledDrag,
        ghostClass: "ghost"
      };
    },

    taskOrder() {
      if (this.board && this.board.id) {
        return this.board.settings && this.board.settings.task_order ? this.board.settings.task_order : [];
      } else {
        return this.$store.state.config.settings.task_order || [];
      }
    },

    timerSetting() {
      return this.$store.state.config.settings.timer;
    },

    authorised() {
      return !(Boolean(this.board) && this.board.settings && !this.board.settings['collaborate']);
    }

  },
  methods: {
    init_task(val) {
      if (val) {
        this.activeTasks = [];
        let temp = [];

        if (this.board) {
          temp = _.cloneDeep(val);
        } else {
          temp = _.cloneDeep(val.filter(x => !['stopped', 'complete'].includes(x.status)));
        }

        this.activeTasks = temp;
        this.activeTasks.forEach(x => {
          x.order = x.id ? this.taskOrder.indexOf(x.id) : 0;
        });
        this.activeTasks.sort((a, b) => a.order - b.order);
      }
    },

    handle_order() {
      let order = this.activeTasks.map(x => x.id);

      if (this.currentUser) {
        if (this.board && this.board.id) {
          this.$axios.$put(`/task/boards/${this.boardSlug}/`, {
            task_order: order
          });
        } else {
          this.$axios.$put(`/auth/users/${this.currentUser.username}/`, {
            task_order: order
          }).then(() => {
            this.$store.commit('config/SET_SETTING_ORDER', order);
          });
        }
      } else {
        localStorage.setItem("task_order", order.toString());
      }
    },

    handle_add_child(task) {
      this.$store.commit('task/ADD_TASK', task);

      if (this.currentUser === null) {
        this.$indexedDB.add(task);
      }
    },

    async handle_add() {
      let task = new plugins_task["a" /* Task */]({
        tomato: this.timerSetting.tomato,
        update: true,
        board: this.board ? this.board.id : null
      });
      await this.$store.commit('task/ADD_TASK', task);

      if (this.currentUser === null) {
        await this.$indexedDB.add(task);
      }

      this.handle_order();
    }

  },
  watch: {
    tasks: {
      deep: true,
      handler: function (val) {
        this.init_task(val);

        if (val.length === 0) {
          this.loading = true;
          setTimeout(function () {
            this.loading = false;
          }.bind(this), 800);
        }
      }
    },

    readonly() {
      this.disabledDrag = this.readonly;
    }

  },

  created() {
    this.init_task(this.tasks);
  }

});
// CONCATENATED MODULE: ./components/TaskBoard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TaskBoardvue_type_script_lang_js_ = (TaskBoardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/TaskBoard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TaskBoardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4e1e1079"
  
)

/* harmony default export */ var TaskBoard = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=3c6c60c2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div"+(_vm._ssrClass("hero is-primary",{'is-fullheight': _vm.timer > 0}))+(_vm._ssrStyle(null,_vm.style, null))+">","</div>",[_vm._ssrNode("<div class=\"hero-body\">","</div>",[_vm._ssrNode("<div class=\"container pomodoro\">","</div>",[_vm._ssrNode("<div class=\"wrap\"><div class=\"timer\"><div class=\"title uppercase\">"+_vm._ssrEscape(_vm._s(_vm.mode))+"</div> <div class=\"timer--clock\"><div class=\"minutes-group clock-display-grp\"><div class=\"first number-grp\"><div class=\"number-grp-wrp\"><div class=\"num num-0\"><p>0</p></div> <div class=\"num num-1\"><p>1</p></div> <div class=\"num num-2\"><p>2</p></div> <div class=\"num num-3\"><p>3</p></div> <div class=\"num num-4\"><p>4</p></div> <div class=\"num num-5\"><p>5</p></div> <div class=\"num num-6\"><p>6</p></div> <div class=\"num num-7\"><p>7</p></div> <div class=\"num num-8\"><p>8</p></div> <div class=\"num num-9\"><p>9</p></div></div></div> <div class=\"second number-grp\"><div class=\"number-grp-wrp\"><div class=\"num num-0\"><p>0</p></div> <div class=\"num num-1\"><p>1</p></div> <div class=\"num num-2\"><p>2</p></div> <div class=\"num num-3\"><p>3</p></div> <div class=\"num num-4\"><p>4</p></div> <div class=\"num num-5\"><p>5</p></div> <div class=\"num num-6\"><p>6</p></div> <div class=\"num num-7\"><p>7</p></div> <div class=\"num num-8\"><p>8</p></div> <div class=\"num num-9\"><p>9</p></div></div></div></div> <div class=\"clock-separator\"><p>:</p></div> <div class=\"seconds-group clock-display-grp\"><div class=\"first number-grp\"><div class=\"number-grp-wrp\"><div class=\"num num-0\"><p>0</p></div> <div class=\"num num-1\"><p>1</p></div> <div class=\"num num-2\"><p>2</p></div> <div class=\"num num-3\"><p>3</p></div> <div class=\"num num-4\"><p>4</p></div> <div class=\"num num-5\"><p>5</p></div> <div class=\"num num-6\"><p>6</p></div> <div class=\"num num-7\"><p>7</p></div> <div class=\"num num-8\"><p>8</p></div> <div class=\"num num-9\"><p>9</p></div></div></div> <div class=\"second number-grp\"><div class=\"number-grp-wrp\"><div class=\"num num-0\"><p>0</p></div> <div class=\"num num-1\"><p>1</p></div> <div class=\"num num-2\"><p>2</p></div> <div class=\"num num-3\"><p>3</p></div> <div class=\"num num-4\"><p>4</p></div> <div class=\"num num-5\"><p>5</p></div> <div class=\"num num-6\"><p>6</p></div> <div class=\"num num-7\"><p>7</p></div> <div class=\"num num-8\"><p>8</p></div> <div class=\"num num-9\"><p>9</p></div></div></div></div></div> <h4>A SIMPLE HACK FOR DEEP WORK</h4></div></div> "),_vm._ssrNode("<div class=\"buttons timer-control\">","</div>",[_vm._ssrNode((((_vm.runningTask === null || !_vm.setting.is_strict))?("<div class=\"button is-primary\">Short Break\n                    </div>"):"<!---->")+" "+(((_vm.runningTask === null || !_vm.setting.is_strict))?("<div class=\"button is-primary\">Long Break\n                    </div>"):"<!---->")+" "),(_vm.runningTask && !_vm.setting.is_strict)?_vm._ssrNode("<div class=\"button is-primary\">","</div>",[_c('x-icon',{attrs:{"name":"pause"}})],1):_vm._e(),_vm._ssrNode(" "),(_vm.runningTask)?_vm._ssrNode("<div class=\"button is-primary\">","</div>",[_c('x-icon',{attrs:{"name":"check"}})],1):_vm._e()],2),_vm._ssrNode(" "+((_vm.runningTask && !_vm.showNote && _vm.runningTask.description)?("<div class=\"button is-text\">Show Note\n                </div>"):"<!---->"))],2)])]),_vm._ssrNode(" "),(!_vm.runningTask)?_vm._ssrNode("<div class=\"hero is-secondary is-small\" style=\"min-height: 50vh\">","</div>",[_vm._ssrNode("<div class=\"hero-body\">","</div>",[_vm._ssrNode(((_vm.setting.is_strict)?("<div class=\"container small\"><div class=\"notification is-warning content\"><b>Strict mode</b> <ul><li>You can't stop timer when working</li> <li>You can't update running task</li></ul></div></div>"):"<!---->")+" "),_vm._ssrNode("<div class=\"boards\">","</div>",[_c('task-board',{attrs:{"tasks":_vm.tasks,"board":_vm.gb && _vm.gb.kind !== 'GHOST' ? _vm.gb : null}})],1)],2)]):_vm._e(),_vm._ssrNode(" "),_c('transition',{attrs:{"name":"fade"}},[(!(_vm.runningTask || _vm.currentUser))?_c('div',{staticClass:"hero"},[_c('div',{staticClass:"hero-body"},[_c('div',{staticClass:"container small content"},[_c('h1',{staticClass:"title"},[_vm._v("Bublask")]),_vm._v(" "),_c('p',[_vm._v("Bubblask is small application with many features that help you increase productivity by using\n                        pomodoro technique.")]),_vm._v(" "),_c('p',[_vm._v("Pomodoro technique divides your total working/studying time into sessions of 25 minutes.")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("You have to just set the timer of 25 minutes and start studying. In these 25 minutes,\n                            you\n                            should focus only on whatever you have decided to study/work. Take care of that nothing\n                            should interrupt you.\n                        ")]),_vm._v(" "),_c('li',[_vm._v("After 25 minutes you have to take a break of 5 minutes. In these 5 minutes, you can do\n                            anything. You can attend calls you missed in those 25 minutes or you can take a small\n                            walk.\n                            You can just relax!\n                        ")]),_vm._v(" "),_c('li',[_vm._v("After 5 minutes you have to again start studying for 25 minutes.")]),_vm._v(" "),_c('li',[_vm._v("After 4 sessions of 25 minutes, you can take a break of 15–20 minutes.")])])])])]):_vm._e()]),_vm._ssrNode(" "),_c('b-modal',{attrs:{"active":_vm.showNote,"scroll":"keep"},on:{"update:active":function($event){_vm.showNote=$event}}},[(_vm.runningTask)?_c('div',{staticClass:"container small"},[_c('div',{staticClass:"notification is-warning"},[_c('div',{domProps:{"innerHTML":_vm._s(_vm.runningTask.description)}})])]):_vm._e()]),_vm._ssrNode(" "),_c('b-modal',{attrs:{"active":_vm.askPassword,"scroll":"keep"},on:{"update:active":function($event){_vm.askPassword=$event}}},[(_vm.wsTemp)?_c('div',{staticClass:"container small"},[_c('div',{staticClass:"notification is-warning"},[_c('div',{staticClass:"field"},[_vm._v("\n                    Join "+_vm._s(_vm.wsTemp.name)+"\n                ")]),_vm._v(" "),_c('label',{staticClass:"field has-addons"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.wsPassword),expression:"wsPassword"}],staticClass:"input",attrs:{"placeholder":"Enter Password"},domProps:{"value":(_vm.wsPassword)},on:{"input":function($event){if($event.target.composing){ return; }_vm.wsPassword=$event.target.value}}}),_vm._v(" "),_c('span',{staticClass:"control"},[_c('span',{staticClass:"button is-primary",on:{"click":function($event){return _vm.joinWS(_vm.wsTemp)}}},[_vm._v("Join")])])])])]):_vm._e()])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=3c6c60c2&

// EXTERNAL MODULE: ./components/Avatar.vue + 15 modules
var Avatar = __webpack_require__(8);

// EXTERNAL MODULE: ./components/TaskBoard.vue + 4 modules
var TaskBoard = __webpack_require__(61);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



const _ = __webpack_require__(2);

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    TaskBoard: TaskBoard["a" /* default */],
    Avatar: Avatar["a" /* default */]
  },

  head() {
    return {
      title: this.title,
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Bubblask is small application with many features that help you increase productivity by using pomodoro technique.'
      }]
    };
  },

  data() {
    return {
      timer: 0,
      mode: "POMODORO TIMER",
      showNote: false,
      wsPassword: null,
      askPassword: false,
      wsTemp: null
    };
  },

  computed: {
    title() {
      if (this.timer) {
        return this.fancyTimeFormat(this.timer) + " - Bubblask";
      }

      return "Bubblask - Online Pomodoro Timer - Best pomodoro tool!";
    },

    tasks() {
      let board = this.gb && this.gb.kind !== 'GHOST' ? this.gb.id : null;
      return this.hierarchy(this.$store.state.task.tasks, {
        idKey: 'id',
        parentKey: 'parent'
      }).filter(x => {
        return x.board === board;
      });
    },

    runningTask() {
      return this.$store.state.task.running;
    },

    setting() {
      return this.$store.state.config.settings.timer;
    },

    style() {
      let gSeting = this.$store.state.config.settings;
      let img = gSeting.color ? gSeting.color.background : null;

      if (img) {
        return {
          backgroundImage: `url(${img.urls.full})`,
          backgroundSize: 'cover'
        };
      }

      return null;
    },

    gb() {
      return this.$store.state.config.board;
    }

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
      this.$axios.$post(`/general/workspaces/${ws.id}/join/`, {
        password: this.wsPassword
      }).then(res => {
        if (res.status) {
          this.$store.commit('config/SET_WS', ws);
        }

        this.$router.replace({
          path: '/'
        });
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
          this.$router.replace({
            path: '/'
          });
        });
      } else {}
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
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "005bf066"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map