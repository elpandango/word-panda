<script setup lang="ts">
const route = useRoute()

useSeoMeta({
  title: `Family ${String(route.params.id)} | WordPanda`
})
</script>

<template>
  <main class="page-shell">
    <section class="info-card">
      <p class="eyebrow">Family detail</p>
      <h1>Verb family: {{ route.params.id }}</h1>
      <p class="hero-copy">
        This page is a placeholder for the future family detail screen backed by Nitro and MongoDB.
      </p>
    </section>
  </main>
</template>
