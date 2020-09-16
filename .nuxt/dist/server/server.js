module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/_user/index","2":"pages/board/_id/index","3":"pages/board/_id/mindmap","4":"pages/index","5":"pages/leaderboard/index","6":"pages/privacy"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
/* unused harmony export setOptions */
/* unused harmony export setVueInstance */
/* unused harmony export VueInstance */
let config = {
  defaultContainerElement: null,
  defaultIconPack: 'mdi',
  defaultIconComponent: null,
  defaultIconPrev: 'chevron-left',
  defaultIconNext: 'chevron-right',
  defaultDialogConfirmText: null,
  defaultDialogCancelText: null,
  defaultSnackbarDuration: 3500,
  defaultSnackbarPosition: null,
  defaultToastDuration: 2000,
  defaultToastPosition: null,
  defaultNotificationDuration: 2000,
  defaultNotificationPosition: null,
  defaultTooltipType: 'is-primary',
  defaultTooltipAnimated: false,
  defaultTooltipDelay: 0,
  defaultInputAutocomplete: 'on',
  defaultDateFormatter: null,
  defaultDateParser: null,
  defaultDateCreator: null,
  defaultTimeCreator: null,
  defaultDayNames: null,
  defaultMonthNames: null,
  defaultFirstDayOfWeek: null,
  defaultUnselectableDaysOfWeek: null,
  defaultTimeFormatter: null,
  defaultTimeParser: null,
  defaultModalCanCancel: ['escape', 'x', 'outside', 'button'],
  defaultModalScroll: null,
  defaultDatepickerMobileNative: true,
  defaultTimepickerMobileNative: true,
  defaultNoticeQueue: true,
  defaultInputHasCounter: true,
  defaultTaginputHasCounter: true,
  defaultUseHtml5Validation: true,
  defaultDropdownMobileModal: true,
  defaultFieldLabelPosition: null,
  defaultDatepickerYearsRange: [-100, 3],
  defaultDatepickerNearbyMonthDays: true,
  defaultDatepickerNearbySelectableMonthDays: false,
  defaultDatepickerShowWeekNumber: false,
  defaultDatepickerMobileModal: true,
  defaultTrapFocus: false,
  defaultButtonRounded: false,
  defaultCarouselInterval: 3500,
  customIconPacks: null
}; // TODO defaultTrapFocus to true in the next breaking change


const setOptions = options => {
  config = options;
};
const setVueInstance = Vue => {
  VueInstance = Vue;
};
let VueInstance;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return settings; });
const settings = {
  color: {
    "--task-color": "#FFF",
    "--task-text-color": "#333333",
    "--btn-color": "#cd2653",
    "--btn-text-color": "#FFF",
    "--bg-color-primary": "#FFFFFF",
    "--bg-color-secondary": "#FAFAFA",
    "--bg-color-primary-text": "#333333",
    "--bg-color-secondary-text": "#333333",
    background: null
  },
  timer: {
    tomato: 25,
    short_break: 5,
    long_break: 10,
    is_strict: false
  },
  task_order: [],
  notification: {
    wake_me: 5
  },
  ws: null
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

;

function fmDate(date) {
  function pad(num) {
    num = num + '';
    return num.length < 2 ? '0' + num : num;
  }

  return date.getFullYear() + '/' + pad(date.getMonth() + 1) + '/' + pad(date.getDate()) + ' ' + pad(date.getHours()) + ':' + pad(date.getMinutes()) + ':' + pad(date.getSeconds());
}

function totalTimeLeft(task) {
  let total = 0;

  if (!task.children || task.children.length === 0) {
    total = total + task.timeLeft();
  }

  if (task.children) {
    for (let i = 0; i < task.children.length; i++) {
      total = total + totalTimeLeft(task.children[i]);
    }
  }

  return total;
}

class Task {
  constructor({
    update,
    uid,
    title = null,
    description = null,
    interval = 1,
    tomato,
    times,
    status,
    id,
    parent,
    board = null,
    temp_setting,
    settings = {},
    order = 0,
    user = 0,
    has_child,
    assignee
  }) {
    this.uid = typeof uid === 'undefined' ? generateId() : uid;
    this.title = title;
    this.description = description;
    this.times = times || [];
    this.interval = interval;
    this.status = status || "pending";
    this.tomato = tomato || 25;
    this.id = typeof id === "number" ? id : null;
    this.update = typeof update === 'undefined' ? false : update;
    this.parent = parent;
    this.board = board;
    this.temp_setting = temp_setting;
    this.settings = settings;
    this.order = order;
    this.user = user;
    this.updating = false;
    this.has_child = has_child;
    this.assignee = assignee;
  }

  changeStatus(status, timer) {
    // pending -> running <-> stopping -> complete, stopped
    this.update = true;
    let lastTime = this.lastTime();
    let now = new Date();
    let newTime = {
      start: fmDate(now),
      stop_times: [fmDate(now)],
      due_estimate: fmDate(new Date(now.setSeconds(now.getSeconds() + this.tomato * 60)))
    };

    if (status === 'running') {
      if (['pending', 'OFF'].includes(this.status)) {
        // Chay tu pending
        this.times.push(newTime);
      } else {
        now = new Date();
        let recent_stop_point = new Date(lastTime.stop_times[lastTime.stop_times.length - 1]);
        let due_date = new Date(lastTime.due_estimate);
        let reminder = (due_date.getTime() - recent_stop_point.getTime()) / 1000;
        lastTime.due_estimate = fmDate(new Date(now.setSeconds(now.getSeconds() + reminder)));
      }
    } else if (status === 'stopping') {
      if (timer === 0) {
        // running
        if (this.interval > this.times.length) {
          // phase out
          this.times.push(newTime);
        } else {
          // timeout
          this.status = 'complete';
          return;
        }
      } else {
        lastTime.stop_times.push(fmDate(new Date()));
      }
    }

    this.status = status;
  }

  isRunning() {
    return this.status === 'running';
  }

  lastTime() {
    return this.times.length ? this.times[this.times.length - 1] : null;
  }

  timeLeft() {
    let total = this.tomato * this.interval * 60;

    for (let i = 0; i < this.times.length; i++) {
      let recent_stop_point = new Date(this.times[i].stop_times[this.times[i].stop_times.length - 1]);
      let due_date = new Date(this.times[i].due_estimate);
      let reminder = (due_date.getTime() - recent_stop_point.getTime()) / 1000;
      total = total - (60 * this.tomato - reminder);
    }

    return total <= 0 ? 0 : total;
  }

  totalTimeLeft() {
    return totalTimeLeft(this);
  }

  total() {
    return this.interval * this.tomato * 60;
  }

  timer() {
    let lastTime = this.lastTime();
    return lastTime ? lastTime.remainder : 0;
  }

  dueDate() {
    return this.lastTime().due_estimate;
  }

  check() {
    if (this.lastTime() && this.isRunning()) {
      let now = new Date();
      let due_date = new Date(this.lastTime().due_estimate);

      if (now.getTime() >= due_date.getTime()) {
        this.changeStatus('stopped');
      }
    }
  }

}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("buefy");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/input/Input.vue?vue&type=template&id=5ae075e4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"control",class:_vm.rootClasses},[_vm._ssrNode(((_vm.type !== 'textarea')?("<input"+(_vm._ssrAttr("type",_vm.newType))+(_vm._ssrAttr("autocomplete",_vm.newAutocomplete))+(_vm._ssrAttr("maxlength",_vm.maxlength))+(_vm._ssrAttr("value",_vm.computedValue))+(_vm._ssrAttrs(_vm.$attrs))+(_vm._ssrClass("input",[_vm.inputClasses, _vm.customClass]))+">"):("<textarea"+(_vm._ssrAttr("maxlength",_vm.maxlength))+(_vm._ssrAttr("value",_vm.computedValue))+(_vm._ssrAttrs(_vm.$attrs))+(_vm._ssrClass("textarea",[_vm.inputClasses, _vm.customClass]))+"></textarea>"))+" "),(_vm.icon)?_c('x-icon',{staticClass:"is-left",class:{'is-clickable': _vm.iconClickable},attrs:{"name":_vm.icon,"size":_vm.iconSize},nativeOn:{"click":function($event){return _vm.iconClick($event)}}}):_vm._e(),_vm._ssrNode(" "),(!_vm.loading && (_vm.passwordReveal || _vm.statusTypeIcon))?_c('x-icon',{staticClass:"is-right",class:{ 'is-clickable': _vm.passwordReveal },attrs:{"name":"eye"},nativeOn:{"click":function($event){return _vm.togglePasswordVisibility($event)}}}):_vm._e(),_vm._ssrNode(" "+((_vm.maxlength && _vm.hasCounter && _vm.type !== 'number')?("<small"+(_vm._ssrClass("help counter",{ 'is-invisible': !_vm.isFocused }))+">"+_vm._ssrEscape("\n        "+_vm._s(_vm.valueLength)+" / "+_vm._s(_vm.maxlength)+"\n    ")+"</small>"):"<!---->"))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/input/Input.vue?vue&type=template&id=5ae075e4&

// EXTERNAL MODULE: ./components/Icon.vue + 4 modules
var Icon = __webpack_require__(10);

// EXTERNAL MODULE: ./components/utils/config.js
var config = __webpack_require__(3);

// EXTERNAL MODULE: ./components/utils/FormElementMixin.js
var FormElementMixin = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/input/Input.vue?vue&type=script&lang=js&
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



/* harmony default export */ var Inputvue_type_script_lang_js_ = ({
  name: 'BInput',
  components: {
    'b-icon': Icon["a" /* default */]
  },
  mixins: [FormElementMixin["a" /* default */]],
  inheritAttrs: false,
  props: {
    value: [Number, String],
    type: {
      type: String,
      default: 'text'
    },
    passwordReveal: Boolean,
    iconClickable: Boolean,
    hasCounter: {
      type: Boolean,
      default: () => config["a" /* default */].defaultInputHasCounter
    },
    customClass: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      newValue: this.value,
      newType: this.type,
      newAutocomplete: this.autocomplete || config["a" /* default */].defaultInputAutocomplete,
      isPasswordVisible: false,
      _elementRef: this.type === 'textarea' ? 'textarea' : 'input'
    };
  },

  computed: {
    computedValue: {
      get() {
        return this.newValue;
      },

      set(value) {
        this.newValue = value;
        this.$emit('input', value);
        !this.isValid && this.checkHtml5Validity();
      }

    },

    rootClasses() {
      return [this.iconPosition, this.size, {
        'is-expanded': this.expanded,
        'is-loading': this.loading,
        'is-clearfix': !this.hasMessage
      }];
    },

    inputClasses() {
      return [this.statusType, this.size, {
        'is-rounded': this.rounded
      }];
    },

    hasIconRight() {
      return this.passwordReveal || this.loading || this.statusTypeIcon;
    },

    /**
     * Position of the icon or if it's both sides.
     */
    iconPosition() {
      if (this.icon && this.hasIconRight) {
        return 'has-icons-left has-icons-right';
      } else if (!this.icon && this.hasIconRight) {
        return 'has-icons-right';
      } else if (this.icon) {
        return 'has-icons-left';
      }
    },

    /**
     * Icon name (MDI) based on the type.
     */
    statusTypeIcon() {
      switch (this.statusType) {
        case 'is-success':
          return 'check';

        case 'is-danger':
          return 'alert-circle';

        case 'is-info':
          return 'information';

        case 'is-warning':
          return 'alert';
      }
    },

    /**
     * Check if have any message prop from parent if it's a Field.
     */
    hasMessage() {
      return !!this.statusMessage;
    },

    /**
     * Current password-reveal icon name.
     */
    passwordVisibleIcon() {
      return !this.isPasswordVisible ? 'eye' : 'eye-off';
    },

    /**
     * Get value length
     */
    valueLength() {
      if (typeof this.computedValue === 'string') {
        return this.computedValue.length;
      } else if (typeof this.computedValue === 'number') {
        return this.computedValue.toString().length;
      }

      return 0;
    }

  },
  watch: {
    /**
     * When v-model is changed:
     *   1. Set internal value.
     */
    value(value) {
      this.newValue = value;
    }

  },
  methods: {
    /**
     * Toggle the visibility of a password-reveal input
     * by changing the type and focus the input right away.
     */
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
      console.log(this.newType);
      this.newType = this.isPasswordVisible ? 'text' : 'password';
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },

    /**
     * Input's 'input' event listener, 'nextTick' is used to prevent event firing
     * before ui update, helps when using masks (Cleavejs and potentially others).
     */
    onInput(event) {
      this.$nextTick(() => {
        if (event.target) {
          this.computedValue = event.target.value;
        }
      });
    },

    iconClick(event) {
      this.$emit('icon-click', event);
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    }

  }
});
// CONCATENATED MODULE: ./components/input/Input.vue?vue&type=script&lang=js&
 /* harmony default export */ var input_Inputvue_type_script_lang_js_ = (Inputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/input/Input.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  input_Inputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "079c675d"
  
)

/* harmony default export */ var Input = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Avatar.vue?vue&type=template&id=7c270d29&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"image avatar relative",class:{'initials': !_vm.isUpdating && !(_vm.data && _vm.data.sizes)}},[(_vm.isUpdating)?_c('Upload',{staticClass:"upload",on:{"done":_vm.handleUpload}}):(_vm.data && _vm.data.sizes)?_c('img',{staticClass:"is-round",attrs:{"src":_vm.cleanURI(_vm.data.sizes[_vm.imageSize] ? _vm.data.sizes[_vm.imageSize] : _vm.data.sizes[_vm.imageSize]),"alt":""}}):(_vm.name)?_c('span',[_vm._v(_vm._s(_vm.avatarName(_vm.name, 2)))]):(!_vm.canUpdate)?_c('img',{attrs:{"src":("/avatar/" + (_vm.getRandomInt(4)) + ".png"),"alt":""}}):_c('div',{staticClass:"image-blank"},[_c('x-icon',{attrs:{"size":"is-small","name":"square-outline"}})],1),_vm._ssrNode(" "),(_vm.canUpdate)?_vm._ssrNode("<div class=\"medal\">","</div>",[_c('x-icon',{attrs:{"size":"is-small","name":_vm.isUpdating ? 'close' : 'upload'}})],1):_vm._e(),_vm._ssrNode(" "+((_vm.canUpdate && _vm.data)?("<div class=\"delete\"></div>"):"<!---->"))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Avatar.vue?vue&type=template&id=7c270d29&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Upload.vue?vue&type=template&id=0713885d&
var Uploadvue_type_template_id_0713885d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-upload',{attrs:{"multiple":_vm.multiple,"drag-drop":""},on:{"input":_vm.handleInput},model:{value:(_vm.dropFiles),callback:function ($$v) {_vm.dropFiles=$$v},expression:"dropFiles"}},[_c('div',{staticClass:"content has-text-centered"},[_c('p',[_c('x-icon',{attrs:{"name":"upload","size":"is-large"}})],1),_vm._v(" "),(_vm.text)?_c('p',[_vm._v(_vm._s(_vm.text))]):_vm._e()])])}
var Uploadvue_type_template_id_0713885d_staticRenderFns = []


// CONCATENATED MODULE: ./components/Upload.vue?vue&type=template&id=0713885d&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/upload/Upload.vue?vue&type=template&id=36514986&
var Uploadvue_type_template_id_36514986_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"upload control",class:{'is-expanded' : _vm.expanded}},[(!_vm.dragDrop)?[_vm._t("default")]:_vm._ssrNode("<div"+(_vm._ssrClass("upload-draggable",[_vm.type, {
            'is-loading': _vm.loading,
            'is-disabled': _vm.disabled,
            'is-hovered': _vm.dragDropFocus,
            'is-expanded': _vm.expanded,
        }]))+">","</div>",[_vm._t("default")],2),_vm._ssrNode(" <input type=\"file\""+(_vm._ssrAttr("multiple",_vm.multiple))+(_vm._ssrAttr("accept",_vm.accept))+(_vm._ssrAttr("disabled",_vm.disabled))+(_vm._ssrAttrs(_vm.$attrs))+">")],2)}
var Uploadvue_type_template_id_36514986_staticRenderFns = []


// CONCATENATED MODULE: ./components/upload/Upload.vue?vue&type=template&id=36514986&

// EXTERNAL MODULE: ./components/utils/FormElementMixin.js
var FormElementMixin = __webpack_require__(9);

// CONCATENATED MODULE: ./components/utils/ssr.js
// Polyfills for SSR
const isSSR = typeof window === 'undefined';
const HTMLElement = isSSR ? Object : window.HTMLElement;
const File = isSSR ? Object : window.File;
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/upload/Upload.vue?vue&type=script&lang=js&
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


/* harmony default export */ var Uploadvue_type_script_lang_js_ = ({
  name: 'BUpload',
  mixins: [FormElementMixin["a" /* default */]],
  inheritAttrs: false,
  props: {
    value: {
      type: [Object, Function, File, Array]
    },
    multiple: Boolean,
    disabled: Boolean,
    accept: String,
    dragDrop: Boolean,
    type: {
      type: String,
      default: 'is-primary'
    },
    native: {
      type: Boolean,
      default: false
    },
    expanded: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      newValue: this.value,
      dragDropFocus: false,
      _elementRef: 'input'
    };
  },

  watch: {
    /**
     *   When v-model is changed:
     *   1. Get value from input file
     *   2. Set internal value.
     *   3. Reset input value if array is empty or when input file is not found in newValue
     *   4. If it's invalid, validate again.
     */
    value(value) {
      let inputFiles = this.$refs.input.files;
      this.newValue = value;

      if (!this.newValue || Array.isArray(this.newValue) && this.newValue.length === 0 || !inputFiles[0] || Array.isArray(this.newValue) && !this.newValue.some(function (a) {
        return a.name === inputFiles[0].name;
      })) {
        this.$refs.input.value = null;
      }

      !this.isValid && !this.dragDrop && this.checkHtml5Validity();
    }

  },
  methods: {
    /**
    * Listen change event on input type 'file',
    * emit 'input' event and validate
    */
    onFileChange(event) {
      if (this.disabled || this.loading) return;

      if (this.dragDrop) {
        this.updateDragDropFocus(false);
      }

      const value = event.target.files || event.dataTransfer.files;

      if (value.length === 0) {
        if (!this.newValue) {
          return;
        }

        if (this.native) {
          this.newValue = null;
        }
      } else if (!this.multiple) {
        // only one element in case drag drop mode and isn't multiple
        if (this.dragDrop && value.length !== 1) return;else {
          const file = value[0];

          if (this.checkType(file)) {
            this.newValue = file;
          } else if (this.newValue) {
            this.newValue = null;
          } else {
            return;
          }
        }
      } else {
        // always new values if native or undefined local
        let newValues = false;

        if (this.native || !this.newValue) {
          this.newValue = [];
          newValues = true;
        }

        for (let i = 0; i < value.length; i++) {
          const file = value[i];

          if (this.checkType(file)) {
            this.newValue.push(file);
            newValues = true;
          }
        }

        if (!newValues) {
          return;
        }
      }

      this.$emit('input', this.newValue);
      !this.dragDrop && this.checkHtml5Validity();
    },

    /**
    * Listen drag-drop to update internal variable
    */
    updateDragDropFocus(focus) {
      if (!this.disabled && !this.loading) {
        this.dragDropFocus = focus;
      }
    },

    /**
    * Check mime type of file
    */
    checkType(file) {
      if (!this.accept) return true;
      const types = this.accept.split(',');
      if (types.length === 0) return true;
      let valid = false;

      for (let i = 0; i < types.length && !valid; i++) {
        const type = types[i].trim();

        if (type) {
          if (type.substring(0, 1) === '.') {
            // check extension
            const extIndex = file.name.lastIndexOf('.');
            const extension = extIndex >= 0 ? file.name.substring(extIndex) : '';

            if (extension.toLowerCase() === type.toLowerCase()) {
              valid = true;
            }
          } else {
            // check mime type
            if (file.type.match(type)) {
              valid = true;
            }
          }
        }
      }

      return valid;
    }

  }
});
// CONCATENATED MODULE: ./components/upload/Upload.vue?vue&type=script&lang=js&
 /* harmony default export */ var upload_Uploadvue_type_script_lang_js_ = (Uploadvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/upload/Upload.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  upload_Uploadvue_type_script_lang_js_,
  Uploadvue_type_template_id_36514986_render,
  Uploadvue_type_template_id_36514986_staticRenderFns,
  false,
  null,
  null,
  "0a7dc1b2"
  
)

/* harmony default export */ var Upload = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Upload.vue?vue&type=script&lang=js&
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

/* harmony default export */ var lib_vue_loader_options_components_Uploadvue_type_script_lang_js_ = ({
  components: {
    'b-upload': Upload
  },
  props: {
    text: {},
    multiple: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      dropFiles: [],
      isLoading: false
    };
  },

  name: 'upload',
  methods: {
    async handleInput(data) {
      let results = [];
      this.isLoading = true;

      if (this.multiple) {
        for (let i = 0; i < data.length; i++) {
          let res = await this.beforeUpload(data[i]);
          results.push(res);
        }
      } else {
        let res = await this.beforeUpload(data);
        results.push(res);
      }

      this.$emit('done', results);
      this.dropFiles = [];
      this.isLoading = false;
    },

    async beforeUpload(file) {
      let formData = new FormData();
      formData.append('path', file);
      formData.append('title', file.name);
      return await this.$axios.$post('/media/medias/', formData);
    }

  }
});
// CONCATENATED MODULE: ./components/Upload.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Uploadvue_type_script_lang_js_ = (lib_vue_loader_options_components_Uploadvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Upload.vue





/* normalize component */

