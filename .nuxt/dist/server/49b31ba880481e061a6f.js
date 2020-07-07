exports.ids=[1],exports.modules={71:function(t,e,r){var content=r(83);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=r(8).default;t.exports.__inject__=function(t){o("79152c3e",content,!0,t)}},72:function(t,e,r){var content=r(85);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=r(8).default;t.exports.__inject__=function(t){o("798e783b",content,!0,t)}},82:function(t,e,r){"use strict";r.r(e);var o=r(71),l=r.n(o);for(var n in o)"default"!==n&&function(t){r.d(e,t,(function(){return o[t]}))}(n);e.default=l.a},83:function(t,e,r){(e=r(7)(!1)).push([t.i,"svg.vch__wrapper[data-v-5592a248]{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;line-height:10px}svg.vch__wrapper .vch__months__labels__wrapper text.vch__month__label[data-v-5592a248]{font-size:10px}svg.vch__wrapper .vch__days__labels__wrapper text.vch__day__label[data-v-5592a248],svg.vch__wrapper .vch__legend__wrapper text[data-v-5592a248]{font-size:9px}svg.vch__wrapper .vch__days__labels__wrapper text.vch__day__label[data-v-5592a248],svg.vch__wrapper .vch__legend__wrapper text[data-v-5592a248],svg.vch__wrapper .vch__months__labels__wrapper text.vch__month__label[data-v-5592a248]{fill:#767676}svg.vch__wrapper rect.vch__day__square[data-v-5592a248]:hover{stroke:#555;stroke-width:1px}svg.vch__wrapper rect.vch__day__square[data-v-5592a248]:focus{outline:none}",""]),t.exports=e},84:function(t,e,r){"use strict";r.r(e);var o=r(72),l=r.n(o);for(var n in o)"default"!==n&&function(t){r.d(e,t,(function(){return o[t]}))}(n);e.default=l.a},85:function(t,e,r){(e=r(7)(!1)).push([t.i,".vue-tooltip-theme.tooltip{display:block!important;z-index:10000}.vue-tooltip-theme.tooltip .tooltip-inner{background:rgba(0,0,0,.7);border-radius:3px;color:#ebedf0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-size:12px;line-height:16px;padding:14px 10px}.vue-tooltip-theme.tooltip .tooltip-inner b{color:#fff}.vue-tooltip-theme.tooltip .tooltip-arrow{width:0;height:0;border-style:solid;position:absolute;margin:5px;border-color:#000;z-index:1}.vue-tooltip-theme.tooltip[x-placement^=top]{margin-bottom:5px}.vue-tooltip-theme.tooltip[x-placement^=top] .tooltip-arrow{border-width:5px 5px 0;border-left-color:transparent!important;border-right-color:transparent!important;border-bottom-color:transparent!important;bottom:-5px;left:calc(50% - 5px);margin-top:0;margin-bottom:0}.vue-tooltip-theme.tooltip[x-placement^=bottom]{margin-top:5px}.vue-tooltip-theme.tooltip[x-placement^=bottom] .tooltip-arrow{border-width:0 5px 5px;border-left-color:transparent!important;border-right-color:transparent!important;border-top-color:transparent!important;top:-5px;left:calc(50% - 5px);margin-top:0;margin-bottom:0}.vue-tooltip-theme.tooltip[x-placement^=right]{margin-left:5px}.vue-tooltip-theme.tooltip[x-placement^=right] .tooltip-arrow{border-width:5px 5px 5px 0;border-left-color:transparent!important;border-top-color:transparent!important;border-bottom-color:transparent!important;left:-5px;top:calc(50% - 5px);margin-left:0;margin-right:0}.vue-tooltip-theme.tooltip[x-placement^=left]{margin-right:5px}.vue-tooltip-theme.tooltip[x-placement^=left] .tooltip-arrow{border-width:5px 0 5px 5px;border-top-color:transparent!important;border-right-color:transparent!important;border-bottom-color:transparent!important;right:-5px;top:calc(50% - 5px);margin-left:0;margin-right:0}.vue-tooltip-theme.tooltip[aria-hidden=true]{visibility:hidden;opacity:0;transition:opacity .15s,visibility .15s}.vue-tooltip-theme.tooltip[aria-hidden=false]{visibility:visible;opacity:1;transition:opacity .15s}",""]),t.exports=e},86:function(t,e,r){"use strict";r.r(e);const o=["#ebedf0","#dae2ef","#c0ddf9","#73b3f3","#3886e1","#17459e"],l={months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],on:"on",less:"Less",more:"More"};class n{constructor(t,e,r){this.endDate=this._parseDate(t),this.max=r||Math.ceil(Math.max(...e.map(t=>t.count))/5*4),this.startDate=this._shiftDate(t,-365),this.values=e}get activities(){return this.values.reduce((t,e)=>(t[this._keyDayParser(e.date)]={count:e.count,colorIndex:this.getColorIndex(e.count)},t),{})}get weekCount(){return this.getDaysCount()/7}get calendar(){let t=this._shiftDate(this.startDate,-this.getCountEmptyDaysAtStart());return Array.from({length:this.weekCount},()=>Array.from({length:7},()=>{let e=new Date(t.getFullYear(),t.getMonth(),t.getDate()),r=this.activities[this._keyDayParser(e)];return t.setDate(t.getDate()+1),{date:e,count:r?r.count:null,colorIndex:r?r.colorIndex:0}}))}get firstFullWeekOfMonths(){return this.calendar.reduce((t,e,r,o)=>{if(r>0){let l=o[r-1][0].date,n=e[0].date;(l.getFullYear()<n.getFullYear()||l.getMonth()<n.getMonth())&&t.push({value:n.getMonth(),index:r})}return t},[])}getColorIndex(t){return null==t?0:t<=0?1:t>=this.max?5:Math.ceil(100*t/this.max*.03)+1}getCountEmptyDaysAtStart(){return this.startDate.getDay()}getCountEmptyDaysAtEnd(){return 6-this.endDate.getDay()}getDaysCount(){return 366+this.getCountEmptyDaysAtStart()+this.getCountEmptyDaysAtEnd()}_shiftDate(t,e){const r=new Date(t);return r.setDate(r.getDate()+e),r}_parseDate(t){return t instanceof Date?t:new Date(t)}_keyDayParser(t){let e=this._parseDate(t);return`${e.getFullYear()}-${e.getMonth()}-${e.getDate()}`}}var d={directives:{},props:{endDate:{required:!0},max:{type:Number},rangeColor:{type:Array,default:()=>o},values:{required:!0,type:Array},locale:{type:Object},tooltip:{type:Boolean,default:!0},tooltipUnit:{type:String,default:"contributions"},vertical:{type:Boolean,default:!1},noDataText:{type:String,default:null}},data:()=>({now:new Date,DAYS_IN_WEEK:7,DEFAULT_LOCALE:l,DEFAULT_RANGE_COLOR:o,DEFAULT_TOOLTIP_UNIT:"contributions"}),computed:{position(){return this.vertical?"vertical":"horizontal"},heatMap(){return new n(this.endDate,this.values,this.max)},width(){return{horizontal:this.LEFT_SECTION_WIDTH+this.SQUARE_SIZE*this.heatMap.weekCount+this.SQUARE_BORDER_SIZE,vertical:this.LEFT_SECTION_WIDTH+7*this.SQUARE_SIZE+this.RIGHT_SECTION_WIDTH}},height(){return{horizontal:this.TOP_SECTION_HEIGTH+7*this.SQUARE_SIZE+this.SQUARE_BORDER_SIZE+this.BOTTOM_SECTION_HEIGTH,vertical:this.TOP_SECTION_HEIGTH+this.SQUARE_SIZE*this.heatMap.weekCount+this.SQUARE_BORDER_SIZE}},viewBox(){return`0 0 ${this.width[this.position]} ${this.height[this.position]}`},daysLabelWrapperTransform(){return{horizontal:`translate(0, ${this.TOP_SECTION_HEIGTH})`,vertical:`translate(${this.LEFT_SECTION_WIDTH}, 0)`}},monthsLabelWrapperTransform(){return{horizontal:`translate(${this.LEFT_SECTION_WIDTH}, 0)`,vertical:`translate(0, ${this.TOP_SECTION_HEIGTH})`}},legendWrapperTransform(){return{horizontal:`translate(${this.width[this.position]-this.SQUARE_SIZE*this.rangeColor.length-30}, ${this.height[this.position]-this.BOTTOM_SECTION_HEIGTH})`,vertical:`translate(${this.LEFT_SECTION_WIDTH+7*this.SQUARE_SIZE}, ${this.TOP_SECTION_HEIGTH})`}},yearWrapperTransform(){return`translate(${this.LEFT_SECTION_WIDTH}, ${this.TOP_SECTION_HEIGTH})`},SQUARE_BORDER_SIZE:()=>2,SQUARE_SIZE(){return 10+this.SQUARE_BORDER_SIZE},TOP_SECTION_HEIGTH:()=>15,RIGHT_SECTION_WIDTH(){return 3*this.SQUARE_SIZE},BOTTOM_SECTION_HEIGTH:()=>15,LEFT_SECTION_WIDTH:()=>Math.ceil(25),lo(){return this.locale?{months:this.locale.months||l.months,days:this.locale.days||l.days,on:this.locale.on||l.on,less:this.locale.less||l.less,more:this.locale.more||l.more}:l}},methods:{getWeekPosition(t){return this.vertical?`translate(0, ${this.SQUARE_SIZE*this.heatMap.weekCount-(t+1)*this.SQUARE_SIZE})`:`translate(${t*this.SQUARE_SIZE}, 0)`},getDayPosition(t){return this.vertical?`translate(${t*this.SQUARE_SIZE}, 0)`:`translate(0, ${t*this.SQUARE_SIZE})`},getMonthLabelPosition(t){let e={x:0,y:0};return e.x=this.vertical?3:this.SQUARE_SIZE*t.index,e.y=this.vertical?this.SQUARE_SIZE*this.heatMap.weekCount-this.SQUARE_SIZE*t.index-this.SQUARE_SIZE/4:this.SQUARE_SIZE-this.SQUARE_BORDER_SIZE,e}}},c=r(1);var _=Object(c.a)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("svg",{staticClass:"vch__wrapper",attrs:{viewBox:t.viewBox}},[t._ssrNode("<g"+t._ssrAttr("transform",t.monthsLabelWrapperTransform[t.position])+' class="vch__months__labels__wrapper" data-v-5592a248>'+t._ssrList(t.heatMap.firstFullWeekOfMonths,(function(e,r){return"<text"+t._ssrAttr("x",t.getMonthLabelPosition(e).x)+t._ssrAttr("y",t.getMonthLabelPosition(e).y)+' class="vch__month__label" data-v-5592a248>'+t._ssrEscape(t._s(t.lo.months[e.value])+"\n        ")+"</text>"}))+"</g> <g"+t._ssrAttr("transform",t.daysLabelWrapperTransform[t.position])+' class="vch__days__labels__wrapper" data-v-5592a248><text'+t._ssrAttr("x",t.vertical?1*t.SQUARE_SIZE:0)+t._ssrAttr("y",t.vertical?t.SQUARE_SIZE-t.SQUARE_BORDER_SIZE:20)+' class="vch__day__label" data-v-5592a248>'+t._ssrEscape(t._s(t.lo.days[1])+"\n        ")+"</text> <text"+t._ssrAttr("x",t.vertical?3*t.SQUARE_SIZE:0)+t._ssrAttr("y",t.vertical?t.SQUARE_SIZE-t.SQUARE_BORDER_SIZE:44)+' class="vch__day__label" data-v-5592a248>'+t._ssrEscape(t._s(t.lo.days[3])+"\n        ")+"</text> <text"+t._ssrAttr("x",t.vertical?5*t.SQUARE_SIZE:0)+t._ssrAttr("y",t.vertical?t.SQUARE_SIZE-t.SQUARE_BORDER_SIZE:69)+' class="vch__day__label" data-v-5592a248>'+t._ssrEscape(t._s(t.lo.days[5])+"\n        ")+"</text></g> <g"+t._ssrAttr("transform",t.legendWrapperTransform[t.position])+' class="vch__legend__wrapper" data-v-5592a248><text'+t._ssrAttr("x",t.vertical?1.25*t.SQUARE_SIZE:-25)+t._ssrAttr("y",t.vertical?8:t.SQUARE_SIZE+1)+" data-v-5592a248>"+t._ssrEscape(t._s(t.lo.less))+"</text> "+t._ssrList(t.rangeColor,(function(e,r){return"<rect"+t._ssrAttr("width",t.SQUARE_SIZE-t.SQUARE_BORDER_SIZE)+t._ssrAttr("height",t.SQUARE_SIZE-t.SQUARE_BORDER_SIZE)+t._ssrAttr("x",t.vertical?1.75*t.SQUARE_SIZE:t.SQUARE_SIZE*r)+t._ssrAttr("y",t.vertical?t.SQUARE_SIZE*(r+1):5)+t._ssrStyle(null,{fill:e},null)+" data-v-5592a248></rect>"}))+" <text"+t._ssrAttr("x",t.vertical?1.25*t.SQUARE_SIZE:t.SQUARE_SIZE*t.rangeColor.length+1)+t._ssrAttr("y",t.vertical?t.SQUARE_SIZE*(t.rangeColor.length+2)-t.SQUARE_BORDER_SIZE:t.SQUARE_SIZE+1)+" data-v-5592a248>"+t._ssrEscape("\n            "+t._s(t.lo.more)+"\n        ")+"</text></g> <g"+t._ssrAttr("transform",t.yearWrapperTransform)+' class="vch__year__wrapper" data-v-5592a248>'+t._ssrList(t.heatMap.calendar,(function(e,r){return"<g"+t._ssrAttr("transform",t.getWeekPosition(r))+' class="vch__month__wrapper" data-v-5592a248>'+t._ssrList(e,(function(e,r){return e.date<t.now?"<rect"+t._ssrAttr("transform",t.getDayPosition(r))+t._ssrAttr("width",t.SQUARE_SIZE-t.SQUARE_BORDER_SIZE)+t._ssrAttr("height",t.SQUARE_SIZE-t.SQUARE_BORDER_SIZE)+' class="vch__day__square"'+t._ssrStyle(null,{fill:t.rangeColor[e.colorIndex]},null)+" data-v-5592a248></rect>":"\x3c!----\x3e"}))+"</g>"}))+"</g>")])}),[],!1,(function(t){var e=r(82);e.__inject__&&e.__inject__(t);var o=r(84);o.__inject__&&o.__inject__(t)}),"5592a248","074b086e").exports,v=r(16),h=r(9);Array.range=function(a,b,t){let e=[];for(e[0]=a,t=t||1;a+t<=b;)e[e.length]=a+=t;return e},Array.prototype.fill=function(t){for(let i=0;i<this.length;i++)this[i]=t;return this};var m={name:"index",components:{Avatar:v.a,CalendarHeatMap:_,"b-input":h.a},asyncData:async({$axios:t,params:e})=>({user:await t.$get(`/auth/users/${e.user}/`)}),data:()=>({profile:{links:{}},updating:!1,report:{total_task_done:0,total_task_delay:0,tracking:[],accurate_estimates:0},time_works:[]}),created(){this.user.profile&&(this.profile=this.user.profile,Boolean(this.profile.links)||(this.profile.links={}),Boolean(this.profile.extra)||(this.profile.extra={})),this.fetchReport()},methods:{handleUpdate(){!1===this.updating?this.updating=!0:this.save()},save(){this.$axios.$put(`/auth/users/${this.user.username}/`,{...this.user,profile:this.cleanData(this.profile)}).finally(()=>{this.updating=!1})},async fetchReport(){this.report=await this.$axios.$get(`/auth/users/${this.user.id}/reports/`),this.report.tracking.forEach(t=>{t.total_time=t.data.map(t=>t.time_taken).reduce((function(a,b){return a+b}),0)});let t=new Array(24).fill(0);this.report.tracking.forEach(e=>{e.data.forEach(e=>{let r=e.time_start,o=e.time_stop;if(r&&o){let e=new Date(r),l=new Date(o);Array.range(e.getHours(),l.getHours()).forEach(e=>{t[e]=t[e]+1})}})});let e=Math.max(...t);this.time_works=t.map(t=>t/e)}},computed:{reportData(){let t=this.report.tracking.map(t=>t.total_time).reduce((function(a,b){return a+b}),0);return{total_task_done:this.report.total_task_done,total_task_delay:this.report.total_task_delay,total_focus:(this.user.profile.extra&&this.user.profile.extra.temp_score?this.user.profile.extra.temp_score:0)/3600,avg_focus:this.report.tracking.length?(t||0)/this.report.tracking.length/60:0,accurate_estimates:this.report.accurate_estimates/60,rank:0}},chartValues(){return this.report.tracking.map(t=>({date:new Date(t.date_record),count:t.total_time}))},timeChart(){return this.report.tracking.length,[]}},mounted(){this.toTop()}};var E=Object(c.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._ssrNode('<div class="hero is-light is-small" data-v-684177a6>',"</div>",[t._ssrNode('<div class="hero-body" data-v-684177a6>',"</div>",[t._ssrNode('<div class="container" data-v-684177a6>',"</div>",[t._ssrNode('<div class="media" data-v-684177a6>',"</div>",[t._ssrNode('<div class="media-left" style="margin-right: 2rem;" data-v-684177a6>',"</div>",[r("avatar",{staticClass:"is-96x96",attrs:{"can-update":t.updating},model:{value:t.profile.media,callback:function(e){t.$set(t.profile,"media",e)},expression:"profile.media"}})],1),t._ssrNode(" "),t._ssrNode('<div class="media-content" data-v-684177a6>',"</div>",[t.updating?t._ssrNode('<div class="columns is-grapless" style="margin-bottom: 0" data-v-684177a6>',"</div>",[t._ssrNode('<div class="column" data-v-684177a6>',"</div>",[r("ce",{staticClass:"title",attrs:{elm:"h1",editable:!0,placeholder:"First name"},model:{value:t.user.first_name,callback:function(e){t.$set(t.user,"first_name",e)},expression:"user.first_name"}})],1),t._ssrNode(" "),t._ssrNode('<div class="column" data-v-684177a6>',"</div>",[r("ce",{staticClass:"title",attrs:{elm:"h1",editable:!0,placeholder:"Last name"},model:{value:t.user.last_name,callback:function(e){t.$set(t.user,"last_name",e)},expression:"user.last_name"}})],1)],2):t._ssrNode('<h1 class="title" data-v-684177a6>',"</h1>",[t._ssrNode(t._ssrEscape(t._s(t.convertName(t.user))))],2),t._ssrNode(" "),r("ce",{staticClass:"subtitle",attrs:{elm:"div",editable:t.updating,placeholder:"Bio"},model:{value:t.profile.bio,callback:function(e){t.$set(t.profile,"bio",e)},expression:"profile.bio"}}),t._ssrNode(" "),t._ssrNode('<div class="buttons" data-v-684177a6>',"</div>",t._l(Object.keys(t.profile.links),(function(e){return t.profile.links[e]?t._ssrNode("<a"+t._ssrAttr("href",t.profile.links[e])+' target="_blank" class="button is-small" data-v-684177a6>',"</a>",[r("x-icon",{attrs:{name:e}})],1):t._e()})),0)],2),t._ssrNode(" "),t.currentUser&&t.currentUser.id===t.user.id?t._ssrNode('<div class="media-right" data-v-684177a6>',"</div>",[t._ssrNode('<div class="button is-text" data-v-684177a6>',"</div>",[r("x-icon",{attrs:{name:"pen"}})],1)]):t._e()],2)])])]),t._ssrNode(" "),t._ssrNode('<div class="section" data-v-684177a6>',"</div>",[t._ssrNode('<div class="container" data-v-684177a6>',"</div>",[t.updating?t._ssrNode("<div data-v-684177a6>","</div>",[t._ssrNode('<h4 class="widget_title" data-v-684177a6>Links</h4> '),t._ssrNode('<div class="columns is-gapless is-mobile" data-v-684177a6>',"</div>",[t._ssrNode('<div class="column is-3 v-center is-text field" data-v-684177a6><span data-v-684177a6>Website</span></div> '),t._ssrNode('<div class="column is-9" data-v-684177a6>',"</div>",[r("b-input",{attrs:{placeholder:"https://bubblask.com",expanded:""},model:{value:t.profile.links.ws,callback:function(e){t.$set(t.profile.links,"ws",e)},expression:"profile.links.ws"}})],1)],2),t._ssrNode(" "),t._ssrNode('<div class="columns is-gapless is-mobile" data-v-684177a6>',"</div>",[t._ssrNode('<div class="column is-3 v-center is-text field" data-v-684177a6><span data-v-684177a6>Facebook</span></div> '),t._ssrNode('<div class="column is-9" data-v-684177a6>',"</div>",[r("b-input",{attrs:{placeholder:"https://facebook.com/bubblask",expanded:""},model:{value:t.profile.links.fb,callback:function(e){t.$set(t.profile.links,"fb",e)},expression:"profile.links.fb"}})],1)],2),t._ssrNode(" "),t._ssrNode('<div class="columns is-gapless is-mobile" data-v-684177a6>',"</div>",[t._ssrNode('<div class="column is-3 v-center is-text field" data-v-684177a6><span data-v-684177a6>Twitter</span></div> '),t._ssrNode('<div class="column is-9" data-v-684177a6>',"</div>",[r("b-input",{attrs:{placeholder:"https://twitter.com@/bubblask",expanded:""},model:{value:t.profile.links.tw,callback:function(e){t.$set(t.profile.links,"tw",e)},expression:"profile.links.tw"}})],1)],2),t._ssrNode(" "),t._ssrNode('<div class="columns is-gapless is-mobile" data-v-684177a6>',"</div>",[t._ssrNode('<div class="column is-3 v-center is-text field" data-v-684177a6><span data-v-684177a6>LinkedIn</span></div> '),t._ssrNode('<div class="column is-9" data-v-684177a6>',"</div>",[r("b-input",{attrs:{placeholder:"https://linkedin.com/bubblask",expanded:""},model:{value:t.profile.links.li,callback:function(e){t.$set(t.profile.links,"li",e)},expression:"profile.links.li"}})],1)],2)],2):t._ssrNode('<div class="columns is-multiline" data-v-684177a6>',"</div>",[t._ssrNode('<div class="column is-12" data-v-684177a6>',"</div>",[r("calendar-heat-map",{attrs:{values:t.chartValues,"end-date":new Date}})],1),t._ssrNode(' <div class="column is-6" data-v-684177a6><div class="card" data-v-684177a6><div class="card-content" data-v-684177a6><div class="media" data-v-684177a6><div class="media-content" data-v-684177a6><h4 data-v-684177a6>Focus</h4></div> <div class="media-right" data-v-684177a6><span class="title is-1" data-v-684177a6>'+t._ssrEscape(t._s(t.reportData.total_focus.toFixed(1)))+'</span> <span data-v-684177a6>h</span></div></div></div></div></div> <div class="column is-6" data-v-684177a6><div class="card" data-v-684177a6><div class="card-content" data-v-684177a6><div class="media" data-v-684177a6><div class="media-content" data-v-684177a6><h4 data-v-684177a6>Accurate estimates</h4></div> <div class="media-right" data-v-684177a6><span class="title is-1" data-v-684177a6>'+t._ssrEscape(t._s(100-t.reportData.accurate_estimates.toFixed(1)))+'</span> <span data-v-684177a6>%</span></div></div></div></div></div> <div class="column is-6" data-v-684177a6><div class="card" data-v-684177a6><div class="card-content" data-v-684177a6><div class="media" data-v-684177a6><div class="media-content" data-v-684177a6><h4 data-v-684177a6>AVG focus</h4></div> <div class="media-right" data-v-684177a6><span class="title is-1" data-v-684177a6>'+t._ssrEscape(t._s((t.reportData.avg_focus/60).toFixed(1)))+'</span> <span data-v-684177a6>h/day</span></div></div></div></div></div> <div class="column is-6" data-v-684177a6><div class="card" data-v-684177a6><div class="card-content" data-v-684177a6><div class="media" data-v-684177a6><div class="media-content" data-v-684177a6><h4 data-v-684177a6>Total complete</h4></div> <div class="media-right" data-v-684177a6><span class="title is-1" data-v-684177a6>'+t._ssrEscape(t._s(t.reportData.total_task_done))+'</span> <span data-v-684177a6>tasks</span></div></div></div></div></div> <div class="column is-6" data-v-684177a6><div class="card" data-v-684177a6><div class="card-content" data-v-684177a6><div class="media" data-v-684177a6><div class="media-content" data-v-684177a6><h4 data-v-684177a6>Total Delays/Interruptions</h4></div> <div class="media-right" data-v-684177a6><span class="title is-1" data-v-684177a6>'+t._ssrEscape(t._s(t.reportData.total_task_delay))+'</span> <span data-v-684177a6>tasks</span></div></div></div></div></div> <div class="column is-6" data-v-684177a6><div class="card" data-v-684177a6><div class="card-content" data-v-684177a6><div class="media" data-v-684177a6><div class="media-content" data-v-684177a6><h4 data-v-684177a6>Ranking</h4></div> <div class="media-right" data-v-684177a6><span class="title is-1" data-v-684177a6>'+t._ssrEscape(t._s(t.reportData.rank))+"</span> <span data-v-684177a6>th</span></div></div></div></div></div> "),t._ssrNode('<div class="column is-12" data-v-684177a6>',"</div>",[t._ssrNode('<div class="card" data-v-684177a6>',"</div>",[t._ssrNode('<div class="card-content" data-v-684177a6>',"</div>",[t._ssrNode('<div class="level" data-v-684177a6><div class="level-left" data-v-684177a6><h4 data-v-684177a6>'+t._ssrEscape(t._s(t.convertName(t.user))+"'s work time")+'</h4></div> <div class="level-right" data-v-684177a6>'+t._ssrEscape(t._s(t.convertName(t.user))+"'s timezone: "+t._s(t.user.profile.time_zone))+"</div></div> "),r("time-chart",{attrs:{data:t.time_works}})],2)])])],2)])])],2)}),[],!1,(function(t){}),"684177a6","35ffa041");e.default=E.exports}};