(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{499:function(t,e,n){var content=n(510);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("fca62240",content,!0,{sourceMap:!1})},509:function(t,e,n){"use strict";var r=n(499);n.n(r).a},510:function(t,e,n){(e=n(31)(!1)).push([t.i,".visual{position:relative;min-height:calc(100vh - 40px);overflow:hidden;background-image:linear-gradient(#f5f5f5 1px,transparent 0),linear-gradient(90deg,#f5f5f5 1px,transparent 0);background-size:23px 23px;cursor:move}.visual .background,.visual .wrapper{position:absolute;top:0;left:0;right:0;bottom:0}.visual .task{position:absolute;min-width:250px}.visual .task .tasks{position:relative}.visual .task .tasks .task{left:1rem}",""]),t.exports=e},521:function(t,e,n){"use strict";n.r(e);n(33),n(7),n(497),n(12);var r=n(3),o=n(508),c=n(29),d=n(49),l=n(108),h=n(21),f={name:"visual",components:{BTaginput:l.a,BInput:d.a},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.$axios,r=t.params,o=null,c={},"visual"===r.id){e.next=8;break}return e.next=6,n.$get("/task/boards/".concat(r.id,"/"));case 6:o=e.sent,c.board=o.id;case 8:return e.next=10,n.$get("/task/tasks/",{params:c});case 10:return d=e.sent,e.abrupt("return",{flat_tasks:d,board:o});case 12:case"end":return e.stop()}}),e)})))()},data:function(){return{startMove:!1,offset:[],movingTask:null,drawing:null,lines:{},settings:{},documentSize:{w:9e3,h:9e3},tasks:[],activeBoardUpdate:!1,boardF:null}},methods:{listenerDown:function(t){null===this.movingTask&&this.mouse_down({e:t})},listenerUp:function(t){this.startMove=!1,this.offset=[],this.movingTask=null},mouse_down:function(t){var e=t.e,n=t.task;this.movingTask=void 0===n?this.tasks[0]:n;var r=document.getElementById("task-".concat(this.movingTask.id)).parentElement;this.startMove=!0,this.offset=[r.offsetLeft-e.clientX,r.offsetTop-e.clientY],this.draw(this.movingTask)},mouse_move:function(t){if(this.startMove&&this.movingTask){var e=document.getElementById("task-".concat(this.movingTask.id)).parentElement;t.preventDefault();var n={x:t.clientX,y:t.clientY};void 0===this.settings["T".concat(this.movingTask.id)]&&this.$set(this.settings,"T".concat(this.movingTask.id),{});var r=n.x+this.offset[0],o=n.y+this.offset[1];if(this.$set(this.settings["T".concat(this.movingTask.id)],"left",r),this.$set(this.settings["T".concat(this.movingTask.id)],"top",o),n.x<=0||n.y<=0)return;e.style.left=r+"px",e.style.top=o+"px",this.draw(this.movingTask)}},draw:function(t){var e=this;if(null!==document.getElementById("task-".concat(t.id))){var line=this.lines["task-".concat(t.id)],n=document.getElementById("task-".concat(t.id)).parentElement;if("number"==typeof t.parent){var r=document.getElementById("task-".concat(t.parent)).parentElement,o=this.getOffset(r),c=this.getOffset(n),d=this.settings["T".concat(t.id)],l=d?d.p1c:5,h=d?d.p2c:1,f=d?d.arrow:"bottom",v=!!d&&d.vertical;c.center.x<o.points[0].x?c.center.y>o.points[0].y&&c.center.y<o.points[6].y&&(v=!1,l=7,h=3):c.center.x>o.points[0].x&&c.center.x<o.points[2].x?c.center.y<o.points[0].y?(v=!0,l=1,h=5):c.center.y>o.points[6].y&&(v=!0,l=5,h=1):c.center.y>o.points[0].y&&c.center.y<o.points[6].y&&(l=3,h=7,v=!1);var m=o.points[l],k=c.points[h],x={x:v?m.x:o.center.x+.5*(c.center.x-o.center.x),y:v?o.center.y+.5*(c.center.y-o.center.y):m.y},_={x:v?k.x:o.center.x+.5*(c.center.x-o.center.x),y:v?o.center.y+.5*(c.center.y-o.center.y):k.y};void 0===this.settings["T".concat(t.id)]&&this.$set(this.settings,"T".concat(t.id),{}),this.$set(this.settings["T".concat(t.id)],"p1c",l),this.$set(this.settings["T".concat(t.id)],"p2c",h),this.$set(this.settings["T".concat(t.id)],"arrow",f),this.$set(this.settings["T".concat(t.id)],"vertical",v),line&&line.remove(),this.lines["task-".concat(t.id)]=this.drawing.path("M ".concat(m.x," ").concat(m.y," L").concat(x.x," ").concat(x.y," L").concat(_.x," ").concat(_.y," L").concat(k.x," ").concat(k.y)).stroke({color:"#cccccc",width:2,linecap:"round",dasharray:8.3}).fill("transparent"),this.lines["task-".concat(t.id)].attr("marker-end","url(#arrow-".concat(f,")"))}t.children&&t.children.forEach((function(t){e.draw(t)}))}},initDraw:function(t){var e=this;t&&t.forEach((function(t){e.draw(t),e.initDraw(t.children)}))},saveSetting:h.debounce((function(){var t=this;this.board?this.$axios.$put("/task/boards/".concat(this.board.slug,"/"),{task_graph_setting:this.settings}):this.$axios.$put("/auth/users/".concat(this.currentUser.username,"/"),{task_graph_setting:this.settings}).then((function(){t.$store.commit("config/SET_SETTING_GRAPH",h.cloneDeep(t.settings))}))}),1e3),handle_add_child:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$axios.$post("/task/tasks/",t);case 2:if(r=n.sent,e.flat_tasks.push(r),e.init(),null!==e.board){n.next=12;break}return r=new c.a(r),n.next=9,e.$store.commit("task/ADD_TASK",r);case 9:if(null!==e.currentUser){n.next=12;break}return n.next=12,e.$indexedDB.add(r);case 12:case"end":return n.stop()}}),n)})))()},handle_delete_task:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,i,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=function t(e,n){return n.push(e),e.children&&e.children.forEach((function(e){n.concat(t(e,n))})),n}(t,[]),i=0;case 3:if(!(i<r.length)){n.next=13;break}if(o=r[i],!(i>0)){n.next=8;break}return n.next=8,e.$axios.$delete("/task/tasks/".concat(o.id,"/"));case 8:(c=e.flat_tasks.map((function(t){return t.id})).indexOf(o.id))>=0&&(e.lines["task-".concat(o.id)].remove(),e.flat_tasks.splice(c,1));case 10:i++,n.next=3;break;case 13:case"end":return n.stop()}}),n)})))()},init:function(){var t=this;this.flat_tasks.forEach((function(e){e.temp_setting=t.settings["T".concat(e.id)]}));var e=this.hierarchy(this.flat_tasks,{idKey:"id",parentKey:"parent"});e.forEach((function(t){return t.parent=0}));var n=new c.a({id:0,temp_setting:this.settings.T0,title:this.board?this.board.title:"Workspace",board:this.board?this.board.id:void 0});n.children=e,this.tasks=[n]},saveBoard:function(){var t=this,data={};["title","description","slug","text_tags","is_interface"].forEach((function(e){data[e]=t.boardF[e]})),this.currentUser&&this.currentUser.id===this.board.user&&this.$axios.$put("/task/boards/".concat(this.board.slug,"/"),data).then((function(e){t.boardF=null,e.slug!==t.board.slug&&t.$router.replace({path:"/template/".concat(e.slug)}),t.board=e,t.tasks[0].title=e.title})).finally((function(){t.activeBoardUpdate=!1}))},openBoardModal:function(){this.board&&(this.boardF=h.cloneDeep(this.board),this.activeBoardUpdate=!0)}},mounted:function(){document.addEventListener("mousedown",this.listenerDown),document.addEventListener("mouseup",this.listenerUp),document.addEventListener("mousemove",this.mouse_move);var t=document.getElementById("visual");this.drawing=Object(o.a)().addTo("#vs-background").size(t.clientWidth,t.clientWidth),this.drawing.defs().path("M5,0 0,2.5 5,5 3.5,3 3.5,2z").id("raphael-marker-classic"),this.drawing.marker(10,10,(function(t){t.use("raphael-marker-classic").rotate(0).fill("#CCC")})).ref(5,2.5).id("arrow-top"),this.drawing.marker(10,10,(function(t){t.use("raphael-marker-classic").rotate(180).fill("#CCC")})).ref(5,2.5).id("arrow-bottom"),this.drawing.marker(10,10,(function(t){t.use("raphael-marker-classic").rotate(270).fill("#CCC")})).ref(5,2.5).id("arrow-right"),this.drawing.marker(10,10,(function(t){t.use("raphael-marker-classic").rotate(90).fill("#CCC")})).ref(5,2.5).id("arrow-left"),this.settings&&this.initDraw(this.tasks)},watch:{settings:{deep:!0,handler:function(){this.saveSetting()}},flat_tasks:{deep:!0,handler:function(){this.init(),this.initDraw(this.tasks)}}},created:function(){this.board?this.settings=this.board.settings?this.board.settings.task_graph_setting:{}:this.settings=this.$store.state.config.settings.task_graph_setting?h.cloneDeep(this.$store.state.config.settings.task_graph_setting):{},this.init()},beforeDestroy:function(){document.removeEventListener("mousedown",this.listenerDown),document.removeEventListener("mouseup",this.listenerUp),document.removeEventListener("mousemove",this.mouse_move)}},v=(n(509),n(4)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"visual",staticClass:"visual",attrs:{id:"visual"}},[n("div",{staticClass:"background",attrs:{id:"vs-background"}}),t._v(" "),n("div",{staticClass:"wrapper"},t._l(t.tasks,(function(e){return n("task-graph",{key:e.id,attrs:{readonly:"",value:e},on:{down:t.mouse_down,add:t.handle_add_child,"board-update":t.openBoardModal,deleted:t.handle_delete_task}})})),1),t._v(" "),n("b-modal",{attrs:{active:t.activeBoardUpdate,scroll:"keep"},on:{"update:active":function(e){t.activeBoardUpdate=e}}},[n("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[n("header",{staticClass:"modal-card-head"},[n("div",{staticClass:"level is-mobile",staticStyle:{width:"100%"}},[n("h4",{staticClass:"level-left"},[t._v("Board Setting")]),t._v(" "),n("div",{staticClass:"level-right"},[n("button",{staticClass:"button is-small",attrs:{type:"button"},on:{click:function(e){t.activeBoardUpdate=!1}}},[t._v("Cancel\n                        ")])])])]),t._v(" "),n("section",{staticClass:"modal-card-body"},[t.boardF?n("div",[n("div",{staticClass:"field"},[n("ce",{staticClass:"title",attrs:{elm:"h1",placeholder:"Board title"},model:{value:t.boardF.title,callback:function(e){t.$set(t.boardF,"title",e)},expression:"boardF.title"}})],1),t._v(" "),n("div",{staticClass:"field"},[n("b-input",{attrs:{placeholder:"Board title"},model:{value:t.boardF.slug,callback:function(e){t.$set(t.boardF,"slug",e)},expression:"boardF.slug"}})],1),t._v(" "),n("div",{staticClass:"field"},[n("ce",{staticClass:"notification is-light",attrs:{elm:"div",placeholder:"description"},model:{value:t.boardF.description,callback:function(e){t.$set(t.boardF,"description",e)},expression:"boardF.description"}})],1),t._v(" "),n("div",{staticClass:"field"},[n("b-switch",{model:{value:t.boardF.is_interface,callback:function(e){t.$set(t.boardF,"is_interface",e)},expression:"boardF.is_interface"}},[t._v("Template")])],1),t._v(" "),n("div",{staticClass:"field"},[n("b-taginput",{attrs:{placeholder:"Hash tag"},model:{value:t.boardF.text_tags,callback:function(e){t.$set(t.boardF,"text_tags",e)},expression:"boardF.text_tags"}})],1)]):t._e()]),t._v(" "),n("footer",{staticClass:"modal-card-foot"},[n("button",{staticClass:"button is-primary",on:{click:t.saveBoard}},[t._v("Save")])])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);