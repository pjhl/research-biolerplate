import Multiple, { sum } from './index'

describe('sum()', function () {
  test('adds 1 + 2 to equal 3', () => {
    return sum(1, 2)
      .then(result => {
        expect(result).toBe(3)
      })
  })
})

describe('class Multiple', function () {
  test('should multiply two numbers', () => {
    const obj = new Multiple()
    Multiple.divider = '×'
    Multiple.log = () => {}
    obj.setA(3)
    obj.setB(40)
    expect(obj.render()).toBe('3 × 40 = 120')
  })
})
