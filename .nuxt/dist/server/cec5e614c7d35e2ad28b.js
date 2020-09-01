exports.ids=[4],exports.modules={57:function(t,e){t.exports={}},60:function(t,e,n){"use strict";var r=n(5);const d=n(4);var o={name:"TaskBoard",props:{tasks:{default:()=>[],type:Array},board:{default:null,type:Object},readonly:{default:!1,type:Boolean},tree:{default:!1,type:Boolean}},data(){return{activeTasks:[],disabledDrag:this.readonly,loading:!1,boardSlug:this.board?this.board.slug:null}},computed:{dragOptions(){return{animation:0,group:"description",disabled:this.disabledDrag,ghostClass:"ghost"}},taskOrder(){return this.board&&this.board.id?this.board.settings&&this.board.settings.task_order?this.board.settings.task_order:[]:this.$store.state.config.settings.task_order||[]},timerSetting(){return this.$store.state.config.settings.timer}},methods:{init_task(t){this.activeTasks=[];let e=d.cloneDeep(t.filter(t=>!["stopped","complete"].includes(t.status)));this.activeTasks=this.hierarchy(e,{idKey:"id",parentKey:"parent"}),this.activeTasks.forEach(t=>{t.order=t.id?this.taskOrder.indexOf(t.id):0}),this.activeTasks.sort((a,b)=>a.order-b.order)},handle_order(){let t=this.activeTasks.map(t=>t.id);this.currentUser?this.board&&this.board.id?this.$axios.$put(`/task/boards/${this.boardSlug}/`,{task_order:t}):this.$axios.$put(`/auth/users/${this.currentUser.username}/`,{task_order:t}).then(()=>{this.$store.commit("config/SET_SETTING_ORDER",t)}):localStorage.setItem("task_order",t.toString())},handle_add_child(t){this.$store.commit("task/ADD_TASK",t),null===this.currentUser&&this.$indexedDB.add(t)},async handle_add(){let t=new r.a({tomato:this.timerSetting.tomato,updating:!0,board:this.board?this.board.id:null});await this.$store.commit("task/ADD_TASK",t),null===this.currentUser&&await this.$indexedDB.add(t),this.handle_order()}},watch:{tasks:{deep:!0,handler:function(t,e){this.init_task(t),0===t.length&&(this.loading=!0,setTimeout(function(){this.loading=!1}.bind(this),800))}},readonly(){this.disabledDrag=this.readonly}},created(){this.init_task(this.tasks)}},l=n(1);var component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"board"},[t.readonly?t._e():t._ssrNode('<div class="media" data-v-1914c646>',"</div>",[t._ssrNode('<div class="media-content" data-v-1914c646>',"</div>",[t._ssrNode('<div class="task has-text-centered" data-v-1914c646>',"</div>",[t._ssrNode('<div class="notification" data-v-1914c646>',"</div>",[n("x-icon",{attrs:{name:"plus"}})],1)])]),t._ssrNode(" "),n("n-link",{staticClass:"media-right",attrs:{to:"/board/visual"}},[n("div",{staticClass:"task"},[n("div",{staticClass:"notification"},[n("x-icon",{attrs:{name:"file-tree-outline"}})],1)])])],2),t._ssrNode(" "),!t.loading&&t.activeTasks.length?n("draggable",t._b({on:{change:t.handle_order},model:{value:t.activeTasks,callback:function(e){t.activeTasks=e},expression:"activeTasks"}},"draggable",t.dragOptions,!1),t._l(t.activeTasks,(function(e,i){return n("task",{key:i,staticClass:"master",attrs:{value:e,readonly:t.readonly,tree:t.tree},on:{add:t.handle_add_child,editing:function(e){t.disabledDrag=e},deleted:function(e){return t.$emit("deleted",e)}}})})),1):t._e(),t._ssrNode(" "+(t.loading?'<div class="tasks" data-v-1914c646>'+t._ssrList(5,(function(i){return'<div class="task" data-v-1914c646><div class="notification media" data-v-1914c646><div class="skeleton-task" data-v-1914c646></div></div></div>'}))+"</div>":"\x3c!----\x3e"))],2)}),[],!1,(function(t){}),"1914c646","4e1e1079");e.a=component.exports},64:function(t,e,n){"use strict";n.r(e);var r=n(57),d=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e.default=d.a},72:function(t,e,n){"use strict";n.r(e);var r=n(14),d=n(60);const o=n(4);var l={components:{TaskBoard:d.a,Avatar:r.a},head(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Bubblask is small application with many features that help you increase productivity by using pomodoro technique."}]}},data:()=>({timer:0,mode:"POMODORO TIMER",showNote:!1,wsPassword:null,askPassword:!1,wsTemp:null}),computed:{title(){return this.timer?this.fancyTimeFormat(this.timer)+" - Bubblask":"Bubblask - Online Pomodoro Timer - Best pomodoro tool!"},tasks(){let t=this.ws&&this.ws.board?this.ws.board.id:null;return this.$store.state.task.tasks.filter(e=>e.board===t)},runningTask(){return this.$store.state.task.running},setting(){return this.$store.state.config.settings.timer},style(){let t=this.$store.state.config.settings,img=t.color?t.color.background:null;return img?{backgroundImage:`url(${img.urls.full})`,backgroundSize:"cover"}:null},ws(){return this.$store.state.config.ws}},methods:{async task_break(t){this.mode=5===t?"Short Break":"Long Break",await this.$store.commit("task/SET_RUNNING",null),this.setting.is_strict||(this.timer=60*t,this.toTop(41))},move_text(t,e,time){let n=this.$refs[t];if(n)for(let i=0;i<n.children.length;i++){let t=n.children[i].querySelector(".number-grp-wrp"),r=n.children[i].querySelector(`.num-${time[e+i]}`);t.style.transform=`translate3d(0px, -${r.offsetTop}px, 0px)`}},run_timer(){if(this.timer>0){let t=this.fancyTimeFormat(this.timer);this.move_text("seconds",6,t),this.move_text("minutes",3,t),this.timer=this.timer-1}else this.move_text("seconds",3,"00:00:00"),this.move_text("minutes",6,"00:00:00")},joinWS(t){this.$axios.$post(`/general/workspaces/${t.id}/join/`,{password:this.wsPassword}).then(e=>{e.status&&this.$store.commit("config/SET_WS",t),this.$router.replace({path:"/"}),this.askPassword=!1})},async makeDone(){let t=o.cloneDeep(this.runningTask);await this.$store.commit("task/SET_RUNNING",null),t.changeStatus("complete"),await this.$store.commit("task/UPDATE_TASK",t)}},async mounted(){const t=this;if(setInterval((function(){t.run_timer()}),1e3),this.runningTask){let t=new Date,e=new Date(this.runningTask.dueDate());this.timer=(e.getTime()-t.getTime())/1e3,this.toTop(41)}this.$route.query.ws&&this.currentUser&&this.currentUser.profile.setting.ws!==this.$route.query.ws&&this.$axios.$get(`/general/workspaces/${this.$route.query.ws}/`).then(t=>{t.isPrivate?(this.wsTemp=t,this.askPassword=!0):this.joinWS(t)}).catch(()=>{this.$router.replace({path:"/"})}),this.toTop()},watch:{timer(){this.timer<=0&&this.runningTask&&this.runningTask.changeStatus("stopping",0),3===this.timer&&this.playSource("audio_rang")},runningTask(){if(this.runningTask){this.mode=this.runningTask.title;let t=new Date,e=new Date(this.runningTask.dueDate());this.timer=(e.getTime()-t.getTime())/1e3,this.toTop(41)}else this.timer=0,this.mode="POMODORO TIMER";this.showNote=!1}}},c=n(1);var component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._ssrNode("<div"+t._ssrClass("hero is-primary",{"is-fullheight":t.timer>0})+t._ssrStyle(null,t.style,null)+">","</div>",[t._ssrNode('<div class="hero-body">',"</div>",[t._ssrNode('<div class="container pomodoro">',"</div>",[t._ssrNode('<div class="wrap"><div class="timer"><div class="title uppercase">'+t._ssrEscape(t._s(t.mode))+'</div> <div class="timer--clock"><div class="minutes-group clock-display-grp"><div class="first number-grp"><div class="number-grp-wrp"><div class="num num-0"><p>0</p></div> <div class="num num-1"><p>1</p></div> <div class="num num-2"><p>2</p></div> <div class="num num-3"><p>3</p></div> <div class="num num-4"><p>4</p></div> <div class="num num-5"><p>5</p></div> <div class="num num-6"><p>6</p></div> <div class="num num-7"><p>7</p></div> <div class="num num-8"><p>8</p></div> <div class="num num-9"><p>9</p></div></div></div> <div class="second number-grp"><div class="number-grp-wrp"><div class="num num-0"><p>0</p></div> <div class="num num-1"><p>1</p></div> <div class="num num-2"><p>2</p></div> <div class="num num-3"><p>3</p></div> <div class="num num-4"><p>4</p></div> <div class="num num-5"><p>5</p></div> <div class="num num-6"><p>6</p></div> <div class="num num-7"><p>7</p></div> <div class="num num-8"><p>8</p></div> <div class="num num-9"><p>9</p></div></div></div></div> <div class="clock-separator"><p>:</p></div> <div class="seconds-group clock-display-grp"><div class="first number-grp"><div class="number-grp-wrp"><div class="num num-0"><p>0</p></div> <div class="num num-1"><p>1</p></div> <div class="num num-2"><p>2</p></div> <div class="num num-3"><p>3</p></div> <div class="num num-4"><p>4</p></div> <div class="num num-5"><p>5</p></div> <div class="num num-6"><p>6</p></div> <div class="num num-7"><p>7</p></div> <div class="num num-8"><p>8</p></div> <div class="num num-9"><p>9</p></div></div></div> <div class="second number-grp"><div class="number-grp-wrp"><div class="num num-0"><p>0</p></div> <div class="num num-1"><p>1</p></div> <div class="num num-2"><p>2</p></div> <div class="num num-3"><p>3</p></div> <div class="num num-4"><p>4</p></div> <div class="num num-5"><p>5</p></div> <div class="num num-6"><p>6</p></div> <div class="num num-7"><p>7</p></div> <div class="num num-8"><p>8</p></div> <div class="num num-9"><p>9</p></div></div></div></div></div> <h4>A SIMPLE HACK FOR DEEP WORK</h4></div></div> '),t._ssrNode('<div class="buttons timer-control">',"</div>",[t._ssrNode((null!==t.runningTask&&t.setting.is_strict?"\x3c!----\x3e":'<div class="button is-primary">Short Break\n                    </div>')+" "+(null!==t.runningTask&&t.setting.is_strict?"\x3c!----\x3e":'<div class="button is-primary">Long Break\n                    </div>')+" "),t.runningTask&&!t.setting.is_strict?t._ssrNode('<div class="button is-primary">',"</div>",[n("x-icon",{attrs:{name:"pause"}})],1):t._e(),t._ssrNode(" "),t.runningTask?t._ssrNode('<div class="button is-primary">',"</div>",[n("x-icon",{attrs:{name:"check"}})],1):t._e()],2),t._ssrNode(" "+(t.runningTask&&!t.showNote&&t.runningTask.description?'<div class="button is-text">Show Note\n                </div>':"\x3c!----\x3e"))],2)])]),t._ssrNode(" "),t.runningTask?t._e():t._ssrNode('<div class="hero is-secondary is-small" style="min-height: 50vh">',"</div>",[t._ssrNode('<div class="hero-body">',"</div>",[t._ssrNode((t.setting.is_strict?'<div class="container small"><div class="notification is-warning content"><b>Strict mode</b> <ul><li>You can\'t stop timer when working</li> <li>You can\'t update running task</li></ul></div></div>':"\x3c!----\x3e")+" "),t._ssrNode('<div class="boards">',"</div>",[n("task-board",{attrs:{tasks:t.tasks,board:t.ws?t.ws.board:null}})],1)],2)]),t._ssrNode(" "),n("transition",{attrs:{name:"fade"}},[t.runningTask||t.currentUser?t._e():n("div",{staticClass:"hero is-light"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container small content"},[n("h1",{staticClass:"title"},[t._v("Bublask")]),t._v(" "),n("p",[t._v("Bubblask is small application with many features that help you increase productivity by using\n                        pomodoro technique.")]),t._v(" "),n("p",[t._v("Pomodoro technique divides your total working/studying time into sessions of 25 minutes.")]),t._v(" "),n("ul",[n("li",[t._v("You have to just set the timer of 25 minutes and start studying. In these 25 minutes,\n                            you\n                            should focus only on whatever you have decided to study/work. Take care of that nothing\n                            should interrupt you.\n                        ")]),t._v(" "),n("li",[t._v("After 25 minutes you have to take a break of 5 minutes. In these 5 minutes, you can do\n                            anything. You can attend calls you missed in those 25 minutes or you can take a small\n                            walk.\n                            You can just relax!\n                        ")]),t._v(" "),n("li",[t._v("After 5 minutes you have to again start studying for 25 minutes.")]),t._v(" "),n("li",[t._v("After 4 sessions of 25 minutes, you can take a break of 15–20 minutes.")])])])])])]),t._ssrNode(" "),n("b-modal",{attrs:{active:t.showNote,scroll:"keep"},on:{"update:active":function(e){t.showNote=e}}},[t.runningTask?n("div",{staticClass:"container small"},[n("div",{staticClass:"notification is-warning"},[n("div",{domProps:{innerHTML:t._s(t.runningTask.description)}})])]):t._e()]),t._ssrNode(" "),n("b-modal",{attrs:{active:t.askPassword,scroll:"keep"},on:{"update:active":function(e){t.askPassword=e}}},[t.wsTemp?n("div",{staticClass:"container small"},[n("div",{staticClass:"notification is-warning"},[n("div",{staticClass:"field"},[t._v("\n                    Join "+t._s(t.wsTemp.name)+"\n                ")]),t._v(" "),n("label",{staticClass:"field has-addons"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.wsPassword,expression:"wsPassword"}],staticClass:"input",attrs:{placeholder:"Enter Password"},domProps:{value:t.wsPassword},on:{input:function(e){e.target.composing||(t.wsPassword=e.target.value)}}}),t._v(" "),n("span",{staticClass:"control"},[n("span",{staticClass:"button is-primary",on:{click:function(e){return t.joinWS(t.wsTemp)}}},[t._v("Join")])])])])]):t._e()])],2)}),[],!1,(function(t){var e=n(64);e.__inject__&&e.__inject__(t)}),null,"005bf066");e.default=component.exports}};