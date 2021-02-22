const MINUTES_IN_HOUR = 60
const MINUTES_IN_DAY = 24 * 60

export class Clock {
  constructor(hours, minutes = 0) {
    this.hours = hours
    this.minutes = (hours * MINUTES_IN_HOUR + minutes) % MINUTES_IN_DAY

    if (this.minutes < 0) this.minutes += MINUTES_IN_DAY
  }

  toString() {
    const hours = Math.floor(this.minutes / MINUTES_IN_HOUR) % MINUTES_IN_DAY
    const minutes = this.minutes % MINUTES_IN_HOUR

    return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`
  }

  plus(minutes) {
    return new Clock(0, this.minutes + minutes)
  }

  minus(minutes) {
    return this.plus(-minutes)
  }

  equals(clock) {
    return this.minutes === clock.minutes
  }
}
