"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clock = void 0;
class Clock {
    constructor() {
        this._clock = new Date();
        this._hours = this._clock.getHours();
        this._minutes = this._clock.getMinutes();
        this._seconds = this._clock.getSeconds();
        this._updateClock = () => {
            // Update seconds
            this._seconds += 1;
            // Update minutes
            if (this._seconds === 60) {
                this._seconds = 0;
                this._minutes += 1;
            }
            // Update hours
            if (this._minutes === 60) {
                this._minutes = 0;
                this._hours += 1;
            }
            if (this._hours === 24)
                this._hours = 0;
        };
        this.showClock = () => {
            this._intervalId = setInterval(() => {
                this._updateClock();
                console.log(`${this._hours}:${this._minutes}:${this._seconds}`);
            }, 1000);
        };
        this.showClockAlt = () => {
            this._intervalId = setInterval(() => {
                this._clock = new Date();
                this._seconds = this._clock.getSeconds();
                this._minutes = this._clock.getMinutes();
                this._hours = this._clock.getHours();
                console.log(`${this._hours}:${this._minutes}:${this._seconds}`);
            }, 1000);
        };
    }
    stopInterval() {
        clearInterval(this._intervalId);
        console.log("Clock Stopped");
    }
}
exports.Clock = Clock;
