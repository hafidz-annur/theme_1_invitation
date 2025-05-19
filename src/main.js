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
    primary: "#4CAF50", // Hijau elegan utama (classic green)
    "primary-darken-1": "#388E3C", // Hijau lebih gelap untuk hover/fokus
    "primary-lighten-1": "#81C784", // Hijau lembut untuk elemen sekunder

    secondary: "#F3F3F3", // Abu terang sebagai background netral elegan
    "secondary-darken-1": "#DADADA", // Sedikit lebih gelap untuk border/shadow

    surface: "#FFFFFF", // Putih bersih untuk elemen permukaan
    error: "#C62828", // Merah kuat untuk notifikasi kesalahan
    info: "#2E7D32", // Hijau gelap (bisa juga dipakai sebagai info)
    success: "#66BB6A", // Hijau terang untuk notifikasi sukses
    warning: "#F9A825", // Kuning keemasan elegan untuk peringatan
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
