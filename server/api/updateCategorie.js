import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default defineEventHandler(async (event)=>{
  const body = await readBody(event);

  const allproducts = await prisma.categories.update({
    where:{id:body.id},
    data: {
      name: body.name,
      parent_id:body.parent_id,
      picture: body.picture,
    },
  });

  return allproducts

})
