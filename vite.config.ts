import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      vue(),
      sentryVitePlugin({
        org: "test-wt1",
        project: "vue3-sentry",
        debug: true,
        authToken: env.SENTRY_AUTH_TOKEN,
        sourcemaps: {
          assets: ['dist/**'],
          filesToDeleteAfterUpload: ['dist/**/*.map'],
        }
      })
    ],
  
    build: {
      sourcemap: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '~': path.resolve(__dirname, './src/assets'),
        // 更多别名...
      }
    }
  }
})