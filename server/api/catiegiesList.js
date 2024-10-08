import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default defineEventHandler(async ()=>{
    const allData = await prisma.categories.findMany({
        orderBy: {
            createdAt: 'asc'
          }, include: {
            products: true,
          },
      })
      // Helper function to build the category tree and calculate product counts
      function buildCategoryTree(parentId = null) {
        return allData
          .filter(category => category.parent_id === parentId)
          .map(category => {
            // Recursively build the subcategory tree
            const subcategories = buildCategoryTree(category.id);
            
            // Calculate total product count including subcategories
            const subcategoryProductCount = subcategories.reduce((count, subcategory) => count + subcategory.productCount, 0);
            console.log(category);
            
            const totalProductCount = category.products.length + subcategoryProductCount;
  
            return {
              ...category,
              productCount: totalProductCount,
              subcategories: subcategories,
            };
          });
      }
    // Start building the tree from root categories (where parent_id is null)
    const categoryTree = buildCategoryTree();
      
    
    return categoryTree

})
