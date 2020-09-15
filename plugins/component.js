import Vue from "vue"
import Icon from "../components/Icon.vue";
import ContentEditable from "../components/ContentEditable";
import NumberInput from "../components/numberinput/Numberinput";
import Rate from "../components/rate/Rate";
import Task from "../components/Task";
import TaskGraph from "../components/TaskGraph";
import draggable from 'vuedraggable';
import TimeChart from "../components/TimeChart";
import Tooltip from "@/components/tooltip/Tooltip";
import Dropdown2 from "@/components/dropdown/Dropdown";
import UserSelector from "@/components/form/User";
import Input from "@/components/input/Input";
import {
    Skeleton,
    // Tooltip,
    Switch,
    Dropdown,
    Modal,
    Snackbar
} from 'buefy';

Vue.use(Skeleton);
// Vue.use(Tooltip);
Vue.use(Switch);
Vue.use(Dropdown);
Vue.use(Modal);
Vue.use(Snackbar);

Vue.component('x-icon', Icon);
Vue.component('ce', ContentEditable);
Vue.component('b-tooltip', Tooltip);
Vue.component('x-dropdown', Dropdown2);
Vue.component('b-rate', Rate);
Vue.component('task-graph', TaskGraph);
Vue.component('draggable', draggable);
Vue.component('time-chart', TimeChart);
Vue.component('b-number-input', NumberInput);
Vue.component('b-input', Input);
Vue.component('task', Task);
Vue.component('user-selector', UserSelector);
Vue.config.devtools = true;
