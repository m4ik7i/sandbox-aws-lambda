#!/usr/bin/env lua

os.execute "dotnet publish -c Release"

os.execute "zip -j lambda.zip ./bin/Release/netcoreapp2.1/publish/*"

os.execute "mkdir -p ./build"

os.execute "mv lambda.zip ./build"
