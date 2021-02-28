exports.build = function build(line) {

    let chars = line.split(' ');

    const initialCoord = {
        x: chars[0],
        y: chars[1]
    }

    return {
        top: parseInt(initialCoord.y),
        right: parseInt(initialCoord.x),
        bottom: 0,
        left: 0
    }
}