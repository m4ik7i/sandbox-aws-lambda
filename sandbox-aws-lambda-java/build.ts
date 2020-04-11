#!/usr/bin/env deno --allow-net --allow-read --allow-run

await import("https://deno.land/std/path/mod.ts").then(({ dirname }) => {
  Deno.chdir(dirname(location.pathname));
});

const deps = {
  run: (await import("../run.ts")).default,
};

const { run } = deps;

try {
  await run("./gradlew build --no-daemon");
} catch (err) {
  console.error(err);
  Deno.exit(1);
}
