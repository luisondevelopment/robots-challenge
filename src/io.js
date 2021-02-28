const readline = require('readline');
const fs = require('fs');

exports.readInputFile = async function readInputFile(filename) {
    const reader = readline.createInterface({
        input: fs.createReadStream(filename),
        output: process.stdout,
        terminal: false
    });
    const lines = [];

    for await (const line of reader) {
        lines.push(line)
    }

    return lines;
}

exports.writeOutputFile = async function writeOutputFile(filename, robots) {
    var writer = fs.createWriteStream(filename)

    const mappedRows = robots.map(r => {
        return `${r.position.x} ${r.position.y} ${r.position.orientation} ${lost(r)}`
    })

    mappedRows.forEach(row => {
        writer.write(row);
        writer.write('\n');
    });

    writer.end()

    function lost(robot) {
        return robot.lost ? 'LOST' : '';
    }
}

