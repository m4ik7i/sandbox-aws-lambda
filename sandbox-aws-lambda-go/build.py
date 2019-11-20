#!/usr/bin/env python3

import os
import subprocess

def shell(line):
    subprocess.run(line, shell=True)

shell("GOOS=linux go build -o main ./src/main.go")

shell("mkdir -p ./build")

shell("mv main ./build")

os.chdir("./build")

shell("zip -j lambda.zip ./main")
