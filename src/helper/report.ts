const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: "test-results/reports/",
  reorterName: "Playwright Automation Report",
  pageTitle: "Bookkart App Report",
  displayDuration: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "145",
    },
    device: "prince_pankaj",
    platform: {
      name: "windows",
      version: "11",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "Book Cart Application" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "Smoke-1" },
      
    ],
  },
});