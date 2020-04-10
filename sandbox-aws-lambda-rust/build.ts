#!/usr/bin/env deno --allow-net --allow-read --allow-run

const deps = {
  path: await import("https://deno.land/std/path/mod.ts"),
  run: (await import("../run.ts")).default,
};

const { path: { dirname }, run } = deps;

Deno.chdir(dirname(location.pathname));

try {
  await run("sh rust-musl-builder.sh cargo build --release");
  Deno.chdir("./target/x86_64-unknown-linux-musl/release");
  await run("zip -j lambda.zip ./bootstrap");
} catch (err) {
  console.error(err);
}
