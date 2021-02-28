let scent = []

exports.isInDanger = function isDangerous(position) {
    return scent.some(p => p.x === position.x && p.y === position.y);
}

exports.new = function newSent(position) {
    scent.push(position)
}