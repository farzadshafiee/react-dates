import moment from './jalali-calendar';

export default function isSameDay(a, b) {
  if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
  return a.isSame(b, 'day');
}
