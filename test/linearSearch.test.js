const linearSearchLeft = require('../linearSearch/1')
const linearSearchRight = require('../linearSearch/2')
const findMax = require('../linearSearch/3')
const findMaxUsingIndex = require('../linearSearch/31')

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

describe('linear search find max element', function () {
    test('first is max', () => {
        expect(findMax([4, 2, 3, 1, 2, 3])).toBe(4)
    })
    test('last is max', () => {
        expect(findMax([1, 2, 3, 1, 2, 4])).toBe(4)
    })
    test('max in center in array', () => {
        expect(findMax([1, 2, 3, 4, 2, 3])).toBe(4)
    })
    test('all elements are same', () => {
        expect(findMax([1, 1, 1, 1, 1, 1])).toBe(1)
    })
    test('only one element', () => {
        expect(findMax([1])).toBe(1)
    })
})

describe('linear search find max element', function () {
    test('first is max', () => {
        expect(findMaxUsingIndex([4, 2, 3, 1, 2, 3])).toBe(4)
    })
    test('last is max', () => {
        expect(findMaxUsingIndex([1, 2, 3, 1, 2, 4])).toBe(4)
    })
    test('max in center in array', () => {
        expect(findMaxUsingIndex([1, 2, 3, 4, 2, 3])).toBe(4)
    })
    test('all elements are same', () => {
        expect(findMaxUsingIndex([1, 1, 1, 1, 1, 1])).toBe(1)
    })
    test('only one element', () => {
        expect(findMaxUsingIndex([1])).toBe(1)
    })
})