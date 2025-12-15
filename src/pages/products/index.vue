<script setup lang="ts">
import ProductCard from "@/components/ProductCard.vue";
import { productMock } from "@/mock/ProductMock";
</script>

<template>
  <div class="flex flex-wrap items-center gap-4 container mx-auto">
    <ProductCard :product v-for="product in productMock" :key="product.id" />
  </div>
</template>
