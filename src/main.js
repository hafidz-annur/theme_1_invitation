import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Countdown from "vue3-flip-countdown";
import "animate.css";

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
    primary: "#C3C5C5", // Biru lembut sebagai warna utama
    "primary-darken-1": "#42A5F5", // Biru terang untuk hover/aksen

    secondary: "#1E1E1E", // Hitam lembut / abu gelap (background utama)
    "secondary-darken-1": "#121212", // Background paling gelap

    surface: "#2C2C2C", // Untuk permukaan elemen seperti kartu/modal
    error: "#EF5350", // Merah terang untuk peringatan
    info: "#29B6F6", // Biru terang untuk info
    success: "#66BB6A", // Hijau muda untuk sukses/konfirmasi
    warning: "#FFCA28", // Kuning lembut untuk peringatan
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
