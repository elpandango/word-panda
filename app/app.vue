<script setup lang="ts">
const { activeSeason } = useSeasonTheme();
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
