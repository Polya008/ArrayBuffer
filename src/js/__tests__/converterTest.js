import ArrayBufferConverter, { getBuffer } from '../converter';

test('проверка класса ArrayBufferConverter', () => {
  const buffer = getBuffer();
  const converter = new ArrayBufferConverter();
  const received = converter.load(buffer);
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(received).toBe(expected);
});
