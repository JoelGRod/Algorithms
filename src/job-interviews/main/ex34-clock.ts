

export class Clock {

    private _clock: Date = new Date();
    private _hours: number = this._clock.getHours();
    private _minutes: number = this._clock.getMinutes();
    private _seconds: number = this._clock.getSeconds();
    private _intervalId!: NodeJS.Timer;

    constructor() { }

    private _updateClock = (): void => {

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

    }

    showClock = (): void => {
        this._intervalId = setInterval(() => {
            this._updateClock();
            console.log(`${this._hours}:${this._minutes}:${this._seconds}`);
        }, 1000);
    }

    showClockAlt = (): void => {
        this._intervalId = setInterval(() => {
            this._clock = new Date();
            this._seconds = this._clock.getSeconds();
            this._minutes = this._clock.getMinutes();
            this._hours = this._clock.getHours();
            console.log(`${this._hours}:${this._minutes}:${this._seconds}`);
        }, 1000);
    } 

    stopInterval(): void {
        clearInterval(this._intervalId);
        console.log("Clock Stopped")
    }
}
