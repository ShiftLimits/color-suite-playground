import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { colorSuitePlugin } from 'tailwindcss-color-suite'
import viteSvgIcons from 'vite-plugin-svg-icons'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    viteSvgIcons({
      iconDirs: [resolve(process.cwd(), 'src/assets/icons')]
    }),
    colorSuitePlugin()
  ]
})
