#!/usr/bin/env deno --allow-run

const run = async (cmd: string): Promise<void> => {
  const { success, code } = await Deno.run(
    { cmd: ["sh", "-c", cmd] },
  ).status();
  if (!success) {
    throw new Error(`${cmd} exit with code ${code}`);
  }
};

try {
  await run("sh rust-musl-builder.sh cargo build --release");
  Deno.chdir("./target/x86_64-unknown-linux-musl/release");
  await run("zip -j lambda.zip ./bootstrap");
} catch (err) {
  console.error(err);
}
