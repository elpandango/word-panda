<script setup lang="ts">
useSeoMeta({
  title: 'Тренировка | WordPanda',
  description: 'Раздел для будущих тренировок по немецким глаголам и их приставочным вариантам.'
});
</script>

<template>
  <main class="page-shell page-stack">
    <NuxtLink class="back-link" to="/">← На главную</NuxtLink>

    <section class="hero-card surface-calm">
      <p class="eyebrow">Тренировка</p>
      <h1>Здесь появится тренировочный режим.</h1>
      <p class="hero-copy">
        Позже тут можно будет запускать короткие сессии с карточками, случайными вопросами и
        проверкой приставочных вариантов.
      </p>
    </section>

    <section class="info-card page-stack-sm surface-calm">
      <h2>Что можно заложить дальше</h2>
      <ul>
        <li>случайная подборка глаголов на 5, 10 или 20 карточек;</li>
        <li>ввод правильного варианта вручную;</li>
        <li>выбор ответа из нескольких вариантов;</li>
        <li>отдельные режимы для базовых глаголов и приставочных форм.</li>
      </ul>
    </section>
  </main>
</template>
