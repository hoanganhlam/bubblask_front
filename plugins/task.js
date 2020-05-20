import moment from "moment";

function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
};

function momentTime(date) {
    return moment(date, 'YYYY-MM-DDTHH:mm').utc();
}

function formatMomentTime(m) {
    return m.format('YYYY-MM-DD HH:mm:ss');
}

export class Task {
    constructor({updating, uid, title, description, interval, tomato, times, status, id}) {
        this.uid = typeof uid === 'undefined' ? generateId() : uid;
        this.title = title || null;
        this.description = description || null;
        this.times = times || [];
        this.interval = interval || 1;
        this.status = status || "pending";
        this.tomato = tomato || 25;
        this.id = id || null;
        this.updating = typeof updating === 'undefined' ? false : updating;
    }

    changeStatus(status, timer) {
        // pending -> running <-> stopping -> complete, stopped
        this.updating = true;
        let lastTime = this.lastTime();
        let now = moment().utc();
        let newTime = {
            time_start: formatMomentTime(now),
            time_done_est: formatMomentTime(now.add(this.tomato * 60, 's').utc()),
            time_done: null,
            stop_times: [],
            remainder: this.tomato * 60
        }
        if (status === 'running') {
            if (this.status === 'pending') {// Chay tu pending
                this.times.push(newTime);
            } else { // Chay tu stopping
                lastTime.time_done_est = formatMomentTime(moment(Date.now()).utc().add(lastTime.remainder, 's').utc())
            }
        } else if (status === 'stopping') {
            if (timer === 0) { // running
                if (this.interval > this.times.length) { // phase out
                    this.times.push(newTime);
                } else { // timeout
                    this.status = 'complete';
                    return;
                }
            } else if (timer > 0) { // running -> stopping
                lastTime.stop_times.push(formatMomentTime(now));
                lastTime.remainder = timer;
                lastTime.time_done_est = null;
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
        // Tổng time - time đã chạy được
        let total = this.tomato * this.interval * 60
        for (let i = 0; i < this.times.length; i++) {
            total = total - (60 * this.tomato - this.times[i].remainder)
        }
        return total <= 0 ? 0 : total
    }

    total() {
        return this.interval * this.tomato * 60
    }

    timer(cb) {
        let lastTime = this.lastTime()
        /** Trường hợp 1: Đang dừng thì tắt tab
         * done_time_est != null
         * Trả về remainder
         *
         */

        /** Trường hợp 2: Ấn nút tạm dừng
         * done_time_est = null
         * trả về done_time_estimate - now
         * Nếu nhỏ hơn 1 thì chuyển sang time khác hoặc dừng task
         */
        let out = lastTime.remainder
        if (lastTime.time_done_est) {
            let due_date = moment(new Date(lastTime.time_done_est + ' UTC')).utc()
            out = due_date.clone().diff(moment(Date.now()).utc(), "s")
        }
        if (out <= 0) {
            this.changeStatus('running')
            cb(this)
            out = 0
        }
        return out
    }
}
