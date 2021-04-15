import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "./assets/styles/index.css";
import route from "./route";

createApp(App).use(store).use(route).mount("#app");
