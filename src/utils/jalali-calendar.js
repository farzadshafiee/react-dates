/* eslint-disable max-len, object-shorthand */

import moment from 'moment-jalaali';

moment.loadPersian = () => {
  moment.defineLocale('fa', {
    months: ('ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر').split('_'),
    monthsShort: ('ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر').split('_'),
    weekdays: ('یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه').split('_'),
    weekdaysShort: ('یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه').split('_'),
    weekdaysMin: 'ی_د_س_چ_پ_ج_ش'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      L: 'jYYYY/jMM/jDD',
      LL: 'jD jMMMM jYYYY',
      LLL: 'jD jMMMM jYYYY LT',
      LLLL: 'dddd، jD jMMMM jYYYY LT',
    },
    calendar: {
      sameDay: '[امروز ساعت] LT',
      nextDay: '[فردا ساعت] LT',
      nextWeek: 'dddd [ساعت] LT',
      lastDay: '[دیروز ساعت] LT',
      lastWeek: 'dddd [ی پیش ساعت] LT',
      sameElse: 'L',
    },
    relativeTime: {
      future: 'در %s',
      past: '%s پیش',
      s: 'چند ثانیه',
      m: '1 دقیقه',
      mm: '%d دقیقه',
      h: '1 ساعت',
      hh: '%d ساعت',
      d: '1 روز',
      dd: '%d روز',
      M: '1 ماه',
      MM: '%d ماه',
      y: '1 سال',
      yy: '%d سال',
    },
    ordinal: '%dم',
    week: {
      dow: 6,   // Saturday is the first day of the week.
      doy: 12,  // The week that contains Jan 1st is the first week of the year.
    },
    meridiem: function (hour) {
      return hour < 12 ? 'ق.ظ' : 'ب.ظ';
    },
    jMonths: ('فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند').split('_'),
    jMonthsShort: 'فرو_ارد_خرد_تیر_امر_شهر_مهر_آبا_آذر_دی_بهم_اسف'.split('_'),
  });
};

export default moment;
