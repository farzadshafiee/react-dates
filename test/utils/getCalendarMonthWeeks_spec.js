import moment from 'moment-jalaali';
import { expect } from 'chai';

import isSameDay from '../../src/utils/isSameDay';
import getCalendarMonthWeeks from '../../src/utils/getCalendarMonthWeeks';

const today = moment();
const weeks = getCalendarMonthWeeks(today);
const weeksWithOutsideDays = getCalendarMonthWeeks(today, true);

describe('getCalendarMonthWeeks', () => {
  it('returns an array of arrays', () => {
    expect(weeks).to.be.instanceof(Array);

    weeks.forEach((week) => {
      expect(week).to.be.instanceof(Array);
    });
  });

  it('today is included', () => {
    let isIncluded = false;
    weeks.forEach((week) => {
      week.forEach((day) => {
        if (day && day.isSame(today, 'day')) isIncluded = true;
      });
    });

    expect(isIncluded).to.equal(true);
  });

  it('all days have a time of 12PM', () => {
    weeks.forEach((week) => {
      week.forEach((day) => {
        if (day) {
          expect(day.hours()).to.equal(12);
        }
      });
    });
  });

  describe('Daylight Savings Time issues', () => {
    it('last of February does not equal first of March', () => {
      const february = getCalendarMonthWeeks(today.clone().month(1));
      const lastWeekOfFebruary = february[february.length - 1].filter(Boolean);
      const lastOfFebruary = lastWeekOfFebruary[lastWeekOfFebruary.length - 1];

      const march = getCalendarMonthWeeks(today.clone().month(2));
      const firstOfMarch = march[0].filter(Boolean)[0];

      expect(isSameDay(lastOfFebruary, firstOfMarch)).to.equal(false);
    });

    it('last of March does not equal first of April', () => {
      const march = getCalendarMonthWeeks(today.clone().month(2));
      const lastWeekOfMarch = march[march.length - 1].filter(Boolean);
      const lastOfMarch = lastWeekOfMarch[lastWeekOfMarch.length - 1];

      const april = getCalendarMonthWeeks(today.clone().month(3));
      const firstOfApril = april[0].filter(Boolean)[0];

      expect(isSameDay(lastOfMarch, firstOfApril)).to.equal(false);
    });
  });

  describe('enableOutsideDays arg is true', () => {
    it('each week has 7 non-null elements', () => {
      const hasNoNullElements = weeksWithOutsideDays
        .reduce((w1, w2) => w1 && w2.reduce((d1, d2) => d1 && !!d2, true), true);
      expect(hasNoNullElements).to.equal(true);
    });
  });
});
