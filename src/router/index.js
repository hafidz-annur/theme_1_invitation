// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../Home.vue";

const routes = [
  {
    path: "/:name?",
    props: (route) => ({ name: route.params.name }),
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
