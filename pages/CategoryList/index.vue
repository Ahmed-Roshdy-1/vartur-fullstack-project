<template>
  <div
    @click="unshowFormFun"
    class="Scroll relative flex flex-col items-center gap-8 bg-[#08090a] w-full h-screen overflow-y-scroll py-24 px-10"
  >
    <button class="btn" @click.stop="showForm = true">
      <NuxtLink to="/" class="flex items-center s justify-center gap-4">
        <Home width="18" /> Back Home
      </NuxtLink>
    </button>
    <div class="flex flex-col gap-8 justify-center items-center">
      <h1 class="text-xl border-b border-red-500 p-4 w-fit">Category Tree</h1>
      <category-tree :categories="allData" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Home, Plus } from "lucide-vue-next";

const allData = ref(null);
const getCategoriesListFun = async () => {
  const { data, error } = await useFetch("/api/catiegiesList");
  console.log("getCategoriesListFun");
  if (error.value) {
    console.error("error", error);
  } else {
    console.log("User added:", data.value);
    allData.value = data.value;
    console.log(allData.value);
  }
};
getCategoriesListFun();

const getCategoriesFun = async () => {
  const { data, error } = await useFetch("/api/getCategories");
  console.log("getCategoriesFun");
  if (error.value) {
    console.error("error", error);
  } else {
    console.log("User added:", data.value);
    allData.value = data.value;
    console.log(allData.value);
  }
};
// getCategoriesFun();
</script>
<style scoped>
ul {
  list-style-type: none; /* Remove bullets */
  padding-left: 20px; /* Add some indentation */
}

li {
  margin: 5px 0;
}
</style>
