<script setup lang="ts">
import { footerData } from '~/data'
</script>

<template>
  <div>
    <p class="text-black dark:text-zinc-300   text-2xl py-1 font-semibold">
      {{ footerData.author }}
    </p>
    <p class="py-2 dark:text-zinc-300  ">
      {{ footerData.aboutAuthor }}
    </p>
    <div class="my-3 space-x-3 pb-3">
      <NuxtLink
        to="https://t.me/dllpl"
        target="_blank"
        class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
        aria-label="LinkedIn"
      >
        <Icon name="fa:telegram" size="1em" />
      </NuxtLink>
      <NuxtLink
        to="https://github.com/dllpl"
        target="_blank"
        class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
        aria-label="Github"
      >
        <Icon name="fa:github" size="1em" />
      </NuxtLink>
      <NuxtLink
        to="https://www.linkedin.com/in/nikita-ivanov-579246198"
        target="_blank"
        class="px-2 py-1 lg:px-3 lg:py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
        aria-label="LinkedIn"
      >
        <Icon name="fa:linkedin-square" size="1em" />
      </NuxtLink>
    </div>
  </div>
</template>
