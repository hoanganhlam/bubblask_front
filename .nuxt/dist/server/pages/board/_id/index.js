exports.ids = [2];
exports.modules = {

/***/ 53:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/taginput/Taginput.vue?vue&type=template&id=b2563074&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"taginput control",class:_vm.rootClasses},[_vm._ssrNode("<div"+(_vm._ssrAttr("disabled",_vm.disabled))+(_vm._ssrClass("taginput-container",[_vm.statusType, _vm.size, _vm.containerClasses]))+">","</div>",[_vm._l((_vm.tags),function(tag,index){return _c('b-tag',{key:index,attrs:{"type":_vm.type,"size":_vm.size,"rounded":_vm.rounded,"attached":_vm.attached,"tabstop":false,"disabled":_vm.disabled,"ellipsis":_vm.ellipsis,"closable":_vm.closable,"title":_vm.ellipsis && _vm.getNormalizedTagText(tag)},on:{"close":function($event){return _vm.removeTag(index)}}},[_vm._v("\n            "+_vm._s(_vm.getNormalizedTagText(tag))+"\n        ")])}),_vm._ssrNode(" "),(_vm.hasInput)?_c('b-autocomplete',_vm._b({ref:"autocomplete",attrs:{"data":_vm.data,"field":_vm.field,"icon":_vm.icon,"icon-pack":_vm.iconPack,"maxlength":_vm.maxlength,"has-counter":false,"size":_vm.size,"disabled":_vm.disabled,"loading":_vm.loading,"autocomplete":_vm.nativeAutocomplete,"keep-first":!_vm.allowNew,"use-html5-validation":_vm.useHtml5Validation,"check-infinite-scroll":_vm.checkInfiniteScroll},on:{"typing":_vm.onTyping,"focus":_vm.onFocus,"blur":_vm.customOnBlur,"select":_vm.onSelect,"infinite-scroll":_vm.emitInfiniteScroll},nativeOn:{"keydown":function($event){return _vm.keydown($event)}},scopedSlots:_vm._u([{key:_vm.defaultSlotName,fn:function(props){return [_vm._t("default",null,{"option":props.option,"index":props.index})]}}],null,true),model:{value:(_vm.newTag),callback:function ($$v) {_vm.newTag=$$v},expression:"newTag"}},'b-autocomplete',_vm.$attrs,false),[_c('template',{slot:_vm.headerSlotName},[_vm._t("header")],2),_vm._v(" "),_vm._v(" "),_c('template',{slot:_vm.emptySlotName},[_vm._t("empty")],2),_vm._v(" "),_c('template',{slot:_vm.footerSlotName},[_vm._t("footer")],2)],2):_vm._e()],2),_vm._ssrNode(" "+((_vm.hasCounter && (_vm.maxtags || _vm.maxlength))?("<small class=\"help counter\">"+((_vm.maxlength && _vm.valueLength > 0)?(_vm._ssrEscape("\n            "+_vm._s(_vm.valueLength)+" / "+_vm._s(_vm.maxlength)+"\n        ")):(_vm.maxtags)?(_vm._ssrEscape("\n            "+_vm._s(_vm.tagsLength)+" / "+_vm._s(_vm.maxtags)+"\n        ")):"<!---->")+"</small>"):"<!---->"))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/taginput/Taginput.vue?vue&type=template&id=b2563074&

// EXTERNAL MODULE: ./components/utils/helpers.js
var helpers = __webpack_require__(24);

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
var FormElementMixin = __webpack_require__(7);

// EXTERNAL MODULE: ./components/input/Input.vue + 4 modules
var Input = __webpack_require__(6);

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

      return typeof option === 'object' ? Object(helpers["a" /* getValueByPath */])(option, this.field) : option;
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
var config = __webpack_require__(2);

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
        return Object(helpers["a" /* getValueByPath */])(tag, this.field);
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

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/TaskBoard.vue?vue&type=template&id=176fe5d6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"board"},[(!_vm.readonly)?_vm._ssrNode("<div class=\"media\" data-v-176fe5d6>","</div>",[_vm._ssrNode("<div class=\"media-content\" data-v-176fe5d6>","</div>",[_vm._ssrNode("<div class=\"task has-text-centered\" data-v-176fe5d6>","</div>",[_vm._ssrNode("<div class=\"notification\" data-v-176fe5d6>","</div>",[_c('x-icon',{attrs:{"name":"plus"}})],1)])]),_vm._ssrNode(" "),_c('n-link',{staticClass:"media-right",attrs:{"to":"/board/visual"}},[_c('div',{staticClass:"task"},[_c('div',{staticClass:"notification"},[_c('x-icon',{attrs:{"name":"file-tree-outline"}})],1)])])],2):_vm._e(),_vm._ssrNode(" "),(!_vm.loading && _vm.activeTasks.length)?_c('draggable',_vm._b({on:{"change":_vm.handle_order},model:{value:(_vm.activeTasks),callback:function ($$v) {_vm.activeTasks=$$v},expression:"activeTasks"}},'draggable',_vm.dragOptions,false),_vm._l((_vm.activeTasks),function(task,i){return _c('task',{key:i,staticClass:"master",attrs:{"value":task,"readonly":_vm.readonly,"tree":_vm.tree,"board":_vm.board},on:{"add":_vm.handle_add_child,"editing":function($event){_vm.disabledDrag = $event},"deleted":function($event){return _vm.$emit('deleted', $event)}}})}),1):_vm._e(),_vm._ssrNode(" "+((_vm.loading)?("<div class=\"tasks\" data-v-176fe5d6>"+(_vm._ssrList((5),function(i){return ("<div class=\"task\" data-v-176fe5d6><div class=\"notification media\" data-v-176fe5d6><div class=\"skeleton-task\" data-v-176fe5d6></div></div></div>")}))+"</div>"):"<!---->"))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TaskBoard.vue?vue&type=template&id=176fe5d6&scoped=true&

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
const _ = __webpack_require__(4);


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
    }

  },
  methods: {
    init_task(val) {
      if (val) {
        this.activeTasks = [];

        let temp = _.cloneDeep(val.filter(x => !['stopped', 'complete'].includes(x.status)));

        this.activeTasks = this.hierarchy(temp, {
          idKey: 'id',
          parentKey: 'parent'
        });
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
        updating: true,
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



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TaskBoardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "176fe5d6",
  "4e1e1079"
  
)

/* harmony default export */ var TaskBoard = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/board/_id/index.vue?vue&type=template&id=062db60a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"board-detail"},[_vm._ssrNode("<div class=\"hero tree-task\">","</div>",[_vm._ssrNode("<div class=\"hero-body\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"columns\">","</div>",[_vm._ssrNode("<div class=\"column is-4\">","</div>",[_c('n-link',{staticClass:"button is-fullwidth is-light",staticStyle:{"margin-bottom":"1.5rem"},attrs:{"to":"/board"}},[_c('x-icon',{attrs:{"name":"chevron-left"}}),_vm._v(" "),_c('span',[_vm._v("Back")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"media\" style=\"margin-bottom: 1.5rem\">","</div>",[(_vm.board.media || _vm.updating)?_vm._ssrNode("<div class=\"media-left\">","</div>",[_c('avatar',{attrs:{"can-update":_vm.updating},model:{value:(_vm.board.media),callback:function ($$v) {_vm.$set(_vm.board, "media", $$v)},expression:"board.media"}})],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"media-content\">","</div>",[_c('ce',{staticClass:"title",attrs:{"editable":_vm.updating,"elm":"h1"},model:{value:(_vm.board.title),callback:function ($$v) {_vm.$set(_vm.board, "title", $$v)},expression:"board.title"}})],1)],2),_vm._ssrNode(" "),(_vm.updating || _vm.board.description)?_vm._ssrNode("<div class=\"notification is-light\">","</div>",[_c('ce',{attrs:{"editable":_vm.updating,"elm":"p","placeholder":"Description"},model:{value:(_vm.board.description),callback:function ($$v) {_vm.$set(_vm.board, "description", $$v)},expression:"board.description"}})],1):_vm._e(),_vm._ssrNode(" "),(_vm.currentUser && _vm.currentUser.id === _vm.board.user)?_vm._ssrNode("<div class=\"columns is-variable is-2 is-mobile\">","</div>",[_vm._ssrNode(((!_vm.updating && _vm.board['is_interface'])?("<div class=\"column\"><div class=\"button is-fullwidth is-primary\">Use</div></div>"):"<!---->")+" "+((!_vm.updating && !_vm.board['is_interface'])?("<div class=\"column\"><div class=\"button is-fullwidth is-primary\">Launch</div></div>"):"<!---->")+" "),(_vm.updating)?_vm._ssrNode("<div class=\"column\">","</div>",[_vm._ssrNode("<div class=\"button is-fullwidth\">","</div>",[_c('x-icon',{attrs:{"name":"check"}})],1)]):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"column\">","</div>",[_vm._ssrNode("<div class=\"button is-fullwidth\">","</div>",[_c('x-icon',{attrs:{"name":!_vm.updating ? 'pen' : 'close'}})],1)])],2):_vm._e()],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"column\">","</div>",[(_vm.updating)?_vm._ssrNode("<div class=\"level is-mobile\">","</div>",[_vm._ssrNode("<div class=\"level-left\">","</div>",[(_vm.board.parent === null)?_vm._ssrNode("<div class=\"field\">","</div>",[_c('b-switch',{attrs:{"rounded":false},model:{value:(_vm.board['is_interface']),callback:function ($$v) {_vm.$set(_vm.board, 'is_interface', $$v)},expression:"board['is_interface']"}},[_vm._v("Template")])],1):_vm._e()]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"level-right\">","</div>",[_c('b-dropdown',{attrs:{"position":"is-bottom-left","trap-focus":true}},[_c('div',{staticClass:"navbar-item clickable",attrs:{"slot":"trigger"},slot:"trigger"},[_c('x-icon',{attrs:{"name":"cogs"}}),_vm._v(" "),_c('span',[_vm._v("Privacy")])],1),_vm._v(" "),_c('b-dropdown-item',{staticStyle:{"min-width":"300px"},attrs:{"custom":""}},[_c('div',{staticClass:"level is-mobile"},[_c('div',{staticClass:"level-left"},[_vm._v("Public")]),_vm._v(" "),_c('div',{staticClass:"level-right"},[_c('b-switch',{attrs:{"rounded":false},model:{value:(_vm.board.settings['is_public']),callback:function ($$v) {_vm.$set(_vm.board.settings, 'is_public', $$v)},expression:"board.settings['is_public']"}})],1)]),_vm._v(" "),_c('div',{staticClass:"level is-mobile"},[_c('div',{staticClass:"level-left"},[_vm._v("Team")]),_vm._v(" "),_c('div',{staticClass:"level-right"},[_c('b-switch',{attrs:{"rounded":false},model:{value:(_vm.board.settings['is_team']),callback:function ($$v) {_vm.$set(_vm.board.settings, 'is_team', $$v)},expression:"board.settings['is_team']"}})],1)]),_vm._v(" "),(!_vm.board.settings['is_public'] && _vm.board.settings['is_team'])?_c('div',{staticClass:"field"},[_c('b-input',{attrs:{"expanded":"","placeholder":"Password"},model:{value:(_vm.board.settings.password),callback:function ($$v) {_vm.$set(_vm.board.settings, "password", $$v)},expression:"board.settings.password"}}),_vm._v(" "),_c('p',{staticClass:"help"},[_vm._v("Use password to join!")])],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"level is-mobile"},[_c('div',{staticClass:"level-left"},[_vm._v("Readonly")]),_vm._v(" "),_c('div',{staticClass:"level-right"},[_c('b-switch',{attrs:{"rounded":false},model:{value:(_vm.board.settings['is_readonly']),callback:function ($$v) {_vm.$set(_vm.board.settings, 'is_readonly', $$v)},expression:"board.settings['is_readonly']"}})],1)])])],1)],1)],2):_vm._e(),_vm._ssrNode(" "),(_vm.updating)?_vm._ssrNode("<div class=\"field\">","</div>",[_c('b-input',{attrs:{"icon":"label","placeholder":"Board Slug"},model:{value:(_vm.board.slug),callback:function ($$v) {_vm.$set(_vm.board, "slug", $$v)},expression:"board.slug"}})],1):_vm._e(),_vm._ssrNode(" "),(_vm.updating)?_vm._ssrNode("<div class=\"field\">","</div>",[_c('b-tag-input',{attrs:{"icon":"tag","placeholder":"Hash tag"},model:{value:(_vm.board.text_tags),callback:function ($$v) {_vm.$set(_vm.board, "text_tags", $$v)},expression:"board.text_tags"}})],1):_vm._e(),_vm._ssrNode(" "),_c('task-board',{attrs:{"tasks":_vm.flat_tasks,"board":_vm.board,"readonly":_vm.readonly,"tree":""},on:{"deleted":_vm.handleDeleted}})],2)],2)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/board/_id/index.vue?vue&type=template&id=062db60a&

// EXTERNAL MODULE: ./components/Avatar.vue + 15 modules
var Avatar = __webpack_require__(13);

// EXTERNAL MODULE: ./components/taginput/Taginput.vue + 14 modules
var Taginput = __webpack_require__(58);

// EXTERNAL MODULE: ./components/input/Input.vue + 4 modules
var Input = __webpack_require__(6);

// EXTERNAL MODULE: ./components/TaskBoard.vue + 4 modules
var TaskBoard = __webpack_require__(59);

// EXTERNAL MODULE: ./components/dropdown/DropdownItem.vue + 4 modules
var DropdownItem = __webpack_require__(21);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/board/_id/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  name: "TemplateDetail",
  components: {
    BDropdownItem: DropdownItem["a" /* default */],
    TaskBoard: TaskBoard["a" /* default */],
    BInput: Input["a" /* default */],
    BTagInput: Taginput["a" /* default */],
    Avatar: Avatar["a" /* default */]
  },

  async fetch() {
    let query = {};

    if (this.$route.params.id !== 'visual') {
      this.board = await this.$axios.$get(`/task/boards/${this.$route.params.id}/`);
      query.board = this.board.id;
    }

    let flat_tasks = await this.$axios.$get('/task/tasks/', {
      params: query
    });
    this.flat_tasks = flat_tasks['results'];
    this.board = { ...this.board,
      text_tags: this.board['hash_tags'] ? this.board['hash_tags'].map(x => x.title) : [],
      settings: this.board.settings ? this.board.settings : {}
    };
    this.boardSlug = this.board['slug'];
  },

  data() {
    return {
      updating: false,
      flat_tasks: [],
      board: {
        title: "Your Work",
        description: "Manage your task on a tree!",
        slug: null
      },
      boardSlug: null
    };
  },

  head() {
    return {
      title: this.board.title + ' - Self Study - Tasks and Steps'
    };
  },

  computed: {
    storeTasks() {
      return this.$store.state.task.tasks.filter(x => {
        if (this.board.id) {
          return x.board === this.board.id && x.id;
        } else {
          return x.board === null;
        }
      });
    },

    readonly() {
      if (this.currentUser) {
        if (this.board.id) {
          if (this.currentUser.id === this.board.user) {
            return !this.updating;
          } else if (!this.board.settings['is_readonly']) {
            return !this.updating;
          }
        } else {
          return !this.updating;
        }
      }

      return true;
    }

  },
  methods: {
    handleUpdate() {
      let data = {};
      const fields = ['title', 'description', 'slug', 'text_tags', 'is_interface', 'media', 'settings'];
      fields.forEach(field => {
        if (field === 'media' && this.board['media']) {
          data[field] = this.board['media'].id;
        } else {
          data[field] = this.board[field];
        }
      });

      if (this.currentUser && this.currentUser.id === this.board.user) {
        this.$axios.$put(`/task/boards/${this.boardSlug}/`, data).then(res => {
          if (res.slug !== this.boardSlug) {
            this.$router.replace({
              path: `/board/${res.slug}`
            });
            this.boardSlug = res.slug;
          }
        }).then(() => {
          this.updating = false;
        });
      }
    },

    handleDeleted(task) {
      let index = this.flat_tasks.map(x => x.id).indexOf(task.id);
      this.flat_tasks.splice(index, 1);
    },

    useBoard() {
      this.$axios.$post(`/task/boards/${this.board.id}/clone/`).then(res => {
        this.$router.replace({
          path: `/board/${res.slug}`
        });
      }).catch(() => {});
    },

    launchBoard() {}

  },
  watch: {
    storeTasks: {
      deep: true,
      handler: function () {
        let ids = this.flat_tasks.map(x => x.id);
        this.storeTasks.forEach(item => {
          if (!ids.includes(item.id)) {
            this.flat_tasks.unshift(item);
          }
        });
      }
    }
  },

  mounted() {
    this.toTop();
  }

});
// CONCATENATED MODULE: ./pages/board/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var board_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/board/_id/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(61)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  board_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "13a763e8"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map