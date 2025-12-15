<script setup lang="ts">
import Review from '@/components/Review.vue';
import { reviewMock } from '@/mock/ReviewMock';
import { userMock } from '@/mock/UserMock';
import type { Review as TReview } from '@/types/Review/Review';

const reviews = Array.from({ length: 5 }).fill(
  reviewMock
) as unknown as TReview[];
</script>

<template>
  <div class="container mx-auto flex gap-4">
    <div class="flex flex-col gap-2">
      <div
        class="rounded-full w-24 h-24 bg-cover bg-center"
        :style="{
          backgroundImage: `url(${userMock.avatar})`,
        }"
      />

      <h1>{{ userMock.name }}</h1>
    </div>

    <div class="flex flex-col gap-4 w-full">
      <Review class="w-full" v-for="review in reviews" :review="review" />
    </div>
  </div>
</template>
