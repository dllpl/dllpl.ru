<script setup lang="ts">
import { navbarData } from '../../data'

const colorMode = useColorMode()
function onClick(val: string) {
  colorMode.preference = val
}
</script>

<template>
  <div class="py-5 border-b dark:border-gray-800  font-semibold">
    <div class="flex px-6 container justify-between mx-auto items-baseline ">
      <ul class="flex items-baseline space-x-5">
        <li class="text-base sm:text-2xl font-bold">
          <NuxtLink to="/">
            {{ navbarData.homeTitle }}
          </NuxtLink>
        </li>
      </ul>
      <ul class="flex items-center space-x-3 sm:space-x-6 text-sm sm:text-lg">
        <li>
          <NuxtLink to="/blogs">
            Статьи
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/categories">
            Категории
          </NuxtLink>
        </li>
        <li title="About Me">
          <NuxtLink to="/about" aria-label="About me">
            Автор
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.router-link-active .router-link-exact-active  {
  @apply underline
}
</style>
