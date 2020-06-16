(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{488:function(t,e,n){var content=n(500);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("70a4863c",content,!0,{sourceMap:!1})},489:function(t,e,n){var content=n(502);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("7cb96728",content,!0,{sourceMap:!1})},499:function(t,e,n){"use strict";var r=n(488);n.n(r).a},500:function(t,e,n){(e=n(40)(!1)).push([t.i,"",""]),t.exports=e},501:function(t,e,n){"use strict";var r=n(489);n.n(r).a},502:function(t,e,n){(e=n(40)(!1)).push([t.i,".create{position:fixed;bottom:1rem;left:1rem}.template-board h4{line-height:1}",""]),t.exports=e},517:function(t,e,n){"use strict";n.r(e);n(32),n(13);var r=n(4),c={name:"Board",props:{value:{type:Object}},data:function(){return{board:this.value}}},o=n(5),l=Object(o.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-content"},[e("div",{staticClass:"media"},[e("div",{staticClass:"media-content"},[e("b",[e("n-link",{attrs:{to:"/board/"+this.board.slug+"/"}},[this._v(this._s(this.board.title))])],1)]),this._v(" "),e("div",{staticClass:"media-right"})])])])}),[],!1,null,null,null).exports,d=n(104),v={name:"BoardList",components:{Board:l},data:function(){return{response:{results:[],count:0},loading:!1,page:1}},methods:{fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,t.response.results=[],e.next=4,t.$axios.$get("/task/boards/",{params:{user:t.currentUser.id,page_size:2,only_user:!0,page:t.page}});case 4:t.response=e.sent,t.loading=!1;case 6:case"end":return e.stop()}}),e)})))()},clickFetch:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.page=t?e.page+1:e.page-1,n.next=3,e.fetch();case 3:case"end":return n.stop()}}),n)})))()}},computed:{total:function(){return this.response.count/2}},created:function(){this.fetch()}},h=(n(499),{name:"Template",components:{BoardList:Object(o.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"subsection"},[n("div",{staticClass:"level is-mobile"},[t._m(0),t._v(" "),n("div",{staticClass:"level-right"},[n("div",{staticClass:"buttons"},[t.page>1?n("div",{staticClass:"button is-small previous",on:{click:function(e){return t.clickFetch(!1)}}},[n("x-icon",{attrs:{name:"chevron-left"}})],1):t._e(),t._v(" "),t.page<t.total?n("div",{staticClass:"button is-small next",on:{click:function(e){return t.clickFetch(!0)}}},[n("x-icon",{attrs:{name:"chevron-right"}})],1):t._e()])])]),t._v(" "),t.response.results.length?n("div",{staticClass:"columns is-multiline"},t._l(t.response.results,(function(t){return n("div",{key:t.id,staticClass:"column is-6"},[n("board",{attrs:{value:t}})],1)})),0):t._e(),t._v(" "),t.loading?n("div",{staticClass:"columns is-multiline"},t._l(2,(function(i){return n("div",{key:i,staticClass:"column is-6"},[t._m(1,!0)])})),0):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"level-left"},[e("h4",{staticClass:"widget_title"},[this._v("Your Board")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-content"},[e("div",{staticClass:"skeleton-line"})])])}],!1,null,null,null).exports,Avatar:d.a,Board:l},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,r=t.query,e.next=3,n.$get("/general/hash-tags/?for_model=board");case 3:return c=e.sent,r.page_size=9,e.t0=c.results,e.t1=r,e.next=9,n.$get("/task/boards/",{params:r});case 9:return e.t2=e.sent,e.abrupt("return",{taxonomies:e.t0,query:e.t1,response:e.t2});case 11:case"end":return e.stop()}}),e)})))()},data:function(){return{response:{results:[],count:0},tag:null,selectedTax:[]}},methods:{fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.response.results=[],e.next=3,t.$axios.$get("/task/boards/",{params:t.query});case 3:t.response=e.sent;case 4:case"end":return e.stop()}}),e)})))()},create:function(){var t=this;this.currentUser&&this.$axios.$post("/task/boards/",{title:"Untitled"}).then((function(e){t.$router.replace({path:"/board/".concat(e.slug,"/")})}))},clickTag:function(t,e){this.selectedTax.push(e.id),t.preventDefault(),this.tag&&e.id!==this.tag.id||null===this.tag?this.tag=e:this.tag=null,this.query.page=1,this.fetch()}}}),m=(n(501),Object(o.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"section"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title is-spaced"},[t._v("Board")]),t._v(" "),n("div",{staticClass:"notification is-light subtitle"},[t._v("Get or sharing template to learn something by expert!")]),t._v(" "),t.currentUser?n("board-list"):t._e(),t._v(" "),n("div",{staticClass:"subsection"},[n("h4",{staticClass:"widget_title"},[t._v("Sample Board")]),t._v(" "),t.taxonomies.length?n("div",{staticClass:"buttons"},t._l(t.taxonomies,(function(e){return n("a",{key:e.id,staticClass:"button is-rounded",class:{"is-primary":t.tag&&t.tag.id===e.id},attrs:{href:"/board/?tag="+e.id},on:{click:function(n){return t.clickTag(n,e)}}},[t._v(t._s(e.title))])})),0):t._e(),t._v(" "),t.response.results.length?n("div",{staticClass:"columns is-multiline"},t._l(t.response.results,(function(e){return n("div",{key:e.id,staticClass:"column is-4"},[n("div",{staticClass:"media box template-board"},[n("div",{staticClass:"media-left"},[n("avatar",{staticClass:"is-48x48",attrs:{value:e.media}})],1),t._v(" "),n("div",{staticClass:"media-content"},[n("h4",[n("b",[n("n-link",{attrs:{to:"/board/"+e.slug}},[t._v(t._s(e.title))])],1)]),t._v(" "),n("small",[t._v("3 Tasks")])])])])})),0):n("div",{staticClass:"columns is-multiline"},t._l(9,(function(i){return n("div",{key:i,staticClass:"column is-4"},[t._m(0,!0)])})),0)])],1)]),t._v(" "),t.currentUser?n("div",{staticClass:"create"},[n("div",{staticClass:"button is-rounded",on:{click:t.create}},[t._v("Create")])]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box"},[e("div",{staticClass:"skeleton-board"})])}],!1,null,null,null));e.default=m.exports}}]);