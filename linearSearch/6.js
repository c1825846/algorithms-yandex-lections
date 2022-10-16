module.exports = function (words) {
    let minLength = words[0].length
    let minLengthWords = []
    words.forEach(w => {
        if (w.length < minLength) minLength = w.length
    })
    words.forEach(w => {
        if (w.length === minLength) minLengthWords.push(w)
    })
    return minLengthWords.join(' ')
}