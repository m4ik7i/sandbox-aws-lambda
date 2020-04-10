#!/usr/bin/env deno --allow-net --allow-read --allow-run

const deps = {
  path: await import("https://deno.land/std/path/mod.ts"),
  run: (await import("../run.ts")).default,
};

const { path: { dirname }, run } = deps;

Deno.chdir(dirname(location.pathname));

try {
  await run("GOOS=linux go build -o main ./src/main.go");
  await run("mkdir -p ./build");
  await run("mv main ./build");
  Deno.chdir("./build");
  await run("zip -j lambda.zip ./main");
} catch (err) {
  console.error(err);
  Deno.exit(1);
}
