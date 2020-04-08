#!/usr/bin/env lua

local lfs = require "lfs"

os.execute "sh rust-musl-builder.sh cargo build --release"

lfs.chdir "./target/x86_64-unknown-linux-musl/release"

os.execute "zip -j lambda.zip ./bootstrap"
