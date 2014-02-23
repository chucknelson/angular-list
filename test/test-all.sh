#!/bin/bash

#runs unit tests and e2e tests once

BASE_DIR=`dirname $0`

echo "***** Unit Tests - Using Karma, Jasmine, PhantomJS *****"
echo ""
echo "Starting Karma Server (http://karma-runner.github.io)"
echo "-------------------------------------------------------------------"

$BASE_DIR/../node_modules/karma/bin/karma start $BASE_DIR/config/karma.conf.js $*

echo ""
echo "***** End-to-End (e2e) Tests - Using Protractor, Jasmine, Chrome or PhantomJS *****"
echo "-------------------------------------------------------------------"

protractor $BASE_DIR/config/protractor-conf.js