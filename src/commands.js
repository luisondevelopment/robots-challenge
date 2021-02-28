const scent = require('./scent')

function forward(robot, map) {
    const newPosition = Object.assign({}, robot.position);

    switch (robot.position.orientation) {
        case 'E': newPosition.x += 1; break;
        case 'W': newPosition.x -= 1; break;
        case 'N': newPosition.y += 1; break;
        case 'S': newPosition.y -= 1; break;
    }

    const lost = isLost(newPosition, map);

    if (lost) {
        const hasSent = scent.isInDanger(robot.position)
        if (hasSent) {
            return;
        }

        robot.lost = true;
        scent.new(robot.position);
        console.log('new sent: ', robot.position);
    } else {
        robot.position = newPosition;
    }
}

function right(robot) {
    switch (robot.position.orientation) {
        case 'E': robot.position.orientation = 'S'; break;
        case 'W': robot.position.orientation = 'N'; break;
        case 'N': robot.position.orientation = 'E'; break;
        case 'S': robot.position.orientation = 'W'; break;
    }
}

function left(robot) {
    switch (robot.position.orientation) {
        case 'E': robot.position.orientation = 'N'; break;
        case 'W': robot.position.orientation = 'S'; break;
        case 'N': robot.position.orientation = 'W'; break;
        case 'S': robot.position.orientation = 'E'; break;
    }
}

function isLost(position, map) {
    return position.x < map.left ||
        position.x > map.right ||
        position.y < map.bottom ||
        position.y > map.top;
}

module.exports = { F: forward, R: right, L: left }