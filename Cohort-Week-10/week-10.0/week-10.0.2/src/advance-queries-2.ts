import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: ['info', 'query']
})

async function main() {
  let res = await prisma.post.findMany({
    take: 3
  })
    console.log(res);
    
}

main()