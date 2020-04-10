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
  await run("./gradlew build --no-daemon");
} catch (err) {
  console.error(err);
}
