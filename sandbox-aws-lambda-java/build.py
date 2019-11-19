#!/usr/bin/env python3

import os
import subprocess

def shell(line):
    subprocess.run(line, shell=True)

shell("./gradlew build --no-daemon")
