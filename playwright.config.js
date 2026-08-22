const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  fullyParallel: false,
  workers: 1,
  reporter: "line",
  use: {
    baseURL: "http://127.0.0.1:8000",
    channel: "chrome",
    screenshot: "only-on-failure"
  },
  webServer: {
    command: "python3 dev_server.py",
    url: "http://127.0.0.1:8000",
    reuseExistingServer: true
  }
});
