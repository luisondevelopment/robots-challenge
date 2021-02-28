const commands = require('./commands')

exports.run = function run(robots, map) {
    return robots.map(r => execute(r, map))
}

function execute(r, map) {
    console.log('new robot moving')
    for (let i = 0; i < r.commands.length; i++) {
        const command = r.commands[i];

        commands[command](r, map);

        if (r.lost)
            break;

        console.log('current position: ', r.position);
        console.log('command executed: ', command);
    }

    return r;
}