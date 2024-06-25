<script lang="ts" setup>
useHead({
  title: 'Главная',
  meta: [
    {
      name: 'description',
      content:
        'Статьи на темы веб-разработки. Фронт на Nuxt, бэк на Laravel, CMS WordPress. Личный блок Никиты Ив (dllpl). Плагины, библиотеки и многое другое на PHP, JS и Go.',
    },
  ],
  titleTemplate: '%s - dllpl.ru',
})

// Generate OG Image
defineOgImageComponent('About', {
  headline: 'Добро пожаловать 👋',
  title: 'Портал о современной веб-разработке dllpl.ru ',
  description: 'Статьи на темы веб-разработки. Фронт на Nuxt, бэк на Laravel, CMS WordPress. Личный блок Никиты Ив (dllpl). Плагины, библиотеки и многое другое на PHP, JS и Go.',
  // link: '/riyad.jpg',
})
</script>

<template>
  <main class="container  mx-auto text-zinc-600">
    <MainHero />
    <MainRecent />
    <MainTrending />
  </main>
</template>
