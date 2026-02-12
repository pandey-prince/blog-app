import { PrismaClient } from "@/app/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { env } from "process";

// export const prisma = new PrismaClient({
//   datasources: {
//     db: {
//       url: process.env["DATABASE_URL"],
//     },
//   },
// });

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
  pool: Pool | undefined;
};

const pool =
  globalForPrisma.pool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.pool = pool;
}

const adapter = new PrismaPg(pool);

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

// Optional: Add cleanup for serverless environments
