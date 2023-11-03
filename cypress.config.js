const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      module.exports = defineConfig({
        e2e: {
          setupNodeEvents(on, config) {
            {"reporter"; "mochaewsome",
            "reporterOptions";
              {"reporterDir"; "cypress/report/mochawesome-report",
                "overwrite"; true,
                "html"; true,
                "jason"; false,
                "timestamp"; "mmddyyyy_HHMMss"            
              }
            }
          }
        }
      })

    },
  },
});
