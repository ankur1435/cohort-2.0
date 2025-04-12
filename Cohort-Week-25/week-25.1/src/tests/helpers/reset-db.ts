import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function cleardb () {
    prisma.request.deleteMany()
}