module.exports = function (seq, x) {
    let result = -1
    seq.forEach((i, index) => {
        if (i === x) result = index
    })
    return result
}