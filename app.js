// const { promises: fs } = require("fs");
const io = require('./src/io')
const mapBuilder = require('./src/mapBuilder')
const robotBuilder = require('./src/robotBuilder')
const robotEngine = require('./src/robotEngine')

const filename = process.argv[2];

(async function processs(filename) {
    let lines = await io.readInputFile(filename)

    const map = mapBuilder.build(lines[0]);

    lines.shift();

    const robots = robotBuilder.build(lines);

    const result = robotEngine.run(robots, map)

    io.writeOutputFile(`out_${filename}`, result)
})(filename);
