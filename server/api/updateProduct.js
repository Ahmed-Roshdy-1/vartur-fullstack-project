import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default defineEventHandler(async (event)=>{
  const body = await readBody(event);
  const allproducts = await prisma.products.update({
    where:{id:body.id},
    data: {
      name: body.name,
      category_id: body.category_id,
      picture: body.picture,
    },
  });

  return allproducts

})