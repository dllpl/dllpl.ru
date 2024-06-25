export const navbarData = {
  homeTitle: 'dllpl.ru',
}

export const footerData = {
  author: 'Никита Ив',
  aboutAuthor: 'Веб-разработчик, фрилансер, предприимчивый фулл-стек.',
  authorInterest: 'Фронт на Nuxt, бэк на Laravel. CMS WordPress. Всё просто.',
  aboutTheSite: 'Здесь вы можете найти полезные статьи на темы веб-разработки.',
}

export const homePage = {
  title: 'Полезные статьи по Nuxt 3, Laravel и WordPress. Плагины, библиотеки и многое другое на PHP, JS и Go',
  description: 'Окунитесь в море полезного контента, который вы можете найти в этом блоге. Будьте в курсе новостей. Надеюсь, вы найдете тут что-то интересное для себя.',
}

export const blogsPage = {
  title: 'Все статьи',
  description: 'Здесь вы найдете все сообщения в блоге, которые я написал и опубликовал на этом сайте.',
}

export const categoryPage = {
  title: 'Категории',
  description: 'Эта категория создается на основе всех тегов, упомянутых в разных сообщениях блога.',
}

export const aboutPage = {
  title: 'Никита Ив (dllpl)',
  description: 'Веб-разработчик, фрилансер, предприимчивый фулл-стек.',
  aboutMe: 'Работаю fullstack-разработчиком (Laravel+Vue) в аккредитованной IT-компании "Свамисофт", тимлидер проектов. Веду свою IT-студию Webseed.ru. Создаю проекты с макета до релиза. Изнутри знаю, как устроены компании в финансовом секторе со своими скорингами, эквифаксами, телефонией, пересчетами, сложной бизнес-логикой и множеством микросервисов.\n',
}

export const seoData = {
  description: 'Никита Ив, веб-разработчик, фрилансер, предприимчивый фулл-стек. Всё просто.',
  ogTitle: 'Фронт на Nuxt, бэк на Laravel. CMS WordPress.',
  twitterDescription: 'Никита Ив, веб-разработчик, фрилансер, предприимчивый фулл-стек. Всё просто.',
  image: 'https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp',
  mySite: 'https://dllpl.ru',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: '@qdnvubp' },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]
