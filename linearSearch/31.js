module.exports = function (seq) {
    let indexOfMax = 0
    seq.forEach((i, index) => {
        if (i > seq[indexOfMax]) indexOfMax = index
    })
    return seq[indexOfMax]
}