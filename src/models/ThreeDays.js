import Day from './Day';
class ThreeDays {
    constructor(data = {}) {
        this.day1 = null;
        this.day2 = null;
        this.day3 = null;
        this.changes1 = null;
        this.changes2 = null;
        this.mappedChangesNormalized = null;
        this.mappedChanges = null;
        this.day1 = new Day(data.day1?.date, data.day1?.stocks);
        this.day2 = new Day(data.day2?.date, data.day2?.stocks);
        this.day3 = new Day(data.day3?.date, data.day3?.stocks);
        Object.assign(this, data);
    }
  }
  export default ThreeDays;
  