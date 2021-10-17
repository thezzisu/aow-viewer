import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { readFileSync } from 'fs'

const inject = {
  APP_VERSION: JSON.parse(readFileSync('./package.json', 'utf-8')).version
}

export default defineConfig({
  define: {
    ...Object.fromEntries(Object.entries(inject).map(([key, value]) => [key, JSON.stringify(value)]))
  },
  plugins: [vue(), WindiCSS()]
})
