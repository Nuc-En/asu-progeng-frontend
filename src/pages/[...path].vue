<script setup lang="ts">
import ButtonNeo from "@/components/ui/buttonNeomorphic/ButtonNeo.vue";
</script>

<template>
  <div class="flex items-center justify-center w-dvw min-h-dvh flex-col gap-4">
    <span class="text-2xl"> Ой 404 как так........ </span>
    <RouterLink to="/">
      <ButtonNeo size="lg"> Перейти домой...... </ButtonNeo>
    </RouterLink>
  </div>
</template>
