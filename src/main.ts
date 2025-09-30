import ui from "@nuxt/ui/vue-plugin";

import "./styles/main.css";

import { addIcons, OhVueIcon } from "oh-vue-icons";
import { BiGithub } from "oh-vue-icons/icons";
import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

addIcons(BiGithub);

const app = createApp(App);
const pinia = createPinia();

app.component("VIcon", OhVueIcon);
app.use(pinia);
app.use(router);
app.use(ui);
app.mount("#app");
