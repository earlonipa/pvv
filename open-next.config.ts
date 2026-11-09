import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// No ISR / data cache is used: static pages are prerendered at build time and
// dynamic pages read straight from D1, so the default (empty) config is enough.
export default defineCloudflareConfig();
