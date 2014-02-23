#!/bin/bash

BASE_DIR=`dirname $0`
#NODE_DIR='/usr/local/lib'

echo ""
echo "Starting Karma Server (http://karma-runner.github.io)"
echo "-------------------------------------------------------------------"

$BASE_DIR/../node_modules/karma/bin/karma start $BASE_DIR/config/karma-e2e.conf.js $*