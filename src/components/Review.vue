<script setup lang="ts">
import type { Review } from '@/types/Review/Review';
import { RouterLink } from 'vue-router';
import Card from './ui/card/Card.vue';
import CardContent from './ui/card/CardContent.vue';
import CardFooter from './ui/card/CardFooter.vue';
import CardHeader from './ui/card/CardHeader.vue';

defineProps<{
  review?: Review;
}>();
</script>

<template>
  <Card>
    <CardHeader class="text-3xl font-semibold">
      <div class="flex justify-between">
        <RouterLink :to="{ path: `/products/${review?.productId}` }">
          {{ review?.productName }}
        </RouterLink>
        <p>Оценка: {{ review?.rating }} / 5.0</p>
      </div>
    </CardHeader>

    <CardContent class="flex flex-col gap-2">
      <p class="italic font-thin">
        {{ review?.comment }}
      </p>
    </CardContent>

    <CardFooter class="text-muted-foreground flex justify-between w-full">
      <div class="flex gap-2">
        <img
          class="w-16 h-16 rounded-md"
          v-for="img in review?.media"
          :src="img"
        />
      </div>

      <div class="flex flex-col gap-2 self-end">
        <RouterLink
          class="underline"
          :to="{ path: `/users/${review?.user.id}` }"
        >
          <img class="w-16 h-16 rounded-md" :src="review?.user.avatar" />
          <p>
            {{ review?.user.name }}
          </p>
        </RouterLink>
        <p>{{ review?.date }}</p>
      </div>
    </CardFooter>
  </Card>
</template>
