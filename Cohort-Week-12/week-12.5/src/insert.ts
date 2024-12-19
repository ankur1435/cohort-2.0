import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string, email: string) {
    const response = await prisma.user.create({
        data: {
            username,
            password,
            firstName,
            lastName,
            email
        }
    })
    console.log(response);
}

insertUser("te123st", "test123", "te123st", "123test", "test123");