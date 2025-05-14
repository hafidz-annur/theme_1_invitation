<script setup>
import Cover from "./components/Cover.vue";
import Opening from "./components/Opening.vue";
import Mempelai from "./components/Mempelai.vue";
import Quotes from "./components/Quotes.vue";
import Acara from "./components/Acara.vue";
import Lokasi from "./components/Lokasi.vue";
import Galeri from "./components/Galeri.vue";
import Hadiah from "./components/Hadiah.vue";
import RSVP from "./components/RSVP.vue";
import Closing from "./components/Closing.vue";
import Menus from "./components/Menus.vue";
import { ref, onMounted } from "vue";
import biodata from "@/biodata/mempelai.js";
import quote from "@/biodata/quotes.js";
import caption from "@/biodata/caption.js";

const props = defineProps({ name: String });
const menu = ref(null);

const checkMenu = (values) => {
  menu.value = values;
};

const data = ref(biodata);
const quotes = ref(quote);
const captions = ref(caption);
</script>

<template>
  <v-app>
    <v-container class="p-0 my-0">
      <v-row justify="center" class="p-0 m-0" no-gutters>
        <v-col md="5" cols="12" class="bg-theme">
          <div class="relative overflow-hidden">
            <Cover
              v-if="!menu"
              :data="data"
              :name="props?.name"
              @selected="checkMenu"
            />
            <Opening
              v-if="menu == 'Pembukaan'"
              :data="data"
              :caption="captions"
            />
            <Mempelai v-if="menu == 'Mempelai'" :data="data" />
            <Quotes v-if="menu == 'Quotes'" :quote="quotes" />
            <Acara v-if="menu == 'Acara'" :data="data" />
            <Lokasi v-if="menu == 'Lokasi'" :data="data" />
            <Galeri v-if="menu == 'Galeri'" :data="data" />
            <Hadiah v-if="menu == 'Hadiah'" :data="data" />
            <RSVP v-if="menu == 'RSVP'" />
            <Closing v-if="menu == 'Penutupan'" />
          </div>
          <Menus v-if="menu" :data="data" @selected="checkMenu" />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style>
.bg-theme {
  background-image: url("/public/img/cover.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
