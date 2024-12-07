/// https://github.com/prisma/prisma/issues/5026

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: [
      {
        emit: "event",
        level: "query",
      },
    ],
  })

async function main() {
    const users = await prisma.user.findMany({
        take: 2,
    });
};

main()

prisma.$on("query", async (e) => {
    console.log(`${e.query} ${e.params}`)
});