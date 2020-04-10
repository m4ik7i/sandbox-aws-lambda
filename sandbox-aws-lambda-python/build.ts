#!/usr/bin/env deno --allow-run

import { run } from "./build_deps.ts";

try {
  await run("zip -j lambda.zip ./src/lambda.py");
  await run("mkdir -p ./build");
  await run("mv lambda.zip ./build");
} catch (err) {
  console.error(err);
}
