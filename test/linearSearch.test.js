const linearSearchLeft = require('../linearSearch/1')
const linearSearchRight = require('../linearSearch/2')

describe('linear search find first element', function () {
    test('return index of element', () => {
        expect(linearSearchLeft([1, 2, 3, 1, 2, 3], 2)).toBe(1)
    })
    test('return -1 if element does not in sequence', () => {
        expect(linearSearchLeft([1, 2, 3, 1, 2, 3], 0)).toBe(-1)
    })
    test('return -1 if sequence is empty', () => {
        expect(linearSearchLeft([], 0)).toBe(-1)
    })
})

describe('linear search find last element', function () {
    test('return index of element', () => {
        expect(linearSearchRight([1, 2, 3, 1, 2, 3], 2)).toBe(4)
    })
    test('return -1 if element does not in sequence', () => {
        expect(linearSearchRight([1, 2, 3, 1, 2, 3], 0)).toBe(-1)
    })
    test('return -1 if sequence is empty', () => {
        expect(linearSearchRight([], 0)).toBe(-1)
    })
})