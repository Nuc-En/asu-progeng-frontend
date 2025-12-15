<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
</script>

<template>
  <div
    data-slot="card"
    :class="cn('flex flex-col gap-6 rounded-xl border py-6 card', props.class)"
  >
    <slot />
  </div>
</template>

<style scoped>
.card {
  border-radius: 50px;
  background: #f0f0f0;
  box-shadow:
    20px 20px 60px #bebebe,
    -20px -20px 60px #ffffff;
}
.card-dark {
  border-radius: 50px;
  /* background: #e0e0e0; */
  box-shadow:
    -5px -5px 10px oklch(0.2982 0.042 265.755),
    5px 5px 10px var(--color-primary-foreground);
}
</style>
