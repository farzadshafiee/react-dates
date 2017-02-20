import { expect } from 'chai';

import toISODateString from '../../src/utils/toISODateString';

describe('toISODateString', () => {
  it('returns null for falsy argument', () => {
    expect(toISODateString()).to.equal(null);
  });
});
