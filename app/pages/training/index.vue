<script setup lang="ts">
const router = useRouter();

function navigateToCards(): void {
  void router.push('/training/cards');
}

useSeoMeta({
  title: 'Тренировка | WordPanda',
  description: 'Раздел для карточек и будущих тренировок по немецкой лексике.'
});
</script>

<template>
  <main class="page-shell page-stack">
    <NuxtLink class="back-link" to="/">← На главную</NuxtLink>

    <section class="hero-card surface-calm">
      <p class="eyebrow">Тренировка</p>
      <h1>Здесь собираются будущие режимы тренировок.</h1>
      <p class="hero-copy">
        Можно уже начать с простого режима карточек, а потом наращивать поверх него квизы,
        режимы по словам и интервальные повторения.
      </p>
    </section>

    <section class="info-card page-stack-sm surface-calm">
      <div class="section-row">
        <h2>Что уже можно попробовать</h2>
        <AppButton size="sm" @click="navigateToCards">Открыть карточки</AppButton>
      </div>

      <NuxtLink class="training-link-card surface-glass" to="/training/cards">
        <strong class="training-link-card__title">Карточки</strong>
        <p class="training-link-card__copy">
          Первый MVP с flip-анимацией, выбором уровня и случайной карточкой.
        </p>
      </NuxtLink>
    </section>

    <section class="info-card page-stack-sm surface-calm">
      <h2>Что можно заложить дальше</h2>
      <ul>
        <li>случайная подборка карточек по уровню и теме;</li>
        <li>ввод правильного перевода вручную;</li>
        <li>режим множественного выбора;</li>
        <li>отдельные сессии по словам, сочетаниям и карточкам.</li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
.training-link-card {
  display: grid;
  gap: 8px;
  padding: 18px;
  border: 1px solid var(--surface-border);
  border-radius: 16px;
  color: inherit;
  text-decoration: none;
}

.training-link-card__title {
  font-family: var(--font-family-heading);
  font-size: 22px;
  font-weight: 800;
  line-height: 1.2;
}

.training-link-card__copy {
  margin-bottom: 0;
  color: var(--text-muted);
}
</style>
