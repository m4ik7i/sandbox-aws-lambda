#!/usr/bin/env lua

local lfs = require "lfs"

os.execute "GOOS=linux go build -o main ./src/main.go"

os.execute "mkdir -p ./build"

os.execute "mv main ./build"

lfs.chdir "./build"

os.execute "zip -j lambda.zip ./main"
