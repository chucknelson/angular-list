module.exports = function(config){
  config.set({
    basePath : '../../',

    files : [
      'app/scripts/vendor/angular/angular.js',
      'app/scripts/vendor/angular/angular-*.js',
      'node_modules/jasmine-expect/dist/jasmine-matchers.js',
      'app/scripts/*.js',
      'test/unit/**/*.js'
    ],

    exclude : [
      'app/scripts/vendor/angular/angular-loader.js',
      'app/scripts/vendor/angular/*.min.js',
      'app/scripts/vendor/angular/angular-scenario.js'
    ],

    autoWatch : false,
    singleRun : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
            'karma-junit-reporter',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-script-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });
};