var Upload_component = Object(componentNormalizer["a" /* default */])(
  components_Uploadvue_type_script_lang_js_,
  Uploadvue_type_template_id_0713885d_render,
  Uploadvue_type_template_id_0713885d_staticRenderFns,
  false,
  null,
  null,
  "5df7d3ce"
  
)

/* harmony default export */ var components_Upload = (Upload_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Avatar.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Avatarvue_type_script_lang_js_ = ({
  name: "Avatar",
  components: {
    Upload: components_Upload
  },
  props: {
    canUpdate: {
      type: Boolean,
      default: false
    },
    value: {
      default: null,
      type: Object
    },
    name: {
      default: null
    },
    icon: {
      default: 'account-circle-outline',
      type: String
    },
    imageSize: {
      default: 'thumb_96_96',
      type: String
    }
  },

  data() {
    return {
      data: this.value,
      isUpdating: false
    };
  },

  methods: {
    handleUpload(files) {
      if (files.length) {
        this.data = files[0];
        this.isUpdating = false;
      }
    },

    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

  },
  watch: {
    data() {
      this.$emit('input', this.data);
    },

    value() {
      this.data = this.value;
    }

  }
});
// CONCATENATED MODULE: ./components/Avatar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Avatarvue_type_script_lang_js_ = (Avatarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Avatar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(38)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Avatar_component = Object(componentNormalizer["a" /* default */])(
  components_Avatarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "710d451e"
  
)

/* harmony default export */ var Avatar = __webpack_exports__["a"] = (Avatar_component.exports);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    size: String,
    expanded: Boolean,
    loading: Boolean,
    rounded: Boolean,
    icon: String,
    iconPack: String,
    // Native options to use in HTML5 validation
    autocomplete: String,
    maxlength: [Number, String],
    useHtml5Validation: {
      type: Boolean,
      default: () => _utils_config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].defaultUseHtml5Validation
    },
    validationMessage: String
  },

  data() {
    return {
      isValid: true,
      isFocused: false,
      newIconPack: this.iconPack || _utils_config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].defaultIconPack
    };
  },

  computed: {
    /**
     * Find parent Field, max 3 levels deep.
     */
    parentField() {
      let parent = this.$parent;

      for (let i = 0; i < 3; i++) {
        if (parent && !parent.$data._isField) {
          parent = parent.$parent;
        }
      }

      return parent;
    },

    /**
     * Get the type prop from parent if it's a Field.
     */
    statusType() {
      if (!this.parentField) return;
      if (!this.parentField.newType) return;

      if (typeof this.parentField.newType === 'string') {
        return this.parentField.newType;
      } else {
        for (let key in this.parentField.newType) {
          if (this.parentField.newType[key]) {
            return key;
          }
        }
      }
    },

    /**
     * Get the message prop from parent if it's a Field.
     */
    statusMessage() {
      if (!this.parentField) return;
      return this.parentField.newMessage;
    },

    /**
     * Fix icon size for inputs, large was too big
     */
    iconSize() {
      switch (this.size) {
        case 'is-small':
          return this.size;

        case 'is-medium':
          return;

        case 'is-large':
          return this.newIconPack === 'mdi' ? 'is-medium' : '';
      }
    }

  },
  methods: {
    /**
     * Focus method that work dynamically depending on the component.
     */
    focus() {
      if (this.$data._elementRef === undefined) return;
      this.$nextTick(() => {
        const el = this.$el.querySelector(this.$data._elementRef);
        if (el) el.focus();
      });
    },

    onBlur($event) {
      this.isFocused = false;
      this.$emit('blur', $event);
      this.checkHtml5Validity();
    },

    onFocus($event) {
      this.isFocused = true;
      this.$emit('focus', $event);
    },

    getElement() {
      return this.$el.querySelector(this.$data._elementRef);
    },

    setInvalid() {
      let type = 'is-danger';
      let message = this.validationMessage || this.getElement().validationMessage;
      this.setValidity(type, message);
    },

    setValidity(type, message) {
      this.$nextTick(() => {
        if (this.parentField) {
          // Set type only if not defined
          if (!this.parentField.type) {
            this.parentField.newType = type;
          } // Set message only if not defined


          if (!this.parentField.message) {
            this.parentField.newMessage = message;
          }
        }
      });
    },

    /**
     * Check HTML5 validation, set isValid property.
     * If validation fail, send 'is-danger' type,
     * and error message to parent if it's a Field.
     */
    checkHtml5Validity() {
      if (!this.useHtml5Validation) return;
      if (this.$refs[this.$data._elementRef] === undefined) return;

      if (!this.getElement().checkValidity()) {
        this.setInvalid();
        this.isValid = false;
      } else {
        this.setValidity(null, null);
        this.isValid = true;
      }

      return this.isValid;
    }

  }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Icon.vue?vue&type=template&id=574e6928&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.path)?_c('span',{staticClass:"icon"},[_vm._ssrNode("<svg viewBox=\"0 0 24 24\"><path"+(_vm._ssrAttr("d",_vm.path))+(_vm._ssrAttr("transform",_vm.transform))+"></path></svg>")]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Icon.vue?vue&type=template&id=574e6928&

// EXTERNAL MODULE: ./components/Icon.json
var Icon = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Icon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var Iconvue_type_script_lang_js_ = ({
  name: 'AppIcon',
  props: {
    name: String
  },
  computed: {
    path() {
      if (!this.name) return null;
      return typeof Icon[this.name] === "string" ? Icon[this.name] : Icon[this.name].path;
    },

    transform() {
      return typeof Icon[this.name] === "object" ? Icon[this.name].transform : undefined;
    }

  }
});
// CONCATENATED MODULE: ./components/Icon.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Iconvue_type_script_lang_js_ = (Iconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Icon.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(39)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Iconvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4efcc891"
  
)

/* harmony default export */ var components_Icon = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 11 */
/***/ (function(module) {

module.exports = JSON.parse("{\"search\":\"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z\",\"heart\":\"M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z\",\"play\":\"M8,5.14V19.14L19,12.14L8,5.14Z\",\"plus\":\"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z\",\"dots-vertical\":\"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z\",\"cogs\":\"M15.9,18.45C17.25,18.45 18.35,17.35 18.35,16C18.35,14.65 17.25,13.55 15.9,13.55C14.54,13.55 13.45,14.65 13.45,16C13.45,17.35 14.54,18.45 15.9,18.45M21.1,16.68L22.58,17.84C22.71,17.95 22.75,18.13 22.66,18.29L21.26,20.71C21.17,20.86 21,20.92 20.83,20.86L19.09,20.16C18.73,20.44 18.33,20.67 17.91,20.85L17.64,22.7C17.62,22.87 17.47,23 17.3,23H14.5C14.32,23 14.18,22.87 14.15,22.7L13.89,20.85C13.46,20.67 13.07,20.44 12.71,20.16L10.96,20.86C10.81,20.92 10.62,20.86 10.54,20.71L9.14,18.29C9.05,18.13 9.09,17.95 9.22,17.84L10.7,16.68L10.65,16L10.7,15.31L9.22,14.16C9.09,14.05 9.05,13.86 9.14,13.71L10.54,11.29C10.62,11.13 10.81,11.07 10.96,11.13L12.71,11.84C13.07,11.56 13.46,11.32 13.89,11.15L14.15,9.29C14.18,9.13 14.32,9 14.5,9H17.3C17.47,9 17.62,9.13 17.64,9.29L17.91,11.15C18.33,11.32 18.73,11.56 19.09,11.84L20.83,11.13C21,11.07 21.17,11.13 21.26,11.29L22.66,13.71C22.75,13.86 22.71,14.05 22.58,14.16L21.1,15.31L21.15,16L21.1,16.68M6.69,8.07C7.56,8.07 8.26,7.37 8.26,6.5C8.26,5.63 7.56,4.92 6.69,4.92A1.58,1.58 0 0,0 5.11,6.5C5.11,7.37 5.82,8.07 6.69,8.07M10.03,6.94L11,7.68C11.07,7.75 11.09,7.87 11.03,7.97L10.13,9.53C10.08,9.63 9.96,9.67 9.86,9.63L8.74,9.18L8,9.62L7.81,10.81C7.79,10.92 7.7,11 7.59,11H5.79C5.67,11 5.58,10.92 5.56,10.81L5.4,9.62L4.64,9.18L3.5,9.63C3.41,9.67 3.3,9.63 3.24,9.53L2.34,7.97C2.28,7.87 2.31,7.75 2.39,7.68L3.34,6.94L3.31,6.5L3.34,6.06L2.39,5.32C2.31,5.25 2.28,5.13 2.34,5.03L3.24,3.47C3.3,3.37 3.41,3.33 3.5,3.37L4.63,3.82L5.4,3.38L5.56,2.19C5.58,2.08 5.67,2 5.79,2H7.59C7.7,2 7.79,2.08 7.81,2.19L8,3.38L8.74,3.82L9.86,3.37C9.96,3.33 10.08,3.37 10.13,3.47L11.03,5.03C11.09,5.13 11.07,5.25 11,5.32L10.03,6.06L10.06,6.5L10.03,6.94Z\",\"minus\":\"M19,13H5V11H19V13Z\",\"close\":\"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z\",\"check\":\"M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z\",\"pause\":\"M14,19H18V5H14M6,19H10V5H6V19Z\",\"test\":{\"path\":\"M194.41,392.29a7.5,7.5,0,1,0,7.5,7.5A7.5,7.5,0,0,0,194.41,392.29Zm-1.237,11.063-3.265-3.262.992-.989,2.273,2.273,4.749-4.751.992.989Z\",\"transform\":\"translate(-186.91 -392.29)\"},\"minimize\":\"M20,14H4V10H20\",\"maximize\":\"M4,4H20V20H4V4M6,8V18H18V8H6Z\",\"logout\":\"M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z\",\"trash\":\"M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z\",\"eye\":\"M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z\",\"file-tree-outline\":\"M12 13H7V18H12V20H5V10H7V11H12V13M8 4V6H4V4H8M10 2H2V8H10V2M20 11V13H16V11H20M22 9H14V15H22V9M20 18V20H16V18H20M22 16H14V22H22V16Z\",\"tree\":\"M3,3H9V7H3V3M15,10H21V14H15V10M15,17H21V21H15V17M13,13H7V18H13V20H7L5,20V9H7V11H13V13Z\",\"square\":\"M3,3V21H21V3\",\"square-outline\":\"M3,3H21V21H3V3M5,5V19H19V5H5Z\",\"pen\":\"M20.71,7.04C20.37,7.38 20.04,7.71 20.03,8.04C20,8.36 20.34,8.69 20.66,9C21.14,9.5 21.61,9.95 21.59,10.44C21.57,10.93 21.06,11.44 20.55,11.94L16.42,16.08L15,14.66L19.25,10.42L18.29,9.46L16.87,10.87L13.12,7.12L16.96,3.29C17.35,2.9 18,2.9 18.37,3.29L20.71,5.63C21.1,6 21.1,6.65 20.71,7.04M3,17.25L12.56,7.68L16.31,11.43L6.75,21H3V17.25Z\",\"upload\":\"M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z\",\"lock\":\"M22 17V16.5C22 15.12 20.88 14 19.5 14S17 15.12 17 16.5V17C16.45 17 16 17.45 16 18V22C16 22.55 16.45 23 17 23H22C22.55 23 23 22.55 23 22V18C23 17.45 22.55 17 22 17M21 17H18V16.5C18 15.67 18.67 15 19.5 15S21 15.67 21 16.5V17M8 8C8 5.79 9.79 4 12 4S16 5.79 16 8 14.21 12 12 12 8 10.21 8 8M14 20H4V18C4 15.79 7.58 14 12 14C13.27 14 14.46 14.15 15.53 14.41C15.32 14.82 15.15 15.25 15.07 15.71C14.42 16.26 14 17.08 14 18V20Z\",\"chevron-down\":\"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z\",\"chevron-up\":\"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z\",\"chevron-left\":\"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z\",\"chevron-right\":\"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z\",\"shield-lock\":\"M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21M14.8,11V9.5C14.8,8.1 13.4,7 12,7C10.6,7 9.2,8.1 9.2,9.5V11C8.6,11 8,11.6 8,12.2V15.7C8,16.4 8.6,17 9.2,17H14.7C15.4,17 16,16.4 16,15.8V12.3C16,11.6 15.4,11 14.8,11M13.5,11H10.5V9.5C10.5,8.7 11.2,8.2 12,8.2C12.8,8.2 13.5,8.7 13.5,9.5V11Z\",\"shield-open\":\"M1,4.27L3,6.27V11C3,16.55 6.84,21.74 12,23C13.87,22.54 15.57,21.56 16.97,20.24L19.23,22.5L20.5,21.22L2.28,3L1,4.27M12,21C8.25,20 5,15.54 5,11.22V8.27L15.59,18.86C14.53,19.89 13.3,20.65 12,21M21,5V11C21,13.28 20.35,15.5 19.23,17.4L17.77,15.95C18.54,14.5 19,12.84 19,11.22V6.3L12,3.18L7.16,5.34L5.65,3.82L12,1L21,5Z\",\"ws\":\"M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z\",\"fb\":\"M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z\",\"tw\":\"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z\",\"li\":\"M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z\",\"board\":\"M4 7V21H18V23H4C2.9 23 2 22.1 2 21V7H4M20 3C21.1 3 22 3.9 22 5V17C22 18.1 21.1 19 20 19H8C6.9 19 6 18.1 6 17V5C6 3.9 6.9 3 8 3H11.18C11.6 1.84 12.7 1 14 1C15.3 1 16.4 1.84 16.82 3H20M14 3C13.45 3 13 3.45 13 4C13 4.55 13.45 5 14 5C14.55 5 15 4.55 15 4C15 3.45 14.55 3 14 3M10 7V5H8V17H20V5H18V7H10Z\",\"tag\":\"M21.41,11.58L12.41,2.58C12.04,2.21 11.53,2 11,2H4A2,2 0 0,0 2,4V11C2,11.53 2.21,12.04 2.59,12.41L3,12.81C3.9,12.27 4.94,12 6,12A6,6 0 0,1 12,18C12,19.06 11.72,20.09 11.18,21L11.58,21.4C11.95,21.78 12.47,22 13,22C13.53,22 14.04,21.79 14.41,21.41L21.41,14.41C21.79,14.04 22,13.53 22,13C22,12.47 21.79,11.96 21.41,11.58M5.5,7A1.5,1.5 0 0,1 4,5.5A1.5,1.5 0 0,1 5.5,4A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 5.5,7M10,19H7V22H5V19H2V17H5V14H7V17H10V19Z\",\"label\":\"M17.63,5.84C17.27,5.33 16.67,5 16,5H5A2,2 0 0,0 3,7V17A2,2 0 0,0 5,19H16C16.67,19 17.27,18.66 17.63,18.15L22,12L17.63,5.84Z\",\"poll\":\"M3,22V8H7V22H3M10,22V2H14V22H10M17,22V14H21V22H17Z\",\"account\":\"M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,3.18L19,6.3V11.22C19,12.92 18.5,14.65 17.65,16.17C16,14.94 13.26,14.5 12,14.5C10.74,14.5 8,14.94 6.35,16.17C5.5,14.65 5,12.92 5,11.22V6.3L12,3.18M12,6A3.5,3.5 0 0,0 8.5,9.5A3.5,3.5 0 0,0 12,13A3.5,3.5 0 0,0 15.5,9.5A3.5,3.5 0 0,0 12,6M12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8M12,16.5C13.57,16.5 15.64,17.11 16.53,17.84C15.29,19.38 13.7,20.55 12,21C10.3,20.55 8.71,19.38 7.47,17.84C8.37,17.11 10.43,16.5 12,16.5Z\",\"report\":\"M15 3H5A2 2 0 0 0 3 5V19A2 2 0 0 0 5 21H19A2 2 0 0 0 21 19V9L15 3M19 19H5V5H14V10H19M17 14H7V12H17M14 17H7V15H14\",\"pound\":\"M5.41,21L6.12,17H2.12L2.47,15H6.47L7.53,9H3.53L3.88,7H7.88L8.59,3H10.59L9.88,7H15.88L16.59,3H18.59L17.88,7H21.88L21.53,9H17.53L16.47,15H20.47L20.12,17H16.12L15.41,21H13.41L14.12,17H8.12L7.41,21H5.41M9.53,9L8.47,15H14.47L15.53,9H9.53Z\",\"earth\":\"M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z\",\"users\":\"M13.07 10.41A5 5 0 0 0 13.07 4.59A3.39 3.39 0 0 1 15 4A3.5 3.5 0 0 1 15 11A3.39 3.39 0 0 1 13.07 10.41M5.5 7.5A3.5 3.5 0 1 1 9 11A3.5 3.5 0 0 1 5.5 7.5M7.5 7.5A1.5 1.5 0 1 0 9 6A1.5 1.5 0 0 0 7.5 7.5M16 17V19H2V17S2 13 9 13 16 17 16 17M14 17C13.86 16.22 12.67 15 9 15S4.07 16.31 4 17M15.95 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13Z\"}");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("vue-color");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("cookie-universal");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("vuedraggable");

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/board/index.vue?vue&type=template&id=e8708dae&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"level is-mobile\">","</div>",[_vm._ssrNode("<div class=\"level-left\"><h1 class=\"title is-spaced\">Board</h1></div> "),_vm._ssrNode("<div class=\"level-right\">","</div>",[(_vm.currentUser)?_vm._ssrNode("<div class=\"button is-dark\">","</div>",[_c('x-icon',{attrs:{"name":"plus"}}),_vm._ssrNode(" <span>Create</span>")],2):_vm._e()])],2),_vm._ssrNode(" <div class=\"subtitle\">Get or sharing template to learn something by expert!</div> "),(_vm.query.page === 1)?_vm._ssrNode("<div>","</div>",[(_vm.currentUser)?_c('board-list'):_vm._e()],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"subsection\">","</div>",[_vm._ssrNode("<h2 class=\"title\">Template</h2> "),_vm._ssrNode("<div class=\"level\">","</div>",[_vm._ssrNode("<div class=\"level-left\">","</div>",[_vm._ssrNode("<div class=\"field\">","</div>",[_vm._ssrNode("<div class=\"control\">","</div>",[_c('b-input',{attrs:{"icon":"search","type":"search","placeholder":"Learn something"},on:{"input":_vm.on_input},model:{value:(_vm.query.search),callback:function ($$v) {_vm.$set(_vm.query, "search", $$v)},expression:"query.search"}})],1)])]),_vm._ssrNode(" <div class=\"level-right\">"+((_vm.taxonomies.length)?("<div class=\"buttons\">"+(_vm._ssrList((_vm.taxonomies),function(tax){return ("<a"+(_vm._ssrAttr("href",("/board/?tag=" + (tax.id))))+(_vm._ssrClass("button is-small",{'is-primary': _vm.tag && _vm.tag.id === tax.id}))+">"+_vm._ssrEscape(_vm._s(tax.title))+"</a>")}))+"</div>"):"<!---->")+"</div>")],2),_vm._ssrNode(" <div class=\"level is-mobile\"><div class=\"level-left\"><h4 class=\"widget_title\">List</h4></div> <div class=\"level-right\"><div class=\"buttons\"><div"+(_vm._ssrClass("button is-small",{'is-static': _vm.query.page === 1}))+">\n                            Previous\n                        </div> <div"+(_vm._ssrClass("button is-small",{'is-static': _vm.response.count / _vm.query.page_size <= _vm.query.page}))+">Next\n                        </div></div></div></div> "),(!_vm.loading)?_vm._ssrNode("<div class=\"columns is-variable is-2 is-multiline\">","</div>",_vm._l((_vm.response.results),function(board){return _vm._ssrNode("<div class=\"column is-4\">","</div>",[_vm._ssrNode("<div class=\"media box template-board\">","</div>",[_vm._ssrNode("<div class=\"media-left\">","</div>",[_c('avatar',{staticClass:"is-48x48",attrs:{"value":board.media}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"media-content\">","</div>",[_vm._ssrNode("<h4 class=\"widget-title\">","</h4>",[_c('n-link',{attrs:{"to":("/board/" + (board.slug))}},[_vm._v(_vm._s(board.title))])],1),_vm._ssrNode(" <p>"+_vm._ssrEscape(_vm._s(board.description))+"</p> <small>"+_vm._ssrEscape(_vm._s(board['task_count'])+" Tasks")+"</small>")],2)],2)])}),0):_vm._ssrNode(("<div class=\"columns is-multiline\">"+(_vm._ssrList((_vm.query.page_size),function(i){return ("<div class=\"column is-4\"><div class=\"box\"><div class=\"skeleton-board\"></div></div></div>")}))+"</div>"))],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/board/index.vue?vue&type=template&id=e8708dae&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Board.vue?vue&type=template&id=337f5724&
var Boardvue_type_template_id_337f5724_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card"},[_vm._ssrNode("<div class=\"card-content\">","</div>",[_vm._ssrNode("<div class=\"media\">","</div>",[_vm._ssrNode("<div class=\"media-content\">","</div>",[_vm._ssrNode("<b>","</b>",[_c('n-link',{attrs:{"to":("/board/" + (_vm.board.slug) + "/")}},[_vm._v(_vm._s(_vm.board.title))])],1)]),_vm._ssrNode(" <div class=\"media-right\"></div>")],2)])])}
var Boardvue_type_template_id_337f5724_staticRenderFns = []


// CONCATENATED MODULE: ./components/Board.vue?vue&type=template&id=337f5724&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Board.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Boardvue_type_script_lang_js_ = ({
  name: "Board",
  props: {
    value: {
      type: Object
    }
  },

  data() {
    return {
      board: this.value
    };
  }

});
// CONCATENATED MODULE: ./components/Board.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Boardvue_type_script_lang_js_ = (Boardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Board.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Boardvue_type_script_lang_js_,
  Boardvue_type_template_id_337f5724_render,
  Boardvue_type_template_id_337f5724_staticRenderFns,
  false,
  injectStyles,
  null,
  "f3407f04"
  
)

