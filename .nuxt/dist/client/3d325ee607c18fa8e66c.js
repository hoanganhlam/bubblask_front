(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{497:function(t,e,r){var n=r(13);n(n.P,"Array",{fill:r(498)}),r(107)("fill")},498:function(t,e,r){"use strict";var n=r(51),o=r(411),l=r(44);t.exports=function(t){for(var e=n(this),r=l(e.length),c=arguments.length,_=o(c>1?arguments[1]:void 0,r),h=c>2?arguments[2]:void 0,v=void 0===h?r:o(h,r);v>_;)e[_++]=t;return e}},501:function(t,e,r){var content=r(514);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("79152c3e",content,!0,{sourceMap:!1})},502:function(t,e,r){var content=r(516);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("798e783b",content,!0,{sourceMap:!1})},513:function(t,e,r){"use strict";var n=r(501);r.n(n).a},514:function(t,e,r){(e=r(31)(!1)).push([t.i,"svg.vch__wrapper[data-v-5592a248]{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;line-height:10px}svg.vch__wrapper .vch__months__labels__wrapper text.vch__month__label[data-v-5592a248]{font-size:10px}svg.vch__wrapper .vch__days__labels__wrapper text.vch__day__label[data-v-5592a248],svg.vch__wrapper .vch__legend__wrapper text[data-v-5592a248]{font-size:9px}svg.vch__wrapper .vch__days__labels__wrapper text.vch__day__label[data-v-5592a248],svg.vch__wrapper .vch__legend__wrapper text[data-v-5592a248],svg.vch__wrapper .vch__months__labels__wrapper text.vch__month__label[data-v-5592a248]{fill:#767676}svg.vch__wrapper rect.vch__day__square[data-v-5592a248]:hover{stroke:#555;stroke-width:1px}svg.vch__wrapper rect.vch__day__square[data-v-5592a248]:focus{outline:none}",""]),t.exports=e},515:function(t,e,r){"use strict";var n=r(502);r.n(n).a},516:function(t,e,r){(e=r(31)(!1)).push([t.i,".vue-tooltip-theme.tooltip{display:block!important;z-index:10000}.vue-tooltip-theme.tooltip .tooltip-inner{background:rgba(0,0,0,.7);border-radius:3px;color:#ebedf0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-size:12px;line-height:16px;padding:14px 10px}.vue-tooltip-theme.tooltip .tooltip-inner b{color:#fff}.vue-tooltip-theme.tooltip .tooltip-arrow{width:0;height:0;border-style:solid;position:absolute;margin:5px;border-color:#000;z-index:1}.vue-tooltip-theme.tooltip[x-placement^=top]{margin-bottom:5px}.vue-tooltip-theme.tooltip[x-placement^=top] .tooltip-arrow{border-width:5px 5px 0;border-left-color:transparent!important;border-right-color:transparent!important;border-bottom-color:transparent!important;bottom:-5px;left:calc(50% - 5px);margin-top:0;margin-bottom:0}.vue-tooltip-theme.tooltip[x-placement^=bottom]{margin-top:5px}.vue-tooltip-theme.tooltip[x-placement^=bottom] .tooltip-arrow{border-width:0 5px 5px;border-left-color:transparent!important;border-right-color:transparent!important;border-top-color:transparent!important;top:-5px;left:calc(50% - 5px);margin-top:0;margin-bottom:0}.vue-tooltip-theme.tooltip[x-placement^=right]{margin-left:5px}.vue-tooltip-theme.tooltip[x-placement^=right] .tooltip-arrow{border-width:5px 5px 5px 0;border-left-color:transparent!important;border-top-color:transparent!important;border-bottom-color:transparent!important;left:-5px;top:calc(50% - 5px);margin-left:0;margin-right:0}.vue-tooltip-theme.tooltip[x-placement^=left]{margin-right:5px}.vue-tooltip-theme.tooltip[x-placement^=left] .tooltip-arrow{border-width:5px 0 5px 5px;border-top-color:transparent!important;border-right-color:transparent!important;border-bottom-color:transparent!important;right:-5px;top:calc(50% - 5px);margin-left:0;margin-right:0}.vue-tooltip-theme.tooltip[aria-hidden=true]{visibility:hidden;opacity:0;transition:opacity .15s,visibility .15s}.vue-tooltip-theme.tooltip[aria-hidden=false]{visibility:visible;opacity:1;transition:opacity .15s}",""]),t.exports=e},517:function(t,e,r){"use strict";r.r(e);r(52),r(17),r(16),r(45);var n=r(102);var o=r(130);function l(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=r(6),_=(r(7),r(12),r(3)),h=(r(497),r(24),r(38),r(37),r(86)),v=r(87),d=["#ebedf0","#dae2ef","#c0ddf9","#73b3f3","#3886e1","#17459e"],m={months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],on:"on",less:"Less",more:"More"},f=function(){function t(e,r,n){Object(h.a)(this,t),this.endDate=this._parseDate(e),this.max=n||Math.ceil(Math.max.apply(Math,l(r.map((function(t){return t.count}))))/5*4),this.startDate=this._shiftDate(e,-365),this.values=r}return Object(v.a)(t,[{key:"getColorIndex",value:function(t){return null==t?0:t<=0?1:t>=this.max?5:Math.ceil(100*t/this.max*.03)+1}},{key:"getCountEmptyDaysAtStart",value:function(){return this.startDate.getDay()}},{key:"getCountEmptyDaysAtEnd",value:function(){return 6-this.endDate.getDay()}},{key:"getDaysCount",value:function(){return 366+this.getCountEmptyDaysAtStart()+this.getCountEmptyDaysAtEnd()}},{key:"_shiftDate",value:function(t,e){var r=new Date(t);return r.setDate(r.getDate()+e),r}},{key:"_parseDate",value:function(t){return t instanceof Date?t:new Date(t)}},{key:"_keyDayParser",value:function(t){var e=this._parseDate(t);return"".concat(e.getFullYear(),"-").concat(e.getMonth(),"-").concat(e.getDate())}},{key:"activities",get:function(){var t=this;return this.values.reduce((function(e,r){return e[t._keyDayParser(r.date)]={count:r.count,colorIndex:t.getColorIndex(r.count)},e}),{})}},{key:"weekCount",get:function(){return this.getDaysCount()/7}},{key:"calendar",get:function(){var t=this,e=this._shiftDate(this.startDate,-this.getCountEmptyDaysAtStart());return Array.from({length:this.weekCount},(function(){return Array.from({length:7},(function(){var r=new Date(e.getFullYear(),e.getMonth(),e.getDate()),n=t.activities[t._keyDayParser(r)];return e.setDate(e.getDate()+1),{date:r,count:n?n.count:null,colorIndex:n?n.colorIndex:0}}))}))}},{key:"firstFullWeekOfMonths",get:function(){return this.calendar.reduce((function(t,e,r,n){if(r>0){var o=n[r-1][0].date,l=e[0].date;(o.getFullYear()<l.getFullYear()||o.getMonth()<l.getMonth())&&t.push({value:l.getMonth(),index:r})}return t}),[])}}]),t}(),E={directives:{},props:{endDate:{required:!0},max:{type:Number},rangeColor:{type:Array,default:function(){return d}},values:{required:!0,type:Array},locale:{type:Object},tooltip:{type:Boolean,default:!0},tooltipUnit:{type:String,default:"contributions"},vertical:{type:Boolean,default:!1},noDataText:{type:String,default:null}},data:function(){return{now:new Date,DAYS_IN_WEEK:7,DEFAULT_LOCALE:m,DEFAULT_RANGE_COLOR:d,DEFAULT_TOOLTIP_UNIT:"contributions"}},computed:{position:function(){return this.vertical?"vertical":"horizontal"},heatMap:function(){return new f(this.endDate,this.values,this.max)},width:function(){return{horizontal:this.LEFT_SECTION_WIDTH+this.SQUARE_SIZE*this.heatMap.weekCount+this.SQUARE_BORDER_SIZE,vertical:this.LEFT_SECTION_WIDTH+7*this.SQUARE_SIZE+this.RIGHT_SECTION_WIDTH}},height:function(){return{horizontal:this.TOP_SECTION_HEIGTH+7*this.SQUARE_SIZE+this.SQUARE_BORDER_SIZE+this.BOTTOM_SECTION_HEIGTH,vertical:this.TOP_SECTION_HEIGTH+this.SQUARE_SIZE*this.heatMap.weekCount+this.SQUARE_BORDER_SIZE}},viewBox:function(){return"0 0 ".concat(this.width[this.position]," ").concat(this.height[this.position])},daysLabelWrapperTransform:function(){return{horizontal:"translate(0, ".concat(this.TOP_SECTION_HEIGTH,")"),vertical:"translate(".concat(this.LEFT_SECTION_WIDTH,", 0)")}},monthsLabelWrapperTransform:function(){return{horizontal:"translate(".concat(this.LEFT_SECTION_WIDTH,", 0)"),vertical:"translate(0, ".concat(this.TOP_SECTION_HEIGTH,")")}},legendWrapperTransform:function(){return{horizontal:"translate(".concat(this.width[this.position]-this.SQUARE_SIZE*this.rangeColor.length-30,", ").concat(this.height[this.position]-this.BOTTOM_SECTION_HEIGTH,")"),vertical:"translate(".concat(this.LEFT_SECTION_WIDTH+7*this.SQUARE_SIZE,", ").concat(this.TOP_SECTION_HEIGTH,")")}},yearWrapperTransform:function(){return"translate(".concat(this.LEFT_SECTION_WIDTH,", ").concat(this.TOP_SECTION_HEIGTH,")")},SQUARE_BORDER_SIZE:function(){return 2},SQUARE_SIZE:function(){return 10+this.SQUARE_BORDER_SIZE},TOP_SECTION_HEIGTH:function(){return 15},RIGHT_SECTION_WIDTH:function(){return 3*this.SQUARE_SIZE},BOTTOM_SECTION_HEIGTH:function(){return 15},LEFT_SECTION_WIDTH:function(){return Math.ceil(25)},lo:function(){return this.locale?{months:this.locale.months||m.months,days:this.locale.days||m.days,on:this.locale.on||m.on,less:this.locale.less||m.less,more:this.locale.more||m.more}:m}},methods:{getWeekPosition:function(t){return this.vertical?"translate(0, ".concat(this.SQUARE_SIZE*this.heatMap.weekCount-(t+1)*this.SQUARE_SIZE,")"):"translate(".concat(t*this.SQUARE_SIZE,", 0)")},getDayPosition:function(t){return this.vertical?"translate(".concat(t*this.SQUARE_SIZE,", 0)"):"translate(0, ".concat(t*this.SQUARE_SIZE,")")},getMonthLabelPosition:function(t){var e={x:0,y:0};return e.x=this.vertical?3:this.SQUARE_SIZE*t.index,e.y=this.vertical?this.SQUARE_SIZE*this.heatMap.weekCount-this.SQUARE_SIZE*t.index-this.SQUARE_SIZE/4:this.SQUARE_SIZE-this.SQUARE_BORDER_SIZE,e}}},y=(r(513),r(515),r(4)),S=Object(y.a)(E,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"vch__wrapper",attrs:{viewBox:t.viewBox}},[r("g",{staticClass:"vch__months__labels__wrapper",attrs:{transform:t.monthsLabelWrapperTransform[t.position]}},t._l(t.heatMap.firstFullWeekOfMonths,(function(e,n){return r("text",{staticClass:"vch__month__label",attrs:{x:t.getMonthLabelPosition(e).x,y:t.getMonthLabelPosition(e).y}},[t._v(t._s(t.lo.months[e.value])+"\n        ")])})),0),t._v(" "),r("g",{staticClass:"vch__days__labels__wrapper",attrs:{transform:t.daysLabelWrapperTransform[t.position]}},[r("text",{staticClass:"vch__day__label",attrs:{x:t.vertical?1*t.SQUARE_SIZE:0,y:t.vertical?t.SQUARE_SIZE-t.SQUARE_BORDER_SIZE:20}},[t._v(t._s(t.lo.days[1])+"\n        ")]),t._v(" "),r("text",{staticClass:"vch__day__label",attrs:{x:t.vertical?3*t.SQUARE_SIZE:0,y:t.vertical?t.SQUARE_SIZE-t.SQUARE_BORDER_SIZE:44}},[t._v(t._s(t.lo.days[3])+"\n        ")]),t._v(" "),r("text",{staticClass:"vch__day__label",attrs:{x:t.vertical?5*t.SQUARE_SIZE:0,y:t.vertical?t.SQUARE_SIZE-t.SQUARE_BORDER_SIZE:69}},[t._v(t._s(t.lo.days[5])+"\n        ")])]),t._v(" "),r("g",{staticClass:"vch__legend__wrapper",attrs:{transform:t.legendWrapperTransform[t.position]}},[r("text",{attrs:{x:t.vertical?1.25*t.SQUARE_SIZE:-25,y:t.vertical?8:t.SQUARE_SIZE+1}},[t._v(t._s(t.lo.less))]),t._v(" "),t._l(t.rangeColor,(function(e,n){return r("rect",{key:n,style:{fill:e},attrs:{width:t.SQUARE_SIZE-t.SQUARE_BORDER_SIZE,height:t.SQUARE_SIZE-t.SQUARE_BORDER_SIZE,x:t.vertical?1.75*t.SQUARE_SIZE:t.SQUARE_SIZE*n,y:t.vertical?t.SQUARE_SIZE*(n+1):5}})})),t._v(" "),r("text",{attrs:{x:t.vertical?1.25*t.SQUARE_SIZE:t.SQUARE_SIZE*t.rangeColor.length+1,y:t.vertical?t.SQUARE_SIZE*(t.rangeColor.length+2)-t.SQUARE_BORDER_SIZE:t.SQUARE_SIZE+1}},[t._v("\n            "+t._s(t.lo.more)+"\n        ")])],2),t._v(" "),r("g",{staticClass:"vch__year__wrapper",attrs:{transform:t.yearWrapperTransform}},t._l(t.heatMap.calendar,(function(e,n){return r("g",{key:n,staticClass:"vch__month__wrapper",attrs:{transform:t.getWeekPosition(n)}},t._l(e,(function(e,n){return e.date<t.now?r("rect",{key:n,staticClass:"vch__day__square",style:{fill:t.rangeColor[e.colorIndex]},attrs:{transform:t.getDayPosition(n),width:t.SQUARE_SIZE-t.SQUARE_BORDER_SIZE,height:t.SQUARE_SIZE-t.SQUARE_BORDER_SIZE},on:{click:function(r){return t.$emit("day-click",e)}}}):t._e()})),0)})),0)])}),[],!1,null,"5592a248",null).exports,C=r(69),x=r(34);function I(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}Array.range=function(a,b,t){var e=[];for(e[0]=a,t=t||1;a+t<=b;)e[e.length]=a+=t;return e},Array.prototype.fill=function(t){for(var i=0;i<this.length;i++)this[i]=t;return this};var k={name:"index",components:{Avatar:C.a,CalendarHeatMap:S,"b-input":x.a},asyncData:function(t){return Object(_.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,n=t.params,e.next=3,r.$get("/auth/users/".concat(n.user,"/"));case 3:return e.t0=e.sent,e.abrupt("return",{user:e.t0});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{profile:{links:{}},updating:!1,report:{total_task_done:0,total_task_delay:0,tracking:[],accurate_estimates:0},time_works:[]}},created:function(){this.user.profile&&(this.profile=this.user.profile,Boolean(this.profile.links)||(this.profile.links={}),Boolean(this.profile.extra)||(this.profile.extra={})),this.fetchReport()},methods:{handleUpdate:function(){!1===this.updating?this.updating=!0:this.save()},save:function(){var t=this;this.$axios.$put("/auth/users/".concat(this.user.username,"/"),function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?I(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):I(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.user,{profile:this.cleanData(this.profile)})).finally((function(){t.updating=!1}))},fetchReport:function(){var t=this;return Object(_.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/auth/users/".concat(t.user.id,"/reports/"));case 2:t.report=e.sent,t.report.tracking.forEach((function(t){t.total_time=t.data.map((function(t){return t.time_taken})).reduce((function(a,b){return a+b}),0)})),r=new Array(24).fill(0),t.report.tracking.forEach((function(t){t.data.forEach((function(t){var e=t.time_start,n=t.time_stop;if(e&&n){var o=new Date(e),l=new Date(n);Array.range(o.getHours(),l.getHours()).forEach((function(t){r[t]=r[t]+1}))}}))})),n=Math.max.apply(Math,l(r)),t.time_works=r.map((function(t){return t/n}));case 8:case"end":return e.stop()}}),e)})))()}},computed:{reportData:function(){var t=this.report.tracking.map((function(t){return t.total_time})).reduce((function(a,b){return a+b}),0);return{total_task_done:this.report.total_task_done,total_task_delay:this.report.total_task_delay,total_focus:(this.user.profile.extra&&this.user.profile.extra.temp_score?this.user.profile.extra.temp_score:0)/3600,avg_focus:this.report.tracking.length?(t||0)/this.report.tracking.length/60:0,accurate_estimates:this.report.accurate_estimates/60,rank:0}},chartValues:function(){return this.report.tracking.map((function(t){return{date:new Date(t.date_record),count:t.total_time}}))},timeChart:function(){return this.report.tracking.length,[]}},mounted:function(){this.toTop()}},R=Object(y.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"hero is-light is-small"},[r("div",{staticClass:"hero-body"},[r("div",{staticClass:"container"},[r("div",{staticClass:"media"},[r("div",{staticClass:"media-left",staticStyle:{"margin-right":"2rem"}},[r("avatar",{staticClass:"is-96x96",attrs:{"can-update":t.updating},model:{value:t.profile.media,callback:function(e){t.$set(t.profile,"media",e)},expression:"profile.media"}})],1),t._v(" "),r("div",{staticClass:"media-content"},[t.updating?r("div",{staticClass:"columns is-grapless",staticStyle:{"margin-bottom":"0"}},[r("div",{staticClass:"column"},[r("ce",{staticClass:"title",attrs:{elm:"h1",editable:!0,placeholder:"First name"},model:{value:t.user.first_name,callback:function(e){t.$set(t.user,"first_name",e)},expression:"user.first_name"}})],1),t._v(" "),r("div",{staticClass:"column"},[r("ce",{staticClass:"title",attrs:{elm:"h1",editable:!0,placeholder:"Last name"},model:{value:t.user.last_name,callback:function(e){t.$set(t.user,"last_name",e)},expression:"user.last_name"}})],1)]):r("h1",{staticClass:"title"},[t._v(t._s(t.convertName(t.user)))]),t._v(" "),r("ce",{staticClass:"subtitle",attrs:{elm:"div",editable:t.updating,placeholder:"Bio"},model:{value:t.profile.bio,callback:function(e){t.$set(t.profile,"bio",e)},expression:"profile.bio"}}),t._v(" "),r("div",{staticClass:"buttons"},t._l(Object.keys(t.profile.links),(function(e){return t.profile.links[e]?r("a",{key:e,staticClass:"button is-small",attrs:{href:t.profile.links[e],target:"_blank"}},[r("x-icon",{attrs:{name:e}})],1):t._e()})),0)],1),t._v(" "),t.currentUser&&t.currentUser.id===t.user.id?r("div",{staticClass:"media-right"},[r("div",{staticClass:"button is-text",on:{click:t.handleUpdate}},[r("x-icon",{attrs:{name:"pen"}})],1)]):t._e()])])])]),t._v(" "),r("div",{staticClass:"section"},[r("div",{staticClass:"container"},[t.updating?r("div",[r("h4",{staticClass:"widget_title"},[t._v("Links")]),t._v(" "),r("div",{staticClass:"columns is-gapless is-mobile"},[t._m(6),t._v(" "),r("div",{staticClass:"column is-9"},[r("b-input",{attrs:{placeholder:"https://bubblask.com",expanded:""},model:{value:t.profile.links.ws,callback:function(e){t.$set(t.profile.links,"ws",e)},expression:"profile.links.ws"}})],1)]),t._v(" "),r("div",{staticClass:"columns is-gapless is-mobile"},[t._m(7),t._v(" "),r("div",{staticClass:"column is-9"},[r("b-input",{attrs:{placeholder:"https://facebook.com/bubblask",expanded:""},model:{value:t.profile.links.fb,callback:function(e){t.$set(t.profile.links,"fb",e)},expression:"profile.links.fb"}})],1)]),t._v(" "),r("div",{staticClass:"columns is-gapless is-mobile"},[t._m(8),t._v(" "),r("div",{staticClass:"column is-9"},[r("b-input",{attrs:{placeholder:"https://twitter.com@/bubblask",expanded:""},model:{value:t.profile.links.tw,callback:function(e){t.$set(t.profile.links,"tw",e)},expression:"profile.links.tw"}})],1)]),t._v(" "),r("div",{staticClass:"columns is-gapless is-mobile"},[t._m(9),t._v(" "),r("div",{staticClass:"column is-9"},[r("b-input",{attrs:{placeholder:"https://linkedin.com/bubblask",expanded:""},model:{value:t.profile.links.li,callback:function(e){t.$set(t.profile.links,"li",e)},expression:"profile.links.li"}})],1)])]):r("div",{staticClass:"columns is-multiline"},[r("div",{staticClass:"column is-12"},[r("calendar-heat-map",{attrs:{values:t.chartValues,"end-date":new Date}})],1),t._v(" "),r("div",{staticClass:"column is-6"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-content"},[r("div",{staticClass:"media"},[t._m(0),t._v(" "),r("div",{staticClass:"media-right"},[r("span",{staticClass:"title is-1"},[t._v(t._s(t.reportData.total_focus.toFixed(1)))]),t._v(" "),r("span",[t._v("h")])])])])])]),t._v(" "),r("div",{staticClass:"column is-6"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-content"},[r("div",{staticClass:"media"},[t._m(1),t._v(" "),r("div",{staticClass:"media-right"},[r("span",{staticClass:"title is-1"},[t._v(t._s(100-t.reportData.accurate_estimates.toFixed(1)))]),t._v(" "),r("span",[t._v("%")])])])])])]),t._v(" "),r("div",{staticClass:"column is-6"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-content"},[r("div",{staticClass:"media"},[t._m(2),t._v(" "),r("div",{staticClass:"media-right"},[r("span",{staticClass:"title is-1"},[t._v(t._s((t.reportData.avg_focus/60).toFixed(1)))]),t._v(" "),r("span",[t._v("h/day")])])])])])]),t._v(" "),r("div",{staticClass:"column is-6"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-content"},[r("div",{staticClass:"media"},[t._m(3),t._v(" "),r("div",{staticClass:"media-right"},[r("span",{staticClass:"title is-1"},[t._v(t._s(t.reportData.total_task_done))]),t._v(" "),r("span",[t._v("tasks")])])])])])]),t._v(" "),r("div",{staticClass:"column is-6"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-content"},[r("div",{staticClass:"media"},[t._m(4),t._v(" "),r("div",{staticClass:"media-right"},[r("span",{staticClass:"title is-1"},[t._v(t._s(t.reportData.total_task_delay))]),t._v(" "),r("span",[t._v("tasks")])])])])])]),t._v(" "),r("div",{staticClass:"column is-6"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-content"},[r("div",{staticClass:"media"},[t._m(5),t._v(" "),r("div",{staticClass:"media-right"},[r("span",{staticClass:"title is-1"},[t._v(t._s(t.reportData.rank))]),t._v(" "),r("span",[t._v("th")])])])])])]),t._v(" "),r("div",{staticClass:"column is-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-content"},[r("div",{staticClass:"level"},[r("div",{staticClass:"level-left"},[r("h4",[t._v(t._s(t.convertName(t.user))+"'s work time")])]),t._v(" "),r("div",{staticClass:"level-right"},[t._v(t._s(t.convertName(t.user))+"'s timezone: "+t._s(t.user.profile.time_zone))])]),t._v(" "),r("time-chart",{attrs:{data:t.time_works}})],1)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"media-content"},[e("h4",[this._v("Focus")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"media-content"},[e("h4",[this._v("Accurate estimates")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"media-content"},[e("h4",[this._v("AVG focus")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"media-content"},[e("h4",[this._v("Total complete")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"media-content"},[e("h4",[this._v("Total Delays/Interruptions")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"media-content"},[e("h4",[this._v("Ranking")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column is-3 v-center is-text field"},[e("span",[this._v("Website")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column is-3 v-center is-text field"},[e("span",[this._v("Facebook")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column is-3 v-center is-text field"},[e("span",[this._v("Twitter")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column is-3 v-center is-text field"},[e("span",[this._v("LinkedIn")])])}],!1,null,"684177a6",null);e.default=R.exports}}]);