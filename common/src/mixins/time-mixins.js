export default {
  computed: {
    remainingTimeinSec: function () {
      return this.remainingTime / 1000
    },
    seconds: function () {
      return Math.floor(this.remainingTimeinSec) % 60
    },
    minutes: function () {
      let minute = Math.floor(this.remainingTimeinSec / 60) % 60
      return minute >= 0 ? minute : 0
    },
    hours: function () {
      let hour = Math.floor(this.remainingTimeinSec / 60 / 60) % 24
      return hour >= 0 ? hour : 0
    },
    days: function () {
      let day = Math.floor(this.remainingTimeinSec / 60 / 60 / 24)
      return day >= 0 ? day : 0
    },
    daysInHours: function () {
      let dayInHours = Math.floor(this.remainingTimeinSec / 60 / 60)
      return dayInHours >= 0 ? dayInHours : 0
    }
  }
}
