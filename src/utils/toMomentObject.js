import moment from 'moment-jalaali';

import { DISPLAY_FORMAT, ISO_FORMAT } from '../../constants';

export default function toMomentObject(dateString, customFormat) {
  moment.loadPersian();
  const dateFormats = customFormat ?
    [customFormat, DISPLAY_FORMAT, ISO_FORMAT] :
    [DISPLAY_FORMAT, ISO_FORMAT];
  const date = moment(dateString, dateFormats, true);
  return date ? date.hour(12) : null;
}
