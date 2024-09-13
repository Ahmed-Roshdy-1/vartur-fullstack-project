<template>
  <form
    action="submit"
    @submit.prevent="updateProductFun"
    class="min-w-[300px] max-w-[300px] min-h-[350px] bg-[#08090a] border py-4 px-12 border-red-500 rounded-lg"
  >
    <div class="flex flex-col -mx-3 mb-2">
      <div class="w-full px-3 mb-2 md:mb-0">
        <label
          class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
          for="grid-first-name"
        >
          Name
        </label>
        <input
          class="appearance-none block w-full bg-transparent text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-transparent focus:border-red-500"
          v-model="name"
          type="text"
          placeholder="Add Name"
          required
        />
      </div>
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
          for="grid-last-name"
        >
          Image URL
        </label>
        <input
          class="appearance-none block w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-transparent focus:border-red-500"
          v-model="img"
          type="text"
          placeholder=" Image URL or Directory"
          required
        />
      </div>
    </div>
    <div class="flex -mx-3 mb-2">
      <div class="w-full px-3 mb-2 md:mb-0">
        <label
          class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
          for="grid-state"
        >
          Category
        </label>
        <div class="relative">
          <select
            class="block appearance-none w-full overflow-scroll bg-transparent border border-gray-200 text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-transparent focus:border-red-500"
            v-model="SelectValue"
          >
            <option class="bg-[#08090a]" :value="null">Select Category</option>
            <template v-if="allData">
              <option
                class="bg-[#08090a]"
                v-for="item in allData"
                :key="item.id"
                :value="item.id"
              >
                {{ item.name }}
              </option>
            </template>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center -mx-3 mt-4">
      <div class="w-full px-6 mb-2 md:mb-0">
        <button class="btn w-full" type="submit">
          <Edit width="18" />Update
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { Edit } from "lucide-vue-next";
const allData = ref(null);
const props = defineProps(["data"]);
const name = ref(props.data.name);
const img = ref(props.data.picture);
const SelectValue = ref(props.data.category_id);
const emit = defineEmits(["update"]);
const updateProductFun = async () => {
  const { data, error } = await useFetch("/api/updateProduct", {
    method: "POST",
    body: {
      id: props.data.id,
      name: name.value,
      category_id: SelectValue.value,
      picture: img.value,
    },
  });
  console.log("text");

  if (error.value) {
    console.error("error", error);
  } else {
    console.log("User added:", data.value);
    emit("update");
  }
};

const getCategoriesFun = async () => {
  const { data, error } = await useFetch("/api/getCategories");
  console.log("getCategoriesFun");
  if (error.value) {
    console.error("error", error);
  } else {
    console.log("User added:", data.value);
    allData.value = data.value;
    // SelectValue.value = props.data.parent_id;
  }
};
getCategoriesFun();
</script>

<style lang="scss" scoped></style>
