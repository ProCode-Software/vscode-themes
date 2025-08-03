const fs = require('fs')
const path = require("path")

const input = path.join(__dirname, '../src/frost-dark-color-theme.json')
const output = path.join(__dirname, '../themes/frost-dark-color-theme.json')

console.log('Watching for file changes...\n');

fs.watchFile(input, (curr, prev) => {
    const date = new Date()
    try {
        const text = fs.readFileSync(input, 'utf-8')
        const parsedJson = JSON.parse(text)
        parsedJson.tokenColors?.sort(
            (a, b) => {
                let scope0 = Array.isArray(a.scope) ? a.scope[0] : a.scope
                let scope1 = Array.isArray(b.scope) ? b.scope[0] : b.scope
                return scope0.localeCompare(scope1)
            }
        ).toSorted((a, b) => {
            return a.settings.foreground?.localeCompare(b.settings.foreground)
        })
        const { variables } = parsedJson

        delete parsedJson.variables
        delete parsedJson.$schema
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