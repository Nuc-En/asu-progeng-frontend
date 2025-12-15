<script setup lang="ts">
import { cn } from '@/lib/utils';
import { useVModel } from '@vueuse/core';
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
  defaultValue?: string | number;
  modelValue?: string | number;
  class?: HTMLAttributes['class'];
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void;
}>();

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
});
</script>

<template>
  <input
    v-model="modelValue"
    data-slot="input"
    :class="
      cn(
        'input file:text-foreground placeholder:text-muted-foreground border-input h-9 w-full min-w-0 rounded-md px-3 py-1 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        props.class
      )
    "
  />
</template>

<style lang="css" scoped>
.input {
  border: none;
  padding: 1rem;
  /* border-radius: 1rem; */
  background: #e8e8e8;
  box-shadow:
    20px 20px 60px #cecece,
    -20px -20px 60px #ffffff;
  transition: 0.3s;
}

.input:focus {
  outline-color: #e8e8e8;
  background: #e8e8e8;
  color: #090909;
  box-shadow:
    inset 20px 20px 60px #c5c5c5,
    inset -20px -20px 60px #ffffff;
  transition: 0.3s;
}
</style>
