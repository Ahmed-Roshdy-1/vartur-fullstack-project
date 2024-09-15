<template>
  <header class="shadow-sm flex justify-center bg-[#08090a]">
    <nav
      class="bg-[#08090a] border-b border-red-500/60 absolute z-10 container mx-auto p-4 flex justify-between max-sm:justify-center"
    >
      <NuxtLink to="/" class="text-2xl max-sm:hidden">Vartur</NuxtLink>
      <ul class="text-xl flex justify-center gap-10">
        <li class="">
          <NuxtLink to="/">Categories</NuxtLink>
        </li>

        <li><NuxtLink to="/products" class="">Products</NuxtLink></li>
        <li>
          <NuxtLink to="/CategoryList"> Category List </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup></script>

<style scoped>
.router-link-exact-active {
  color: rgb(239 68 68);
}
</style>
