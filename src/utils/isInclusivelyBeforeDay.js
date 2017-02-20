import moment from './jalali-calendar';
import isSameDay from './isSameDay';

export default function isInclusivelyBeforeDay(a, b) {
  if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
  return a.isBefore(b) || isSameDay(a, b);
}
