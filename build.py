#!/usr/bin/env python3

import os
import subprocess

def shell(line):
    subprocess.run(line, shell=True)

shell("cargo build --release --target x86_64-unknown-linux-musl")

os.chdir("./target/x86_64-unknown-linux-musl/release")

shell("zip -j lambda.zip ./bootstrap")

# shell("zip -j lambda.zip ./target/x86_64-unknown-linux-musl/release/bootstrap")
# shell("mv lambda.zip ./target/x86_64-unknown-linux-musl/release")
