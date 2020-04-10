#!/usr/bin/env deno --allow-run

import { run } from "./build_deps.ts";

try {
  await run("./gradlew build --no-daemon");
} catch (err) {
  console.error(err);
}
