<template>
  <div
    @click="unshowFormFun"
    class="Scroll relative flex flex-col items-center gap-8 bg-[#08090a] w-full h-screen overflow-y-scroll py-24 px-10"
  >
    <span class="flex gap-6">
      <button class="btn" @click.stop="showForm = true">
        <Plus width="18" />Add Categories
      </button>
      <!-- <button class="btn" @click.stop="showForm = true">
        <NuxtLink
          to="/CategoryList"
          class="flex items-center s justify-center gap-4"
        >
          <ListCollapse width="18" /> Category List
        </NuxtLink>
      </button> -->
    </span>
    <div
      v-if="allData"
      class="Scroll place-items-center justify-cente gap-14 grid grid-cols-1 min-[1315px]:grid-cols-4 md:grid-cols-2"
    >
      <CategoryCard
        v-for="item in allData"
        :key="item.id"
        :data="item"
        @update="getCategoriesFun()"
      />
    </div>
    <AddCategorie
      v-if="showForm"
      @click.stop=""
      class="absolute"
      @update="getCategoriesFun"
      @close="unshowFormFun"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ListCollapse, Plus } from "lucide-vue-next";
import CategoryCard from "~/components/CategoryCard.vue";
const showForm = ref(false);
const allData = ref(null);
function unshowFormFun() {
  if (showForm.value) showForm.value = false;
}

const getCategoriesFun = async () => {
  const { data, error } = await useFetch("/api/getCategories");
  console.log("getCategoriesFun");
  if (error.value) {
    console.error("error", error);
  } else {
    console.log("User added:", data.value);
    allData.value = data.value;
  }
};
getCategoriesFun();
</script>
<style scoped>
/* Track (background) */
.Scroll::-webkit-scrollbar-track {
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
  width: 5px;
}

/* Handle (scroll thumb) */
.Scroll::-webkit-scrollbar-thumb {
  background-color: #3e5c76;
  border-radius: 5px;
  border: 3px solid transparent;
  background-clip: padding-box;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.25);
}

/* Hover effect on handle */
.Scroll::-webkit-scrollbar-thumb:hover {
  background-color: #2f3e46;
  box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.35);
}

/* Active state (when dragging the scrollbar) */
.Scroll::-webkit-scrollbar-thumb:active {
  background-color: #52796f;
}

/* Scrollbar corner (for combined vertical/horizontal scrollbars) */
.Scroll::-webkit-scrollbar-corner {
  background: #f0f0f0;
}
</style>
