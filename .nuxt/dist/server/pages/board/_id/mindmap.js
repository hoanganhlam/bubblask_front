exports.ids = [3];
exports.modules = {

/***/ 57:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/taginput/Taginput.vue?vue&type=template&id=b2563074&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"taginput control",class:_vm.rootClasses},[_vm._ssrNode("<div"+(_vm._ssrAttr("disabled",_vm.disabled))+(_vm._ssrClass("taginput-container",[_vm.statusType, _vm.size, _vm.containerClasses]))+">","</div>",[_vm._l((_vm.tags),function(tag,index){return _c('b-tag',{key:index,attrs:{"type":_vm.type,"size":_vm.size,"rounded":_vm.rounded,"attached":_vm.attached,"tabstop":false,"disabled":_vm.disabled,"ellipsis":_vm.ellipsis,"closable":_vm.closable,"title":_vm.ellipsis && _vm.getNormalizedTagText(tag)},on:{"close":function($event){return _vm.removeTag(index)}}},[_vm._v("\n            "+_vm._s(_vm.getNormalizedTagText(tag))+"\n        ")])}),_vm._ssrNode(" "),(_vm.hasInput)?_c('b-autocomplete',_vm._b({ref:"autocomplete",attrs:{"data":_vm.data,"field":_vm.field,"icon":_vm.icon,"icon-pack":_vm.iconPack,"maxlength":_vm.maxlength,"has-counter":false,"size":_vm.size,"disabled":_vm.disabled,"loading":_vm.loading,"autocomplete":_vm.nativeAutocomplete,"keep-first":!_vm.allowNew,"use-html5-validation":_vm.useHtml5Validation,"check-infinite-scroll":_vm.checkInfiniteScroll},on:{"typing":_vm.onTyping,"focus":_vm.onFocus,"blur":_vm.customOnBlur,"select":_vm.onSelect,"infinite-scroll":_vm.emitInfiniteScroll},nativeOn:{"keydown":function($event){return _vm.keydown($event)}},scopedSlots:_vm._u([{key:_vm.defaultSlotName,fn:function(props){return [_vm._t("default",null,{"option":props.option,"index":props.index})]}}],null,true),model:{value:(_vm.newTag),callback:function ($$v) {_vm.newTag=$$v},expression:"newTag"}},'b-autocomplete',_vm.$attrs,false),[_c('template',{slot:_vm.headerSlotName},[_vm._t("header")],2),_vm._v(" "),_vm._v(" "),_c('template',{slot:_vm.emptySlotName},[_vm._t("empty")],2),_vm._v(" "),_c('template',{slot:_vm.footerSlotName},[_vm._t("footer")],2)],2):_vm._e()],2),_vm._ssrNode(" "+((_vm.hasCounter && (_vm.maxtags || _vm.maxlength))?("<small class=\"help counter\">"+((_vm.maxlength && _vm.valueLength > 0)?(_vm._ssrEscape("\n            "+_vm._s(_vm.valueLength)+" / "+_vm._s(_vm.maxlength)+"\n        ")):(_vm.maxtags)?(_vm._ssrEscape("\n            "+_vm._s(_vm.tagsLength)+" / "+_vm._s(_vm.maxtags)+"\n        ")):"<!---->")+"</small>"):"<!---->"))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/taginput/Taginput.vue?vue&type=template&id=b2563074&

// CONCATENATED MODULE: ./components/utils/helpers.js
/**
 * +/- function to native math sign
 */
function signPoly(value) {
  if (value < 0) return -1;
  return value > 0 ? 1 : 0;
}

const sign = Math.sign || signPoly;
/**
 * Get value of an object property/path even if it's nested
 */

function getValueByPath(obj, path) {
  const value = path.split('.').reduce((o, i) => o ? o[i] : null, obj);
  return value;
}
/**
 * Extension of indexOf method by equality function if specified
 */

function indexOf(array, obj, fn) {
  if (!array) return -1;
  if (!fn || typeof fn !== 'function') return array.indexOf(obj);

  for (let i = 0; i < array.length; i++) {
    if (fn(array[i], obj)) {
      return i;
    }
  }

  return -1;
}
/**
 * Merge function to replace Object.assign with deep merging possibility
 */

const isObject = item => typeof item === 'object' && !Array.isArray(item);

const mergeFn = (target, source, deep = false) => {
  if (deep || !Object.assign) {
    const isDeep = prop => isObject(source[prop]) && target !== null && target.hasOwnProperty(prop) && isObject(target[prop]);

    const replaced = Object.getOwnPropertyNames(source).map(prop => ({
      [prop]: isDeep(prop) ? mergeFn(target[prop], source[prop], deep) : source[prop]
    })).reduce((a, b) => ({ ...a,
      ...b
    }), {});
    return { ...target,
      ...replaced
    };
  } else {
    return Object.assign(target, source);
  }
};

const merge = mergeFn;
/**
 * Mobile detection
 * https://www.abeautifulsite.net/detecting-mobile-devices-with-javascript
 */

const isMobile = {
  Android: function () {
    return typeof window !== 'undefined' && window.navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return typeof window !== 'undefined' && window.navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return typeof window !== 'undefined' && window.navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return typeof window !== 'undefined' && window.navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return typeof window !== 'undefined' && window.navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  }
};
function removeElement(el) {
  if (typeof el.remove !== 'undefined') {
    el.remove();
  } else if (typeof el.parentNode !== 'undefined' && el.parentNode !== null) {
    el.parentNode.removeChild(el);
  }
}
/**
 * Escape regex characters
 * http://stackoverflow.com/a/6969486
 */

function escapeRegExpChars(value) {
  if (!value) return value; // eslint-disable-next-line

  return value.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/tag/Tag.vue?vue&type=template&id=4907a085&
var Tagvue_type_template_id_4907a085_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.attached && _vm.closable)?_c('div',{staticClass:"tags has-addons"},[_vm._ssrNode("<span"+(_vm._ssrClass("tag",[_vm.type, _vm.size, { 'is-rounded': _vm.rounded }]))+">","</span>",[_vm._ssrNode("<span"+(_vm._ssrClass(null,{ 'has-ellipsis': _vm.ellipsis }))+">","</span>",[_vm._t("default")],2)]),_vm._ssrNode(" <a role=\"button\""+(_vm._ssrAttr("aria-label",_vm.ariaCloseLabel))+(_vm._ssrAttr("tabindex",_vm.tabstop ? 0 : false))+(_vm._ssrAttr("disabled",_vm.disabled))+(_vm._ssrClass("tag is-delete",[_vm.size, { 'is-rounded': _vm.rounded }]))+"></a>")],2):_c('span',{staticClass:"tag",class:[_vm.type, _vm.size, { 'is-rounded': _vm.rounded }]},[_vm._ssrNode("<span"+(_vm._ssrClass(null,{ 'has-ellipsis': _vm.ellipsis }))+">","</span>",[_vm._t("default")],2),_vm._ssrNode(" "+((_vm.closable)?("<a role=\"button\""+(_vm._ssrAttr("aria-label",_vm.ariaCloseLabel))+(_vm._ssrAttr("disabled",_vm.disabled))+(_vm._ssrAttr("tabindex",_vm.tabstop ? 0 : false))+" class=\"delete is-small\"></a>"):"<!---->"))],2)}
var Tagvue_type_template_id_4907a085_staticRenderFns = []


