import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.config.globalProperties.$myGlobalVariable = "@/assets/mrkrabs.png";

app.mount("#app");
