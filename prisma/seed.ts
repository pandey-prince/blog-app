import "dotenv/config";
import { PrismaClient } from "@prisma/client";

console.log("DATABASE_URL:", process.env.DATABASE_URL);

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is undefined at runtime");
}

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      clerkUserId: "test_user",
      email: "test@example.com",
      name: "Test User",
    },
  });

  console.log("✅ Prisma seed basic test succeeded");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
