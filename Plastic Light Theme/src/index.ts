#!/usr/bin/env node
/* eslint-disable no-console */

import fs from 'node:fs'
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import prettier from 'prettier'

function prettify(object: unknown) {
  return prettier.format(JSON.stringify(object, undefined, 2), {
    parser: 'json',
  })
}

fs.mkdirSync('./themes', { recursive: true })

console.log('Watching...');

async function build() {
  try {
    const { getMainTheme } = await import(`./theme-main.js?d=${Date.now()}`)

    const __dirname = dirname(fileURLToPath(import.meta.url))
    const palette = JSON.parse(readFileSync(resolve(__dirname, './palette.json'), 'utf8'))

    await Promise.all([
      fs.writeFileSync('./themes/main.json', await prettify(getMainTheme(false, palette))),
      fs.writeFileSync(
        './themes/deprioritised-punctuation.json',
        await prettify(getMainTheme(true, palette)),
      ),
    ])
  } catch (error) {
    console.error(error)
  }
}

fs.watch("./src", async (_, filename) => {
  await build()
  console.log(`\r${filename} was updated`);
});

process.stdin.on('data', async () => {
  await build()
  console.log('Manually updated');
})