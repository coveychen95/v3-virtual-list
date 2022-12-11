import { createRouter, createWebHistory } from "vue-router";
import Room from "../views/room.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "room",
      component: Room,
    },
  ],
});

export default router;
