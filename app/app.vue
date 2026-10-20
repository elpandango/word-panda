<script setup lang="ts">
const route = useRoute();
const { activeSeason } = useSeasonTheme();
const lastCollectionRoute = useLastCollectionRoute();
const config = useRuntimeConfig();
const shareImageUrl = new URL('/icons/icon-512.png', config.public.siteUrl).href;
const shareDescription = 'Учи немецкий с WordPanda: словарь, карточки по уровням и тренировки.';

useSeoMeta({
  ogType: 'website',
  ogSiteName: 'WordPanda',
  ogTitle: 'WordPanda | Учим немецкий',
  ogDescription: shareDescription,
  ogUrl: () => new URL(route.path, config.public.siteUrl).href,
  ogImage: shareImageUrl,
  ogImageType: 'image/png',
  ogImageWidth: 512,
  ogImageHeight: 512,
  ogImageAlt: 'Логотип WordPanda с пандой',
  twitterCard: 'summary',
  twitterTitle: 'WordPanda | Учим немецкий',
  twitterDescription: shareDescription,
  twitterImage: shareImageUrl,
  twitterImageAlt: 'Логотип WordPanda с пандой'
});

useHead({
  bodyAttrs: {
    'data-season': activeSeason
  }
});

watch(
  () => route.fullPath,
  (fullPath) => {
    if (route.path.startsWith('/family/')) {
      return;
    }

    lastCollectionRoute.value = fullPath;
  },
  { immediate: true }
);
</script>

<template>
  <div class="app-shell" :data-season="activeSeason">
    <NuxtRouteAnnouncer />
    <AppHeader />
    <SeasonThemeDebug />
    <div class="app-shell__content">
      <NuxtPage />
    </div>
    <AppBottomNav />
  </div>
</template>