/* harmony default export */ var Board = (component.exports);
// EXTERNAL MODULE: ./components/Avatar.vue + 15 modules
var Avatar = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/BoardList.vue?vue&type=template&id=f388f3b0&
var BoardListvue_type_template_id_f388f3b0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"subsection"},[_vm._ssrNode("<div class=\"level is-mobile\">","</div>",[_vm._ssrNode("<div class=\"level-left\"><h4 class=\"widget_title\">Your Board</h4></div> "),_vm._ssrNode("<div class=\"level-right\">","</div>",[_vm._ssrNode("<div class=\"buttons\">","</div>",[(_vm.page > 1)?_vm._ssrNode("<div class=\"button is-small previous\">","</div>",[_c('x-icon',{attrs:{"name":"chevron-left"}})],1):_vm._e(),_vm._ssrNode(" "),(_vm.page < _vm.total)?_vm._ssrNode("<div class=\"button is-small next\">","</div>",[_c('x-icon',{attrs:{"name":"chevron-right"}})],1):_vm._e()],2)])],2),_vm._ssrNode(" "),(_vm.response.results.length)?_vm._ssrNode("<div class=\"columns is-multiline\">","</div>",_vm._l((_vm.response.results),function(board){return _vm._ssrNode("<div class=\"column is-3\">","</div>",[_c('board',{attrs:{"value":board}})],1)}),0):_vm._e(),_vm._ssrNode(" "+((_vm.loading)?("<div class=\"columns is-multiline\">"+(_vm._ssrList((4),function(i){return ("<div class=\"column is-3\"><div class=\"card\"><div class=\"card-content\"><div class=\"skeleton-line\"></div></div></div></div>")}))+"</div>"):"<!---->"))],2)}
var BoardListvue_type_template_id_f388f3b0_staticRenderFns = []


// CONCATENATED MODULE: ./components/BoardList.vue?vue&type=template&id=f388f3b0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BoardList.vue?vue&type=script&lang=js&
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

/* harmony default export */ var BoardListvue_type_script_lang_js_ = ({
  name: "BoardList",
  components: {
    Board: Board
  },

  data() {
    return {
      response: {
        results: [],
        count: 0
      },
      loading: false,
      page: 1
    };
  },

  methods: {
    async fetch() {
      this.loading = true;
      this.response.results = [];
      this.response = await this.$axios.$get('/task/boards/', {
        params: {
          user: this.currentUser.id,
          page_size: 4,
          is_interface: false,
          page: this.page
        }
      });
      this.loading = false;
    },

    async clickFetch(flag) {
      if (flag) {
        this.page = this.page + 1;
      } else {
        this.page = this.page - 1;
      }

      await this.fetch();
    }

  },
  computed: {
    total() {
      return this.response.count / 4;
    }

  },

  created() {
    this.fetch();
  }

});
// CONCATENATED MODULE: ./components/BoardList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BoardListvue_type_script_lang_js_ = (BoardListvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/BoardList.vue





/* normalize component */

var BoardList_component = Object(componentNormalizer["a" /* default */])(
  components_BoardListvue_type_script_lang_js_,
  BoardListvue_type_template_id_f388f3b0_render,
  BoardListvue_type_template_id_f388f3b0_staticRenderFns,
  false,
  null,
  null,
  "51a1f33c"
  
)

/* harmony default export */ var BoardList = (BoardList_component.exports);
// EXTERNAL MODULE: ./components/input/Input.vue + 4 modules
var Input = __webpack_require__(7);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/board/index.vue?vue&type=script&lang=js&
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





/* harmony default export */ var boardvue_type_script_lang_js_ = ({
  name: "Template",
  components: {
    BInput: Input["a" /* default */],
    BoardList: BoardList,
    Avatar: Avatar["a" /* default */],
    Board: Board
  },

  async fetch() {
    this.loading = true;
    let tag = await this.$axios.$get(`/general/hash-tags/?for_model=board`);
    this.taxonomies = tag.results;
    this.query.page = this.$route.query.page ? Number.parseInt(this.$route.query.page) : 1;
    this.response.results = [];
    this.response = await this.$axios.$get('/task/boards/', {
      params: this.query
    });
    this.loading = false;
  },

  data() {
    return {
      response: {
        results: [],
        count: 0
      },
      tag: null,
      selectedTax: [],
      query: {
        page_size: 9,
        page: 1,
        search: null,
        kinds: "TEMPLATE"
      },
      taxonomies: [],
      loading: false
    };
  },

  methods: {
    create() {
      if (this.currentUser) {
        this.$axios.$post('/task/boards/', {
          title: 'Untitled'
        }).then(res => {
          this.$router.replace({
            path: `/board/${res.slug}/`
          });
        });
      }
    },

    clickTag(e, tax) {
      this.selectedTax.push(tax.id);
      e.preventDefault();

      if (this.tag && tax.id !== this.tag.id || this.tag === null) {
        this.tag = tax;
      } else {
        this.tag = null;
      }

      if (this.tag) {
        this.query.hash_tags = this.tag.id;
      } else {
        this.query.hash_tags = undefined;
      }

      this.query.page = 1;
      this.$fetch();
    },

    async paging(flag) {
      if (flag) {
        if (this.response.count / this.query.page_size > this.query.page) {
          this.query.page++;
        } else {
          return;
        }
      } else {
        if (this.query.page > 1) {
          this.query.page--;
        } else {
          return;
        }
      }

      await this.$fetch();
    },

    on_input: Object(external_lodash_["debounce"])(function () {
      this.query.page = 1;
      this.$fetch();
    }, 800)
  }
});
// CONCATENATED MODULE: ./pages/board/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_boardvue_type_script_lang_js_ = (boardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/board/index.vue



function board_injectStyles (context) {
  
  var style0 = __webpack_require__(41)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var board_component = Object(componentNormalizer["a" /* default */])(
  pages_boardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  board_injectStyles,
  null,
  "72ac4f7d"
  
)

/* harmony default export */ var board = __webpack_exports__["default"] = (board_component.exports);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(53);


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 37 */
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BoardBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BoardBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BoardBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BoardBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BoardBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BoardBar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: () => ({
    user: null,
    token: null,
    loggedIn: false,
    openAuth: false
  }),
  mutations: {
    ['SET_USER'](state, user) {
      state.user = user;
      state.loggedIn = !!user;
    },

    ['SET_TOKEN'](state, token) {
      state.token = token;
    },

    ['SET_OPEN_AUTH'](state, stt) {
      state.openAuth = stt;
    }

  },
  actions: {},
  getters: {
    getUser: state => {
      return state.user;
    }
  }
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: () => ({
    contentTypes: null,
    settings: _helpers_configs__WEBPACK_IMPORTED_MODULE_0__[/* settings */ "a"],
    board: null
  }),
  mutations: {
    ['SET_CONTENT_TYPE'](state, ct) {
      state.contentTypes = ct;
    },

    ['SET_SETTING_COLOR'](state, ct) {
      state.settings.color = ct;
    },

    ['SET_SETTING_BACKGROUND'](state, ct) {
      state.settings.color.background = ct;
    },

    ['SET_SETTING_ORDER'](state, ct) {
      state.settings.task_order = ct;
    },

    ['SET_SETTING_GRAPH'](state, ct) {
      state.settings.task_graph_setting = ct;
    },

    ['SET_STRICT'](state, ct) {
      state.settings.timer.is_strict = ct;
    },

    ['SET_SETTING'](state, ct) {
      if (ct) {
        state.settings = {
          color: ct.color ? ct.color : _helpers_configs__WEBPACK_IMPORTED_MODULE_0__[/* settings */ "a"].color,
          timer: ct.timer ? ct.timer : _helpers_configs__WEBPACK_IMPORTED_MODULE_0__[/* settings */ "a"].timer,
          task_order: ct.task_order ? ct.task_order : _helpers_configs__WEBPACK_IMPORTED_MODULE_0__[/* settings */ "a"].task_order,
          notification: ct.notification ? ct.notification : _helpers_configs__WEBPACK_IMPORTED_MODULE_0__[/* settings */ "a"].notification,
          task_graph_setting: ct.task_graph_setting ? ct.task_graph_setting : _helpers_configs__WEBPACK_IMPORTED_MODULE_0__[/* settings */ "a"].task_graph_setting
        };
      } else {
        state.settings = _helpers_configs__WEBPACK_IMPORTED_MODULE_0__[/* settings */ "a"];
      }
    },

    ['SET_BOARD'](state, ct) {
      state.board = ct;
    }

  },
  actions: {
    setColorSetting(context, color) {
      context.commit('SET_SETTING_COLOR', color);
    }

  }
});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: () => ({
    form: null
  }),
  mutations: {
    ['SET_FORM'](state, form) {
      state.form = form;
    }

  },
  actions: {},
  getters: {
    getForm: state => {
      return state.form;
    }
  }
});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: () => ({
    article: null
  }),
  mutations: {
    ['SET_ARTICLE'](state, article) {
      state.article = article;
    }

  },
  actions: {},
  getters: {
    getArticle: state => {
      return state.article;
    }
  }
});

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: () => ({
    running: null,
    tasks: [],
    timer: 0
  }),
  mutations: {
    ['SET_RUNNING'](state, task) {
      let updateTask = [];

      if (task === null) {
        if (state.running) {
          state.running.changeStatus('stopping');
          updateTask.push(state.running);
          state.running = null;
        }
      } else {
        if (state.running && state.running.uid === task.uid) {
          task.changeStatus('stopping');
          state.running = null;
        } else {
          if (state.running) {
            state.running.changeStatus('stopping');
            updateTask.push(state.running);
          }

          task.changeStatus('running');
          state.running = task;
        }

        updateTask.push(task);
      }

      updateTask.forEach(t => {
        let index = state.tasks.map(x => x.uid).indexOf(t.uid);
        vue__WEBPACK_IMPORTED_MODULE_0___default.a.set(state.tasks, index, t);
      });
    },

    ['SET_TASKS'](state, tasks) {
      state.tasks = tasks;
    },

    ['ADD_TASK'](state, task) {
      let index = state.tasks.map(x => x.id).indexOf(task.id);

      if (index === -1) {
        state.tasks.unshift(task);
        task.check();

        if (task.isRunning()) {
          state.running = task;
        }
      }
    },

    ['UPDATE_TASK'](state, task) {
      task.update = !task.force;
      delete task.force;
      let index = state.tasks.map(x => x.uid).indexOf(task.uid);

      if (index >= 0) {
        vue__WEBPACK_IMPORTED_MODULE_0___default.a.set(state.tasks, index, task);
      } else {
        state.tasks.push(task);
      }
    },

    ['REMOVE_TASK'](state, task) {
      let index = state.tasks.map(x => x.uid).indexOf(task.uid);
      state.tasks.splice(index, 1);
    }

  },
  actions: {},
  getters: {}
});

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("cookieparser");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("chart.js");

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(26);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(27);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js
 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      Component = await Component();
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: '/',
      env: {
        "BASE_URL": "https://bubblask.com",
        "API_DOMAIN": "https://api.bubblask.com",
        "NODE_ENV": "production"
      }
    }; // Only set once

    if ( true && context.req) {
      app.context.req = context.req;
    }

    if ( true && context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = formatUrl(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  let path = decodeURI(window.location.pathname);

  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  } // To get matched with sanitized router.base add trailing slash


  if (base && (path.endsWith('/') ? path : path + '/').startsWith(base)) {
    path = path.slice(base.length);
  }

  return (path || '/') + window.location.search + window.location.hash;
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
/**
 * Format given url, append query to url query string
 *
 * @param  {string} url
 * @param  {string} query
 * @return {string}
 */


function formatUrl(url, query) {
  let protocol;
  const index = url.indexOf('://');

  if (index !== -1) {
    protocol = url.substring(0, index);
    url = url.substring(index + 3);
  } else if (url.startsWith('//')) {
    url = url.substring(2);
  }

  let parts = url.split('/');
  let result = (protocol ? protocol + '://' : '//') + parts.shift();
  let path = parts.join('/');

  if (path === '' && parts.length === 1) {
    result += '/';
  }

  let hash;
  parts = path.split('#');

  if (parts.length === 2) {
    [path, hash] = parts;
  }

  result += path ? '/' + path : '';

  if (query && JSON.stringify(query) !== '{}') {
    result += (url.split('?').length === 2 ? '&' : '?') + formatQuery(query);
  }

  result += hash ? '#' + hash : '';
  return result;
}
/**
 * Transform data object to query string
 *
 * @param  {object} query
 * @return {string}
 */


function formatQuery(query) {
  return Object.keys(query).sort().map(key => {
    const val = query[key];

    if (val == null) {
      return '';
    }

    if (Array.isArray(val)) {
      return val.slice().map(val2 => [key, '=', val2].join('')).join('&');
    }

    return key + '=' + val;
  }).filter(Boolean).join('&');
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/').replace(':/', '://');
}
function stripTrailingSlash(path) {
  return path.replace(/\/+$/, '') || '/';
}
function isSamePath(p1, p2) {
  return stripTrailingSlash(p1) === stripTrailingSlash(p2);
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this.$ssrContext.nuxt.fetch.length; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch.push(this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(12);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(28);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(25);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(24);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(13);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const Pages = getMatchedComponents(to); // Scroll to the top of the page if...

  if ( // One of the children set `scrollToTop`
  Pages.some(Page => Page.options.scrollToTop) || // scrollToTop set in only page without children
  Pages.length < 2 && Pages.every(Page => Page.options.scrollToTop !== false)) {
    position = {
      x: 0,
      y: 0
    };
  } // savedPosition is only available for popstate navigations (back button)


  if (savedPosition) {
    position = savedPosition;
  }

  const nuxt = window.$nuxt;

  if ( // Route hash changes
  to.path === from.path && to.hash !== from.hash || // Initial load (vuejs/vue-router#3199)
  to === from) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _07149929 = () => interopDefault(Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 33)));

const _05ac3a00 = () => interopDefault(__webpack_require__.e(/* import() | pages/leaderboard/index */ 5).then(__webpack_require__.bind(null, 68)));

const _02b3de70 = () => interopDefault(__webpack_require__.e(/* import() | pages/privacy */ 6).then(__webpack_require__.bind(null, 69)));

const _423af794 = () => interopDefault(__webpack_require__.e(/* import() | pages/board/_id/index */ 2).then(__webpack_require__.bind(null, 70)));

const _be0f8fe8 = () => interopDefault(__webpack_require__.e(/* import() | pages/board/_id/mindmap */ 3).then(__webpack_require__.bind(null, 71)));

const _171029dc = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 4).then(__webpack_require__.bind(null, 72)));

const _6b302c26 = () => interopDefault(__webpack_require__.e(/* import() | pages/_user/index */ 1).then(__webpack_require__.bind(null, 67))); // TODO: remove in Nuxt 3


const emptyFn = () => {};

const originalPush = external_vue_router_default.a.prototype.push;

external_vue_router_default.a.prototype.push = function push(location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort);
};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/board",
    component: _07149929,
    name: "board"
  }, {
    path: "/leaderboard",
    component: _05ac3a00,
    name: "leaderboard"
  }, {
    path: "/privacy",
    component: _02b3de70,
    name: "privacy"
  }, {
    path: "/board/:id",
    component: _423af794,
    name: "board-id"
  }, {
    path: "/board/:id/mindmap",
    component: _be0f8fe8,
    name: "board-id-mindmap"
  }, {
    path: "/",
    component: _171029dc,
    name: "index"
  }, {
    path: "/:user",
    component: _6b302c26,
    name: "user"
  }],
  fallback: false
};
function createRouter() {
  return new external_vue_router_default.a(routerOptions);
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=38a3918a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[(typeof _vm.$route === 'undefined')?_vm._ssrNode("<a href=\"/\" class=\"error-link\">","</a>"):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt.js</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=38a3918a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
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
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(35)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "90d10ad0"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(36)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "b40b9c68"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./style/app.scss
var style_app = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=dfaf8052&
var defaultvue_type_template_id_dfaf8052_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{'has-custom': _vm.$route.path === '/'},style:(_vm.settings.color)},[_vm._ssrNode("<header class=\"header\">","</header>",[_vm._ssrNode("<nav role=\"navigation\" aria-label=\"main navigation\" class=\"navbar\">","</nav>",[_vm._ssrNode("<div class=\"navbar-brand\">","</div>",[_c('n-link',{staticClass:"navbar-item logo",attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/logo.svg","alt":"Bubblask"}}),_vm._v(" "),_c('span',{staticClass:"primary"},[_vm._v("BUBBLASK")]),_vm._v(" "),_c('span',{staticClass:"second"},[_vm._v(".com")])]),_vm._ssrNode(" <a role=\"button\" aria-label=\"menu\" aria-expanded=\"false\" class=\"navbar-burger burger\"><span aria-hidden=\"true\"></span> <span aria-hidden=\"true\"></span> <span aria-hidden=\"true\"></span></a>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass("navbar-menu",{'is-active' : _vm.burgerActive}))+">","</div>",[_vm._ssrNode("<div class=\"navbar-end\">","</div>",[_vm._ssrNode("<div class=\"sound-bar navbar-item clickable\">","</div>",[_vm._ssrNode(((_vm.playing)?("<div class=\"bars\"><div class=\"bar\"></div> <div class=\"bar\"></div> <div class=\"bar\"></div> <div class=\"bar\"></div> <div class=\"bar\"></div> <div class=\"bar\"></div> <div class=\"bar\"></div> <div class=\"bar\"></div> <div class=\"bar\"></div> <div class=\"bar\"></div></div>"):"<!---->")+" "),_c('x-icon',{attrs:{"name":_vm.playing ? 'pause' : 'play'}})],2),_vm._ssrNode(" <div class=\"navbar-item\"><div><span class=\"field\">Total: </span> <span class=\"value\">"+_vm._ssrEscape(_vm._s(_vm.displayTasks.length))+"</span></div></div> <div class=\"navbar-item\"><div><span class=\"field\">Time: </span> <span class=\"value\">"+_vm._ssrEscape(_vm._s(_vm.totalTime)+"m")+"</span></div></div>")],2)])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass(null,{'main-content': !_vm.isRunning}))+">","</div>",[(!_vm.isRunning)?_vm._ssrNode("<div"+(_vm._ssrClass("sidebar",{'active': _vm.forceSidebar}))+">","</div>",[_vm._ssrNode("<aside class=\"menu\">","</aside>",[_vm._ssrNode("<div class=\"menu-child\">","</div>",[_vm._ssrNode("<ul class=\"menu-list\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('b-tooltip',{attrs:{"position":"is-right","label":"Leader board"}},[_c('n-link',{class:{'is-active': _vm.$route.path === '/leaderboard'},attrs:{"to":"/leaderboard"}},[_c('x-icon',{attrs:{"name":"poll"}})],1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('b-tooltip',{attrs:{"position":"is-right","label":"Board"}},[_c('n-link',{class:{'is-active': _vm.$route.path === '/board'},attrs:{"to":"/board"}},[_c('x-icon',{attrs:{"name":"board"}})],1)],1)],1)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"menu-child\">","</div>",[_vm._ssrNode("<ul class=\"menu-list\">","</ul>",[(_vm.currentUser)?_vm._ssrNode("<li>","</li>",[_c('b-tooltip',{attrs:{"position":"is-right","label":"Setting"}},[_c('client-only',[_c('b-dropdown',{staticClass:"elm",attrs:{"position":"is-top-right","trap-focus":true}},[_c('template',{staticClass:"clickable",slot:"trigger"},[_c('x-icon',{attrs:{"name":"cogs"}})],1),_vm._v(" "),_c('b-dropdown-item',{attrs:{"custom":""}},[_c('Options',{model:{value:(_vm.settings),callback:function ($$v) {_vm.settings=$$v},expression:"settings"}})],1)],2)],1)],1)],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('b-tooltip',{attrs:{"position":"is-right","label":"Strict Mode"}},[_c('label',{staticClass:"elm b-checkbox checkbox"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.strictTemp),expression:"strictTemp"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.strictTemp)?_vm._i(_vm.strictTemp,null)>-1:(_vm.strictTemp)},on:{"change":function($event){var $$a=_vm.strictTemp,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.strictTemp=$$a.concat([$$v]))}else{$$i>-1&&(_vm.strictTemp=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.strictTemp=$$c}}}})])])],1),_vm._ssrNode(" "),(!Boolean(_vm.currentUser))?_vm._ssrNode("<li>","</li>",[_c('x-dropdown',{staticClass:"elm",attrs:{"can-close":['escape'],"position":"is-top-right","force-active":_vm.openAuth},on:{"active-change":function($event){return _vm.openLogin($event)}}},[_c('div',{ref:"lgButton",attrs:{"slot":"trigger"},slot:"trigger"},[_c('x-icon',{attrs:{"name":"account"}})],1),_vm._v(" "),_c('div',{staticClass:"dropdown-item",staticStyle:{"min-width":"335px"}},[_c('div',{staticClass:"notification is-warning"},[_vm._v("Login to manage and track your work!")]),_vm._v(" "),(!_vm.logging)?_c('div',{staticClass:"field"},[_c('label',{staticClass:"label"},[_vm._v("Username")]),_vm._v(" "),_c('div',{staticClass:"control"},[_c('label',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.form.username),expression:"form.username"}],staticClass:"input",attrs:{"type":"text","placeholder":"Username"},domProps:{"value":(_vm.form.username)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.form, "username", $event.target.value)}}})])])]):_vm._e(),_vm._v(" "),(!_vm.logging)?_c('div',{staticClass:"field"},[_c('div',{staticClass:"field-body"},[_c('div',{staticClass:"field"},[_c('label',{staticClass:"label"},[_vm._v("Firstname")]),_vm._v(" "),_c('b-input',{attrs:{"type":"text","placeholder":"John"},model:{value:(_vm.form.first_name),callback:function ($$v) {_vm.$set(_vm.form, "first_name", $$v)},expression:"form.first_name"}})],1),_vm._v(" "),_c('div',{staticClass:"field"},[_c('label',{staticClass:"label"},[_vm._v("Lastname")]),_vm._v(" "),_c('b-input',{attrs:{"type":"text","placeholder":"Due"},model:{value:(_vm.form.last_name),callback:function ($$v) {_vm.$set(_vm.form, "last_name", $$v)},expression:"form.last_name"}})],1)])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"field"},[_c('label',{staticClass:"label"},[_vm._v("Email")]),_vm._v(" "),_c('div',{staticClass:"control has-icons-right"},[_c('b-input',{attrs:{"type":"email","placeholder":"Email"},model:{value:(_vm.form.email),callback:function ($$v) {_vm.$set(_vm.form, "email", $$v)},expression:"form.email"}})],1)]),_vm._v(" "),_c('div',{staticClass:"field"},[_c('label',{staticClass:"label"},[_vm._v("Password")]),_vm._v(" "),_c('div',{staticClass:"control has-icons-right"},[_c('b-input',{attrs:{"type":"password","password-reveal":"","placeholder":"Password"},model:{value:(_vm.form.password),callback:function ($$v) {_vm.$set(_vm.form, "password", $$v)},expression:"form.password"}})],1)]),_vm._v(" "),_c('div',{staticClass:"field"},[_c('div',{staticClass:"level is-mobile"},[_c('div',[_c('div',{staticClass:"field has-addons"},[_c('div',{staticClass:"control"},[_c('div',{staticClass:"button",on:{"click":function($event){return _vm.openLogin(false)}}},[_c('x-icon',{attrs:{"name":"close"}})],1)]),_vm._v(" "),_c('div',{staticClass:"control"},[_c('div',{staticClass:"button",on:{"click":function($event){_vm.logging = !_vm.logging}}},[_c('span',[_vm._v(_vm._s(_vm.logging ? 'Register' : 'Login'))])])])])]),_vm._v(" "),_c('div',{staticClass:"button is-primary",on:{"click":_vm.handleSubmit}},[_c('span',[_vm._v(_vm._s(_vm.logging ? 'Login' : 'Register'))])])])])])])],1):_vm._ssrNode("<li>","</li>",[_c('b-tooltip',{attrs:{"position":"is-right","label":"Report"}},[_c('n-link',{attrs:{"to":"/me"}},[_c('x-icon',{attrs:{"name":"report"}})],1)],1)],1),_vm._ssrNode(" "),(_vm.currentUser && _vm.$route.path === '/me')?_vm._ssrNode("<li>","</li>",[_c('b-tooltip',{attrs:{"position":"is-right","label":"Logout"}},[_c('div',{staticClass:"elm",on:{"click":function($event){return _vm.logout()}}},[_c('x-icon',{attrs:{"name":"logout"}})],1)])],1):_vm._e()],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"button sidebar-control\">","</div>",[_c('x-icon',{attrs:{"name":_vm.forceSidebar ? 'chevron-left' : 'chevron-right'}})],1)],2):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<main class=\"main\">","</main>",[_c('nuxt',{staticClass:"main-body"}),_vm._ssrNode(" "),(!_vm.isRunning)?_vm._ssrNode("<footer class=\"footer\">","</footer>",[_vm._ssrNode("<div class=\"container small\">","</div>",[_vm._ssrNode("<div class=\"level is-mobile\">","</div>",[_vm._ssrNode("<div class=\"level-left\">","</div>",[_vm._ssrNode("<div class=\"buttons\">","</div>",[_vm._ssrNode("<div class=\"button is-text\">About</div> "),_c('n-link',{staticClass:"button is-text",attrs:{"to":"/privacy"}},[_vm._v("Privacy")])],2)]),_vm._ssrNode(" <div class=\"level-right\"><p><strong>Made</strong> with ❤️</p></div>")],2)])]):_vm._e()],2)],2),_vm._ssrNode(" "),_c('board-bar'),_vm._ssrNode(" <div id=\"music_list\"><audio controls=\"controls\" autoplay=\"autoplay\"></audio></div>")],2)}
var defaultvue_type_template_id_dfaf8052_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=dfaf8052&

