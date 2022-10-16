module.exports = function (seq) {
    let max = seq[0]
    seq.forEach(i => {
        if (i > max) max = i
    })
    return max
}