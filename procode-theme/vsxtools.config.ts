import { defineConfig } from 'vsxtools'

export default defineConfig({
    configurations: {
        default: {
            type: 'color-theme',
            inputs: ['./src/'],
            outputDir: './themes',
            name: 'ProCode Theme',
        },
    },
})