// EXTERNAL MODULE: ./components/Avatar.vue + 15 modules
var Avatar = __webpack_require__(8);

// EXTERNAL MODULE: ./components/input/Input.vue + 4 modules
var Input = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/options/index.vue?vue&type=template&id=2a2217f0&
var optionsvue_type_template_id_2a2217f0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"options"},[_vm._ssrNode("<div class=\"tabs is-boxed\"><ul><li"+(_vm._ssrClass(null,{'is-active': _vm.activeTab === 'c'}))+"><a>Customize</a></li> <li"+(_vm._ssrClass(null,{'is-active': _vm.activeTab === 'n'}))+"><a>Notification</a></li> <li"+(_vm._ssrClass(null,{'is-active': _vm.activeTab === 't'}))+"><a>Timer</a></li></ul></div> "),(_vm.activeTab === 'c')?_vm._ssrNode("<div class=\"color-picker\">","</div>",[_vm._l((_vm.fieldColors),function(c){return _vm._ssrNode("<div class=\"level is-mobile\">","</div>",[_vm._ssrNode("<div class=\"level-left\">"+_vm._ssrEscape("\n                "+_vm._s(c.label)+"\n            ")+"</div> "),_vm._ssrNode("<div class=\"level-right\">","</div>",[_c('b-dropdown',[_c('div',{staticClass:"button is-square",style:({background: _vm.data['color'][c.field]}),attrs:{"slot":"trigger"},slot:"trigger"}),_vm._v(" "),_c('b-dropdown-item',{attrs:{"paddingless":"","custom":""}},[_c('color-picker',{attrs:{"value":_vm.data['color'][c.field],"preset-colors":['#f00', '#00ff00', '#00ff0055', 'rgb(201, 76, 76)', 'rgba(0,0,255,1)', 'hsl(89, 43%, 51%)', 'hsla(89, 43%, 51%, 0.6)']},on:{"input":function($event){return _vm.updateColor(c.field, $event)}}})],1)],1)],1)],2)}),_vm._ssrNode(" "),_c('b-dropdown',{staticClass:"is-fullwidth",attrs:{"aria-role":"list"}},[_c('div',{staticClass:"button is-fullwidth",attrs:{"slot":"trigger"},slot:"trigger"},[_vm._v("Set Background")]),_vm._v(" "),_c('b-dropdown-item',{attrs:{"custom":"","aria-role":"listitem"}},[_c('Unsplash',{model:{value:(_vm.data['color']['background']),callback:function ($$v) {_vm.$set(_vm.data['color'], 'background', $$v)},expression:"data['color']['background']"}})],1)],1)],2):_vm._e(),_vm._ssrNode(" "),(_vm.activeTab === 'n')?_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"columns is-mobile\">","</div>",[_vm._ssrNode("<div class=\"column\">Wake me in(m)</div> "),_vm._ssrNode("<div class=\"column\">","</div>",[_vm._ssrNode("<div class=\"field is-grouped\">","</div>",[_c('b-number-input',{attrs:{"size":"is-small","min":5,"type":"is-primary","controls-position":"compact"},model:{value:(_vm.data.notification.wake_me),callback:function ($$v) {_vm.$set(_vm.data.notification, "wake_me", $$v)},expression:"data.notification.wake_me"}})],1)])],2)]):_vm._e(),_vm._ssrNode(" "),(_vm.activeTab === 't')?_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"columns is-mobile\">","</div>",[_vm._ssrNode("<div class=\"column\">Pomodoro</div> "),_vm._ssrNode("<div class=\"column\">","</div>",[_c('b-number-input',{attrs:{"size":"is-small","min":25,"type":"is-primary","controls-position":"compact"},model:{value:(_vm.data.timer.tomato),callback:function ($$v) {_vm.$set(_vm.data.timer, "tomato", $$v)},expression:"data.timer.tomato"}})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"columns is-mobile\">","</div>",[_vm._ssrNode("<div class=\"column\">Short Break</div> "),_vm._ssrNode("<div class=\"column\">","</div>",[_c('b-number-input',{attrs:{"size":"is-small","min":5,"type":"is-primary","controls-position":"compact"},model:{value:(_vm.data.timer.short_break),callback:function ($$v) {_vm.$set(_vm.data.timer, "short_break", $$v)},expression:"data.timer.short_break"}})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"columns is-mobile\">","</div>",[_vm._ssrNode("<div class=\"column\">Long Break</div> "),_vm._ssrNode("<div class=\"column\">","</div>",[_c('b-number-input',{attrs:{"size":"is-small","min":10,"type":"is-primary","controls-position":"compact"},model:{value:(_vm.data.timer.long_break),callback:function ($$v) {_vm.$set(_vm.data.timer, "long_break", $$v)},expression:"data.timer.long_break"}})],1)],2)],2):_vm._e(),_vm._ssrNode(" <div class=\"level is-mobile\" style=\"margin-top: 1rem\"><div class=\"level-left\"><div class=\"button is-small is-fullwidth\">Reset</div></div> <div class=\"level-right\"><div class=\"button is-primary is-small is-fullwidth\">Save</div></div></div>")],2)}
var optionsvue_type_template_id_2a2217f0_staticRenderFns = []


// CONCATENATED MODULE: ./components/options/index.vue?vue&type=template&id=2a2217f0&

// EXTERNAL MODULE: external "vue-color"
var external_vue_color_ = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Unsplash/index.vue?vue&type=template&id=692683a1&
var Unsplashvue_type_template_id_692683a1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"unsplash"},[_vm._ssrNode("<div class=\"field\"><label><input placeholder=\"Search\""+(_vm._ssrAttr("value",(_vm.search)))+" class=\"input\"></label></div> <div class=\"field\"><div class=\"columns is-mobile is-variable is-1 is-multiline\">"+(_vm._ssrList((_vm.response.results),function(img){return ("<div class=\"column is-6\"><div"+(_vm._ssrClass("image clickable is-3by1",{'selected': _vm.data && _vm.data.id === img.id}))+"><img"+(_vm._ssrAttr("src",img.urls.regular))+(_vm._ssrAttr("alt",img.alt_description))+"></div></div>")}))+"</div></div>")])}
var Unsplashvue_type_template_id_692683a1_staticRenderFns = []


// CONCATENATED MODULE: ./components/Unsplash/index.vue?vue&type=template&id=692683a1&

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Unsplash/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Unsplashvue_type_script_lang_js_ = ({
  name: "index.vue",
  props: {
    value: {
      default: '',
      type: Object
    }
  },

  data() {
    return {
      search: 'working',
      response: {
        total: 0,
        results: []
      },
      data: this.value
    };
  },

  methods: {
    select(img) {
      if (this.data && img.id === this.data.id) {
        this.data = null;
      } else {
        this.data = this.cleanData(img, ['id', 'urls', 'user', 'alt_description']);
      }
    },

    fetch() {
      this.$axios.$get('/general/unsplash/', {
        params: {
          search: this.search
        }
      }).then(res => {
        this.response = res;
      });
    },

    handleInput: Object(external_lodash_["debounce"])(function () {
      this.fetch();
    }, 1000)
  },
  watch: {
    data() {
      this.$emit('input', this.data);
      this.$store.commit('config/SET_SETTING_BACKGROUND', this.data);
    }

  },

  created() {
    this.fetch();
  }

});
// CONCATENATED MODULE: ./components/Unsplash/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Unsplashvue_type_script_lang_js_ = (Unsplashvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Unsplash/index.vue



function Unsplash_injectStyles (context) {
  
  
}

/* normalize component */

var Unsplash_component = Object(componentNormalizer["a" /* default */])(
  components_Unsplashvue_type_script_lang_js_,
  Unsplashvue_type_template_id_692683a1_render,
  Unsplashvue_type_template_id_692683a1_staticRenderFns,
  false,
  Unsplash_injectStyles,
  null,
  "28d8775b"
  
)

/* harmony default export */ var Unsplash = (Unsplash_component.exports);
// EXTERNAL MODULE: ./helpers/configs.js
var configs = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/options/index.vue?vue&type=script&lang=js&
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




/* harmony default export */ var optionsvue_type_script_lang_js_ = ({
  name: "Setting",
  props: {
    value: {
      default: () => {
        return Object.assign({}, configs["a" /* settings */]);
      }
    }
  },
  components: {
    'color-picker': external_vue_color_["Chrome"],
    Unsplash: Unsplash
  },

  data() {
    return {
      data: Object.assign({}, configs["a" /* settings */]),
      colors: [],
      fieldColors: [{
        field: '--btn-color',
        label: 'Button Background'
      }, {
        field: '--btn-text-color',
        label: 'Button Text'
      }, {
        field: '--bg-color-primary',
        label: 'Background'
      }, {
        field: '--bg-color-primary-text',
        label: 'Text Inside'
      }, {
        field: '--task-color',
        label: 'Task Background'
      }, {
        field: '--task-text-color',
        label: 'Task Text'
      }],
      activeTab: 'c'
    };
  },

  methods: {
    updateColor(field, val) {
      this.data.color[field] = val.hex;
    },

    save() {
      this.$axios.$put(`/auth/users/${this.currentUser.username}/`, {
        options: this.data
      }).then(res => {
        this.$store.commit('auth/SET_USER', res);
        this.$store.commit('config/SET_SETTING', res.profile.setting);
      });
    },

    reset() {
      this.data = Object.assign({}, configs["a" /* settings */]);
      this.$store.commit('config/SET_SETTING_BACKGROUND', null);
    }

  },
  watch: {
    value: {
      deep: true,
      handler: function () {
        this.data = this.value;
      }
    },
    data: {
      deep: true,
      handler: function () {
        this.$emit('input', this.data);
      }
    }
  },

  created() {
    this.data = Object(external_lodash_["cloneDeep"])(this.$store.state.config.settings);

    if (typeof this.data.notification === 'undefined') {
      this.data.notification = {
        wake_me: 5
      };
    }
  }

});
// CONCATENATED MODULE: ./components/options/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_optionsvue_type_script_lang_js_ = (optionsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/options/index.vue



