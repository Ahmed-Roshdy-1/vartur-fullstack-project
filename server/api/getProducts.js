import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async ()=>{
  const allCategories = await prisma.products.findMany({
    orderBy: {
        createdAt: 'asc'
      }
  })
  

  return allCategories
})
