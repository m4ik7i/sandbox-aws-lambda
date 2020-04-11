#!/usr/bin/env deno --allow-net --allow-read --allow-run

await import("https://deno.land/std/path/mod.ts").then(({ dirname }) => {
  Deno.chdir(dirname(location.pathname));
});

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
  Deno.exit(1);
}
