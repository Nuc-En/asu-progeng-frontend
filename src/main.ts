import { VueQueryPlugin } from "@tanstack/vue-query";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "vue-router/auto-routes";
import App from "./App.vue";
import "./style.css";

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).use(VueQueryPlugin).mount("#app");
