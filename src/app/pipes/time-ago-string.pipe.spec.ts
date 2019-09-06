import { TimeAgoStringPipe } from './time-ago-string.pipe';

describe('TimeAgoStringPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeAgoStringPipe();
    expect(pipe).toBeTruthy();
  });
});
