<template>
  <form
    action="submit"
    @submit.prevent="uploadImage"
    class="w-full max-w-lg bg-[#08090a] border py-8 px-12 border-red-500 rounded-xl"
  >
    <div class="flex flex-col -mx-3 mb-6">
      <div class="w-full px-3 mb-6 md:mb-0">
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
          Select Image
        </label>
        <div>
          <input type="file" @change="onFileChange" />
        </div>
      </div>
    </div>
    <div class="flex -mx-3 mb-2">
      <div class="w-full px-3 mb-6 md:mb-0">
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
    <CircleX
      width="28"
      class="absolute z-10 right-4 top-4 cursor-pointer hover:text-red-400"
      @click="$emit(`close`)"
    />
    <div class="flex justify-center -mx-3 mt-10">
      <div class="w-full px-6 mb-6 md:mb-0">
        <button class="btn w-full" type="submit"><Plus width="18" />Add</button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { CircleX, Plus } from "lucide-vue-next";
const allData = ref(null);
const name = ref("");
const img = ref("");
const SelectValue = ref(null);
const emit = defineEmits(["update"]);
const AddProductFun = async () => {
  const { data, error } = await useFetch("/api/addProduct", {
    method: "POST",
    body: {
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
    getCategoriesFun();

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
  }
};
getCategoriesFun();

const file = ref(null);

const onFileChange = (event) => {
  file.value = event.target.files[0];
};

const uploadImage = async () => {
  if (!file.value) return;

  const formData = new FormData();
  formData.append("image", file.value);

  try {
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log(data);
    img.value = data.fileUrl;
    console.log(img.value, data.fileUrl);

    AddProductFun();
  } catch (error) {
    alert("Error uploading image:");
    console.error("Error uploading image:", error);
  }
};
</script>

<style lang="scss" scoped></style>
