<script setup lang="ts">
import { watchOnce } from '@vueuse/core';
import { ref } from 'vue';

const { images } = defineProps<{
  images?: string[];
}>();

const currentImage = ref<string>();

watchOnce(
  () => images,
  () => {
    currentImage.value = images?.[0];
  },
  { immediate: true }
);
</script>

<template>
  <div class="flex gap-4">
    <div class="flex flex-col gap-2">
      <img
        class="h-24 w-24 rounded-4 object-cover border border-transparent"
        :class="{ 'border-accent-foreground! border': currentImage === image }"
        v-for="image in images"
        :src="image"
        @click="currentImage = image"
      />
    </div>

    <div>
      <img
        v-if="currentImage"
        class="h-96 w-96 rounded-4 object-cover"
        :src="currentImage"
      />
    </div>
  </div>
</template>
