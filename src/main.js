import { createApp } from "vue";
import App from "./App.vue";
import SlitherSlider from "slither-slider";

const app = createApp(App, SlitherSlider);

// app.use(SlitherSlider); // global registration - can be used anywhere

app.mount("#app");
