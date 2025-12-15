<script setup lang="ts"></script>

<template>
  <div class="button-neomorphic-container">
    <slot />
  </div>
</template>

<style scoped>
.button-neomorphic-container {
  width: fit-content;
  border-radius: 0.5em;
  border: 1px solid #e8e8e8;
  box-shadow:
    6px 6px 12px #c5c5c5,
    -6px -6px 12px #ffffff;
}

.button-neomorphic-container > * {
  border-radius: 0 !important;
  background: #e8e8e8 !important;
  box-shadow: none !important;
  position: relative;
}

/* .button-neomorphic-container > *:hover {
  background: #e8e8e8 !important;
  box-shadow:
    2px 2px 6px #c5c5c5,
    -2px -2px 6px #ffffff !important;
} */

.button-neomorphic-container > *:hover::after {
  background: rgb(64, 126, 183) !important;
  box-shadow: 2px 2px 6px rgb(64, 126, 183) !important;
}

.button-neomorphic-container > *:active::after {
  box-shadow: 2px 2px 4px rgb(64, 126, 183) !important;
}

.button-neomorphic-container > *::after {
  transition: all;
  content: '';
  position: absolute;
  bottom: -8px;
  height: 5px;
  width: 100%;
  border-radius: 0.5em;
  z-index: 0;
}
</style>
