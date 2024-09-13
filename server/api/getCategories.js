import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async ()=>{
  const allCategories = await prisma.categories.findMany({
    orderBy: {
        createdAt: 'asc'
      }
  })
  

  return allCategories
})
