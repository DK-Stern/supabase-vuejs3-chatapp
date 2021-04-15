import Start from "./pages/Start";
import Chat from "./pages/Chat";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: Start },
  { path: "/chat", component: Chat },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
