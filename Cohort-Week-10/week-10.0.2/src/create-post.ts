
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.post.create({
    data: {
     title: "go to gym",
     content: "from 7-9", 
     author: {
        connect: {
            id: 2
        }
     }
    }
  })
}

main()