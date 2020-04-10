#!/usr/bin/env deno --allow-read --allow-run

const deps = {
  run: (await import("../run.ts")).default,
};

const { run } = deps;

try {
  await run("./gradlew build --no-daemon");
} catch (err) {
  console.error(err);
}
