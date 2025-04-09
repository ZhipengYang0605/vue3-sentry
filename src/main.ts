import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as Sentry from "@sentry/vue";
import router from './router'

const app = createApp(App)

Sentry.init({
  app,
  dsn: "https://a826983ab5caf49453b51df91bde0348@o4509115183202304.ingest.us.sentry.io/4509115192246272",
  integrations: [
    Sentry.replayIntegration(),
    Sentry.browserTracingIntegration({ router }),
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0 // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

app.use(router).mount('#app')
