<script setup lang="ts">
import { Toaster } from 'vue-sonner';
import 'vue-sonner/style.css';
import TheHeader from './components/TheHeader.vue';
</script>

<template>
  <div class="relative z-10 flex min-h-svh flex-col">
    <TheHeader class="sticky top-0" />
    <RouterView />
  </div>

  <Toaster />
</template>
