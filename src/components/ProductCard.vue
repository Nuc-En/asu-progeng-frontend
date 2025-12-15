<script setup lang="ts">
import type { Product } from '@/types/Product/Product';
import Card from './ui/card/Card.vue';
import CardContent from './ui/card/CardContent.vue';
import CardDescription from './ui/card/CardDescription.vue';
import CardHeader from './ui/card/CardHeader.vue';
import CardTitle from './ui/card/CardTitle.vue';
import Carousel from './ui/carousel/Carousel.vue';
import CarouselContent from './ui/carousel/CarouselContent.vue';
import CarouselItem from './ui/carousel/CarouselItem.vue';
import Skeleton from './ui/skeleton/Skeleton.vue';

defineProps<{
  product?: Product;
}>();
</script>

<template>
  <Card v-if="product" class="w-60">
    <CardContent>
      <Carousel class="relative">
        <CarouselContent class="max-w-full">
          <CarouselItem v-for="image in product.images">
            <img :src="image" class="h-40 w-120" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </CardContent>

    <CardHeader>
      <RouterLink
        :to="{
          path: '/products/' + product.id,
        }"
      >
        <CardTitle>{{ product.title }}</CardTitle>
      </RouterLink>
      <CardDescription class="line-clamp-2">
        {{ product.description }}
      </CardDescription>
    </CardHeader>
  </Card>

  <Skeleton v-else class="h-40 w-120" />
</template>
