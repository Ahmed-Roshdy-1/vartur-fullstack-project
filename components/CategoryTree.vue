<template>
  <ul class="category-list">
    <li v-for="category in categories" :key="category.id">
      <div class="category-item">
        <!-- Icon to indicate subcategories -->
        <ChevronsRight v-if="category.subcategories.length" class="icon" />

        <span>{{ category.name }}</span>
        <p class="pl-4">[{{ category.productCount }} Products]</p>
      </div>
      <!-- Render subcategories recursively -->
      <category-tree
        v-if="category.subcategories.length"
        :categories="category.subcategories"
        class="subcategory-list"
      />
    </li>
  </ul>
</template>

<script setup>
import { ChevronsRight } from "lucide-vue-next";
const props = defineProps(["categories"]);
</script>
<style scoped>
.category-list {
  list-style-type: none;
  padding-left: 20px; /* Add indentation for nested lists */
  margin: 0;
}

.category-item {
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.category-item:hover {
  background-color: rgba(239, 68, 68, 0.301);
}

.icon {
  margin-right: 8px;
  font-size: 12px;
}

.subcategory-list {
  margin-top: 5px;
  margin-left: 25px; /* Additional indentation for subcategories */
  border-left: 1px solid #ccc; /* Visual separator for nested levels */
}
</style>
