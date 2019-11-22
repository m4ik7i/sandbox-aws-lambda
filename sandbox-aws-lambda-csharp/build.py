#!/usr/bin/env python3

import subprocess

def shell(line):
    subprocess.run(line, shell=True)

shell("dotnet publish -c Release")

shell("zip -j lambda.zip ./bin/Release/netcoreapp2.1/publish/*")

shell("mkdir -p ./build")

shell("mv lambda.zip ./build")
