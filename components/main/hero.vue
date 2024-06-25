<script setup lang="ts">
import { homePage } from '~/data'
</script>

<template>
  <div class="container mx-auto">
      <div class="py-10">
        <h1 class="text-black dark:text-zinc-300 font-semibold leading-tight text-4xl md:text-5xl my-5 text-center">
          {{ homePage.title }}
        </h1>
        <p class="dark:text-zinc-300 text-center">
          {{ homePage.description }}
        </p>
      </div>
  </div>
</template>
