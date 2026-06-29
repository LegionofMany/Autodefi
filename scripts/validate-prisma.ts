import { execSync } from "node:child_process";

function run(command: string) {
  console.log(`\n> ${command}`);
  execSync(command, { stdio: "inherit" });
}

try {
  run("npx prisma format --schema prisma/schema.prisma");
  run("npx prisma validate --schema prisma/schema.prisma");
  run("npx prisma generate --schema prisma/schema.prisma");
  console.log("Prisma schema is valid.");
} catch {
  console.error("Prisma schema validation failed.");
  process.exit(1);
}