function options_injectStyles (context) {
  
  var style0 = __webpack_require__(40)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var options_component = Object(componentNormalizer["a" /* default */])(
  components_optionsvue_type_script_lang_js_,
  optionsvue_type_template_id_2a2217f0_render,
  optionsvue_type_template_id_2a2217f0_staticRenderFns,
  false,
  options_injectStyles,
  null,
  "7f63fb4e"
  
)

/* harmony default export */ var components_options = (options_component.exports);
// EXTERNAL MODULE: ./plugins/task.js
var plugins_task = __webpack_require__(5);

// EXTERNAL MODULE: ./pages/board/index.vue + 14 modules
var pages_board = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/BoardBar.vue?vue&type=template&id=3091ba01&
var BoardBarvue_type_template_id_3091ba01_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"board-bar"},[_vm._ssrNode("<div class=\"ws-members\""+(_vm._ssrStyle(null,{height: _vm.minimize ? undefined : '50vh'}, null))+">","</div>",[_vm._ssrNode("<div class=\"header\">","</div>",[(_vm.currentUser)?_vm._ssrNode("<div class=\"media\">","</div>",[_vm._ssrNode("<div class=\"media-content\">","</div>",[_c('b-tooltip',{attrs:{"label":"Focus to work of meeting with others"}},[_c('button',{staticClass:"button is-text is-selected",on:{"click":function($event){_vm.isActive = true}}},[(_vm.gb)?_c('x-icon',{attrs:{"name":_vm.kind2Icon(_vm.gb.kind)}}):_vm._e(),_vm._v(" "),_c('b',{staticClass:"clickable"},[_vm._v(_vm._s(_vm.gb ? _vm.gb.title : 'Create workspace'))])],1)])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"media-right\">","</div>",[_vm._ssrNode("<div class=\"buttons\">","</div>",[_vm._ssrNode("<div class=\"button is-text\">","</div>",[_c('x-icon',{attrs:{"name":_vm.minimize ? 'maximize': 'minimize'}})],1)])])],2):_vm._ssrNode(("<div class=\"button is-text is-fullwidth\">Login to join Workspace</div>"))]),_vm._ssrNode(" "),_c('transition',{attrs:{"name":"fade"}},[(!_vm.minimize && _vm.gb)?_c('div',{staticClass:"members"},[(_vm.members.length)?_c('div',{staticClass:"wrapper"},[_c('div',{staticClass:"member"},[_c('div',{staticClass:"columns is-gapless"},_vm._l((_vm.members),function(user){return _c('div',{key:user.id,staticClass:"column is-1"},[_c('avatar',{staticClass:"is-24x24",class:user.profile.extra && user.profile.extra.status,attrs:{"value":user.profile.media}})],1)}),0)]),_vm._v(" "),_c('div',{staticClass:"chat-box"},[_c('div',{ref:"chat-box",staticClass:"wrapper",attrs:{"id":"chat-box"}},_vm._l((_vm.chat.results),function(c){return _c('div',{key:c.id,staticClass:"media"},[_c('div',{staticClass:"media-left"},[_c('avatar',{staticClass:"is-24x24",class:c.user.profile.extra && c.user.profile.extra.status,attrs:{"value":c.user.profile.media}})],1),_vm._v(" "),_c('div',{staticClass:"media-content"},[_c('b',[_c('small',[_vm._v(_vm._s(_vm.convertName(c.user)))])]),_vm._v(" "),_c('span',[_vm._v(_vm._s(c.msg))])])])}),0)]),_vm._v(" "),_c('div',{staticClass:"chat-form"},[_c('b-input',{attrs:{"placeholder":"Message"},nativeOn:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.send($event)}},model:{value:(_vm.newMessage),callback:function ($$v) {_vm.newMessage=$$v},expression:"newMessage"}})],1)]):_vm._e()]):_vm._e()])],2),_vm._ssrNode(" "),_c('b-modal',{attrs:{"can-cancel":false,"active":_vm.isActive,"scroll":"keep"},on:{"update:active":function($event){_vm.isActive=$event}}},[_c('div',{staticClass:"modal-card"},[_c('header',{staticClass:"modal-card-head"},[_c('div',{staticClass:"modal-card-title uppercase"},[_vm._v("\n                    "+_vm._s(_vm.form.title ? _vm.form.title : 'Create new workspace')+"\n                ")]),_vm._v(" "),_c('div',{staticClass:"modal-card-icon"},[_c('div',{staticClass:"buttons"},[(_vm.gb)?_c('div',{staticClass:"button is-danger is-small",on:{"click":function($event){return _vm.join(_vm.gb)}}},[_vm._v("Left")]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"button is-text is-small",on:{"click":function($event){_vm.isActive = false}}},[_c('x-icon',{attrs:{"name":"close"}})],1)])])]),_vm._v(" "),_c('section',{staticClass:"modal-card-body"},[_c('div',[_c('div',{staticClass:"field is-floating-label"},[_c('label',{staticClass:"label"},[_vm._v("Name")]),_vm._v(" "),_c('div',{staticClass:"control is-clearfix"},[_c('b-input',{attrs:{"disabled":!_vm.authorised,"size":"is-medium","placeholder":"Workspace name"},model:{value:(_vm.form.title),callback:function ($$v) {_vm.$set(_vm.form, "title", $$v)},expression:"form.title"}})],1)]),_vm._v(" "),(_vm.authorised)?_c('div',{staticClass:"field is-floating-label"},[_c('label',{staticClass:"label"},[_vm._v("Options")]),_vm._v(" "),_c('div',{staticClass:"control is-clearfix"},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-content"},[_c('div',{staticClass:"level is-mobile"},[_c('div',{staticClass:"level-left"},[_vm._v("Enable to search")]),_vm._v(" "),_c('div',{staticClass:"level-right"},[_c('b-switch',{attrs:{"rounded":false},model:{value:(_vm.form.settings.allow_search),callback:function ($$v) {_vm.$set(_vm.form.settings, "allow_search", $$v)},expression:"form.settings.allow_search"}})],1)]),_vm._v(" "),_c('div',{staticClass:"level is-mobile"},[_c('div',{staticClass:"level-left"},[_vm._v("Private")]),_vm._v(" "),_c('div',{staticClass:"level-right"},[_c('b-switch',{attrs:{"rounded":false},model:{value:(_vm.form.is_private),callback:function ($$v) {_vm.$set(_vm.form, "is_private", $$v)},expression:"form.is_private"}})],1)]),_vm._v(" "),(_vm.form.is_private)?_c('div',{staticClass:"field"},[_c('b-input',{attrs:{"icon":"pound","expanded":"","type":"password","password-reveal":"","placeholder":"Password to access workspace"},model:{value:(_vm.form.password),callback:function ($$v) {_vm.$set(_vm.form, "password", $$v)},expression:"form.password"}})],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"level is-mobile"},[_c('div',{staticClass:"level-left"},[_vm._v("Collaborate")]),_vm._v(" "),_c('div',{staticClass:"level-right"},[_c('b-switch',{attrs:{"rounded":false},model:{value:(_vm.form.settings.collaborate),callback:function ($$v) {_vm.$set(_vm.form.settings, "collaborate", $$v)},expression:"form.settings.collaborate"}})],1)])])])])]):_vm._e(),_vm._v(" "),(_vm.authorised)?_c('div',{staticClass:"columns"},[_c('div',{staticClass:"column"},[_c('b-dropdown',{attrs:{"append-to-body":"","aria-role":"list"},model:{value:(_vm.form.kind),callback:function ($$v) {_vm.$set(_vm.form, "kind", $$v)},expression:"form.kind"}},[_c('button',{staticClass:"button is-small",attrs:{"slot":"trigger","type":"button"},slot:"trigger"},[[_c('span',[_vm._v(_vm._s(_vm.kinds[_vm.form.kind].title))])],_vm._v(" "),_c('x-icon',{attrs:{"name":"chevron-down"}})],2),_vm._v(" "),_vm._l((Object.keys(_vm.kinds)),function(val){return _c('b-dropdown-item',{key:val,attrs:{"value":val,"aria-role":"listitem"}},[_c('div',{staticClass:"media"},[_c('div',{staticClass:"media-content"},[_c('h3',[_vm._v(_vm._s(_vm.kinds[val].title))]),_vm._v(" "),_c('small',[_vm._v(_vm._s(_vm.kinds[val].help))])])])])})],2)],1),_vm._v(" "),_c('div',{staticClass:"column"},[(_vm.authorised)?_c('button',{staticClass:"button is-primary is-fullwidth",on:{"click":_vm.save}},[_vm._v("\n                                Save\n                            ")]):_vm._e()])]):_vm._e()])]),_vm._v(" "),(_vm.form.id && _vm.uri)?_c('div',{staticClass:"notification is-warning content"},[_c('p',[_vm._v("Share with your friends")]),_vm._v(" "),_c('b-input',{attrs:{"value":_vm.uri}})],1):_vm._e(),_vm._v(" "),(!Boolean(_vm.form.id))?_c('div',{staticClass:"group-selector has-background-white"},[_c('hr',{staticStyle:{"margin":"0"}}),_vm._v(" "),_c('div',{staticClass:"header"},[_c('div',{staticClass:"media"},[_c('b-input',{attrs:{"icon":"search","expanded":"","placeholder":"Enter keyword..."},on:{"input":_vm.search}})],1)]),_vm._v(" "),_c('div',{staticClass:"list"},_vm._l((_vm.response.results),function(b){return _c('div',{key:b.id,staticClass:"media",class:{'is-active': _vm.gb && _vm.gb.id === b.id}},[_c('div',{staticClass:"media-left"},[_c('x-icon',{attrs:{"name":_vm.kind2Icon(b.kind)}})],1),_vm._v(" "),_c('div',{staticClass:"media-content"},[_c('div',[_c('b',[_vm._v(_vm._s(b.title))])]),_vm._v(" "),_c('small',[_vm._v("By "+_vm._s(_vm.convertName(b.user)))])]),_vm._v(" "),(_vm.gb && _vm.gb.id === b.id)?_c('div',{staticClass:"media-right"},[_c('div',{staticClass:"button is-small",on:{"click":function($event){return _vm.join(b)}}},[_c('span',[_vm._v("Left")]),_vm._v(" "),_c('x-icon',{attrs:{"name":"logout"}})],1)]):_c('div',{staticClass:"media-right"},[(b.is_private)?_c('b-dropdown',{attrs:{"position":"is-bottom-left","append-to-body":"","aria-role":"menu","trap-focus":""}},[_c('div',{staticClass:"button is-small",attrs:{"slot":"trigger"},slot:"trigger"},[_c('span',[_vm._v("Join")]),_vm._v(" "),_c('x-icon',{attrs:{"name":"shield-lock"}})],1),_vm._v(" "),_c('b-dropdown-item',{attrs:{"aria-role":"menu-item","focusable":false,"custom":""}},[_c('div',{staticClass:"field has-addons",staticStyle:{"min-width":"280px"}},[_c('b-input',{attrs:{"icon":"pound","type":"password","expanded":"","placeholder":"Enter Password"},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}}),_vm._v(" "),_c('div',{staticClass:"control"},[_c('div',{staticClass:"button is-primary",on:{"click":function($event){return _vm.join(b, _vm.password)}}},[_vm._v("Join")])])],1)])],1):_c('div',{staticClass:"button is-small",on:{"click":function($event){return _vm.join(b)}}},[_c('span',[_vm._v("Join")]),_vm._v(" "),_c('x-icon',{attrs:{"name":"shield-open"}})],1)],1)])}),0),_vm._v(" "),_c('div',{staticClass:"has-background-light"},[_c('div',{staticClass:"media"},[_c('div',{staticClass:"media-left"},[_c('div',{staticClass:"button is-static"},[_vm._v("OR")])]),_vm._v(" "),_c('div',{staticClass:"media-content"},[_c('b-input',{attrs:{"icon":"pound","placeholder":"Enter Code"},model:{value:(_vm.code),callback:function ($$v) {_vm.code=$$v},expression:"code"}})],1),_vm._v(" "),_c('div',{staticClass:"media-right"},[_c('div',{staticClass:"button",on:{"click":_vm.enterCode}},[_vm._v("Enter")])])])])]):_vm._e()])])],2)}
var BoardBarvue_type_template_id_3091ba01_staticRenderFns = []


// CONCATENATED MODULE: ./components/BoardBar.vue?vue&type=template&id=3091ba01&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BoardBar.vue?vue&type=script&lang=js&
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


const DEFAULT = {
  title: null,
  kind: "GHOST",
  settings: {
    allow_search: true,
    collaborate: false
  }
};
/* harmony default export */ var BoardBarvue_type_script_lang_js_ = ({
  name: "BoardBar",
  components: {
    Avatar: Avatar["a" /* default */]
  },

  data() {
    return {
      isActive: false,
      minimize: true,
      form: DEFAULT,
      members: [],
      loading: {
        member: false
      },
      response: {
        results: [],
        count: 0
      },
      code: null,
      password: null,
      kinds: {
        "GHOST": {
          title: "Ghost",
          help: "No-one can see your tasks"
        },
        "DEFAULT": {
          title: "Default",
          help: "Anyone can add and run workspace's tasks"
        },
        "TEMPLATE": {
          title: "Template",
          help: "Anyone can add and run workspace's tasks"
        }
      },
      chat: {
        results: [],
        count: 0
      },
      newMessage: null,
      channel: null
    };
  },

  methods: {
    init(data) {
      if (data) {
        this.form = Object(external_lodash_["cloneDeep"])({ ...data,
          settings: data.settings ? data.settings : {
            password: null,
            is_private: false
          }
        });
      } else {
        this.form = DEFAULT;
      }
    },

    search: Object(external_lodash_["debounce"])(function (text) {
      this.fetch(text);
    }, 500),

    async fetch(text) {
      this.response = await this.$axios.$get('/task/boards/', {
        params: {
          search: text ? text : undefined,
          kinds: 'GHOST,DEFAULT',
          page_size: 5
        }
      });
    },

    enterCode() {},

    save() {
      if (typeof this.form.id === "undefined") {
        this.$axios.$post('/task/boards/', this.form).then(res => {
          this.join(res);
        });
      } else {
        this.$axios.$put(`/task/boards/${this.form.slug}/`, this.cleanData(this.form)).then(res => {
          this.$store.commit('config/SET_BOARD', res);
        });
      }
    },

    connectSocket() {
      if (this.gb && Pusher && typeof Pusher === 'function') {
        this.channel = null;
        let pusher = new Pusher('eccf1067acf541fbc5d4', {
          cluster: 'ap1'
        });
        this.channel = pusher.subscribe(`board_${this.gb.id}`);
        this.channel.bind('change-user-score', function (data) {
          if (data) {}
        }.bind(this));
        this.channel.bind('change-user-status', function (data) {
          if (data) {
            let index = this.members.map(u => u.id).indexOf(data.user);

            if (index >= 0) {
              this.members[index].profile.extra.status = data.status;
            }
          }
        }.bind(this));
        this.channel.bind('new_message', function (data) {
          if (data) {
            this.chat.results.push(data);
            this.toBottom();
          }
        }.bind(this));
      }
    },

    async fetchMembers() {
      if (this.gb) {
        this.loading.member = true;
        let {
          results
        } = await this.$axios.$get(`/task/boards/${this.gb.id}/members/`, {
          params: {
            fields: 'user'
          }
        });
        this.members = results.map(x => x.user);
        this.loading.member = false;
      } else {
        this.wsMembers = [];
      }
    },

    async fetchMessages() {
      if (this.gb) {
        this.loading.message = true;
        this.chat = await this.$axios.$get(`/task/boards/${this.gb.id}/messages/`, {
          params: {
            room: `BOARD_${this.gb.id}`
          }
        }).then(res => {
          return {
            "count": res.count,
            "results": res.results.reverse()
          };
        });
        this.loading.message = false;
        this.toBottom();
      }
    },

    send() {
      if (this.gb && this.newMessage && this.newMessage.length >= 2) this.$axios.$post('/general/messages/', {
        msg: this.newMessage,
        room: `board_${this.gb.id}`
      }).then(() => {
        this.newMessage = null;
      });
    },

    toBottom() {
      if (false) {}
    }

  },
  computed: {
    gb() {
      return this.$store.state.config.board;
    },

    authorised() {
      if (typeof this.form.id === "undefined") {
        return true;
      } else {
        return this.currentUser && this.currentUser.id === this.form.user.id;
      }
    },

    uri() {
      return null;
    }

  },
  watch: {
    gb() {
      if (this.gb) {
        this.minimize = false;
        this.init(this.gb);
        this.connectSocket();
        this.fetchMembers();
        this.fetchMessages();
      } else {
        this.init();
        this.minimize = true;
      }
    },

    isActive() {
      if (this.isActive && this.response.results.length === 0) {
        this.fetch(null);
      }
    }

  },

  mounted() {
    this.connectSocket();
  },

  created() {
    if (this.gb) {
      this.init(this.gb);
      this.fetchMembers();
      this.fetchMessages();
      this.minimize = false;
    } else {
      this.init();
      this.minimize = true;
    }
  }

});
// CONCATENATED MODULE: ./components/BoardBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BoardBarvue_type_script_lang_js_ = (BoardBarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/BoardBar.vue



function BoardBar_injectStyles (context) {
  
  var style0 = __webpack_require__(42)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var BoardBar_component = Object(componentNormalizer["a" /* default */])(
  components_BoardBarvue_type_script_lang_js_,
  BoardBarvue_type_template_id_3091ba01_render,
  BoardBarvue_type_template_id_3091ba01_staticRenderFns,
  false,
  BoardBar_injectStyles,
  null,
  "3ea6e565"
  
)

/* harmony default export */ var BoardBar = (BoardBar_component.exports);
// EXTERNAL MODULE: external "buefy"
var external_buefy_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
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








/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  components: {
    BoardBar: BoardBar,
    Template: pages_board["default"],
    BInput: Input["a" /* default */],
    Avatar: Avatar["a" /* default */],
    Options: components_options
  },

  data() {
    return {
      colors: [],
      burgerActive: false,
      logging: true,
      form: {
        email: null,
        password: null,
        username: null,
        first_name: null,
        last_name: null
      },
      settings: null,
      notify: {
        msg: null,
        ssf: true
      },
      is_online: true,
      strictTemp: false,
      forceSidebar: true,
      playing: false
    };
  },

  methods: {
    async logout() {
      await this.$auth.logout();
      await this.$router.replace({
        path: '/'
      });
      await this.fetchTasks();
    },

    async handleSubmit() {
      this.notify = {
        msg: null,
        ssf: true
      };

      if (this.logging) {
        await this.$auth.login({
          email: this.form.email,
          password: this.form.password
        }).then(res => {
          if (res) {
            this.fetchTasks();
            this.notify.msg = "LOGIN_SUCCESS";
          } else {
            this.notify.msg = "LOGIN_FAIL";
            this.notify.ssf = false;
          }
        }).catch(() => {
          this.notify.msg = "LOGIN_FAIL";
          this.notify.ssf = false;
        });
      } else {
        this.$axios.post('/auth/rest-auth/registration/', { ...this.form,
          password1: this.form.password,
          password2: this.form.password
        }).then(res => {
          if (res) {
            this.logging = true;
            this.notify.msg = "REGISTER_SUCCESS";
          } else {
            this.notify.msg = "REGISTER_FAILED";
            this.notify.ssf = false;
          }
        }).catch(error => {
          this.notify.msg = "REGISTER_FAILED";
          this.notify.ssf = false;
          let fields = Object.keys(error.response.data);
          this.notify.fields = [];
          fields.forEach(field => {
            this.notify.fields.push(`${field}_${error.response.data[field][0]}`);
          });
          this.notify.ssf = false;
        });
      }
    },

    async setStrict(val) {
      if (this.currentUser) {
        await this.$axios.$put(`/auth/users/${this.currentUser.username}/`, {
          is_strict: val
        });
      }

      this.$store.commit('config/SET_STRICT', val);
      this.settings.timer.is_strict = val;
    },

    async fetchTasks() {
      await this.$store.commit('task/SET_TASKS', []);

      if (this.currentUser) {
        await this.$axios.$get('/task/tasks/', {
          params: {
            board: this.gb && this.gb.kind !== 'GHOST' ? this.gb.id : undefined,
            page_size: 100,
            statuses: ['pending', 'running', 'stopping'].toString(),
            user: this.currentUser.id
          }
        }).then(async res => {
          for (let i = 0; i < res.results.length; i++) {
            await this.$store.commit('task/ADD_TASK', new plugins_task["a" /* Task */]({ ...res.results[i],
              board: res.results[i]['board_id'],
              parent: res.results[i]['parent_id'],
              user: res.results[i]['user'],
              assignee: res.results[i]['assignee']
            }));
          }
        });
      } else {
        const _this = this;

        const syncDB = async function () {
          _this.$indexedDB.readAll(function (cursor) {
            if (!['complete', 'stopped'].includes(cursor.value.status)) {
              _this.$store.commit('task/ADD_TASK', new plugins_task["a" /* Task */](cursor.value));
            }
          });
        };

        _this.$indexedDB.open(syncDB, () => {}, () => {}, "title", "uid", []);
      }
    },

    async push_late() {
      let needUpdate = this.$store.state.task.tasks.filter(x => x.update && !x.updating);

      for (let i = 0; i < needUpdate.length; i++) {
        await this.$store.commit('task/UPDATE_TASK', { ...needUpdate[i],
          updating: true
        });
        let res = null;

        let task = _.cloneDeep(needUpdate[i]);

        if (this.gb && this.gb.kind !== "GHOST") {
          task.board = this.gb;
        }

        if (this.currentUser) {
          if (task.parent === 0) {
            task.parent = null;
          }

          if (task.id) {
            if (this.currentUser.id === task.user.id || task.board && task.assignee && this.currentUser.id === task.assignee.id) {
              res = await this.$axios.$put(`/task/tasks/${task.id}/`, this.cleanData(task));
            }
          } else {
            res = await this.$axios.$post("/task/tasks/", this.cleanData(task));
          }
        } else {
          await this.$indexedDB.put(task);
          res = {
            id: task.uid
          };
        }

        if (res) {
          task.id = res.id;
          task.force = true;
          task.update = false;
          task.updating = false;

          if (res.parent === null) {
            res.parent = 0;
          }

          task.user = res['user'];

          if (this.gb && this.gb.kind !== "GHOST") {
            task.board = this.gb.id;
          }

          await this.$store.commit('task/UPDATE_TASK', task);
        }
      }
    },

    awakeMe() {
      if (!this.is_online || this.currentUser === null) return;
      let dead_time_str = localStorage.getItem('time_off');
      let now = new Date();

      if (!dead_time_str) {
        let oldDateObj = new Date();
        let newDateObj = new Date();
        newDateObj.setTime(oldDateObj.getTime() + 5 * 60 * 1000);
      } else {
        let dead_time = new Date(dead_time_str);

        if (now > dead_time) {
          this.$axios.$put(`/auth/users/${this.currentUser.username}/`, {
            status: "offline"
          }).then(() => {
            this.is_online = false;
          });
        }
      }
    },

    initAudio() {
      const files = ["1vo-SrAf-cd_61Cf9gA4OTGwmQLqTcTm-", "17CrXGkzHXul_m3fBUj1TRI1Q6ARitLhb", "1hmaOuM-xv0mUl1bgDdEqJLxwpOwIdQuc", "144D2pyG8d-QcJ_zcZdfpmeTgkLtMVQSz", "18sYxO-y-tbJpzoGmFukg9qRozMcDv62o", "1ANCvTOiSTALtZKe9IYx4MIcQMQJ8f-fE", "1Hmo8dQ0W0PVKtn9DxdiPyLugbu2jnSFv", "1N-kmHus4ZReAb8E14K2-TWczLy34pd6H"]; // Current index of the files array

      let i = 0; // Get the audio element

      this.music_player = document.querySelector("#music_list audio"); // function for moving to next audio file

      const _this = this;

      function next() {
        // Check for last audio file in the playlist
        if (i === files.length - 1) {
          i = 0;
        } else {
          i++;
        } // Change the audio element source


        _this.music_player.src = `https://docs.google.com/uc?export=download&id=${files[i]}`;
      } // Check if the player is selected


      if (!this.music_player) {
        throw "Playlist Player does not exists ...";
      } else {
        // Start the player
        this.music_player.src = `https://docs.google.com/uc?export=download&id=${files[i]}`; // Listen for the music ended event, to play the next audio file

        this.music_player.addEventListener('ended', next, false);
      }
    }

  },

  created() {
    this.settings = Object(external_lodash_["cloneDeep"])(this.$store.state.config.settings);
    this.strictTemp = this.settings && this.settings.timer ? this.settings.timer.is_strict : false;
  },

  computed: {
    displayTasks() {
      return this.$store.state.task.tasks.filter(x => !['stopped', 'complete'].includes(x.status));
    },

    totalTime() {
      let out = 0;

      if (this.settings) {
        this.displayTasks.forEach(task => {
          out = out + this.settings.timer.tomato * task.interval;
        });
      }

      return out;
    },

    gb() {
      return this.$store.state.config.board;
    },

    isRunning() {
      return Boolean(this.$store.state.task.running);
    },

    openAuth() {
      return this.$store.state.auth.openAuth;
    }

  },
  watch: {
    currentUser() {
      this.settings = Object(external_lodash_["cloneDeep"])(this.$store.state.config.settings);
      this.fetchTasks();
    },

    async gb() {
      await this.fetchTasks();
    },

    is_online() {
      if (this.is_online) {
        this.$axios.$put(`/auth/users/${this.currentUser.username}/`, {
          status: "online"
        });
      }
    },

    strictTemp() {
      this.setStrict(this.strictTemp);
    },

    notify: {
      deep: true,
      handler: function () {
        if (this.notify.msg) {
          external_buefy_["SnackbarProgrammatic"].open({
            duration: 10000,
            message: this.notify.msg,
            type: this.notify.ssf ? 'is-success' : 'is-warning'
          });
        }
      }
    },

    playing() {
      if (this.playing) {
        this.music_player.play();
      } else {
        this.music_player.pause();
      }
    }

  },

  async mounted() {
    if (false) {}
  }

});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue



function default_injectStyles (context) {
  
  var style0 = __webpack_require__(43)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_dfaf8052_render,
  defaultvue_type_template_id_dfaf8052_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "43d5b64c"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js





const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    external_vue_default.a.prototype.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) {
          this.$loading.fail(this.nuxt.err);
        }

        if (this.$loading.finish) {
          this.$loading.finish();
        }
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations'];
let store_store = {};

(function updateModules() {
  // If store is an exported method = classic mode (deprecated)
  // Enforce store modules
  store_store.modules = store_store.modules || {};
  resolveStoreModules(__webpack_require__(44), 'auth.js');
  resolveStoreModules(__webpack_require__(45), 'config.js');
  resolveStoreModules(__webpack_require__(46), 'message.js');
  resolveStoreModules(__webpack_require__(47), 'reading.js');
  resolveStoreModules(__webpack_require__(48), 'task.js'); // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}

function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData; // Remove store src + extension (./foo/index.js -> foo/index)

  const namespace = filename.replace(/\.(js|mjs)$/, '');
  const namespaces = namespace.split('/');
  let moduleName = namespaces[namespaces.length - 1];
  const filePath = `store/${filename}`;
  moduleData = moduleName === 'state' ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath); // If src is a known Vuex property

  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName;
    const propertyStoreModule = getStoreModule(store_store, namespaces, {
      isProperty: true
    }); // Replace state since it's a function

    mergeProperty(propertyStoreModule, moduleData, property);
    return;
  } // If file is foo/index.js, it should be saved as foo


  const isIndexModule = moduleName === 'index';

  if (isIndexModule) {
    namespaces.pop();
    moduleName = namespaces[namespaces.length - 1];
  }

  const storeModule = getStoreModule(store_store, namespaces);

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property);
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced;
  }
}

function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`);
    const state = Object.assign({}, moduleData);
    return () => state;
  }

  return normalizeModule(moduleData, filePath);
}

function getStoreModule(storeModule, namespaces, {
  isProperty = false
} = {}) {
  // If ./mutations.js
  if (!namespaces.length || isProperty && namespaces.length === 1) {
    return storeModule;
  }

  const namespace = namespaces.shift();
  storeModule.modules[namespace] = storeModule.modules[namespace] || {};
  storeModule.modules[namespace].namespaced = true;
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
  return getStoreModule(storeModule.modules[namespace], namespaces, {
    isProperty
  });
}

function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) {
    return;
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state;
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData);
  }
}
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(49);

// CONCATENATED MODULE: ./.nuxt/nuxt-icons.js
/* harmony default export */ var nuxt_icons = (async function (ctx, inject) {
  const icons = {
    "64x64": "/_nuxt/icons/icon_64x64.5f6a36.png",
    "120x120": "/_nuxt/icons/icon_120x120.5f6a36.png",
    "144x144": "/_nuxt/icons/icon_144x144.5f6a36.png",
    "152x152": "/_nuxt/icons/icon_152x152.5f6a36.png",
    "192x192": "/_nuxt/icons/icon_192x192.5f6a36.png",
    "384x384": "/_nuxt/icons/icon_384x384.5f6a36.png",
    "512x512": "/_nuxt/icons/icon_512x512.5f6a36.png",
    "ipad_1536x2048": "/_nuxt/icons/splash_ipad_1536x2048.5f6a36.png",
    "ipadpro9_1536x2048": "/_nuxt/icons/splash_ipadpro9_1536x2048.5f6a36.png",
    "ipadpro10_1668x2224": "/_nuxt/icons/splash_ipadpro10_1668x2224.5f6a36.png",
    "ipadpro12_2048x2732": "/_nuxt/icons/splash_ipadpro12_2048x2732.5f6a36.png",
    "iphonese_640x1136": "/_nuxt/icons/splash_iphonese_640x1136.5f6a36.png",
    "iphone6_50x1334": "/_nuxt/icons/splash_iphone6_50x1334.5f6a36.png",
    "iphoneplus_1080x1920": "/_nuxt/icons/splash_iphoneplus_1080x1920.5f6a36.png",
    "iphonex_1125x2436": "/_nuxt/icons/splash_iphonex_1125x2436.5f6a36.png",
    "iphonexr_828x1792": "/_nuxt/icons/splash_iphonexr_828x1792.5f6a36.png",
    "iphonexsmax_1242x2688": "/_nuxt/icons/splash_iphonexsmax_1242x2688.5f6a36.png"
  };

  const getIcon = size => icons[size + 'x' + size] || '';

  inject('icon', getIcon);
});
// EXTERNAL MODULE: external "cookie-universal"
var external_cookie_universal_ = __webpack_require__(30);
var external_cookie_universal_default = /*#__PURE__*/__webpack_require__.n(external_cookie_universal_);

// CONCATENATED MODULE: ./.nuxt/cookie-universal-nuxt.js

/* harmony default export */ var cookie_universal_nuxt = (({
  req,
  res
}, inject) => {
  const options = {
    "alias": "ck",
    "parseJSON": true
  };
  inject(options.alias, external_cookie_universal_default()(req, res, options.parseJSON));
});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(14);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(31);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        return;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Setup interceptors

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }

      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || process.env._AXIOS_BASE_URL_ || 'https://api.bubblask.com/v1'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (const h of ["accept", "host", "cf-ray", "cf-connecting-ip", "content-length", "content-md5", "content-type"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// CONCATENATED MODULE: ./plugins/axios.js
/* harmony default export */ var plugins_axios = (function (context) {
  context.$axios.onError(async e => {
    if (e.response.status === 401) {
      await context.$auth.logout();
    }

    return Promise.reject(e);
  });
  context.$axios.onRequest(config => {});
});
// CONCATENATED MODULE: ./plugins/auth.js
const cookieparser =  true ? __webpack_require__(50) : undefined;
const IndexedDB =  true ? null : undefined;


const getLocalTZ = () => {
  return 0 - new Date().getTimezoneOffset() / 60;
};

/* harmony default export */ var auth = (async function (context, inject) {
  const $auth = {};

  const logout = async () => {
    await setToken(null);
    await setUser(null);
  };

  const login = async credential => {
    let res = await context.$axios.$post('/auth/rest-auth/login/', credential).catch(e => {
      console.log(e);
    });

    if (res) {
      await setToken(res['token']);
      let user = await getUser();
      await setUser(user);
    }
  };

  const getUser = async () => {
    try {
      return await context.$axios.$get('/auth/users/me/');
    } catch (e) {
      await logout();
      return null;
    }
  };

  const getToken = async () => {
    let token = null;

    if ( true && context.req.headers.cookie) {
      const parsed = cookieparser.parse(context.req.headers.cookie);
      token = parsed['auth.token'];
    } else {
      token = context.store.$ck.get('auth.token');
    }

    return token;
  };

  const setToken = async token => {
    if (token) {
      context.$axios.setHeader('Authorization', 'JWT ' + token);
      context.store.$ck.set('auth.token', token, {
        maxAge: 60 * 60 * 24 * 7,
        path: '/'
      });
    } else {
      context.$axios.setHeader('Authorization', undefined);
      context.store.$ck.remove('auth.token');
    }

    await context.store.commit('auth/SET_TOKEN', token);
  };

  const setUser = async user => {
    if (user) {
      await context.store.commit('config/SET_SETTING', user.profile.setting);
      await context.store.commit('auth/SET_USER', user);
      let board = user.profile.setting ? user.profile.setting.board : null;

      if (board) {
        await context.$axios.$get(`/task/boards/${board}/`).then(res => {
          context.store.commit('config/SET_BOARD', res);
        });
      } else {
        context.store.commit('config/SET_BOARD', null);
      }

      if (false) {}
    } else if (false) {}
  };

  const init = async () => {
    let token = await getToken();
    await setToken(token);

    if (token) {
      let user = await getUser();
      await setUser(user);
    } else {
      if (false) {}
    }
  };

  await init();
  $auth.login = login;
  $auth.logout = logout;
  context.$auth = $auth;
  inject('auth', $auth);

  if (IndexedDB) {
    const SimpleIndexedDB = IndexedDB.default.IndexedDB;
    const indexedDB = new SimpleIndexedDB('bubblask');
    context.$indexedDB = indexedDB;
    inject('indexedDB', indexedDB);
  }
});
// EXTERNAL MODULE: ./components/Icon.vue + 4 modules
var Icon = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContentEditable.vue?vue&type=script&lang=js&
/* harmony default export */ var ContentEditablevue_type_script_lang_js_ = ({
  name: "ContentEditable",
  render: function (createElement) {
    let eml = this.data;
    return createElement(this.elm, {
      on: {
        input: this.handleInput,
        paste: this.handlePaste
      },
      attrs: {
        contentEditable: this.editable
      },
      ref: 'xxx',
      domProps: {
        innerHTML: this.data
      }
    }, eml);
  },
  props: {
    elm: {
      type: String,
      default: 'div'
    },
    value: {
      type: String,
      default: ''
    },
    editable: {
      type: Boolean,
      default: true
    },
    allowPasteHtml: {
      default: false,
      type: Boolean
    },
    rows: {
      default: null,
      type: Number
    }
  },

  data() {
    return {
      data: this.value,
      typing: false
    };
  },

  methods: {
    handleInput(e) {
      this.typing = true;

      if (this.allowPasteHtml) {
        this.$emit('input', e.target.innerHTML);
      } else {
        this.$emit('input', e.target.innerText);
      }
    },

    handlePaste(e) {
      if (!this.allowPasteHtml) {
        let data = e.clipboardData.getData('text/html') || e.clipboardData.getData('text/plain');
        let regex = /<(?!(\/\s*)?(b|i|em|s|strong|u)[>,\s])([^>])*>/g;
        data = data.replace(regex, '');
        document.execCommand('insertHTML', false, data);
        e.preventDefault();
      }
    }

  },
  watch: {
    value() {
      if (!this.typing || this.value === null) {
        this.$refs.xxx.innerHTML = this.value;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/ContentEditable.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ContentEditablevue_type_script_lang_js_ = (ContentEditablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/ContentEditable.vue
var ContentEditable_render, ContentEditable_staticRenderFns




/* normalize component */

var ContentEditable_component = Object(componentNormalizer["a" /* default */])(
  components_ContentEditablevue_type_script_lang_js_,
  ContentEditable_render,
  ContentEditable_staticRenderFns,
  false,
  null,
  null,
  "7d49ec15"
  
)

/* harmony default export */ var ContentEditable = (ContentEditable_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/numberinput/Numberinput.vue?vue&type=template&id=677ec69a&
var Numberinputvue_type_template_id_677ec69a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"b-numberinput field",class:_vm.fieldClasses},[(_vm.controls)?_vm._ssrNode("<p class=\"control\">","</p>",[_vm._ssrNode("<button type=\"button\""+(_vm._ssrAttr("disabled",_vm.disabled || _vm.disabledMin))+(_vm._ssrClass("button",_vm.buttonClasses))+">","</button>",[_c('b-icon',{attrs:{"name":"minus"}})],1)]):_vm._e(),_vm._ssrNode(" "),_c('b-input',_vm._b({ref:"input",attrs:{"type":"number","step":_vm.newStep,"max":_vm.max,"min":_vm.min,"size":_vm.size,"disabled":_vm.disabled,"readonly":!_vm.editable,"loading":_vm.loading,"rounded":_vm.rounded,"icon":_vm.icon,"icon-pack":_vm.iconPack,"autocomplete":_vm.autocomplete,"expanded":_vm.expanded,"use-html5-validation":_vm.useHtml5Validation},on:{"focus":function($event){return _vm.$emit('focus', $event)},"blur":function($event){return _vm.$emit('blur', $event)}},model:{value:(_vm.computedValue),callback:function ($$v) {_vm.computedValue=_vm._n($$v)},expression:"computedValue"}},'b-input',_vm.$attrs,false)),_vm._ssrNode(" "),(_vm.controls)?_vm._ssrNode("<p class=\"control\">","</p>",[_vm._ssrNode("<button type=\"button\""+(_vm._ssrAttr("disabled",_vm.disabled || _vm.disabledMax))+(_vm._ssrClass("button",_vm.buttonClasses))+">","</button>",[_c('b-icon',{attrs:{"name":"plus"}})],1)]):_vm._e()],2)}
var Numberinputvue_type_template_id_677ec69a_staticRenderFns = []


// CONCATENATED MODULE: ./components/numberinput/Numberinput.vue?vue&type=template&id=677ec69a&

// EXTERNAL MODULE: ./components/utils/FormElementMixin.js
var FormElementMixin = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/numberinput/Numberinput.vue?vue&type=script&lang=js&
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



/* harmony default export */ var Numberinputvue_type_script_lang_js_ = ({
  name: 'BNumberInput',
  components: {
    'b-icon': Icon["a" /* default */],
    'b-input': Input["a" /* default */]
  },
  mixins: [FormElementMixin["a" /* default */]],
  inheritAttrs: false,
  props: {
    value: Number,
    min: [Number, String],
    max: [Number, String],
    step: [Number, String],
    disabled: Boolean,
    type: {
      type: String,
      default: 'is-text'
    },
    editable: {
      type: Boolean,
      default: true
    },
    controls: {
      type: Boolean,
      default: true
    },
    controlsRounded: {
      type: Boolean,
      default: false
    },
    controlsPosition: String
  },

  data() {
    return {
      newValue: !isNaN(this.value) ? this.value : parseFloat(this.min) || 0,
      newStep: this.step || 1,
      _elementRef: 'input'
    };
  },

  computed: {
    computedValue: {
      get() {
        return this.newValue;
      },

      set(value) {
        let newValue = value;

        if (value === '') {
          newValue = parseFloat(this.min) || null;
        }

        this.newValue = newValue;
        this.$emit('input', newValue);
        !this.isValid && this.$refs.input.checkHtml5Validity();
      }

    },

    fieldClasses() {
      return [{
        'has-addons': this.controlsPosition === 'compact'
      }, {
        'is-grouped': this.controlsPosition !== 'compact'
      }, {
        'is-expanded': this.expanded
      }];
    },

    buttonClasses() {
      return [this.type, this.size, {
        'is-rounded': this.controlsRounded
      }];
    },

    minNumber() {
      return typeof this.min === 'string' ? parseFloat(this.min) : this.min;
    },

    maxNumber() {
      return typeof this.max === 'string' ? parseFloat(this.max) : this.max;
    },

    stepNumber() {
      return typeof this.newStep === 'string' ? parseFloat(this.newStep) : this.newStep;
    },

    disabledMin() {
      return this.computedValue - this.stepNumber < this.minNumber;
    },

    disabledMax() {
      return this.computedValue + this.stepNumber > this.maxNumber;
    },

    stepDecimals() {
      const step = this.stepNumber.toString();
      const index = step.indexOf('.');

      if (index >= 0) {
        return step.substring(index + 1).length;
      }

      return 0;
    }

  },
  watch: {
    /**
     * When v-model is changed:
     *   1. Set internal value.
     */
    value(value) {
      this.newValue = value;
    }

  },
  methods: {
    decrement() {
      if (typeof this.minNumber === 'undefined' || this.computedValue - this.stepNumber >= this.minNumber) {
        const value = this.computedValue - this.stepNumber;
        this.computedValue = parseFloat(value.toFixed(this.stepDecimals));
      }
    },

    increment() {
      if (typeof this.maxNumber === 'undefined' || this.computedValue + this.stepNumber <= this.maxNumber) {
        const value = this.computedValue + this.stepNumber;
        this.computedValue = parseFloat(value.toFixed(this.stepDecimals));
      }
    },

    onControlClick(event, inc) {
      // IE 11 -> filter click event
      if (event.detail !== 0 || event.type === 'click') return;
      if (inc) this.increment();else this.decrement();
    },

    onStartLongPress(event, inc) {
      if (event.button !== 0 && event.type !== 'touchstart') return;
      this._$intervalTime = new Date();
      clearInterval(this._$intervalRef);
      this._$intervalRef = setInterval(() => {
        if (inc) this.increment();else this.decrement();
      }, 250);
    },

    onStopLongPress(inc) {
      if (!this._$intervalRef) return;
      const d = new Date();

      if (d - this._$intervalTime < 250) {
        if (inc) this.increment();else this.decrement();
      }

      clearInterval(this._$intervalRef);
      this._$intervalRef = null;
    }

  }
});
// CONCATENATED MODULE: ./components/numberinput/Numberinput.vue?vue&type=script&lang=js&
 /* harmony default export */ var numberinput_Numberinputvue_type_script_lang_js_ = (Numberinputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/numberinput/Numberinput.vue





/* normalize component */

var Numberinput_component = Object(componentNormalizer["a" /* default */])(
  numberinput_Numberinputvue_type_script_lang_js_,
  Numberinputvue_type_template_id_677ec69a_render,
  Numberinputvue_type_template_id_677ec69a_staticRenderFns,
  false,
  null,
  null,
  "5ee0aa4b"
  
)

/* harmony default export */ var Numberinput = (Numberinput_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/rate/Rate.vue?vue&type=template&id=21a2c268&
var Ratevue_type_template_id_21a2c268_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"rate",class:{ 'is-disabled': _vm.disabled, 'is-spaced': _vm.spaced, 'is-rtl': _vm.rtl }},[_vm._l((_vm.max),function(item,index){return _vm._ssrNode("<div"+(_vm._ssrClass("rate-item",_vm.rateClass(item)))+">","</div>",[_c('x-icon',{attrs:{"name":"square","size":_vm.size}}),_vm._ssrNode(" "),(_vm.checkHalf(item))?_c('x-icon',{staticClass:"is-half",style:(_vm.halfStyle),attrs:{"name":"square"}}):_vm._e()],2)}),_vm._ssrNode(" "+((_vm.showText || _vm.showScore || _vm.customText)?("<div"+(_vm._ssrClass("rate-text",_vm.size))+"><span>"+_vm._ssrEscape(_vm._s(_vm.showMe))+"</span> "+((_vm.customText && !_vm.showText)?("<span>"+_vm._ssrEscape(_vm._s(_vm.customText))+"</span>"):"<!---->")+"</div>"):"<!---->"))],2)}
var Ratevue_type_template_id_21a2c268_staticRenderFns = []


// CONCATENATED MODULE: ./components/rate/Rate.vue?vue&type=template&id=21a2c268&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/rate/Rate.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Ratevue_type_script_lang_js_ = ({
  name: 'BRate',
  props: {
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 5
    },
    icon: {
      type: String,
      default: 'star'
    },
    iconPack: String,
    size: String,
    spaced: Boolean,
    rtl: Boolean,
    disabled: Boolean,
    showScore: Boolean,
    showText: Boolean,
    customText: String,
    texts: Array
  },

  data() {
    return {
      newValue: this.value,
      hoverValue: 0
    };
  },

  computed: {
    halfStyle() {
      return `width:${this.valueDecimal}%`;
    },

    showMe() {
      let result = '';

      if (this.showScore) {
        result = this.disabled ? this.value : this.newValue;
        if (result === 0) result = '';
      } else if (this.showText) {
        result = this.texts[Math.ceil(this.newValue) - 1];
      }

      return result;
    },

    valueDecimal() {
      return this.value * 100 - Math.floor(this.value) * 100;
    }

  },
  watch: {
    // When v-model is changed set the new value.
    value(value) {
      this.newValue = value;
    }

  },
  methods: {
    resetNewValue() {
      if (this.disabled) return;
      this.hoverValue = 0;
    },

    previewRate(index, event) {
      if (this.disabled) return;
      this.hoverValue = index;
      event.stopPropagation();
    },

    confirmValue(index) {
      if (this.disabled) return;
      this.newValue = index;
      this.$emit('change', this.newValue);
      this.$emit('input', this.newValue);
    },

    checkHalf(index) {
      let showWhenDisabled = this.disabled && this.valueDecimal > 0 && index - 1 < this.value && index > this.value;
      return showWhenDisabled;
    },

    rateClass(index) {
      let output = '';
      const currentValue = this.hoverValue !== 0 ? this.hoverValue : this.newValue;

      if (index <= currentValue) {
        output = 'set-on';
      } else if (this.disabled && Math.ceil(this.value) === index) {
        output = 'set-half';
      }

      return output;
    }

  }
});
// CONCATENATED MODULE: ./components/rate/Rate.vue?vue&type=script&lang=js&
 /* harmony default export */ var rate_Ratevue_type_script_lang_js_ = (Ratevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/rate/Rate.vue





/* normalize component */

var Rate_component = Object(componentNormalizer["a" /* default */])(
  rate_Ratevue_type_script_lang_js_,
  Ratevue_type_template_id_21a2c268_render,
  Ratevue_type_template_id_21a2c268_staticRenderFns,
  false,
  null,
  null,
  "5a865607"
  
)

/* harmony default export */ var Rate = (Rate_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Task.vue?vue&type=template&id=0f3267d8&
var Taskvue_type_template_id_0f3267d8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.task && _vm.task.settings)?_c('div',{staticClass:"task",class:{'is-active': _vm.updateTree}},[_vm._ssrNode("<div"+(_vm._ssrAttr("id",("task-" + (_vm.task.id))))+">","</div>",[_c('transition',{attrs:{"name":"fade"}},[_c('div',{staticClass:"notification media",class:{'is-warning': _vm.task.status === 'running'}},[_c('div',{staticClass:"media-left"},[(_vm.tree)?_c('div',{staticClass:"button",class:{'is-static': !_vm.children || _vm.children.length === 0},on:{"click":function($event){_vm.editing = !_vm.editing; _vm.updateTree = false}}},[_c('x-icon',{attrs:{"name":"tree"}})],1):_c('div',{staticClass:"button is-small",class:{'is-static': !_vm.isAuthorised || ['stopped', 'complete'].includes(_vm.task.status)},on:{"click":function($event){return _vm.task_done()}}},[_c('x-icon',{attrs:{"name":"check"}})],1)]),_vm._v(" "),_c('div',{staticClass:"media-content",on:{"click":_vm.dblClick}},[_c('ce',{staticClass:"title",attrs:{"placeholder":"Untitled","elm":"h4","editable":Boolean(_vm.isAuthorised) && _vm.task.status !== 'running' && !_vm.readonly},on:{"input":function($event){return _vm.on_input()}},model:{value:(_vm.task.title),callback:function ($$v) {_vm.$set(_vm.task, "title", $$v)},expression:"task.title"}}),_vm._v(" "),(_vm.tree)?_c('small',{staticClass:"field"},[_vm._v(_vm._s(_vm.task.interval * _vm.task.tomato)+"m")]):_c('div',{staticClass:"level is-mobile"},[_c('div',{staticClass:"level-left"},[(Boolean(_vm.board) && _vm.task.assignee)?_c('div',{staticClass:"level-item"},[_c('b-tooltip',{attrs:{"label":("Assigned to " + (_vm.convertName(_vm.task.assignee)))}},[_c('avatar',{staticClass:"is-16x16",attrs:{"value":_vm.task.assignee.profile.media}})],1)],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"level-item"},[_c('b-rate',{staticClass:"is-small",attrs:{"disabled":!_vm.editing || _vm.readonly},on:{"input":_vm.setPriority},model:{value:(_vm.task.settings.priority),callback:function ($$v) {_vm.$set(_vm.task.settings, "priority", $$v)},expression:"task.settings.priority"}})],1)])])],1),_vm._v(" "),(!['stopped', 'complete'].includes(_vm.task.status) && !_vm.tree)?_c('div',{staticClass:"media-right clickable"},[(!_vm.readonly)?_c('div',{staticClass:"buttons"},[_c('div',{staticClass:"button is-hidden-mobile is-text"},[_vm._v("\n                            "+_vm._s(_vm.task.times.length)+" / "+_vm._s(_vm.task.interval)+"\n                        ")]),_vm._v(" "),(_vm.task.status !== 'running')?_c('div',{staticClass:"button is-text is-hidden-mobile"},[_vm._v("\n                            "+_vm._s(_vm.fancyTimeFormat(_vm.task.totalTimeLeft()))+"\n                        ")]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"button",class:{'is-static': !_vm.isAuthorised},on:{"click":function($event){return _vm.task_run()}}},[_c('x-icon',{staticClass:"is-medium",attrs:{"name":_vm.task.status ===  'running' ? 'pause' : 'play'}})],1)]):_vm._e()]):(_vm.tree)?_c('div',{staticClass:"media-right"},[_c('b-rate',{attrs:{"disabled":_vm.readonly,"value":_vm.task.settings.priority},on:{"input":_vm.setPriority}})],1):_vm._e()])]),_vm._ssrNode(" "),_c('transition',{attrs:{"name":"bounce"}},[(_vm.editing)?_c('div',{staticClass:"card"},[(_vm.task.parent && !_vm.tree)?_c('div',{staticClass:"card-header"},[_c('ce',{staticClass:"card-header-title title",attrs:{"placeholder":"Untitled","elm":"h4","editable":_vm.isAuthorised && _vm.task.status !== 'running' && !_vm.readonly},on:{"input":function($event){return _vm.on_input()}},model:{value:(_vm.task.title),callback:function ($$v) {_vm.$set(_vm.task, "title", $$v)},expression:"task.title"}})],1):_vm._e(),_vm._v(" "),(_vm.task.parent && !_vm.tree)?_c('div',{staticClass:"card-content"},[_c('b-rate',{staticClass:"is-small",attrs:{"custom-text":"Priority","disabled":!_vm.isAuthorised || !_vm.editing},on:{"input":_vm.setPriority},model:{value:(_vm.task.settings.priority),callback:function ($$v) {_vm.$set(_vm.task.settings, "priority", $$v)},expression:"task.settings.priority"}})],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"card-content"},[(!_vm.tree || _vm.updateTree)?_c('ce',{staticClass:"note",attrs:{"elm":"div","placeholder":"Note","allow-paste-html":"","editable":_vm.isAuthorised && !_vm.task.isRunning() && !_vm.readonly},on:{"input":function($event){return _vm.on_input()}},model:{value:(_vm.task.description),callback:function ($$v) {_vm.$set(_vm.task, "description", $$v)},expression:"task.description"}}):_vm._e(),_vm._v(" "),(_vm.currentUser && Boolean(_vm.board) && _vm.task.user.id === _vm.currentUser.id)?_c('div',{staticClass:"level is-mobile"},[_c('div',{staticClass:"level-left"},[_c('b-switch',{attrs:{"disabled":!_vm.isAuthorised,"rounded":false},on:{"input":function($event){return _vm.on_input()}},model:{value:(_vm.task.settings['collaborate']),callback:function ($$v) {_vm.$set(_vm.task.settings, 'collaborate', $$v)},expression:"task.settings['collaborate']"}},[_vm._v("\n                                Allow collaborate\n                            ")])],1),_vm._v(" "),_c('div',{staticClass:"level-right"},[_c('user-selector',{attrs:{"disabled":!_vm.isAuthorised},on:{"input":function($event){return _vm.on_input()}},model:{value:(_vm.task.assignee),callback:function ($$v) {_vm.$set(_vm.task, "assignee", $$v)},expression:"task.assignee"}})],1)]):_vm._e(),_vm._v(" "),_c('draggable',_vm._b({staticClass:"tasks",attrs:{"list":_vm.children},on:{"change":_vm.re_order}},'draggable',_vm.dragOptions,false),_vm._l((_vm.children),function(child){return _c('task',{key:child.id,attrs:{"value":child,"readonly":_vm.readonly,"board":_vm.board,"tree":_vm.tree},on:{"add":_vm.handle_add,"deleted":function($event){return _vm.$emit('deleted', $event)}}})}),1),_vm._v(" "),(_vm.loadingChild)?_c('div',{staticClass:"tasks"},_vm._l((5),function(i){return _c('div',{key:i,staticClass:"task"},[_c('div',{staticClass:"notification media"},[_c('div',{staticClass:"skeleton-task"})])])}),0):_vm._e(),_vm._v(" "),(_vm.isAuthorised && _vm.task.id && (!_vm.tree || _vm.updateTree) && !_vm.readonly)?_c('div',{staticClass:"field"},[_c('div',{staticClass:"button is-light is-small is-fullwidth",on:{"click":_vm.task_add}},[_c('x-icon',{attrs:{"name":"plus"}}),_vm._v(" "),_c('span',[_vm._v("Add child")])],1)]):_vm._e(),_vm._v(" "),(!_vm.tree || _vm.updateTree)?_c('div',{staticClass:"field"},[_c('label',{staticClass:"label"},[_vm._v("Estimate")]),_vm._v(" "),_c('b-number-input',{attrs:{"disabled":!_vm.isAuthorised || _vm.task.isRunning() || _vm.readonly,"min":1,"max":10,"controlsPosition":"compact","expanded":"","size":"is-small"},on:{"input":function($event){return _vm.on_input()}},model:{value:(_vm.task.interval),callback:function ($$v) {_vm.$set(_vm.task, "interval", $$v)},expression:"task.interval"}})],1):_vm._e()],1),_vm._v(" "),((!_vm.tree || _vm.updateTree) && !_vm.readonly)?_c('div',{staticClass:"card-footer"},[_c('div',{staticClass:"card-footer-item",on:{"click":_vm.handle_delete}},[_c('x-icon',{attrs:{"name":"trash"}})],1)]):_vm._e(),_vm._v(" "),((!_vm.tree || _vm.updateTree))?_c('div',{staticClass:"close",on:{"click":function($event){return _vm.close()}}},[_c('x-icon',{attrs:{"name":"minimize"}})],1):_vm._e()]):_vm._e()])],2)]):_vm._e()}
var Taskvue_type_template_id_0f3267d8_staticRenderFns = []


// CONCATENATED MODULE: ./components/Task.vue?vue&type=template&id=0f3267d8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Task.vue?vue&type=script&lang=js&
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


const Taskvue_type_script_lang_js_ = __webpack_require__(2);


/* harmony default export */ var lib_vue_loader_options_components_Taskvue_type_script_lang_js_ = ({
  name: "Task",
  components: {
    Avatar: Avatar["a" /* default */]
  },
  props: {
    value: {
      type: Object,
      default: () => {
        return {};
      }
    },
    readonly: {
      type: Boolean,
      default: false
    },
    tree: {
      type: Boolean,
      default: false
    },
    board: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },

  data() {
    let task = this.value;

    if (task.settings === null) {
      task.settings = {};
    }

    if (task.children && task.settings.order) {
      task.children.forEach(x => {
        x.order = x.id ? task.settings.order.indexOf(x.id) : 0;
      });
      task.children.sort((a, b) => a.order - b.order);
    }

    return {
      editing: false,
      task: task,
      updateTree: false,
      children: task.children,
      fetchChild: false,
      loadingChild: false
    };
  },

  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: this.readonly,
        ghostClass: "ghost"
      };
    },

    isAuthorised() {
      if (this.task && this.task.settings && this.task.settings.collaborate) {
        return true;
      }

      return Boolean(this.currentUser) && (this.currentUser.id === this.task.user.id || Boolean(this.currentUser.assignee) && this.currentUser.assignee.id === this.currentUser.id);
    }

  },
  watch: {
    value: {
      deep: true,
      handler: function () {
        this.task = new plugins_task["a" /* Task */]({ ...this.value,
          settings: this.value.settings ? this.value.settings : {}
        });
      }
    },
    'value.children': {
      deep: true,
      handler: function (val) {
        let v = Taskvue_type_script_lang_js_.cloneDeep(val);

        v.forEach(x => {
          x.order = x.id && this.task.settings.order ? this.task.settings.order.indexOf(x.id) : 0;
        });
        v.sort((a, b) => a.order - b.order);
        this.children = v;
      }
    },
    task: {
      deep: true,
      handler: function () {
        this.$emit('input', { ...this.task,
          children: this.children
        });
      }
    },

    editing() {
      this.$emit('editing', this.editing);
    }

  },
  methods: {
    init() {
      this.loadingChild = true;
      this.$axios.$get('/task/tasks/', {
        params: {
          board: this.task.board,
          page_size: 100,
          statuses: this.board && this.board['is_interface'] ? undefined : ['pending', 'running', 'stopping'].toString(),
          parent: this.value.id,
          user: this.currentUser ? this.currentUser.id : undefined
        }
      }).then(async res => {
        for (let i = 0; i < res.results.length; i++) {
          await this.$store.commit('task/ADD_TASK', new plugins_task["a" /* Task */]({ ...res.results[i],
            board: res.results[i]['board_id'],
            parent: res.results[i]['parent_id'],
            user: res.results[i]['user'],
            assignee: res.results[i]['assignee']
          }));
        }
      }).finally(() => {
        this.loadingChild = false;
      });
      this.fetchChild = true;
    },

    dblClick() {
      if (this.task.id === 0) {
        this.$emit('board-update');
      } else {
        this.editing = true;
      }

      if (this.tree) {
        this.updateTree = true;
      }

      if (!this.fetchChild && this.children.length === 0) {
        this.init();
      }
    },

    close() {
      this.updateTree = false;
      this.editing = false;
    },

    on_input: Taskvue_type_script_lang_js_.debounce(function () {
      if (this.task) {
        this.sendUpdate();
      }
    }, 500),

    async task_run() {
      if (!this.isAuthorised) return;
      this.playSource('audio_press');

      if (!this.task.has_child) {
        await this.$store.commit('task/SET_RUNNING', this.task);
      } else {
        if (this.children.length === 0) {
          this.init();
        }

        this.editing = true;
      }
    },

    async task_done() {
      if (!this.isAuthorised) return;

      if (this.children.length === 0 || this.children.filter(x => x.status === 'complete').length === this.children.length) {
        this.task.changeStatus('complete');
        await this.$store.commit('task/UPDATE_TASK', this.task);
      } else {
        this.editing = true;
      }
    },

    async task_add() {
      let st = this.$store.state.config.settings.timer;
      let task = new plugins_task["a" /* Task */]({
        tomato: st.tomato,
        update: true,
        parent: this.task && this.task.id ? this.task.id : undefined,
        board: this.board ? this.board.id : undefined
      });
      this.$emit('add', task);
    },

    async handle_add(task) {
      this.$emit('add', task);
    },

    async handle_delete() {
      if (!this.isAuthorised) return;
      await this.$axios.$delete(`/task/tasks/${this.task.id}/`).then(() => {
        this.$store.commit('task/REMOVE_TASK', this.task);
        this.editing = false;
        this.$emit('deleted', this.task);
      }).catch(() => {});
    },

    re_order() {
      this.task.settings.order = this.children.map(x => x.id);
      this.sendUpdate();
    },

    setPriority(value) {
      this.task.settings.priority = value;
      this.sendUpdate();
    },

    async sendUpdate() {
      if (this.isAuthorised) {
        this.task.update = true;
        await this.$store.commit('task/UPDATE_TASK', Taskvue_type_script_lang_js_.cloneDeep(this.task));
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Task.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Taskvue_type_script_lang_js_ = (lib_vue_loader_options_components_Taskvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Task.vue



function Task_injectStyles (context) {
  
  
}

/* normalize component */

var Task_component = Object(componentNormalizer["a" /* default */])(
  components_Taskvue_type_script_lang_js_,
  Taskvue_type_template_id_0f3267d8_render,
  Taskvue_type_template_id_0f3267d8_staticRenderFns,
  false,
  Task_injectStyles,
  null,
  "62865b9d"
  
)

/* harmony default export */ var Task = (Task_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/TaskGraph.vue?vue&type=template&id=0e276d32&
var TaskGraphvue_type_template_id_0e276d32_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"task",style:(_vm.style)},[_vm._ssrNode("<div"+(_vm._ssrAttr("id",("task-" + (_vm.task.id))))+">","</div>",[_vm._ssrNode("<div class=\"notification media\">","</div>",[_vm._ssrNode("<div class=\"media-content\"><h4 class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.task.title))+"</h4> <small class=\"field\">"+_vm._ssrEscape(_vm._s(_vm.task.interval * _vm.task.tomato)+"m")+"</small></div> "),(!['stopped', 'complete'].includes(_vm.task.status))?_vm._ssrNode("<div class=\"media-right clickable\">","</div>",[_vm._ssrNode("<div class=\"button is-small\">","</div>",[_c('x-icon',{attrs:{"name":"plus"}})],1)]):_vm._e()],2)]),_vm._ssrNode(" "),(_vm.task.children && _vm.task.children.length)?_vm._ssrNode("<div class=\"tasks\">","</div>",_vm._l((_vm.task.children),function(child){return _c('task-graph',{key:child.id,attrs:{"value":child},on:{"down":_vm.handle,"add":_vm.handle_add,"deleted":function($event){return _vm.$emit('deleted', $event)}}})}),1):_vm._e()],2)}
var TaskGraphvue_type_template_id_0e276d32_staticRenderFns = []


// CONCATENATED MODULE: ./components/TaskGraph.vue?vue&type=template&id=0e276d32&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TaskGraph.vue?vue&type=script&lang=js&
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

/* harmony default export */ var TaskGraphvue_type_script_lang_js_ = ({
  name: "Task",
  props: {
    value: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },

  data() {
    return {
      task: this.value
    };
  },

  computed: {
    style() {
      if (this.task.temp_setting) {
        return {
          top: this.task.temp_setting.top + 'px',
          left: this.task.temp_setting.left + 'px'
        };
      }

      return {};
    }

  },
  watch: {
    value() {
      this.task = this.value;
    },

    task: {
      deep: true,
      handler: function () {
        this.$emit('input', this.task);
      }
    }
  },
  methods: {
    handle(data) {
      this.$emit('down', data);
    },

    async task_add() {
      let st = this.$store.state.config.settings.timer;
      let task = new plugins_task["a" /* Task */]({
        tomato: st.tomato,
        updating: true,
        parent: this.task.id !== 0 ? this.task.id : undefined,
        board: this.task.board
      });
      this.$emit('add', task);
    },

    async handle_add(task) {
      this.$emit('add', task);
    }

  }
});
// CONCATENATED MODULE: ./components/TaskGraph.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TaskGraphvue_type_script_lang_js_ = (TaskGraphvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/TaskGraph.vue



function TaskGraph_injectStyles (context) {
  
  
}

/* normalize component */

var TaskGraph_component = Object(componentNormalizer["a" /* default */])(
  components_TaskGraphvue_type_script_lang_js_,
  TaskGraphvue_type_template_id_0e276d32_render,
  TaskGraphvue_type_template_id_0e276d32_staticRenderFns,
  false,
  TaskGraph_injectStyles,
  null,
  "67e66ee1"
  
)

/* harmony default export */ var TaskGraph = (TaskGraph_component.exports);
// EXTERNAL MODULE: external "vuedraggable"
var external_vuedraggable_ = __webpack_require__(32);
var external_vuedraggable_default = /*#__PURE__*/__webpack_require__.n(external_vuedraggable_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/TimeChart.vue?vue&type=template&id=67521fac&scoped=true&
var TimeChartvue_type_template_id_67521fac_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{style:(_vm.style)},[_vm._ssrNode("<canvas data-v-67521fac></canvas>")])}
var TimeChartvue_type_template_id_67521fac_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/TimeChart.vue?vue&type=template&id=67521fac&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TimeChart.vue?vue&type=script&lang=js&
//
//
//
//
//
//
const Chart = __webpack_require__(51);

/* harmony default export */ var TimeChartvue_type_script_lang_js_ = ({
  name: "Chart",
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '250px'
    },
    data: {
      default: () => [],
      type: Array
    }
  },
  computed: {
    style() {
      return {
        width: this.width,
        height: this.height
      };
    }

  },
  methods: {
    init() {
      const ctx = this.$refs.myChart.getContext('2d');
      Chart.defaults.global.defaultColor = '#333333';
      Chart.defaults.global.defaultFontColor = '#333333';
      Chart.defaults.global.defaultFontSize = 14;
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['0H', '1H', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', '11H', '12H', '13H', '14H', '15H', '16H', '17H', '18H', '19H', '20H', '21H', '22H', '23H'],
          datasets: [{
            label: "",
            data: this.data,
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }

  },

  mounted() {
    this.init();
  },

  watch: {
    data() {
      this.init();
    }

  }
});
// CONCATENATED MODULE: ./components/TimeChart.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TimeChartvue_type_script_lang_js_ = (TimeChartvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/TimeChart.vue



function TimeChart_injectStyles (context) {
  
  
}

/* normalize component */

var TimeChart_component = Object(componentNormalizer["a" /* default */])(
  components_TimeChartvue_type_script_lang_js_,
  TimeChartvue_type_template_id_67521fac_scoped_true_render,
  TimeChartvue_type_template_id_67521fac_scoped_true_staticRenderFns,
  false,
  TimeChart_injectStyles,
  "67521fac",
  "12941129"
  
)

/* harmony default export */ var TimeChart = (TimeChart_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/tooltip/Tooltip.vue?vue&type=template&id=5d38846b&
var Tooltipvue_type_template_id_5d38846b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{class:[_vm.newType, _vm.position, _vm.size, {
        'b-tooltip': _vm.active,
        'is-square': _vm.square,
        'is-animated': _vm.newAnimated,
        'is-always': _vm.always,
        'is-multiline': _vm.multilined,
        'is-dashed': _vm.dashed
    }],style:({'transition-delay': (_vm.newDelay + "ms")}),attrs:{"data-label":_vm.label}},[_vm._t("default")],2)}
var Tooltipvue_type_template_id_5d38846b_staticRenderFns = []


// CONCATENATED MODULE: ./components/tooltip/Tooltip.vue?vue&type=template&id=5d38846b&

// EXTERNAL MODULE: ./components/utils/config.js
var utils_config = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/tooltip/Tooltip.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Tooltipvue_type_script_lang_js_ = ({
  name: 'BTooltip',
  props: {
    active: {
      type: Boolean,
      default: true
    },
    type: String,
    label: String,
    position: {
      type: String,
      default: 'is-top',

      validator(value) {
        return ['is-top', 'is-bottom', 'is-left', 'is-right'].indexOf(value) > -1;
      }

    },
    always: Boolean,
    animated: Boolean,
    square: Boolean,
    dashed: Boolean,
    multilined: Boolean,
    size: {
      type: String,
      default: 'is-medium'
    },
    delay: Number
  },
  computed: {
    newType() {
      return this.type || utils_config["a" /* default */].defaultTooltipType;
    },

    newAnimated() {
      return this.animated || utils_config["a" /* default */].defaultTooltipAnimated;
    },

    newDelay() {
      return this.delay || utils_config["a" /* default */].defaultTooltipDelay;
    }

  }
});
// CONCATENATED MODULE: ./components/tooltip/Tooltip.vue?vue&type=script&lang=js&
 /* harmony default export */ var tooltip_Tooltipvue_type_script_lang_js_ = (Tooltipvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/tooltip/Tooltip.vue





/* normalize component */

var Tooltip_component = Object(componentNormalizer["a" /* default */])(
  tooltip_Tooltipvue_type_script_lang_js_,
  Tooltipvue_type_template_id_5d38846b_render,
  Tooltipvue_type_template_id_5d38846b_staticRenderFns,
  false,
  null,
  null,
  "46a86b0f"
  
)

/* harmony default export */ var Tooltip = (Tooltip_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/dropdown/Dropdown.vue?vue&type=template&id=2a4d175e&
var Dropdownvue_type_template_id_2a4d175e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dropdown",class:_vm.rootClasses},[(!_vm.inline)?_vm._ssrNode("<div role=\"button\" aria-haspopup=\"true\" class=\"dropdown-trigger\">","</div>",[_vm._t("trigger")],2):_vm._e(),_vm._ssrNode(" "),_c('transition',{attrs:{"name":_vm.animation}},[(_vm.isMobileModal)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActive),expression:"isActive"}],staticClass:"background",attrs:{"aria-hidden":!_vm.isActive}}):_vm._e()]),_vm._ssrNode(" "),_c('transition',{attrs:{"name":_vm.animation}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:((!_vm.disabled && (_vm.isActive || _vm.isHoverable)) || _vm.inline),expression:"(!disabled && (isActive || isHoverable)) || inline"},{name:"trap-focus",rawName:"v-trap-focus",value:(_vm.trapFocus),expression:"trapFocus"}],ref:"dropdownMenu",staticClass:"dropdown-menu",attrs:{"aria-hidden":!_vm.isActive}},[_c('div',{staticClass:"dropdown-content",attrs:{"role":_vm.ariaRoleMenu}},[_vm._t("default")],2)])])],2)}
var Dropdownvue_type_template_id_2a4d175e_staticRenderFns = []


// CONCATENATED MODULE: ./components/dropdown/Dropdown.vue?vue&type=template&id=2a4d175e&

// CONCATENATED MODULE: ./components/directives/trapFocus.js
const findFocusable = element => {
  if (!element) {
    return null;
  }

  return element.querySelectorAll(`a[href],
                                     area[href],
                                     input:not([disabled]),
                                     select:not([disabled]),
                                     textarea:not([disabled]),
                                     button:not([disabled]),
                                     iframe,
                                     object,
                                     embed,
                                     *[tabindex],
                                     *[contenteditable]`);
};

let onKeyDown;

const bind = (el, {
  value = true
}) => {
  if (value) {
    const focusable = findFocusable(el);

    if (focusable && focusable.length > 0) {
      const firstFocusable = focusable[0];
      const lastFocusable = focusable[focusable.length - 1];

      onKeyDown = event => {
        if (event.target === firstFocusable && event.shiftKey && event.key === 'Tab') {
          event.preventDefault();
          lastFocusable.focus();
        } else if (event.target === lastFocusable && !event.shiftKey && event.key === 'Tab') {
          event.preventDefault();
          firstFocusable.focus();
        }
      };

      el.addEventListener('keydown', onKeyDown);
    }
  }
};

const unbind = el => {
  el.removeEventListener('keydown', onKeyDown);
};

const directive = {
  bind,
  unbind
};
/* harmony default export */ var trapFocus = (directive);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dropdown/Dropdown.vue?vue&type=script&lang=js&
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


const DEFAULT_CLOSE_OPTIONS = ['escape', 'outside'];
/* harmony default export */ var Dropdownvue_type_script_lang_js_ = ({
  name: 'BDropdown',
  directives: {
    trapFocus: trapFocus
  },
  props: {
    value: {
      type: [String, Number, Boolean, Object, Array, Function],
      default: null
    },
    disabled: Boolean,
    hoverable: Boolean,
    inline: Boolean,
    position: {
      type: String,

      validator(value) {
        return ['is-top-right', 'is-top-left', 'is-bottom-left'].indexOf(value) > -1;
      }

    },
    mobileModal: {
      type: Boolean,
      default: () => {
        return utils_config["a" /* default */].defaultDropdownMobileModal;
      }
    },
    ariaRole: {
      type: String,
      default: ''
    },
    animation: {
      type: String,
      default: 'fade'
    },
    multiple: Boolean,
    trapFocus: {
      type: Boolean,
      default: utils_config["a" /* default */].defaultTrapFocus
    },
    closeOnClick: {
      type: Boolean,
      default: true
    },
    canClose: {
      type: [Array, Boolean],
      default: true
    },
    expanded: Boolean,
    forceActive: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      selected: this.value,
      isActive: this.forceActive,
      isHoverable: this.hoverable,
      _isDropdown: true // Used internally by DropdownItem

    };
  },

  computed: {
    rootClasses() {
      return [this.position, {
        'is-disabled': this.disabled,
        'is-hoverable': this.hoverable,
        'is-inline': this.inline,
        'is-active': this.isActive || this.inline,
        'is-mobile-modal': this.isMobileModal,
        'is-expanded': this.expanded
      }];
    },

    isMobileModal() {
      return this.mobileModal && !this.inline && !this.hoverable;
    },

    cancelOptions() {
      return typeof this.canClose === 'boolean' ? this.canClose ? DEFAULT_CLOSE_OPTIONS : [] : this.canClose;
    },

    ariaRoleMenu() {
      return this.ariaRole === 'menu' || this.ariaRole === 'list' ? this.ariaRole : null;
    }

  },
  watch: {
    /**
     * When v-model is changed set the new selected item.
     */
    value(value) {
      this.selected = value;
    },

    /**
     * Emit event when isActive value is changed.
     */
    isActive(value) {
      this.$emit('active-change', value);
    },

    forceActive() {
      this.isActive = this.forceActive;
    }

  },
  methods: {
    /**
     * Click listener from DropdownItem.
     *   1. Set new selected item.
     *   2. Emit input event to update the user v-model.
     *   3. Close the dropdown.
     */
    selectItem(value) {
      if (this.multiple) {
        if (this.selected) {
          const index = this.selected.indexOf(value);

          if (index === -1) {
            this.selected.push(value);
          } else {
            this.selected.splice(index, 1);
          }
        } else {
          this.selected = [value];
        }

        this.$emit('change', this.selected);
      } else {
        if (this.selected !== value) {
          this.selected = value;
          this.$emit('change', this.selected);
        }
      }

      this.$emit('input', this.selected);

      if (!this.multiple) {
        this.isActive = !this.closeOnClick;

        if (this.hoverable && this.closeOnClick) {
          this.isHoverable = false;
        }
      }
    },

    /**
     * White-listed items to not close when clicked.
     */
    isInWhiteList(el) {
      if (el === this.$refs.dropdownMenu) return true;
      if (el === this.$refs.trigger) return true; // All chidren from dropdown

      if (this.$refs.dropdownMenu !== undefined) {
        const children = this.$refs.dropdownMenu.querySelectorAll('*');

        for (const child of children) {
          if (el === child) {
            return true;
          }
        }
      } // All children from trigger


      if (this.$refs.trigger !== undefined) {
        const children = this.$refs.trigger.querySelectorAll('*');

        for (const child of children) {
          if (el === child) {
            return true;
          }
        }
      }

      return false;
    },

    /**
     * Close dropdown if clicked outside.
     */
    clickedOutside(event) {
      if (this.cancelOptions.indexOf('outside') < 0) return;
      if (this.inline) return;
      if (!this.isInWhiteList(event.target)) this.isActive = false;
    },

    /**
     * Keypress event that is bound to the document
     */
    keyPress(event) {
      // Esc key
      if (this.isActive && event.keyCode === 27) {
        if (this.cancelOptions.indexOf('escape') < 0) return;
        this.isActive = false;
      }
    },

    /**
     * Toggle dropdown if it's not disabled.
     */
    toggle() {
      if (this.disabled) return;

      if (!this.isActive) {
        // if not active, toggle after clickOutside event
        // this fixes toggling programmatic
        this.$nextTick(() => {
          const value = !this.isActive;
          this.isActive = value; // Vue 2.6.x ???

          setTimeout(() => this.isActive = value);
        });
      } else {
        this.isActive = !this.isActive;
      }
    },

    checkHoverable() {
      if (this.hoverable) {
        this.isHoverable = true;
      }
    }

  },

  created() {
    if (typeof window !== 'undefined') {
      document.addEventListener('click', this.clickedOutside);
      document.addEventListener('keyup', this.keyPress);
    }
  },

  beforeDestroy() {
    if (typeof window !== 'undefined') {
      document.removeEventListener('click', this.clickedOutside);
      document.removeEventListener('keyup', this.keyPress);
    }
  }

});
// CONCATENATED MODULE: ./components/dropdown/Dropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var dropdown_Dropdownvue_type_script_lang_js_ = (Dropdownvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/dropdown/Dropdown.vue





/* normalize component */

var Dropdown_component = Object(componentNormalizer["a" /* default */])(
  dropdown_Dropdownvue_type_script_lang_js_,
  Dropdownvue_type_template_id_2a4d175e_render,
  Dropdownvue_type_template_id_2a4d175e_staticRenderFns,
  false,
  null,
  null,
  "4da05da7"
  
)

/* harmony default export */ var Dropdown = (Dropdown_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/form/User.vue?vue&type=template&id=edba398a&
var Uservue_type_template_id_edba398a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-field',{staticClass:"selector"},[(_vm.label)?_c('div',{staticClass:"level is-mobile",attrs:{"slot":"label"},slot:"label"},[_c('div',{staticClass:"level-left"},[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),_c('div',{staticClass:"level-right"},[_vm._t("default")],2)]):_vm._e(),_vm._v(" "),_c('b-dropdown',{staticClass:"is-fullwidth"},[_c('div',{staticClass:"card is-clickable",attrs:{"slot":"trigger"},slot:"trigger"},[_c('div',{staticClass:"card-content"},[_c('div',{staticClass:"media"},[_c('div',{staticClass:"media-left"},[_c('avatar',{staticClass:"is-16x16",attrs:{"value":_vm.value ? _vm.value.profile.media : null}})],1),_vm._v(" "),_c('div',{staticClass:"media-content"},[_vm._v(_vm._s(_vm.value ? _vm.convertName(_vm.value) : "Find collaborator"))])])])]),_vm._v(" "),(!_vm.disabled)?_c('b-dropdown-item',{attrs:{"custom":""}},[_c('b-field',[_c('b-input',{attrs:{"icon":"search","placeholder":"Search"},on:{"input":_vm.handle_input}})],1)],1):_vm._e(),_vm._v(" "),_vm._l((_vm.response.results),function(p){return _c('b-dropdown-item',{key:p.id,staticClass:"media is-clickable",attrs:{"custom":""},nativeOn:{"click":function($event){return _vm.select(p)}}},[_c('div',{staticClass:"media-left"},[_c('avatar',{staticClass:"is-32x32",attrs:{"value":p.profile.media}})],1),_vm._v(" "),_c('div',{staticClass:"media-content"},[_vm._v(_vm._s(_vm.convertName(p)))]),_vm._v(" "),_c('div',{staticClass:"media-right"},[_c('b-icon',{attrs:{"icon":_vm.value && _vm.value.id === p.id ? 'square' : 'square-outline'}})],1)])})],2)],1)}
var Uservue_type_template_id_edba398a_staticRenderFns = []


// CONCATENATED MODULE: ./components/form/User.vue?vue&type=template&id=edba398a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/User.vue?vue&type=script&lang=js&
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



/* harmony default export */ var Uservue_type_script_lang_js_ = ({
  name: "PostSelector",
  components: {
    Avatar: Avatar["a" /* default */],
    BInput: Input["a" /* default */]
  },
  props: {
    label: String,
    query: {
      default: () => {
        return {};
      },
      type: Object
    },
    value: {},
    type: {
      default: 'plant',
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      response: {
        results: [],
        count: 0
      },
      page: 1
    };
  },

  methods: {
    async fetch(text) {
      this.response = await this.$axios.$get('/auth/users/', {
        search: text,
        ...this.query,
        page_size: 5,
        type: this.type,
        page: this.page
      });
    },

    handle_input: Object(external_lodash_["debounce"])(function (text) {
      if (!this.disabled) {
        this.fetch(text);
      }
    }, 800),

    select(p) {
      if (this.disabled) return;
      let data = p;

      if (this.value && p.id === this.value.id) {
        data = null;
      }

      this.$emit('input', data);
    }

  },
  watch: {
    "query.taxonomies": {
      deep: true,
      handler: function () {
        this.page = 1;
        this.fetch(null);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/form/User.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_Uservue_type_script_lang_js_ = (Uservue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/form/User.vue



function User_injectStyles (context) {
  
  var style0 = __webpack_require__(52)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var User_component = Object(componentNormalizer["a" /* default */])(
  form_Uservue_type_script_lang_js_,
  Uservue_type_template_id_edba398a_render,
  Uservue_type_template_id_edba398a_staticRenderFns,
  false,
  User_injectStyles,
  null,
  "30e52fe4"
  
)

/* harmony default export */ var User = (User_component.exports);
// CONCATENATED MODULE: ./plugins/component.js














external_vue_default.a.use(external_buefy_["Skeleton"]); // Vue.use(Tooltip);

external_vue_default.a.use(external_buefy_["Switch"]);
external_vue_default.a.use(external_buefy_["Dropdown"]);
external_vue_default.a.use(external_buefy_["Modal"]);
external_vue_default.a.use(external_buefy_["Snackbar"]);
external_vue_default.a.component('x-icon', Icon["a" /* default */]);
external_vue_default.a.component('ce', ContentEditable);
external_vue_default.a.component('b-tooltip', Tooltip);
external_vue_default.a.component('x-dropdown', Dropdown);
external_vue_default.a.component('b-rate', Rate);
external_vue_default.a.component('task-graph', TaskGraph);
external_vue_default.a.component('draggable', external_vuedraggable_default.a);
external_vue_default.a.component('time-chart', TimeChart);
external_vue_default.a.component('b-number-input', Numberinput);
external_vue_default.a.component('b-input', Input["a" /* default */]);
external_vue_default.a.component('task', Task);
external_vue_default.a.component('user-selector', User);
external_vue_default.a.config.devtools = true;
// CONCATENATED MODULE: ./plugins/generic.js



external_vue_default.a.mixin({
  methods: {
    cleanURI(url) {
      if (url) {
        return url.split("?")[0].split("#")[0];
      }

      return null;
    },

    convertName(user) {
      if (user.profile && user.profile['nick']) {
        return user.profile['nick'];
      }

      if (user.first_name || user.last_name) {
        return user.first_name + ' ' + user.last_name;
      }

      return user.username;
    },

    cleanData(data, fields) {
      let out = {};

      if (typeof fields === 'undefined') {
        fields = Object.keys(data);
      }

      fields.forEach(i => {
        if (typeof data[i] !== 'undefined') {
          if (['created', 'updated', 'start_date', 'due_date'].includes(i)) {
            out[i] = out[i];
          } else if (Array.isArray(data[i])) {
            out[i] = data[i].map(x => {
              return x.id ? x.id : x;
            });
          } else if (typeof data[i] === 'object' && data[i] && data[i].id) {
            out[i] = data[i].id;
          } else {
            out[i] = data[i];
          }
        }
      });
      return out;
    },

    cleanFilter(data, fields) {
      let out = {};

      if (typeof fields === 'undefined') {
        fields = Object.keys(data);
      }

      fields.forEach(i => {
        if (typeof data[i] !== 'undefined') {
          if (Array.isArray(data[i])) {
            out[i] = data[i].map(x => {
              if (x.id) return x.id;else if (x.value) return x.value;else return x;
            });
          } else if (typeof data[i] === 'object' && data[i] !== null) {
            if (data[i].id) {
              out[i] = data[i].id;
            } else if (typeof data[i].value !== 'undefined') {
              out[i] = data[i].value;
            } else out[i] = data[i];
          } else {
            out[i] = data[i];
          }
        }
      });
      return out;
    },

    fancyTimeFormat(time) {
      let h = ~~(time / 3600);
      let m = ~~(time % 3600 / 60);
      let s = ~~time % 60;

      if (h > 24) {
        return "00:00:00";
      }

      let ret = h < 10 ? "0" : "";
      ret += "" + h + ":" + (m < 10 ? "0" : "");
      ret += "" + m + ":" + (s < 10 ? "0" : "");
      ret += "" + s;
      return ret;
    },

    avatarName(name, length) {
      let matches = name.match(/\b(\w)/g);

      if (length) {
        return matches.join('').substr(0, length);
      }

      return matches.join('');
    },

    toTop(range = 0) {
      let myDiv = document.querySelector('.main-content .main');

      if (myDiv === null) {
        myDiv = document.getElementById('__nuxt');
      }

      myDiv.scrollTop = range;
      document.body.scrollTop = range;
      document.documentElement.scrollTop = range;
    },

    playSource(flag) {
      if (this[flag]) {
        this[flag].play();
      }
    },

    hierarchy(data = [], {
      idKey = 'id',
      parentKey = 'parentId',
      childrenKey = 'children'
    } = {}) {
      const tree = [];
      const childrenOf = {};
      data.forEach(item => {
        item = new plugins_task["a" /* Task */](item);
        if (typeof item.id === 'undefined') item['id'] = 0;
        const {
          [idKey]: id,
          [parentKey]: parentId = 0
        } = item;
        childrenOf[id] = childrenOf[id] || [];
        item[childrenKey] = childrenOf[id];
        parentId ? (childrenOf[parentId] = childrenOf[parentId] || []).push(item) : tree.push(item);
      });
      return tree;
    },

    getOffset(el) {
      let rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let point = {
        y: rect.top + scrollTop - 40,
        x: rect.left + scrollLeft
      };
      let points = [point, {
        x: point.x + rect.width / 2,
        y: point.y
      }, {
        x: point.x + rect.width,
        y: point.y
      }, {
        x: point.x + rect.width,
        y: point.y + rect.height / 2
      }, {
        x: point.x + rect.width,
        y: point.y + rect.height
      }, {
        x: point.x + rect.width / 2,
        y: point.y + rect.height
      }, {
        x: point.x,
        y: point.y + rect.height
      }, {
        x: point.x,
        y: point.y + rect.height / 2
      }];
      return {
        width: rect.width,
        height: rect.height,
        ...point,
        points,
        center: {
          x: point.x + rect.width / 2,
          y: point.y + rect.height / 2
        }
      };
    },

    openLogin(flag) {
      if (flag !== this.$store.state.auth.openAuth) {
        this.$store.commit('auth/SET_OPEN_AUTH', flag);
      }
    },

    navigate(url) {
      this.$router.replace({
        path: url
      }).then(() => {});
    },

    kind2Icon(kind) {
      const mapping = {
        "DEFAULT": "users",
        "GHOST": "earth"
      };
      return mapping[kind];
    },

    async join(board, password, force_out) {
      await this.$axios.$post(`/task/boards/${board.id}/join/`, {
        password: password,
        force_out
      }).then(res => {
        if (res.status) {
          let gb = this.$store.state.config.board;

          if (gb && gb.id === board.id) {
            this.$store.commit('config/SET_BOARD', null);
          } else {
            this.$store.commit('config/SET_BOARD', board);
            external_buefy_["SnackbarProgrammatic"].open({
              message: res.msg,
              type: 'is-success'
            });
          }
        } else {
          external_buefy_["SnackbarProgrammatic"].open({
            message: res.msg,
            type: 'is-warning'
          });
        }
      });
    }

  },
  computed: {
    currentUser: {
      get() {
        return this.$store.getters['auth/getUser'];
      },

      set() {}

    },

    audio_rang() {
      return new Audio("/sound/001.wav");
    },

    audio_press() {
      return new Audio("/sound/002.mp3");
    }

  }
});
// CONCATENATED MODULE: ./.nuxt/index.js












/* Plugins */

 // Source: ./workbox.js (mode: 'client')

 // Source: ./nuxt-icons.js (mode: 'all')

 // Source: ./cookie-universal-nuxt.js (mode: 'all')

 // Source: ./axios.js (mode: 'all')

 // Source: ../plugins/axios (mode: 'all')

 // Source: ../plugins/auth (mode: 'all')

 // Source: ../plugins/component (mode: 'all')

 // Source: ../plugins/generic (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;
const baseStoreOptions = {
  preserveState: false
};

function registerModule(path, rawModule, options = {}) {
  return originalRegisterModule.call(this, path, rawModule, { ...baseStoreOptions,
    ...options
  });
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  store.registerModule = registerModule; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "titleTemplate": "%s - Bubblask.com",
      "title": "Bubblask",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": "Bubblask is the flexible and easy app that use pomodoro technique to manage your time in working, studying. More over Bubblask help you improve the ability to estimate the time of work by analytic how you work!"
      }, {
        "hid": "mobile-web-app-capable",
        "name": "mobile-web-app-capable",
        "content": "yes"
      }, {
        "hid": "apple-mobile-web-app-title",
        "name": "apple-mobile-web-app-title",
        "content": "bubblask"
      }, {
        "hid": "author",
        "name": "author",
        "content": "lam"
      }, {
        "hid": "theme-color",
        "name": "theme-color",
        "content": "#FFF"
      }, {
        "hid": "og:type",
        "name": "og:type",
        "property": "og:type",
        "content": "website"
      }, {
        "hid": "og:title",
        "name": "og:title",
        "property": "og:title",
        "content": "bubblask"
      }, {
        "hid": "og:site_name",
        "name": "og:site_name",
        "property": "og:site_name",
        "content": "bubblask"
      }, {
        "hid": "og:description",
        "name": "og:description",
        "property": "og:description",
        "content": "Bubble Task"
      }],
      "link": [{
        "rel": "apple-touch-icon",
        "sizes": "57x57",
        "type": "image\u002Fx-icon",
        "href": "\u002Ficon\u002Fapple-icon-57x57.png"
      }, {
        "rel": "icon",
        "sizes": "96x96",
        "type": "image\u002Fpng",
        "href": "\u002Ficon\u002Ffavicon-96x96.png"
      }, {
        "rel": "icon",
        "sizes": "32x32",
        "type": "image\u002Fpng",
        "href": "\u002Ficon\u002Ffavicon-32x32.png"
      }, {
        "rel": "icon",
        "sizes": "16x16",
        "type": "image\u002Fpng",
        "href": "\u002Ficon\u002Ffavicon-16x16.png"
      }, {
        "rel": "manifest",
        "href": "\u002F_nuxt\u002Fmanifest.e00d1733.json"
      }, {
        "rel": "shortcut icon",
        "href": "\u002F_nuxt\u002Ficons\u002Ficon_64x64.5f6a36.png"
      }],
      "script": [{
        "src": "https:\u002F\u002Fjs.pusher.com\u002F6.0\u002Fpusher.min.js"
      }],
      "style": [],
      "htmlAttrs": {
        "lang": "en"
      }
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (false) {}

  if (typeof nuxt_icons === 'function') {
    await nuxt_icons(app.context, inject);
  }

  if (typeof cookie_universal_nuxt === 'function') {
    await cookie_universal_nuxt(app.context, inject);
  }

  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }

  if (typeof plugins_axios === 'function') {
    await plugins_axios(app.context, inject);
  }

  if (typeof auth === 'function') {
    await auth(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/component.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/component.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/generic.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/generic.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // If server-side, wait for async component to be resolved first


  if ( true && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, err => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err);
        if (err.type !== 2
        /* NavigationFailureType.redirected */
        ) return resolve(); // navigated to a different route in router guard

        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath;
          app.context.route = await getRouteData(to);
          app.context.params = to.params || {};
          app.context.query = to.query || {};
          unregister();
          resolve();
        });
      });
    });
  }

  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div')
});

function server_urlJoin() {
  return Array.prototype.slice.call(arguments).join('/').replace(/\/+/g, '/');
}

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  opts.query = Object(external_querystring_["stringify"])(opts.query);
  opts.path = opts.path + (opts.query ? '?' + opts.query : '');
  const routerBase = '/';

  if (!opts.path.startsWith('http') && routerBase !== '/' && !opts.path.startsWith(routerBase)) {
    opts.path = server_urlJoin(routerBase, opts.path);
  } // Avoid loop redirect


  if (opts.path === ssrContext.url) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: opts.path
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: [],
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  }; // Remove query from url is static target

  if (false) {} // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public; // Create the app definition and the instance (created for each request)

  const {
    app,
    router,
    store
  } = await createApp(ssrContext, { ...ssrContext.runtimeConfig.public,
    ...ssrContext.runtimeConfig.private
  });

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(router.match(ssrContext.url));
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("@svgdotjs/svg.js");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map