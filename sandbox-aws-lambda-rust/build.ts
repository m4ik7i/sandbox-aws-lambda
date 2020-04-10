#!/usr/bin/env deno --allow-run

import { run } from "./build_deps.ts";

try {
  await run("sh rust-musl-builder.sh cargo build --release");
  Deno.chdir("./target/x86_64-unknown-linux-musl/release");
  await run("zip -j lambda.zip ./bootstrap");
} catch (err) {
  console.error(err);
}
