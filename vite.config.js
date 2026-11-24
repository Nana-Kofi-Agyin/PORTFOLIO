import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const PLACEHOLDER_TOKEN = '[' + 'PLACEHOLDER'

function findPlaceholders(dir, rootDir) {
  const hits = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      hits.push(...findPlaceholders(full, rootDir))
    } else if (/\.(js|jsx|ts|tsx|css|html)$/.test(entry.name)) {
      const lines = fs.readFileSync(full, 'utf8').split(/\r?\n/)
      lines.forEach((line, idx) => {
        if (line.includes(PLACEHOLDER_TOKEN)) {
          hits.push({
            file: path.relative(rootDir, full).replace(/\\/g, '/'),
            line: idx + 1,
            text: line.trim(),
          })
        }
      })
    }
  }
  return hits
}

function blockPlaceholdersInBuild() {
  return {
    name: 'block-placeholders-in-build',
    apply: 'build',
    buildStart() {
      if (process.env.ALLOW_PLACEHOLDERS === '1') return
      const rootDir = process.cwd()
      const hits = findPlaceholders(path.join(rootDir, 'src'), rootDir)
      if (hits.length > 0) {
        const list = hits.map((h) => `  ${h.file}:${h.line}  ${h.text}`).join('\n')
        this.error(
          `Production build blocked: found ${hits.length} unfilled ${PLACEHOLDER_TOKEN} marker(s) in src/:\n${list}`
        )
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), blockPlaceholdersInBuild()],
})
