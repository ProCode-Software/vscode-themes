const fs = require('fs')
const path = require("path")

const input = path.join(__dirname, '../src/procode-dark-color-theme.json')
const output = path.join(__dirname, '../themes/procode-dark-color-theme.json')

console.log('Watching for file changes...\n');

fs.watchFile(input, (curr, prev) => {
    const date = new Date()
    try {
        const text = fs.readFileSync(input, 'utf-8')
        const parsedJson = JSON.parse(text)
        const { variables } = parsedJson

        delete parsedJson.variables
        let replaced = JSON.stringify(parsedJson, null, 4)

        Object.entries(variables).forEach(([key, value]) => {
            replaced = replaced.replaceAll(`--${key}`, value)
        })
        fs.writeFileSync(output, replaced)
        console.clear()
        process.stdout.write(`\r${date.toLocaleTimeString()}: Transformed JSON`);
    } catch (e) {
        console.clear()
        console.error(`\n${date.toLocaleTimeString()}: Unable to transform JSON:`)
        console.error(e)
    }
})