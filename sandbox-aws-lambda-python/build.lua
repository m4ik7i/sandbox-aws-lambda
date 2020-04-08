#!/usr/bin/env lua

os.execute "zip -j lambda.zip ./src/lambda.py"

os.execute "mkdir -p ./build"

os.execute "mv lambda.zip ./build"
