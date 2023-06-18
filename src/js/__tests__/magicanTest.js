import Magician from '../magician';

test('проверка класса Magician', () => {
  const received = new Magician(2);
  const expected = {
    _attack: 9,
    _stoned: 'Дурман',
    defence: 40,
    n: 2,
  };
  expect(received).toEqual(expected);
});
