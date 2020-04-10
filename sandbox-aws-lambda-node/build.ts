#!/usr/bin/env deno --allow-read --allow-run

const deps = {
  run: (await import("../run.ts")).default,
};

const { run } = deps;

try {
  await run("zip -j lambda.zip ./src/index.js");
  await run("mkdir -p ./build");
  await run("mv lambda.zip ./build");
} catch (err) {
  console.error(err);
}
