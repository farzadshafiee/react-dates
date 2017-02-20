import moment from './jalali-calendar';
import isSameDay from './isSameDay';

export default function isInclusivelyAfterDay(a, b) {
  if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
  return a.isAfter(b) || isSameDay(a, b);
}
