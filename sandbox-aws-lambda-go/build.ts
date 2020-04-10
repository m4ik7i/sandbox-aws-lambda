#!/usr/bin/env deno --allow-read --allow-run

const deps = {
  run: (await import("../run.ts")).default,
};

const { run } = deps;

try {
  await run("GOOS=linux go build -o main ./src/main.go");
  await run("mkdir -p ./build");
  await run("mv main ./build");
  Deno.chdir("./build");
  await run("zip -j lambda.zip ./main");
} catch (err) {
  console.error(err);
}
