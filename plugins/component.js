import Vue from "vue"
import Icon from "../components/Icon.vue";
import ContentEditable from "../components/ContentEditable";
import Modal from "../components/modal/Modal";
import Dropdown from "../components/dropdown/Dropdown";
import NumberInput from "../components/numberinput/Numberinput";
import Rate from "../components/rate/Rate";
import Switch from "../components/switch/Switch";
import Task from "../components/Task";
import TaskGraph from "../components/TaskGraph";
import draggable from 'vuedraggable';

Vue.component('x-icon', Icon);
Vue.component('ce', ContentEditable);
Vue.component('b-modal', Modal);
Vue.component('b-dropdown', Dropdown);
Vue.component('b-number-input', NumberInput);
Vue.component('b-switch', Switch);
Vue.component('b-rate', Rate);
Vue.component('task', Task);
Vue.component('task-graph', TaskGraph);
Vue.component('draggable', draggable);
