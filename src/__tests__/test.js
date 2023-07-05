import BufferConverter, { getBuffer } from '../src/js/Converter.js';

test('Тестируем метод load(). Если объекты совпадают - sucess', () => {
  const buffer = getBuffer();
  BufferConverter.load(buffer);
  expect(BufferConverter.buffer).toEqual(buffer);
});

test("Тестируем метод toString(). Если строки совпадают - sucess", () => {
  const buffer = getBuffer();
  BufferConverter.load(buffer);
  expect(BufferConverter.buffer).toEqual(buffer);
  const receivedString = BufferConverter.toString();
  const exempleString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(receivedString).toBe(exempleString);
});
