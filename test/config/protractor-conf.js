// An example protractor configuration file.
exports.config = {
  // The address of a running selenium server.
  // Normal selenium + chrome e2e testing
  seleniumAddress: 'http://localhost:4444/wd/hub',
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  /*
  //PhantomJS webdriver
  seleniumAddress: 'http://localhost:4444/wd/hub',
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'phantomjs'
  },
  */

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['../e2e/protractor-scenario.js'],

  baseUrl: 'http://localhost:8000',

  onPrepare: function() {
    require('jasmine-expect'); //some useful matchers not in jasmine by default
  },

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};