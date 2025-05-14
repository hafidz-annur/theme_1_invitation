import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Countdown from "vue3-flip-countdown";

// Vuetify imports
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader

export default createVuetify({
  icons: {
    defaultSet: "mdi",
  },
});

const myCustomLightTheme = {
  dark: false,
  colors: {
    primary: "#D4AF37", // Emas klasik (rich gold)
    "primary-darken-1": "#B8860B", // Bronze / deep gold
    secondary: "#F5F5F5", // Putih lembut (soft white)
    "secondary-darken-1": "#E0E0E0", // Abu terang (untuk batas / bayangan)
    surface: "#FAF9F6", // Ivory / putih keemasan
    error: "#C62828", // Merah tegas, tetap terlihat di background putih
    info: "#A67C00", // Info dengan nuansa gold gelap
    success: "#4CAF50", // Hijau klasik untuk konfirmasi
    warning: "#FFB300", // Kuning emas terang untuk peringatan
  },
};

// Vuetify instance
const vuetify = createVuetify({
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
    },
  },
  components,
  directives,
});

// Styles
import "./assets/main.css";

const app = createApp(App);

app.use(vuetify);
app.use(router);
app.use(Countdown);
app.mount("#app");
