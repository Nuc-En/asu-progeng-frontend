<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { PrimitiveProps } from 'reka-ui';
import { Primitive } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import type { ButtonNeoVariants } from '.';
import { buttonNeoVariants } from '.';

interface Props extends PrimitiveProps {
  variant?: ButtonNeoVariants['variant'];
  size?: ButtonNeoVariants['size'];
  class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
});
</script>

<template>
  <Primitive
    data-slot="button"
    :as="as"
    :as-child="asChild"
    :class="cn(buttonNeoVariants({ variant, size }), props.class)"
    :style="{}"
  >
    <slot />
  </Primitive>
</template>

<style lang="css" scoped>
button {
  color: #090909;
  padding: 0.7em 1.7em;
  font-size: 18px;
  border-radius: 0.5em;
  background: #e8e8e8;
  /* background: linear-gradient(145deg, #f8f8f8, #d1d1d1); */
  cursor: pointer;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  box-shadow:
    6px 6px 12px #c5c5c5,
    -6px -6px 12px #ffffff;
}

button:active {
  color: #666;
  box-shadow:
    inset 4px 4px 12px #c5c5c5,
    inset -4px -4px 12px #ffffff;
}
</style>
