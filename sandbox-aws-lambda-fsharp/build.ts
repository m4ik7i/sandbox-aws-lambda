#!/usr/bin/env deno --allow-net --allow-read --allow-run

const deps = {
  path: await import("https://deno.land/std/path/mod.ts"),
  run: (await import("../run.ts")).default,
};

const { path: { dirname }, run } = deps;

Deno.chdir(dirname(location.pathname));

try {
  await run("dotnet publish -c Release");
  await run("zip -j lambda.zip ./bin/Release/netcoreapp2.1/publish/*");
  await run("mkdir -p ./build");
  await run("mv lambda.zip ./build");
} catch (err) {
  console.error(err);
  Deno.exit(1);
}
