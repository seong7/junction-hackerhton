class Timer {
  constructor(fn, t) {
    this.fn = fn;
    this.t = t;
  }

  // start timer using current settings (if it's not already running)
  start() {
    if (!this.timerObj) {
      this.stop();
      this.fn();
      this.timerObj = setInterval(this.fn, this.t);
    }
    return this;
  }

  stop() {
    if (this.timerObj) {
      clearInterval(this.timerObj);
      this.timerObj = null;
    }
    return this;
  }

  // start original interval, stop current interval
  reset() {
    return this.stop().start();
  }
}

export default Timer;
