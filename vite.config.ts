import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), sentryVitePlugin({
    org: "test-wt1",
    project: "vue3-sentry"
  })],

  build: {
    sourcemap: true
  }
})