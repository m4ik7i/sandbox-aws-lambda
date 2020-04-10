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
  await run("dotnet publish -c Release");
  await run("zip -j lambda.zip ./bin/Release/netcoreapp2.1/publish/*");
  await run("mkdir -p ./build");
  await run("mv lambda.zip ./build");
} catch (err) {
  console.error(err);
}
