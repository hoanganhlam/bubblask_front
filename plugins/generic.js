import Vue from 'vue'
import {Task} from "./task";
import {SnackbarProgrammatic as Snackbar} from 'buefy';

Vue.mixin({
    methods: {
        cleanURI(url) {
            if (url) {
                return url.split("?")[0].split("#")[0];
            }
            return null
        },
        convertName(user) {
            if (user.profile && user.profile['nick']) {
                return user.profile['nick']
            }
            if (user.first_name || user.last_name) {
                return user.first_name + ' ' + user.last_name
            }
            return user.username
        },
        cleanData(data, fields) {
            let out = {};
            if (typeof fields === 'undefined') {
                fields = Object.keys(data)
            }
            fields.forEach(i => {
                if (typeof data[i] !== 'undefined') {
                    if (['created', 'updated', 'start_date', 'due_date'].includes(i)) {
                        out[i] = out[i];
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
            });
            return out
        },
        cleanFilter(data, fields) {
            let out = {};
            if (typeof fields === 'undefined') {
                fields = Object.keys(data)
            }
            fields.forEach(i => {
                if (typeof data[i] !== 'undefined') {
                    if (Array.isArray(data[i])) {
                        out[i] = data[i].map(x => {
                            if (x.id) return x.id;
                            else if (x.value) return x.value;
                            else return x;
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
            });
            return out;
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
                this[flag].play()
            }
        },
        hierarchy(data = [], {idKey = 'id', parentKey = 'parentId', childrenKey = 'children'} = {}) {
            const tree = [];
            const childrenOf = {};
            data.forEach((item) => {
                item = new Task(item);
                if (typeof item.id === 'undefined') item['id'] = 0;
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
            };
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
        openLogin(flag) {
            if (flag !== this.$store.state.auth.openAuth) {
                this.$store.commit('auth/SET_OPEN_AUTH', flag);
            }
        },
        navigate(url) {
            this.$router.replace({path: url}).then(() => {
            });
        },
        kind2Icon(kind) {
            const mapping = {
                "DEFAULT": "users",
                "GHOST": "earth"
            }
            return mapping[kind];
        },
        async join(board, password, force_out) {
            await this.$axios.$post(`/task/boards/${board.id}/join/`, {password: password, force_out}).then(res => {
                if (res.status) {
                    let gb = this.$store.state.config.board;
                    if (gb && gb.id === board.id) {
                        this.$store.commit('config/SET_BOARD', null);
                    } else {
                        this.$store.commit('config/SET_BOARD', board);
                        Snackbar.open({
                            message: res.msg,
                            type: 'is-success',
                        });
                    }
                } else {
                    Snackbar.open({
                        message: res.msg,
                        type: 'is-warning',
                    });
                }
            });
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
});
