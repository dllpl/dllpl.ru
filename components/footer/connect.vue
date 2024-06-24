<script setup lang="ts">
import { footerData } from '~/data'
</script>

<template>
  <div>
    <p class="text-black dark:text-zinc-300   text-base font-semibold">
      Связаться со мной
    </p>
    <p class="dark:text-zinc-300  ">
      {{ footerData.authorInterest }}
    </p>

    <a
      href="https://t.me/dllpl"
      class="block text-center w-full bg-sky-700 p-2 rounded-lg text-[#F1F2F4]  mt-3 text-sm"
      target="_blank"
    >
      Telegram <Icon name="fa:telegram" size="1.3em" />
    </a>
  </div>
</template>
