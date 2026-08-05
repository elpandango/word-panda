<script setup lang="ts">
useSeoMeta({
  title: 'WordPanda',
  description: 'Dictionary workspace for German verb families and prefix variants.'
})
</script>

<template>
  <main class="page-shell">
    <section class="hero-card">
      <p class="eyebrow">Nuxt 4 Starter</p>
      <h1>WordPanda is ready for a proper full-stack foundation.</h1>
      <p class="hero-copy">
        This scaffold already includes Nuxt 4, Nitro, Pinia, PWA wiring, Mongo entry points, and server API stubs.
      </p>
    </section>

    <section class="grid-two">
      <article class="info-card">
        <h2>App layer</h2>
        <ul>
          <li>`app/pages/index.vue` and `app/pages/family/[id].vue` are in place.</li>
          <li>`app/components/` is ready for shared UI.</li>
          <li>`shared/types/verbs.ts` holds the domain model.</li>
        </ul>
      </article>

      <article class="info-card">
        <h2>Server layer</h2>
        <ul>
          <li>`server/plugins/mongodb.ts` is ready for Atlas connection.</li>
          <li>`server/models/` contains initial mongoose models.</li>
          <li>`server/api/` contains starter routes for auth, search and family details.</li>
        </ul>
      </article>
    </section>
  </main>
</template>
