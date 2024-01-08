const { defineConfig } = require("cypress");

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		baseUrl: "https://the-internet.herokuapp.com/",
		redirectionLimit: 3,
		retires: {
			runMode: 1,
			openMode: 1,
		},
		chromeWebSecurity: false,
		watchForFileChanges: false,
		viewportWidth: 1920,
		viewportHeight: 1080,
		waitForAnimations: true,
		testIsolation: true,
	},
});
