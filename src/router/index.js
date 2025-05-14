// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../Home.vue";

const routes = [
  {
    path: "/:n?",
    props: (route) => ({ name: route.query.n }),
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
