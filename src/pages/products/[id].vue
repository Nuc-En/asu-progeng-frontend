<script setup lang="ts">
import Review from "@/components/Review.vue";
import ButtonNeo from "@/components/ui/buttonNeomorphic/ButtonNeo.vue";
import { productMock } from "@/mock/ProductMock";
import { reviewMock } from "@/mock/ReviewMock";
import type { Review as TReview } from "@/types/Review/Review";
import { Heart } from "lucide-vue-next";
import { useRoute } from "vue-router";
import ProductGallery from "./ProductGallery.vue";

const route = useRoute();
const id = route.name === "/products/[id]" ? Number(route.params.id) : 0;

const product = productMock[id - 1];

const reviews = Array.from({ length: 5 }).fill(
  reviewMock
) as unknown as TReview[];
</script>

<template>
  <div class="flex flex-col md:flex-row gap-8 container mx-auto">
    <ProductGallery class="sticky top-0" :images="product?.images" />

    <div class="flex flex-col gap-4">
      <h1 class="text-3xl font-bold">{{ product?.title }}</h1>
      <p class="text-lg text-muted-foreground">
        {{ product?.description }}
      </p>

      <div class="flex gap-2 self-end">
        <ButtonNeo size="lg" class="w-fit">Купить</ButtonNeo>
        <ButtonNeo size="lg" class="w-fit">
          <Heart />
        </ButtonNeo>
      </div>

      <div class="flex flex-col gap-4">
        <h2 class="text-2xl font-semibold">Отзывы</h2>
        <div class="flex flex-col gap-4">
          <Review v-for="review in reviews" :review="review" />
        </div>
      </div>
    </div>
  </div>
</template>
