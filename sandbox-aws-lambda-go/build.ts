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
  await run("GOOS=linux go build -o main ./src/main.go");
  await run("mkdir -p ./build");
  await run("mv main ./build");
  Deno.chdir("./build");
  await run("zip -j lambda.zip ./main");
} catch (err) {
  console.error(err);
}
