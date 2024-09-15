import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default defineEventHandler(async (event)=>{
    const body = await readBody(event);
    const categories = [];

    let currentCategoryId = body.id;
  
    while (currentCategoryId) {
      const category = await prisma.categories.findUnique({
        where: { id: currentCategoryId },
        include: { parent: true },
      });
  
      if (category) {
        categories.push(category);
        currentCategoryId = category.parent_id;
      } else {
        currentCategoryId = null; // Stop if no more parent categories
      }
    }
    return categories.reverse();

})