import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as Sentry from "@sentry/vue";

const app = createApp(App)

Sentry.init({
  app,
  dsn: "https://a826983ab5caf49453b51df91bde0348@o4509115183202304.ingest.us.sentry.io/4509115192246272",
  // defaultLocale: 'zh-CN',
});

app.mount('#app')
