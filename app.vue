<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: 'Recipe Application',
  meta: [
    { name: 'description', content: 'Integration of a Figma Design' }
  ],
  link: [
    {
      rel: 'preload',
      href: '/_nuxt/assets/fonts/Montserrat-Regular.ttf', 
      as: 'font',
      type: 'font/ttf',
      crossorigin: 'anonymous'
    }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})
</script>