import { PrismaClient } from "@prisma/client";
import { mockDeep } from "vitest-mock-extended";

export const prismaClient = mockDeep<PrismaClient>()