import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface updateParams {
    firstName: string;
    lastName: string
}

async function updateUser(username: string, {
    firstName,
    lastName
}: updateParams) {
    const response = await prisma.user.update({
        where: { 
            username: username 
        },
        data: {
            firstName,
            lastName
        }
    })
    console.log(response);
}

updateUser('te123st', {
    firstName: 'Rohit',
    lastName: 'Pithani'
})