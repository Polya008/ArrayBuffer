import Daemon from '../daemon';

test('проверка класса Daeman', () => {
  const received = new Daemon(2);
  const expected = {
    _attack: 9,
    _stoned: 'Дурман',
    defence: 40,
    n: 2,
  };
  expect(received).toEqual(expected);
});
