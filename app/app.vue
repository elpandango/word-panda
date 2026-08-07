<script setup lang="ts">
const route = useRoute();
const { activeSeason } = useSeasonTheme();
const lastCollectionRoute = useLastCollectionRoute();

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
