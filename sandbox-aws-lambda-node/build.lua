#!/usr/bin/env lua

os.execute "zip -j lambda.zip ./src/index.js"

os.execute "mkdir -p ./build"

os.execute "mv lambda.zip ./build"
