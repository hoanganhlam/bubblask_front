exports.ids=[2],exports.modules={54:function(t,e){t.exports={}},59:function(t,e,d){"use strict";var r=d(5);const o=d(3);var n={name:"TaskBoard",props:{tasks:{default:()=>[],type:Array},board:{default:null,type:Object},readonly:{default:!1,type:Boolean},tree:{default:!1,type:Boolean}},data(){return{activeTasks:[],disabledDrag:this.readonly,loading:!1,boardSlug:this.board?this.board.slug:null}},computed:{dragOptions(){return{animation:0,group:"description",disabled:this.disabledDrag,ghostClass:"ghost"}},taskOrder(){return this.board&&this.board.id?this.board.settings&&this.board.settings.task_order?this.board.settings.task_order:[]:this.$store.state.config.settings.task_order||[]},timerSetting(){return this.$store.state.config.settings.timer}},methods:{init_task(t){this.activeTasks=[];let e=o.cloneDeep(t.filter(t=>!["stopped","complete"].includes(t.status)));this.activeTasks=this.hierarchy(e,{idKey:"id",parentKey:"parent"}),this.activeTasks.forEach(t=>{t.order=t.id?this.taskOrder.indexOf(t.id):0}),this.activeTasks.sort((a,b)=>a.order-b.order)},handle_order(){let t=this.activeTasks.map(t=>t.id);this.currentUser?this.board&&this.board.id?this.$axios.$put(`/task/boards/${this.boardSlug}/`,{task_order:t}):this.$axios.$put(`/auth/users/${this.currentUser.username}/`,{task_order:t}).then(()=>{this.$store.commit("config/SET_SETTING_ORDER",t)}):localStorage.setItem("task_order",t.toString())},handle_add_child(t){this.$store.commit("task/ADD_TASK",t),null===this.currentUser&&this.$indexedDB.add(t)},async handle_add(){let t=new r.a({tomato:this.timerSetting.tomato,updating:!0,board:this.board?this.board.id:null});await this.$store.commit("task/ADD_TASK",t),null===this.currentUser&&await this.$indexedDB.add(t),this.handle_order()}},watch:{tasks:{deep:!0,handler:function(t,e){this.init_task(t),0===t.length&&(this.loading=!0,setTimeout(function(){this.loading=!1}.bind(this),800))}},readonly(){this.disabledDrag=this.readonly}},created(){this.init_task(this.tasks)}},l=d(1);var component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"board"},[t.readonly?t._e():t._ssrNode('<div class="media" data-v-1914c646>',"</div>",[t._ssrNode('<div class="media-content" data-v-1914c646>',"</div>",[t._ssrNode('<div class="task has-text-centered" data-v-1914c646>',"</div>",[t._ssrNode('<div class="notification" data-v-1914c646>',"</div>",[d("x-icon",{attrs:{name:"plus"}})],1)])]),t._ssrNode(" "),d("n-link",{staticClass:"media-right",attrs:{to:"/board/visual"}},[d("div",{staticClass:"task"},[d("div",{staticClass:"notification"},[d("x-icon",{attrs:{name:"file-tree-outline"}})],1)])])],2),t._ssrNode(" "),!t.loading&&t.activeTasks.length?d("draggable",t._b({on:{change:t.handle_order},model:{value:t.activeTasks,callback:function(e){t.activeTasks=e},expression:"activeTasks"}},"draggable",t.dragOptions,!1),t._l(t.activeTasks,(function(e,i){return d("task",{key:i,staticClass:"master",attrs:{value:e,readonly:t.readonly,tree:t.tree},on:{add:t.handle_add_child,editing:function(e){t.disabledDrag=e},deleted:function(e){return t.$emit("deleted",e)}}})})),1):t._e(),t._ssrNode(" "+(t.loading?'<div class="tasks" data-v-1914c646>'+t._ssrList(5,(function(i){return'<div class="task" data-v-1914c646><div class="notification media" data-v-1914c646><div class="skeleton-task" data-v-1914c646></div></div></div>'}))+"</div>":"\x3c!----\x3e"))],2)}),[],!1,(function(t){}),"1914c646","4e1e1079");e.a=component.exports},63:function(t,e,d){"use strict";d.r(e);var r=d(54),o=d.n(r);for(var n in r)"default"!==n&&function(t){d.d(e,t,(function(){return r[t]}))}(n);e.default=o.a},72:function(t,e,d){"use strict";d.r(e);var r=d(24),o=d(25),n=d(7),l=(d(5),d(59)),c={name:"TemplateDetail",components:{BDropdownItem:d(20).a,TaskBoard:l.a,BInput:n.a,BTaginput:o.a,Avatar:r.a},async asyncData({$axios:t,params:e}){let d={title:"Your Work",description:"Manage your task on a tree!"},r={};return"visual"!==e.id&&(d=await t.$get(`/task/boards/${e.id}/`),r.board=d.id),{flat_tasks:await t.$get("/task/tasks/",{params:r}),board:{...d,text_tags:d.hash_tags?d.hash_tags.map(t=>t.title):[],settings:d.settings?d.settings:{}},boardSlug:d.slug}},data:()=>({updating:!1}),computed:{storeTasks(){return this.$store.state.task.tasks.filter(t=>this.board.id?t.board===this.board.id&&t.id:null===t.board)},readonly(){if(this.board.is_interface)return!0;if(this.currentUser){if(!this.board.id)return!this.updating;if(this.currentUser.id===this.board.user)return!this.updating;if(!this.board.settings.is_readonly)return!this.updating}return!0}},methods:{handleUpdate(){let data={};["title","description","slug","text_tags","is_interface","media","settings"].forEach(t=>{"media"===t&&this.board.media?data[t]=this.board.media.id:data[t]=this.board[t]}),this.currentUser&&this.currentUser.id===this.board.user&&this.$axios.$put(`/task/boards/${this.boardSlug}/`,data).then(t=>{t.slug!==this.boardSlug&&(this.$router.replace({path:`/board/${t.slug}`}),this.boardSlug=t.slug)}).then(()=>{this.updating=!1})},handleDeleted(t){let e=this.flat_tasks.map(t=>t.id).indexOf(t.id);this.flat_tasks.splice(e,1)},useBoard(){this.$axios.$post(`/task/boards/${this.board.id}/clone/`).then(t=>{this.$router.replace({path:`/board/${t.slug}`})}).catch(()=>{})},launchBoard(){}},watch:{storeTasks:{deep:!0,handler:function(){let t=this.flat_tasks.map(t=>t.id);this.storeTasks.forEach(e=>{t.includes(e.id)||this.flat_tasks.unshift(e)})}}},created(){}},h=d(1);var component=Object(h.a)(c,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"board-detail"},[t._ssrNode('<div class="section">',"</div>",[t._ssrNode('<div class="container">',"</div>",[t.board.media||t.updating?t._ssrNode('<div class="card">',"</div>",[d("avatar",{attrs:{"can-update":t.updating,"image-size":"thumb_728_200"},model:{value:t.board.media,callback:function(e){t.$set(t.board,"media",e)},expression:"board.media"}})],1):t._e(),t._ssrNode(" "),t._ssrNode('<div class="media subsection">',"</div>",[t._ssrNode('<div class="media-content">',"</div>",[d("ce",{staticClass:"title",attrs:{editable:t.updating,elm:"h1"},model:{value:t.board.title,callback:function(e){t.$set(t.board,"title",e)},expression:"board.title"}})],1),t._ssrNode(" "),t.currentUser&&t.currentUser.id===t.board.user?t._ssrNode('<div class="media-right">',"</div>",[t._ssrNode((!t.updating&&t.board.is_interface?'<div class="button is-small">Use</div>':"\x3c!----\x3e")+" "+(t.updating||t.board.is_interface?"\x3c!----\x3e":'<div class="button is-small">\n                        Launch\n                    </div>')+" "),t.updating?t._ssrNode('<div class="button is-small">',"</div>",[d("x-icon",{attrs:{name:"check"}})],1):t._e(),t._ssrNode(" "),t._ssrNode('<div class="button is-small is-text">',"</div>",[d("x-icon",{attrs:{name:t.updating?"close":"pen"}})],1)],2):t._e()],2),t._ssrNode(" "),t.updating||t.board.description?d("ce",{staticClass:"subtitle",attrs:{editable:t.updating,elm:"p",placeholder:"Description"},model:{value:t.board.description,callback:function(e){t.$set(t.board,"description",e)},expression:"board.description"}}):t._e(),t._ssrNode(" "),t.updating?t._ssrNode('<div class="level is-mobile">',"</div>",[t._ssrNode('<div class="level-left">',"</div>",[null===t.board.parent?t._ssrNode('<div class="field">',"</div>",[d("b-switch",{attrs:{rounded:!1},model:{value:t.board.is_interface,callback:function(e){t.$set(t.board,"is_interface",e)},expression:"board.is_interface"}},[t._v("Template")])],1):t._e()]),t._ssrNode(" "),t._ssrNode('<div class="level-right">',"</div>",[d("b-dropdown",{attrs:{position:"is-bottom-left","trap-focus":!0}},[d("div",{staticClass:"navbar-item clickable",attrs:{slot:"trigger"},slot:"trigger"},[d("x-icon",{attrs:{name:"cogs"}}),t._v(" "),d("span",[t._v("Privacy")])],1),t._v(" "),d("b-dropdown-item",{staticStyle:{"min-width":"300px"},attrs:{custom:""}},[d("div",{staticClass:"level is-mobile"},[d("div",{staticClass:"level-left"},[t._v("Public")]),t._v(" "),d("div",{staticClass:"level-right"},[d("b-switch",{attrs:{rounded:!1},model:{value:t.board.settings.is_public,callback:function(e){t.$set(t.board.settings,"is_public",e)},expression:"board.settings.is_public"}})],1)]),t._v(" "),d("div",{staticClass:"level is-mobile"},[d("div",{staticClass:"level-left"},[t._v("Team")]),t._v(" "),d("div",{staticClass:"level-right"},[d("b-switch",{attrs:{rounded:!1},model:{value:t.board.settings.is_team,callback:function(e){t.$set(t.board.settings,"is_team",e)},expression:"board.settings.is_team"}})],1)]),t._v(" "),!t.board.settings.is_public&&t.board.settings.is_team?d("div",{staticClass:"field"},[d("b-input",{attrs:{expanded:"",placeholder:"Password"},model:{value:t.board.settings.password,callback:function(e){t.$set(t.board.settings,"password",e)},expression:"board.settings.password"}}),t._v(" "),d("p",{staticClass:"help"},[t._v("Use password to join!")])],1):t._e(),t._v(" "),d("div",{staticClass:"level is-mobile"},[d("div",{staticClass:"level-left"},[t._v("Readonly")]),t._v(" "),d("div",{staticClass:"level-right"},[d("b-switch",{attrs:{rounded:!1},model:{value:t.board.settings.is_readonly,callback:function(e){t.$set(t.board.settings,"is_readonly",e)},expression:"board.settings.is_readonly"}})],1)])])],1)],1)],2):t._e(),t._ssrNode(" "),t.updating?t._ssrNode('<div class="field">',"</div>",[d("b-input",{attrs:{icon:"label",placeholder:"Board Slug"},model:{value:t.board.slug,callback:function(e){t.$set(t.board,"slug",e)},expression:"board.slug"}})],1):t._e(),t._ssrNode(" "),t.updating?t._ssrNode('<div class="field">',"</div>",[d("b-taginput",{attrs:{icon:"tag",placeholder:"Hash tag"},model:{value:t.board.text_tags,callback:function(e){t.$set(t.board,"text_tags",e)},expression:"board.text_tags"}})],1):t._e()],2)]),t._ssrNode(" "),t._ssrNode('<div class="section tree-task">',"</div>",[t._ssrNode('<div class="container">',"</div>",[d("task-board",{attrs:{tasks:t.flat_tasks,board:t.board,readonly:t.readonly,tree:""},on:{deleted:t.handleDeleted}})],1)])],2)}),[],!1,(function(t){var e=d(63);e.__inject__&&e.__inject__(t)}),null,"13a763e8");e.default=component.exports}};