function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
};

function fmDate(date) {
    function pad(num) {
        num = num + '';
        return num.length < 2 ? '0' + num : num;
    }

    return date.getFullYear() + '/' +
        pad(date.getMonth() + 1) + '/' +
        pad(date.getDate()) + ' ' +
        pad(date.getHours()) + ':' +
        pad(date.getMinutes()) + ':' +
        pad(date.getSeconds());
}

export class Task {
    constructor({updating, uid, title = null, description = null, interval = 1, tomato, times, status, id, parent, board = null, temp_setting, settings = {}}) {
        this.uid = typeof uid === 'undefined' ? generateId() : uid;
        this.title = title;
        this.description = description;
        this.times = times || [];
        this.interval = interval;
        this.status = status || "pending";
        this.tomato = tomato || 25;
        this.id = typeof id === "number" ? id : null;
        this.updating = typeof updating === 'undefined' ? false : updating;
        this.parent = parent;
        this.board = board;
        this.temp_setting = temp_setting;
        this.settings = settings;
    }

    changeStatus(status, timer) {
        // pending -> running <-> stopping -> complete, stopped
        this.updating = true;
        let lastTime = this.lastTime();
        let now = new Date();
        let newTime = {
            start: fmDate(now),
            stop_times: [fmDate(now)],
            due_estimate: fmDate(new Date(now.setSeconds(now.getSeconds() + this.tomato * 60)))
        };
        if (status === 'running') {
            if (this.status === 'pending') {// Chay tu pending
                this.times.push(newTime);
            } else {
                now = new Date();
                let recent_stop_point = new Date(lastTime.stop_times[lastTime.stop_times.length - 1]);
                let due_date = new Date(lastTime.due_estimate)
                let reminder = (due_date.getTime() - recent_stop_point.getTime()) / 1000
                lastTime.due_estimate = fmDate(new Date(now.setSeconds(now.getSeconds() + reminder)))
            }
        } else if (status === 'stopping') {
            if (timer === 0) { // running
                if (this.interval > this.times.length) { // phase out
                    this.times.push(newTime);
                } else { // timeout
                    this.status = 'complete';
                    return;
                }
            } else {
                lastTime.stop_times.push(fmDate(new Date()));
            }
        }
        this.status = status
    }

    isRunning() {
        return this.status === 'running'
    }

    lastTime() {
        return this.times.length ? this.times[this.times.length - 1] : null
    }

    timeLeft() {
        let total = this.tomato * this.interval * 60
        for (let i = 0; i < this.times.length; i++) {
            let recent_stop_point = new Date(this.times[i].stop_times[this.times[i].stop_times.length - 1]);
            let due_date = new Date(this.times[i].due_estimate)
            let reminder = (due_date.getTime() - recent_stop_point.getTime()) / 1000
            total = total - (60 * this.tomato - reminder)
        }
        return total <= 0 ? 0 : total
    }

    total() {
        return this.interval * this.tomato * 60
    }

    timer() {
        let lastTime = this.lastTime()
        return lastTime ? lastTime.remainder : 0
    }

    dueDate() {
        return this.lastTime().due_estimate
    }

    check() {
        if (this.lastTime() && this.isRunning()) {
            let now = new Date();
            let due_date = new Date(this.lastTime().due_estimate)
            if (now.getTime() >= due_date.getTime()) {
                this.changeStatus('stopped')
            }
        }
    }
}
