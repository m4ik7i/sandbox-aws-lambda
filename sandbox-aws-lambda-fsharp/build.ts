#!/usr/bin/env deno --allow-run

import { run } from "./build_deps.ts";

try {
  await run("dotnet publish -c Release");
  await run("zip -j lambda.zip ./bin/Release/netcoreapp2.1/publish/*");
  await run("mkdir -p ./build");
  await run("mv lambda.zip ./build");
} catch (err) {
  console.error(err);
}
