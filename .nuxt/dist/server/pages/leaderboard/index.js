exports.ids = [5];
exports.modules = {

/***/ 52:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/leaderboard/index.vue?vue&type=template&id=3663a490&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"hero is-dark\"><div class=\"hero-body\"><div class=\"container small\"><h1 class=\"title\">LeaderBoard</h1> <div class=\"subtitle\">See how others work</div></div></div></div> "),_vm._ssrNode("<div class=\"hero\">","</div>",[_vm._ssrNode("<div class=\"hero-body\">","</div>",[_vm._ssrNode("<div class=\"container medium\">","</div>",[_vm._ssrNode("<div class=\"columns is-multiline\">","</div>",_vm._l((_vm.response.results),function(u,i){return _vm._ssrNode("<div class=\"column is-4\">","</div>",[_vm._ssrNode("<div class=\"box user clickable\">","</div>",[_vm._ssrNode("<div class=\"media\">","</div>",[_vm._ssrNode("<div class=\"media-left\">"+_vm._ssrEscape(_vm._s(i + 1))+"</div> "),_vm._ssrNode("<div class=\"media-left\">","</div>",[_c('Avatar',{staticClass:"is-32x32",attrs:{"value":u.profile.media}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"media-content\">","</div>",[_vm._ssrNode("<div>","</div>",[_c('n-link',{attrs:{"to":("/" + (u.username))}},[_vm._v(_vm._s(_vm.convertName(u)))])],1)]),_vm._ssrNode(" "+((u.profile.extra)?("<div class=\"media-right\"><small>"+_vm._ssrEscape(_vm._s((u.profile.extra.temp_score / (60 * 60)).toFixed(2))+"h")+"</small></div>"):"<!---->"))],2)])])}),0)])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/leaderboard/index.vue?vue&type=template&id=3663a490&

// EXTERNAL MODULE: ./components/Avatar.vue + 15 modules
var Avatar = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/leaderboard/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var leaderboardvue_type_script_lang_js_ = ({
  name: "LeaderBoard",
  components: {
    Avatar: Avatar["a" /* default */]
  },

  async asyncData({
    $axios
  }) {
    return {
      response: await $axios.$get('/auth/users/')
    };
  }

});
// CONCATENATED MODULE: ./pages/leaderboard/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_leaderboardvue_type_script_lang_js_ = (leaderboardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/leaderboard/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(59)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_leaderboardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "252c8a54"
  
)

/* harmony default export */ var leaderboard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map