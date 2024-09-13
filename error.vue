<template>
  <div
    class="mt-7 flex flex-col max-w-sm mx-auto text-center shadowCard rounded-xl border border-red-500 bg-gradient-to-t from-red-100/5 via-red-500/50 to-red-500/5 bg-opacity-10 bg-blend-lighten"
  >
    <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-6xl">Ooops.</p>
    <p class="my-7">{{ error.message }}</p>
    <button class="btn my-7 self-center text-center" @click="handleError">
      Go Home...
    </button>
  </div>
</template>

<script setup>
defineProps({
  error: Object,
});
const handleError = () => clearError({ redirect: "/" });
</script>

<style scoped></style>
