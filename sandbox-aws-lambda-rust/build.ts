#!/usr/bin/env deno --allow-net --allow-read --allow-run

await import("https://deno.land/std/path/mod.ts").then(({ dirname }) => {
  Deno.chdir(dirname(location.pathname));
});

const deps = {
  run: (await import("../run.ts")).default,
};

const { run } = deps;

try {
  await run("sh rust-musl-builder.sh cargo build --release");
  Deno.chdir("./target/x86_64-unknown-linux-musl/release");
  await run("zip -j lambda.zip ./bootstrap");
} catch (err) {
  console.error(err);
  Deno.exit(1);
}
