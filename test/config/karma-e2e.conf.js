module.exports = function(config){
  config.set({
    basePath : '../../',

    files : [
      'test/e2e/**/*.js'
    ],

    exclude : [],

    autoWatch : true,

    frameworks : ['ng-scenario'],

    browsers : ['PhantomJS'],

    singleRun : false,

    proxies : {
      '/' : 'http://localhost:8000/'
    },

    plugins : [
            'karma-junit-reporter',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-script-launcher',
            'karma-jasmine',
            'karma-ng-scenario'
            ],

    junitReporter : {
      outputFile: 'test_out/e2e.xml',
      suite: 'e2e'
    }
  });
};