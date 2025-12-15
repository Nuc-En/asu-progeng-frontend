<script setup lang="ts">
import { BarcodeIcon } from 'lucide-vue-next';
import ModeToggle from './ModeToggle.vue';
import ButtonNeoGroup from './ui/buttonNeoGroup/ButtonNeoGroup.vue';
import ButtonNeo from './ui/buttonNeomorphic/ButtonNeo.vue';

const links = [
  {
    name: 'Главная',
    href: '/',
  },
  {
    name: 'Товары',
    href: '/products',
  },
];
</script>

<template>
  <!-- <header class="p-4 z-1 flex items-center justify-between backdrop-blur-2xl">
    <div class="flex gap-4 items-center">
      <BarcodeIcon />
      <RouterLink
        class="hover:underline hover:underline-offset-4"
        v-for="link in links"
        :key="link.name"
        :to="link.href"
      >
        {{ link.name }}
      </RouterLink>
    </div>
    <div class="flex items-center gap-4">
      <RouterLink to="/login">
        <Button>Войти</Button>
      </RouterLink>
      <ModeToggle />
    </div>
  </header> -->

  <header class="z-1 flex items-center justify-between">
    <div
      class="flex gap-4 p-4 items-center bg-background/90 rounded-br-2xl backdrop-blur-md"
    >
      <BarcodeIcon class="hover:scale-150 transition-all duration-500" />
      <ButtonNeoGroup>
        <ButtonNeo v-for="link in links" :key="link.name">
          <RouterLink :to="link.href">
            {{ link.name }}
          </RouterLink>
        </ButtonNeo>
      </ButtonNeoGroup>

      <!-- <ButtonNeoGroup>
        <ButtonNeo> Главная </ButtonNeo>
        <ButtonNeo> Товары </ButtonNeo>
      </ButtonNeoGroup> -->
    </div>

    <div
      class="flex items-center gap-4 p-4 bg-background/90 rounded-bl-2xl backdrop-blur-md"
    >
      <RouterLink to="/login">
        <ButtonNeo>Войти</ButtonNeo>
      </RouterLink>
      <ModeToggle />
    </div>
  </header>
</template>
