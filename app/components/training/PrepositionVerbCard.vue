<script setup lang="ts">
import type { PrepositionVerbCard } from '../../types/preposition-verbs';

defineProps<{
  card: PrepositionVerbCard;
  level: 'B1' | 'B2';
}>();
</script>

<template>
  <article class="preposition-card" :class="`preposition-card--${level.toLowerCase()}`">
    <header class="preposition-card__header">
      <span>День {{ card.day }}</span>
      <span>{{ card.position }} / 5</span>
    </header>

    <div class="preposition-card__body">
      <h2 class="preposition-card__verb">{{ card.verb }}</h2>
      <p class="preposition-card__translation">{{ card.translation }}</p>
      <p class="preposition-card__example">{{ card.example }}</p>
    </div>
  </article>
</template>

<style scoped>
.preposition-card {
  overflow: hidden;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 12px 30px rgba(38, 43, 37, 0.08);
}

.preposition-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 9px 16px;
  color: rgba(255, 255, 255, 0.94);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  line-height: 1.2;
  text-transform: uppercase;
}

.preposition-card--b1 .preposition-card__header {
  background: linear-gradient(90deg, #287ba6, #4e96ba);
}

.preposition-card--b2 .preposition-card__header {
  background: linear-gradient(90deg, #427c78, #609991);
}

.preposition-card__body {
  display: grid;
  gap: 12px;
  padding: 20px;
}

.preposition-card__verb {
  margin: 0;
  color: var(--text-primary);
  font-size: clamp(22px, 4.5vw, 30px);
  font-weight: 800;
  letter-spacing: 0;
  line-height: 1.15;
}

.preposition-card__translation {
  margin: 0;
  color: var(--accent-strong);
  font-size: 17px;
  font-weight: 700;
  line-height: 1.35;
}

.preposition-card__example {
  margin: 4px 0 0;
  padding-top: 16px;
  border-top: 1px solid var(--surface-border);
  color: var(--text-primary);
  font-size: clamp(19px, 4vw, 23px);
  line-height: 1.35;
}

@media (min-width: 801px) {
  .preposition-card__body {
    padding: 24px 28px;
  }
}
</style>
