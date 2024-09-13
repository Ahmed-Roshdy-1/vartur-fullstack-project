<template>
  <div
    class="relative shadowCard overflow-hidden min-w-[300px] max-w-[300px] min-h-[350px] pb-6 rounded-lg flex flex-col justify-between items-center bg-gradient-to-t from-red-300/10 via-red-500/70 to-red-300 bg-opacity-10 bg-blend-lighten"
  >
    <template v-if="!showForm">
      <span class="flex w-full flex-col gap-4 items-center">
        <img
          class="w-full max-h-[250px] min-h-[250px] rounded-t-lg text-center text-red-900"
          :src="props.data.picture"
          alt="Image not fond"
        />
        <p
          class="truncate w-full text-center px-6 font-semibold text-lg font-mono"
        >
          {{ props.data.name }}
        </p>
      </span>
      <span class="flex justify-around w-full">
        <button class="btn" @click="UpdateFun(props.data.id)">
          <Pencil width="18" /> Update
        </button>

        <button class="btn" @click="deleteFun(props.data.id)">
          <Trash2 width="18" /> Delete
        </button>
      </span>
    </template>
    <CircleX
      class="absolute z-10 right-2 top-2 cursor-pointer hover:text-red-400"
      v-if="showForm"
      @click="showForm = false"
    />
    <UpdateCategory
      @update="handleUpdate"
      class="absolute"
      :data="props.data"
      v-if="showForm"
    />
  </div>
</template>

<script setup>
import { CircleX, Pencil, Trash2 } from "lucide-vue-next";
import { ref } from "vue";
const showForm = ref(false);
const props = defineProps(["data"]);
// console.log(props.data);
async function UpdateFun(id) {
  showForm.value = true;
  console.log(id);
  console.log(props.data);
}

const emit = defineEmits(["update"]);

async function deleteFun(id) {
  const userConfirmed = confirm("Are you sure you want to delete this item?");

  // Check if user clicked "OK"
  if (userConfirmed) {
    const { data, error } = await useFetch("/api/deleteProduct", {
      method: "POST",
      body: {
        id: id,
      },
    });
    console.log("User added:", data);
    if (error.value) {
      console.error("error", error);
    } else {
      console.log("User added:", data.value);
      emit("update");
    }
  }
}

function handleUpdate() {
  showForm.value = false;
  emit("update");
}
</script>
