#!/usr/bin/env python3

import os
import subprocess

def shell(line):
    subprocess.run(line, shell=True)

shell("zip -j lambda.zip ./src/lambda.py")

shell("mkdir -p ./build")

shell("mv lambda.zip ./build")
