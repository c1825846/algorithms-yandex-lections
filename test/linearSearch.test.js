const linearSearchLeft = require('../linearSearch/1')
const linearSearchRight = require('../linearSearch/2')
const findMax = require('../linearSearch/3')
const findMaxUsingIndex = require('../linearSearch/31')
const twoMax = require('../linearSearch/4')
const minEven = require('../linearSearch/5')

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

describe('linear search find two max element', function () {
    test('maxes go in a row', () => {
        expect(twoMax([4, 5, 6, 1, 2, 3])).toEqual([6, 5])
    })
    test('maxes go in a row reversed', () => {
        expect(twoMax([1, 6, 5, 1, 2, 4])).toEqual([6, 5])
    })
    test('maxes placed randomly', () => {
        expect(twoMax([5, 2, 3, 4, 2, 4])).toEqual([5, 4])
    })
    test('maxes are same', () => {
        expect(twoMax([1, 2, 3, 4, 2, 4])).toEqual([4, 4])
    })
    test('all elements are same', () => {
        expect(twoMax([1, 1, 1, 1, 1, 1])).toEqual([1, 1])
    })
    test('only two elements', () => {
        expect(twoMax([1, 1])).toEqual([1, 1])
    })
})

describe('linear search find min even element', function () {
    test('element somewhere in array', () => {
        expect(minEven([1, 2, 1, 4, 2, 3])).toBe(2)
    })
    test('element is first', () => {
        expect(minEven([2, 5, 1, 4, 3, 3])).toBe(2)
    })
    test('element is last', () => {
        expect(minEven([1, 2, 1, 4, 2, 0])).toBe(0)
    })
    test('no even elements', () => {
        expect(minEven([1, 1, 1, 5, 9, 3])).toBe(-1)
    })
    test('empty array', () => {
        expect(minEven([])).toBe(-1)
    })
    test('all elements are same', () => {
        expect(minEven([2, 2, 2, 2, 2, 2])).toBe(2)
    })
    test('there is only one element in array', () => {
        expect(minEven([2])).toBe(2)
    })
    test('element is negative', () => {
        expect(minEven([1, -2, 1, 4, 2, 3])).toBe(-2)
    })
})