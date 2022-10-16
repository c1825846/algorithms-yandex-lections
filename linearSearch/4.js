module.exports = function (seq) {
    let max = seq[0] >= seq[1] ? seq[0] : seq[1]
    let max2 = seq[0] <= seq[1] ? seq[0] : seq[1]
    for (let i = 2; i < seq.length; i++) {
        if (seq[i] > max) {
            max2 = max
            max = seq[i]
        } else if (seq[i] > max2) {
            max2 = seq[i]
        }
    }
    return [max, max2]
}