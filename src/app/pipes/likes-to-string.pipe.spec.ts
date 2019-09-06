import { LikesToStringPipe } from './likes-to-string.pipe';

describe('LikesToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new LikesToStringPipe();
    expect(pipe).toBeTruthy();
  });
});
