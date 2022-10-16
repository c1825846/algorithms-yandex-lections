module.exports = function (seq) {
    let minEven = -1
    let isMinEvenExists = false
    seq.forEach(i => {
        if (i % 2 === 0 && (!isMinEvenExists || i < minEven)) {
            minEven = i
            isMinEvenExists = true
        }
    })
    return minEven
}