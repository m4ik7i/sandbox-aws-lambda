#!/usr/bin/env deno --allow-read --allow-run

const deps = {
  run: (await import("../run.ts")).default,
};

const { run } = deps;

try {
  await run("dotnet publish -c Release");
  await run("zip -j lambda.zip ./bin/Release/netcoreapp2.1/publish/*");
  await run("mkdir -p ./build");
  await run("mv lambda.zip ./build");
} catch (err) {
  console.error(err);
}