// CONCATENATED MODULE: ./components/tag/Tag.vue?vue&type=template&id=4907a085&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/tag/Tag.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Tagvue_type_script_lang_js_ = ({
  name: 'BTag',
  props: {
    attached: Boolean,
    closable: Boolean,
    type: String,
    size: String,
    rounded: Boolean,
    disabled: Boolean,
    ellipsis: Boolean,
    tabstop: {
      type: Boolean,
      default: true
    },
    ariaCloseLabel: String
  },
  methods: {
    /**
    * Emit close event when delete button is clicked
    * or delete key is pressed.
    */
    close() {
      if (this.disabled) return;
      this.$emit('close');
    }

  }
});
// CONCATENATED MODULE: ./components/tag/Tag.vue?vue&type=script&lang=js&
 /* harmony default export */ var tag_Tagvue_type_script_lang_js_ = (Tagvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/tag/Tag.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tag_Tagvue_type_script_lang_js_,
  Tagvue_type_template_id_4907a085_render,
  Tagvue_type_template_id_4907a085_staticRenderFns,
  false,
  null,
  null,
  "777449bd"
  
)

/* harmony default export */ var Tag = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/autocomplete/Autocomplete.vue?vue&type=template&id=2e994ce8&
var Autocompletevue_type_template_id_2e994ce8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"autocomplete control",class:{'is-expanded': _vm.expanded}},[_c('b-input',_vm._b({ref:"input",attrs:{"type":"text","size":_vm.size,"loading":_vm.loading,"rounded":_vm.rounded,"icon":_vm.icon,"icon-pack":_vm.iconPack,"maxlength":_vm.maxlength,"autocomplete":_vm.newAutocomplete,"use-html5-validation":_vm.useHtml5Validation},on:{"input":_vm.onInput,"focus":_vm.focused,"blur":_vm.onBlur},nativeOn:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }$event.preventDefault();_vm.isActive = false},"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }return _vm.tabPressed($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();return _vm.enterPressed($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }$event.preventDefault();return _vm.keyArrows('up')},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();return _vm.keyArrows('down')}]},model:{value:(_vm.newValue),callback:function ($$v) {_vm.newValue=$$v},expression:"newValue"}},'b-input',_vm.$attrs,false)),_vm._ssrNode(" "),_c('transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActive && (_vm.data.length > 0 || _vm.hasEmptySlot || _vm.hasHeaderSlot)),expression:"isActive && (data.length > 0 || hasEmptySlot || hasHeaderSlot)"}],ref:"dropdown",staticClass:"dropdown-menu",class:{ 'is-opened-top': !_vm.isListInViewportVertically }},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActive),expression:"isActive"}],staticClass:"dropdown-content"},[(_vm.hasHeaderSlot)?_c('div',{staticClass:"dropdown-item"},[_vm._t("header")],2):_vm._e(),_vm._v(" "),_vm._l((_vm.data),function(option,index){return _c('a',{key:index,staticClass:"dropdown-item",class:{ 'is-hovered': option === _vm.hovered },on:{"click":function($event){return _vm.setSelected(option)}}},[(_vm.hasDefaultSlot)?_vm._t("default",null,{"option":option,"index":index}):_c('span',[_vm._v("\n                        "+_vm._s(_vm.getValue(option, true))+"\n                    ")])],2)}),_vm._v(" "),(_vm.data.length === 0 && _vm.hasEmptySlot)?_c('div',{staticClass:"dropdown-item is-disabled"},[_vm._t("empty")],2):_vm._e(),_vm._v(" "),(_vm.hasFooterSlot)?_c('div',{staticClass:"dropdown-item"},[_vm._t("footer")],2):_vm._e()],2)])])],2)}
var Autocompletevue_type_template_id_2e994ce8_staticRenderFns = []


// CONCATENATED MODULE: ./components/autocomplete/Autocomplete.vue?vue&type=template&id=2e994ce8&

// EXTERNAL MODULE: ./components/utils/FormElementMixin.js
var FormElementMixin = __webpack_require__(9);

// EXTERNAL MODULE: ./components/input/Input.vue + 4 modules
var Input = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/autocomplete/Autocomplete.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Autocompletevue_type_script_lang_js_ = ({
  name: 'BAutocomplete',
  components: {
    [Input["a" /* default */].name]: Input["a" /* default */]
  },
  mixins: [FormElementMixin["a" /* default */]],
  inheritAttrs: false,
  props: {
    value: [Number, String],
    data: {
      type: Array,
      default: () => []
    },
    field: {
      type: String,
      default: 'value'
    },
    keepFirst: Boolean,
    clearOnSelect: Boolean,
    openOnFocus: Boolean,
    customFormatter: Function,
    checkInfiniteScroll: Boolean
  },

  data() {
    return {
      selected: null,
      hovered: null,
      isActive: false,
      newValue: this.value,
      newAutocomplete: this.autocomplete || 'off',
      isListInViewportVertically: true,
      hasFocus: false,
      _isAutocomplete: true,
      _elementRef: 'input'
    };
  },

  computed: {
    /**
     * White-listed items to not close when clicked.
     * Add input, dropdown and all children.
     */
    whiteList() {
      const whiteList = [];
      whiteList.push(this.$refs.input.$el.querySelector('input'));
      whiteList.push(this.$refs.dropdown); // Add all chidren from dropdown

      if (this.$refs.dropdown !== undefined) {
        const children = this.$refs.dropdown.querySelectorAll('*');

        for (const child of children) {
          whiteList.push(child);
        }
      }

      if (this.$parent.$data._isTaginput) {
        // Add taginput container
        whiteList.push(this.$parent.$el); // Add .tag and .delete

        const tagInputChildren = this.$parent.$el.querySelectorAll('*');

        for (const tagInputChild of tagInputChildren) {
          whiteList.push(tagInputChild);
        }
      }

      return whiteList;
    },

    /**
     * Check if exists default slot
     */
    hasDefaultSlot() {
      return !!this.$scopedSlots.default;
    },

    /**
     * Check if exists "empty" slot
     */
    hasEmptySlot() {
      return !!this.$slots.empty;
    },

    /**
     * Check if exists "header" slot
     */
    hasHeaderSlot() {
      return !!this.$slots.header;
    },

    /**
     * Check if exists "footer" slot
     */
    hasFooterSlot() {
      return !!this.$slots.footer;
    }

  },
  watch: {
    /**
     * When dropdown is toggled, check the visibility to know when
     * to open upwards.
     */
    isActive(active) {
      if (active) {
        this.calcDropdownInViewportVertical();
      } else {
        this.$nextTick(() => this.setHovered(null)); // Timeout to wait for the animation to finish before recalculating

        setTimeout(() => {
          this.calcDropdownInViewportVertical();
        }, 100);
      }
    },

    /**
     * When updating input's value
     *   1. Emit changes
     *   2. If value isn't the same as selected, set null
     *   3. Close dropdown if value is clear or else open it
     */
    newValue(value) {
      this.$emit('input', value); // Check if selected is invalid

      const currentValue = this.getValue(this.selected);

      if (currentValue && currentValue !== value) {
        this.setSelected(null, false);
      } // Close dropdown if input is clear or else open it


      if (this.hasFocus && (!this.openOnFocus || value)) {
        this.isActive = !!value;
      }
    },

    /**
     * When v-model is changed:
     *   1. Update internal value.
     *   2. If it's invalid, validate again.
     */
    value(value) {
      this.newValue = value;
      !this.isValid && this.$refs.input.checkHtml5Validity();
    },

    /**
     * Select first option if "keep-first
     */
    data(value) {
      // Keep first option always pre-selected
      if (this.keepFirst) {
        this.selectFirstOption(value);
      }
    }

  },
  methods: {
    /**
     * Set which option is currently hovered.
     */
    setHovered(option) {
      if (option === undefined) return;
      this.hovered = option;
    },

    /**
     * Set which option is currently selected, update v-model,
     * update input value and close dropdown.
     */
    setSelected(option, closeDropdown = true) {
      if (option === undefined) return;
      this.selected = option;
      this.$emit('select', this.selected);

      if (this.selected !== null) {
        this.newValue = this.clearOnSelect ? '' : this.getValue(this.selected);
      }

      closeDropdown && this.$nextTick(() => {
        this.isActive = false;
      });
    },

    /**
     * Select first option
     */
    selectFirstOption(options) {
      this.$nextTick(() => {
        if (options.length) {
          // If has visible data or open on focus, keep updating the hovered
          if (this.openOnFocus || this.newValue !== '' && this.hovered !== options[0]) {
            this.setHovered(options[0]);
          }
        } else {
          this.setHovered(null);
        }
      });
    },

    /**
     * Enter key listener.
     * Select the hovered option.
     */
    enterPressed() {
      if (this.hovered === null) return;
      this.setSelected(this.hovered);
    },

    /**
     * Tab key listener.
     * Select hovered option if it exists, close dropdown, then allow
     * native handling to move to next tabbable element.
     */
    tabPressed() {
      if (this.hovered === null) {
        this.isActive = false;
        return;
      }

      this.setSelected(this.hovered);
    },

    /**
     * Close dropdown if clicked outside.
     */
    clickedOutside(event) {
      if (this.whiteList.indexOf(event.target) < 0) this.isActive = false;
    },

    /**
     * Return display text for the input.
     * If object, get value from path, or else just the value.
     */
    getValue(option) {
      if (option === null) return;

      if (typeof this.customFormatter !== 'undefined') {
        return this.customFormatter(option);
      }

      return typeof option === 'object' ? getValueByPath(option, this.field) : option;
    },

    /**
     * Check if the scroll list inside the dropdown
     * reached it's end.
     */
    checkIfReachedTheEndOfScroll(list) {
      if (list.clientHeight !== list.scrollHeight && list.scrollTop + list.clientHeight >= list.scrollHeight) {
        this.$emit('infinite-scroll');
      }
    },

    /**
     * Calculate if the dropdown is vertically visible when activated,
     * otherwise it is openened upwards.
     */
    calcDropdownInViewportVertical() {
      this.$nextTick(() => {
        /**
        * this.$refs.dropdown may be undefined
        * when Autocomplete is conditional rendered
        */
        if (this.$refs.dropdown === undefined) return;
        const rect = this.$refs.dropdown.getBoundingClientRect();
        this.isListInViewportVertically = rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
      });
    },

    /**
     * Arrows keys listener.
     * If dropdown is active, set hovered option, or else just open.
     */
    keyArrows(direction) {
      const sum = direction === 'down' ? 1 : -1;

      if (this.isActive) {
        let index = this.data.indexOf(this.hovered) + sum;
        index = index > this.data.length - 1 ? this.data.length : index;
        index = index < 0 ? 0 : index;
        this.setHovered(this.data[index]);
        const list = this.$refs.dropdown.querySelector('.dropdown-content');
        const element = list.querySelectorAll('a.dropdown-item:not(.is-disabled)')[index];
        if (!element) return;
        const visMin = list.scrollTop;
        const visMax = list.scrollTop + list.clientHeight - element.clientHeight;

        if (element.offsetTop < visMin) {
          list.scrollTop = element.offsetTop;
        } else if (element.offsetTop >= visMax) {
          list.scrollTop = element.offsetTop - list.clientHeight + element.clientHeight;
        }
      } else {
        this.isActive = true;
      }
    },

    /**
     * Focus listener.
     * If value is the same as selected, select all text.
     */
    focused(event) {
      if (this.getValue(this.selected) === this.newValue) {
        this.$el.querySelector('input').select();
      }

      if (this.openOnFocus) {
        this.isActive = true;

        if (this.keepFirst) {
          this.selectFirstOption(this.data);
        }
      }

      this.hasFocus = true;
      this.$emit('focus', event);
    },

    /**
    * Blur listener.
    */
    onBlur(event) {
      this.hasFocus = false;
      this.$emit('blur', event);
    },

    onInput(event) {
      const currentValue = this.getValue(this.selected);
      if (currentValue && currentValue === this.newValue) return;
      this.$emit('typing', this.newValue);
    }

  },

  created() {
    if (typeof window !== 'undefined') {
      document.addEventListener('click', this.clickedOutside);
      window.addEventListener('resize', this.calcDropdownInViewportVertical);
    }
  },

  mounted() {
    if (this.checkInfiniteScroll && this.$refs.dropdown && this.$refs.dropdown.querySelector('.dropdown-content')) {
      const list = this.$refs.dropdown.querySelector('.dropdown-content');
      list.addEventListener('scroll', () => this.checkIfReachedTheEndOfScroll(list));
    }
  },

  beforeDestroy() {
    if (typeof window !== 'undefined') {
      document.removeEventListener('click', this.clickedOutside);
      window.removeEventListener('resize', this.calcDropdownInViewportVertical);
    }

    if (this.checkInfiniteScroll && this.$refs.dropdown && this.$refs.dropdown.querySelector('.dropdown-content')) {
      const list = this.$refs.dropdown.querySelector('.dropdown-content');
      list.removeEventListener('scroll', this.checkIfReachedTheEndOfScroll);
    }
  }

});
// CONCATENATED MODULE: ./components/autocomplete/Autocomplete.vue?vue&type=script&lang=js&
 /* harmony default export */ var autocomplete_Autocompletevue_type_script_lang_js_ = (Autocompletevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/autocomplete/Autocomplete.vue





/* normalize component */

var Autocomplete_component = Object(componentNormalizer["a" /* default */])(
  autocomplete_Autocompletevue_type_script_lang_js_,
  Autocompletevue_type_template_id_2e994ce8_render,
  Autocompletevue_type_template_id_2e994ce8_staticRenderFns,
  false,
  null,
  null,
  "177237f2"
  
)

/* harmony default export */ var Autocomplete = (Autocomplete_component.exports);
// EXTERNAL MODULE: ./components/utils/config.js
var config = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/taginput/Taginput.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var Taginputvue_type_script_lang_js_ = ({
  name: 'BTaginput',
  components: {
    [Autocomplete.name]: Autocomplete,
    [Tag.name]: Tag
  },
  mixins: [FormElementMixin["a" /* default */]],
  inheritAttrs: false,
  props: {
    value: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    },
    type: String,
    rounded: {
      type: Boolean,
      default: false
    },
    attached: {
      type: Boolean,
      default: false
    },
    maxtags: {
      type: [Number, String],
      required: false
    },
    hasCounter: {
      type: Boolean,
      default: () => config["a" /* default */].defaultTaginputHasCounter
    },
    field: {
      type: String,
      default: 'value'
    },
    autocomplete: Boolean,
    nativeAutocomplete: String,
    disabled: Boolean,
    ellipsis: Boolean,
    closable: {
      type: Boolean,
      default: true
    },
    confirmKeyCodes: {
      type: Array,
      default: () => [13, 188]
    },
    removeOnKeys: {
      type: Array,
      default: () => [8]
    },
    allowNew: Boolean,
    onPasteSeparators: {
      type: Array,
      default: () => [',']
    },
    beforeAdding: {
      type: Function,
      default: () => true
    },
    allowDuplicates: {
      type: Boolean,
      default: false
    },
    checkInfiniteScroll: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      tags: Array.isArray(this.value) ? this.value.slice(0) : this.value || [],
      newTag: '',
      _elementRef: 'input',
      _isTaginput: true
    };
  },

  computed: {
    rootClasses() {
      return {
        'is-expanded': this.expanded
      };
    },

    containerClasses() {
      return {
        'is-focused': this.isFocused,
        'is-focusable': this.hasInput
      };
    },

    valueLength() {
      return this.newTag.trim().length;
    },

    defaultSlotName() {
      return this.hasDefaultSlot ? 'default' : 'dontrender';
    },

    emptySlotName() {
      return this.hasEmptySlot ? 'empty' : 'dontrender';
    },

    headerSlotName() {
      return this.hasHeaderSlot ? 'header' : 'dontrender';
    },

    footerSlotName() {
      return this.hasFooterSlot ? 'footer' : 'dontrender';
    },

    hasDefaultSlot() {
      return !!this.$scopedSlots.default;
    },

    hasEmptySlot() {
      return !!this.$slots.empty;
    },

    hasHeaderSlot() {
      return !!this.$slots.header;
    },

    hasFooterSlot() {
      return !!this.$slots.footer;
    },

    /**
     * Show the input field if a maxtags hasn't been set or reached.
     */
    hasInput() {
      return this.maxtags == null || this.tagsLength < this.maxtags;
    },

    tagsLength() {
      return this.tags.length;
    },

    /**
     * If Taginput has onPasteSeparators prop,
     * returning new RegExp used to split pasted string.
     */
    separatorsAsRegExp() {
      const sep = this.onPasteSeparators;
      return sep.length ? new RegExp(sep.map(s => {
        return s ? s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') : null;
      }).join('|'), 'g') : null;
    }

  },
  watch: {
    /**
     * When v-model is changed set internal value.
     */
    value(value) {
      this.tags = value;
    },

    hasInput() {
      if (!this.hasInput) this.onBlur();
    }

  },
  methods: {
    addTag(tag) {
      const tagToAdd = tag || this.newTag.trim();

      if (tagToAdd) {
        if (!this.autocomplete) {
          const reg = this.separatorsAsRegExp;

          if (reg && tagToAdd.match(reg)) {
            tagToAdd.split(reg).map(t => t.trim()).filter(t => t.length !== 0).map(this.addTag);
            return;
          }
        } // Add the tag input if it is not blank
        // or previously added (if not allowDuplicates).


        const add = !this.allowDuplicates ? this.tags.indexOf(tagToAdd) === -1 : true;

        if (add && this.beforeAdding(tagToAdd)) {
          this.tags.push(tagToAdd);
          this.$emit('input', this.tags);
          this.$emit('add', tagToAdd);
        }
      }

      this.newTag = '';
    },

    getNormalizedTagText(tag) {
      if (typeof tag === 'object') {
        return getValueByPath(tag, this.field);
      }

      return tag;
    },

    customOnBlur($event) {
      // Add tag on-blur if not select only
      if (!this.autocomplete) this.addTag();
      this.onBlur($event);
    },

    onSelect(option) {
      if (!option) return;
      this.addTag(option);
      this.$nextTick(() => {
        this.newTag = '';
      });
    },

    removeTag(index) {
      const tag = this.tags.splice(index, 1)[0];
      this.$emit('input', this.tags);
      this.$emit('remove', tag);
      return tag;
    },

    removeLastTag() {
      if (this.tagsLength > 0) {
        this.removeTag(this.tagsLength - 1);
      }
    },

    keydown(event) {
      if (this.removeOnKeys.indexOf(event.keyCode) !== -1 && !this.newTag.length) {
        this.removeLastTag();
      } // Stop if is to accept select only


      if (this.autocomplete && !this.allowNew) return;

      if (this.confirmKeyCodes.indexOf(event.keyCode) >= 0) {
        event.preventDefault();
        this.addTag();
      }
    },

    onTyping($event) {
      this.$emit('typing', $event.trim());
    },

    emitInfiniteScroll() {
      this.$emit('infinite-scroll');
    }

  }
});
// CONCATENATED MODULE: ./components/taginput/Taginput.vue?vue&type=script&lang=js&
 /* harmony default export */ var taginput_Taginputvue_type_script_lang_js_ = (Taginputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/taginput/Taginput.vue





/* normalize component */

var Taginput_component = Object(componentNormalizer["a" /* default */])(
  taginput_Taginputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9fa52ef2"
  
)

/* harmony default export */ var Taginput = __webpack_exports__["a"] = (Taginput_component.exports);

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mindmap_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mindmap_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mindmap_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mindmap_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mindmap_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mindmap_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/board/_id/mindmap.vue?vue&type=template&id=424f695c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"visual",staticClass:"visual",attrs:{"id":"visual"}},[_vm._ssrNode("<div id=\"vs-background\" class=\"background\"></div> "),_vm._ssrNode("<div class=\"wrapper\">","</div>",_vm._l((_vm.tasks),function(task){return _c('task-graph',{key:task.id,attrs:{"readonly":"","value":task},on:{"down":_vm.mouse_down,"add":_vm.handle_add_child,"board-update":_vm.openBoardModal,"deleted":_vm.handle_delete_task}})}),1),_vm._ssrNode(" "),_c('b-modal',{attrs:{"active":_vm.activeBoardUpdate,"scroll":"keep"},on:{"update:active":function($event){_vm.activeBoardUpdate=$event}}},[_c('div',{staticClass:"modal-card",staticStyle:{"width":"auto"}},[_c('header',{staticClass:"modal-card-head"},[_c('div',{staticClass:"level is-mobile",staticStyle:{"width":"100%"}},[_c('h4',{staticClass:"level-left"},[_vm._v("Board Setting")]),_vm._v(" "),_c('div',{staticClass:"level-right"},[_c('button',{staticClass:"button is-small",attrs:{"type":"button"},on:{"click":function($event){_vm.activeBoardUpdate = false}}},[_vm._v("Cancel\n                        ")])])])]),_vm._v(" "),_c('section',{staticClass:"modal-card-body"},[(_vm.boardF)?_c('div',[_c('div',{staticClass:"field"},[_c('ce',{staticClass:"title",attrs:{"elm":"h1","placeholder":"Board title"},model:{value:(_vm.boardF.title),callback:function ($$v) {_vm.$set(_vm.boardF, "title", $$v)},expression:"boardF.title"}})],1),_vm._v(" "),_c('div',{staticClass:"field"},[_c('b-input',{attrs:{"placeholder":"Board title"},model:{value:(_vm.boardF.slug),callback:function ($$v) {_vm.$set(_vm.boardF, "slug", $$v)},expression:"boardF.slug"}})],1),_vm._v(" "),_c('div',{staticClass:"field"},[_c('ce',{staticClass:"notification is-light",attrs:{"elm":"div","placeholder":"description"},model:{value:(_vm.boardF.description),callback:function ($$v) {_vm.$set(_vm.boardF, "description", $$v)},expression:"boardF.description"}})],1),_vm._v(" "),_c('div',{staticClass:"field"},[_c('b-switch',{model:{value:(_vm.boardF.is_interface),callback:function ($$v) {_vm.$set(_vm.boardF, "is_interface", $$v)},expression:"boardF.is_interface"}},[_vm._v("Template")])],1),_vm._v(" "),_c('div',{staticClass:"field"},[_c('b-taginput',{attrs:{"placeholder":"Hash tag"},model:{value:(_vm.boardF.text_tags),callback:function ($$v) {_vm.$set(_vm.boardF, "text_tags", $$v)},expression:"boardF.text_tags"}})],1)]):_vm._e()]),_vm._v(" "),_c('footer',{staticClass:"modal-card-foot"},[_c('button',{staticClass:"button is-primary",on:{"click":_vm.saveBoard}},[_vm._v("Save")])])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/board/_id/mindmap.vue?vue&type=template&id=424f695c&

// EXTERNAL MODULE: external "@svgdotjs/svg.js"
var svg_js_ = __webpack_require__(54);

// EXTERNAL MODULE: ./plugins/task.js
var plugins_task = __webpack_require__(5);

// EXTERNAL MODULE: ./components/input/Input.vue + 4 modules
var Input = __webpack_require__(7);

// EXTERNAL MODULE: ./components/taginput/Taginput.vue + 15 modules
var Taginput = __webpack_require__(60);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/board/_id/mindmap.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/* harmony default export */ var mindmapvue_type_script_lang_js_ = ({
  name: "visual",
  components: {
    BTaginput: Taginput["a" /* default */],
    BInput: Input["a" /* default */]
  },

  async asyncData({
    $axios,
    params
  }) {
    let board = null;
    let query = {};

    if (params.id !== 'visual') {
      board = await $axios.$get(`/task/boards/${params.id}/`);
      query.board = board.id;
    }

    let flat_tasks = await $axios.$get('/task/tasks/', {
      params: query
    });
    return {
      flat_tasks,
      board: board
    };
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
    };
  },

  methods: {
    listenerDown(e) {
      if (this.movingTask === null) {
        this.mouse_down({
          e
        });
      }
    },

    listenerUp(e) {
      this.startMove = false;
      this.offset = [];
      this.movingTask = null;
    },

    mouse_down({
      e,
      task
    }) {
      if (typeof task === "undefined") {
        this.movingTask = this.tasks[0];
      } else {
        this.movingTask = task;
      }

      let x = document.getElementById(`task-${this.movingTask.id}`);
      let elm = x.parentElement;
      this.startMove = true;
      this.offset = [elm.offsetLeft - e.clientX, elm.offsetTop - e.clientY];
      this.draw(this.movingTask);
    },

    mouse_move(event) {
      if (this.startMove && this.movingTask) {
        let elm = document.getElementById(`task-${this.movingTask.id}`).parentElement;
        event.preventDefault();
        let mousePosition = {
          x: event.clientX,
          y: event.clientY
        };

        if (typeof this.settings[`T${this.movingTask.id}`] === 'undefined') {
          this.$set(this.settings, `T${this.movingTask.id}`, {});
        }

        let left = mousePosition.x + this.offset[0];
        let top = mousePosition.y + this.offset[1];
        this.$set(this.settings[`T${this.movingTask.id}`], `left`, left);
        this.$set(this.settings[`T${this.movingTask.id}`], `top`, top);

        if (mousePosition.x <= 0 || mousePosition.y <= 0) {
          return;
        }

        elm.style.left = left + 'px';
        elm.style.top = top + 'px';
        this.draw(this.movingTask);
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
        let setting = this.settings[`T${task.id}`];
        let p1c = setting ? setting.p1c : 5;
        let p2c = setting ? setting.p2c : 1;
        let arrow = setting ? setting.arrow : 'bottom';
        let vertical = setting ? setting.vertical : false;

        if (pc.center.x < pp.points[0].x) {
          if (pc.center.y > pp.points[0].y && pc.center.y < pp.points[6].y) {
            vertical = false;
            p1c = 7;
            p2c = 3;
          }
        } else if (pc.center.x > pp.points[0].x && pc.center.x < pp.points[2].x) {
          if (pc.center.y < pp.points[0].y) {
            vertical = true;
            p1c = 1;
            p2c = 5;
          } else if (pc.center.y > pp.points[6].y) {
            vertical = true;
            p1c = 5;
            p2c = 1;
          }
        } else {
          if (pc.center.y > pp.points[0].y && pc.center.y < pp.points[6].y) {
            p1c = 3;
            p2c = 7;
            vertical = false;
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
        }; // Save setting

        if (typeof this.settings[`T${task.id}`] === 'undefined') {
          this.$set(this.settings, `T${task.id}`, {});
        }

        this.$set(this.settings[`T${task.id}`], `p1c`, p1c);
        this.$set(this.settings[`T${task.id}`], `p2c`, p2c);
        this.$set(this.settings[`T${task.id}`], `arrow`, arrow);
        this.$set(this.settings[`T${task.id}`], `vertical`, vertical);
        if (line) line.remove(); // DRAW

        this.lines[`task-${task.id}`] = this.drawing.path(`M ${p1.x} ${p1.y} L${p11.x} ${p11.y} L${p21.x} ${p21.y} L${p2.x} ${p2.y}`).stroke({
          color: '#cccccc',
          width: 2,
          linecap: 'round',
          dasharray: 8.3
        }).fill("transparent");
        this.lines[`task-${task.id}`].attr('marker-end', `url(#arrow-${arrow})`);
      }

      if (task.children) {
        task.children.forEach(child => {
          this.draw(child);
        });
      }
    },

    initDraw(tasks) {
      if (tasks) {
        tasks.forEach(task => {
          this.draw(task);
          this.initDraw(task.children);
        });
      }
    },

    saveSetting: _.debounce(function () {
      if (this.board) {
        this.$axios.$put(`/task/boards/${this.board.slug}/`, {
          task_graph_setting: this.settings
        });
      } else {
        this.$axios.$put(`/auth/users/${this.currentUser.username}/`, {
          task_graph_setting: this.settings
        }).then(() => {
          this.$store.commit('config/SET_SETTING_GRAPH', _.cloneDeep(this.settings));
        });
      }
    }, 1000),

    async handle_add_child(task) {
      let instance = await this.$axios.$post("/task/tasks/", task);
      this.flat_tasks.push(instance);
      this.init();

      if (this.board === null) {
        instance = new plugins_task["a" /* Task */](instance);
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
            out.concat(find_all(t, out));
          });
        }

        return out;
      };

      let deleted_tasks = find_all(task, []);

      for (let i = 0; i < deleted_tasks.length; i++) {
        let t = deleted_tasks[i];

        if (i > 0) {
          await this.$axios.$delete(`/task/tasks/${t.id}/`);
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
      let tree_tasks = this.hierarchy(this.flat_tasks, {
        idKey: 'id',
        parentKey: 'parent'
      });
      tree_tasks.forEach(task => task.parent = 0);
      let parent_task = new plugins_task["a" /* Task */]({
        id: 0,
        temp_setting: this.settings[`T0`],
        title: this.board ? this.board.title : 'Workspace',
        board: this.board ? this.board.id : undefined
      });
      parent_task.children = tree_tasks;
      this.tasks = [parent_task];
    },

    saveBoard() {
      let data = {};
      const fields = ['title', 'description', 'slug', 'text_tags', 'is_interface'];
      fields.forEach(field => {
        data[field] = this.boardF[field];
      });

      if (this.currentUser && this.currentUser.id === this.board.user) {
        this.$axios.$put(`/task/boards/${this.board.slug}/`, data).then(res => {
          this.boardF = null;

          if (res.slug !== this.board.slug) {
            this.$router.replace({
              path: `/template/${res.slug}`
            });
          }

          this.board = res;
          this.tasks[0].title = res.title;
        }).finally(() => {
          this.activeBoardUpdate = false;
        });
      }
    },

    openBoardModal() {
      if (this.board) {
        this.boardF = _.cloneDeep(this.board);
        this.activeBoardUpdate = true;
      }
    }

  },

  mounted() {
    if (false) {}
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

    this.init();
  },

  beforeDestroy() {
    document.removeEventListener("mousedown", this.listenerDown);
    document.removeEventListener("mouseup", this.listenerUp);
    document.removeEventListener("mousemove", this.mouse_move);
  }

});
// CONCATENATED MODULE: ./pages/board/_id/mindmap.vue?vue&type=script&lang=js&
 /* harmony default export */ var _id_mindmapvue_type_script_lang_js_ = (mindmapvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/board/_id/mindmap.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(64)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _id_mindmapvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6e0a4140"
  
)

/* harmony default export */ var mindmap = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=mindmap.js.map