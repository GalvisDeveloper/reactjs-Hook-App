import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import HookApp from "./components/HookApp";
import "./index.css";

Sentry.init({
  dsn:
    "https://3bb32c1bef5c43d280eb295d2fb760f1@o589804.ingest.sentry.io/5739771",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <HookApp />
  </React.StrictMode>,
  document.getElementById("root")
);
