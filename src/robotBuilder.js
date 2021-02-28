exports.build = function build(lines) {
    lines = lines.filter(l => l !== '');

    const robots = [];
    for (let i = 0; i < lines.length; i += 2) {
        robots.push({
            position: buildRobotsInitialPosition(lines[i]),
            commands: buildRobotsCommands(lines[i + 1]),
            lost: false
        });
    }

    console.log(robots)
    return robots;
}

function buildRobotsInitialPosition(line) {
    const elements = line.trim().split(' ');

    const robotInitialPos = {
        x: parseInt(elements[0]),
        y: parseInt(elements[1]),
        orientation: elements[2]
    }

    return robotInitialPos;
}

function buildRobotsCommands(line) {
    return line.trim().split('');
}