import moment from 'moment-jalaali';
import isSameDay from './isSameDay';

export default function isNextDay(a, b) {
  if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
  const nextDay = moment(a).add(1, 'day');
  return isSameDay(nextDay, b);
}
