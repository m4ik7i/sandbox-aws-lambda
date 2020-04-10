#!/usr/bin/env deno --allow-run

import { run } from "./deps.ts";

try {
  await run("GOOS=linux go build -o main ./src/main.go");
  await run("mkdir -p ./build");
  await run("mv main ./build");
  Deno.chdir("./build");
  await run("zip -j lambda.zip ./main");
} catch (err) {
  console.error(err);
}
