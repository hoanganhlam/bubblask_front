import Vue from 'vue'
import moment from "moment";
import {Task} from "./task";

Vue.mixin({
    data() {
        return {
            moment: moment
        }
    },
    methods: {
        cleanURI(url) {
            if (url) {
                return url.split("?")[0].split("#")[0];
            }
            return null
        },
        cleanURL(str) {
            return str.replace(/^https?:\/\//, '').replace(/\/+$/, '')
        },
        timeSince(date) {
            let seconds = moment().diff(this.momentTime(date), 'seconds', false);
            return this.convertTime(seconds)
        },
        convertTime(seconds) {
            var interval = Math.floor(seconds / 31536000);
            if (interval > 1) {
                return interval + " years";
            }
            interval = Math.floor(seconds / 2592000);
            if (interval > 1) {
                return interval + " month";
            }
            interval = Math.floor(seconds / 86400);
            if (interval > 1) {
                return interval + " day";
            }
            interval = Math.floor(seconds / 3600);
            if (interval > 1) {
                return interval + " hours";
            }
            interval = Math.floor(seconds / 60);
            if (interval > 1) {
                return interval + " minutes";
            }
            return Math.floor(seconds) + " seconds";
        },
        capitalizeFirst(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        convertName(user) {
            if (user.profile && user.profile.nick) {
                return user.profile.nick
            }
            if (user.first_name || user.last_name) {
                return user.first_name + ' ' + user.last_name
            }
            return user.username
        },
        formatDate(dateStr) {
            return new moment(dateStr, 'YYYY-MM-DD').format('YYYY-MM-DD')
        },
        cleanData(data, fields) {
            let out = {}
            if (typeof fields === 'undefined') {
                fields = Object.keys(data)
            }
            fields.forEach(i => {
                if (typeof data[i] !== 'undefined') {
                    if (['created', 'updated', 'start_date', 'due_date'].includes(i)) {
                        out[i] = this.momentTime(data[i]).format('YYYY-MM-DD HH:mm')
                    } else if (Array.isArray(data[i])) {
                        out[i] = data[i].map(x => {
                            return x.id ? x.id : x
                        })
                    } else if (typeof data[i] === 'object' && data[i] && data[i].id) {
                        out[i] = data[i].id
                    } else {
                        out[i] = data[i]
                    }
                }
            })
            return out
        },
        cleanFilter(data, fields) {
            let out = {}
            if (typeof fields === 'undefined') {
                fields = Object.keys(data)
            }
            fields.forEach(i => {
                if (typeof data[i] !== 'undefined') {
                    if (Array.isArray(data[i])) {
                        out[i] = data[i].map(x => {
                            if (x.id) return x.id
                            else if (x.value) return x.value
                            else return x
                        })
                    } else if (typeof data[i] === 'object' && data[i] !== null) {
                        if (data[i].id) {
                            out[i] = data[i].id
                        } else if (typeof data[i].value !== 'undefined') {
                            out[i] = data[i].value
                        } else out[i] = data[i]
                    } else {
                        out[i] = data[i]
                    }
                }
            })
            return out
        },
        convertDate(date) {
            if (date) {
                return new Date(date + ' UTC')
            }
            return null
        },
        momentTime(date) {
            return moment(date, 'YYYY-MM-DDTHH:mm').utc()
        },
        formatMomentTime(m) {
            return m.format('YYYY-MM-DD HH:mm:ss')
        },
        fancyTimeFormat(time) {
            let h = ~~(time / 3600);
            let m = ~~((time % 3600) / 60);
            let s = ~~time % 60;
            if (h > 24) {
                return "00:00:00"
            }
            let ret = (h < 10 ? "0" : "");
            ret += "" + h + ":" + (m < 10 ? "0" : "");
            ret += "" + m + ":" + (s < 10 ? "0" : "");
            ret += "" + s;
            return ret;
        },
        avatarName(name, length) {
            let matches = name.match(/\b(\w)/g);
            if (length) {
                return matches.join('').substr(0, length)
            }
            return matches.join('')
        },
        toTop(range = 0) {
            const myDiv = document.getElementById('__layout');
            myDiv.scrollTop = range;
            document.body.scrollTop = range;
            document.documentElement.scrollTop = range;
        },
        playSource(flag) {
            if (this[flag]) {
                this[flag].play()
            }
        },
        getAngle(p1, p2, p3) {
            let p12 = Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2));
            let p13 = Math.sqrt(Math.pow((p1.x - p3.x), 2) + Math.pow((p1.y - p3.y), 2));
            let p23 = Math.sqrt(Math.pow((p2.x - p3.x), 2) + Math.pow((p2.y - p3.y), 2));
            let de = Math.acos(((Math.pow(p12, 2)) + (Math.pow(p13, 2)) - (Math.pow(p23, 2))) / (2 * p12 * p13)) * 180 / Math.PI;
            if (p3.x < p1.x) {
                de = 360 - de
            }
            return de
        },
        hierarchy(data = [], {idKey = 'id', parentKey = 'parentId', childrenKey = 'children'} = {}) {
            const tree = [];
            const childrenOf = {};
            data.forEach((item) => {
                item = new Task(item);
                if (typeof item.id === 'undefined') item.id = 0;
                const {[idKey]: id, [parentKey]: parentId = 0} = item;
                childrenOf[id] = childrenOf[id] || [];
                item[childrenKey] = childrenOf[id];
                parentId
                    ? (
                        childrenOf[parentId] = childrenOf[parentId] || []
                    ).push(item)
                    : tree.push(item);
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
            }
            let points = [
                point,
                {
                    x: point.x + rect.width / 2,
                    y: point.y
                },
                {
                    x: point.x + rect.width,
                    y: point.y
                },
                {
                    x: point.x + rect.width,
                    y: point.y + rect.height / 2
                },
                {
                    x: point.x + rect.width,
                    y: point.y + rect.height
                },
                {
                    x: point.x + rect.width / 2,
                    y: point.y + rect.height
                },
                {
                    x: point.x,
                    y: point.y + rect.height
                },
                {
                    x: point.x,
                    y: point.y + rect.height / 2
                }
            ];
            return {
                width: rect.width,
                height: rect.height,
                ...point,
                points,
                center: {
                    x: point.x + rect.width / 2,
                    y: point.y + rect.height / 2
                }
            }
        },
    },
    computed: {
        currentUser: {
            get() {
                return this.$store.getters['auth/getUser']
            },
            set() {

            }
        },
        audio_rang() {
            return new Audio("/sound/001.wav");

        },
        audio_press() {
            return new Audio("/sound/002.mp3")
        }
    }
})
