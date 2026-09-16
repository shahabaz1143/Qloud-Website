import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";

// SEO fallback content (injected by scripts/seo-build.js into <div id="root">)
// is meant for Googlebot's first-paint indexing. createRoot.render() clears
// the container before mounting, so users never see a flash of SEO content
// mid-load, and there is no hydration mismatch.
const rootEl = document.getElementById("root");
ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
