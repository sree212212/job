// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"
import {nodeProfilingIntegration} from "@sentry/profiling-node"
Sentry.init({
  dsn: "https://d77def96cf14e35fb82701c8778aeb78@o4509503660556288.ingest.us.sentry.io/4509503663439872",
  integrations:[
nodeProfilingIntegration(),
Sentry.mongooseIntegration()

  ],

  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});

Sentry.profiler.startProfiler();