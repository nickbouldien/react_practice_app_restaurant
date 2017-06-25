const sum = require('../components/sum');


describe('matching cities to foods', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  test('adds 2 + 2 to equal 4', () => {
    expect(sum(2, 2)).toBe(4);
  });
});

const myMock = jest.fn();
myMock('1');
myMock('a', 'b');

test('# of calls', () => {
  expect(myMock.mock.calls.length).toBe(2);
});
