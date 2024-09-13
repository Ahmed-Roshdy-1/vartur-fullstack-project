import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default defineEventHandler(async (event)=>{
  const body = await readBody(event);
  await prisma.products.deleteMany();
  const byteArray = Uint8Array.from(body.picture);
  const allproducts = await prisma.products.create({
    data: {
      name: body.name,
      // category_id: body.category_id,
      picture: body.picture,
    },
  });

  return allproducts

})
