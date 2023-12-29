import { getFilename } from '../lib/utils';

describe('getFilename', () => {
  test('should return filename', () => {
    expect(getFilename('App')).toEqual('App');
    expect(getFilename('App.stories')).toEqual('App');
    expect(getFilename('App.stories.stories')).toEqual('App');
  });
});
