<script lang="ts" setup>
useHead({
  title: 'Главная',
  meta: [
    {
      name: 'description',
      content:
        'Статьи на темы веб-разработки. Фронт на Nuxt, бэк на Laravel, CMS это WordPress. Личный блок Никиты Ив (dllpl)',
    },
  ],
  titleTemplate: 'Dllpl Блог - %s',
})

// Generate OG Image
defineOgImageComponent('About', {
  headline: 'Добро пожаловать 👋',
  title: 'Dllpl Блог',
  description: 'Статьи на темы веб-разработки. Фронт на Nuxt, бэк на Laravel, CMS это WordPress. Личный блок Никиты Ив (dllpl)',
  link: '/riyad.jpg',
})
</script>

<template>
  <main class="container  mx-auto text-zinc-600">
    <MainHero />
    <MainRecent />
    <MainTrending />
  </main>
</template>
