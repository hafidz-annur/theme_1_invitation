<script setup>
import { ref, onBeforeMount, onMounted } from "vue";

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
import biodata from "@/biodata/mempelai.js";
import quote from "@/biodata/quotes.js";
import caption from "@/biodata/caption.js";

const props = defineProps({ name: String });
const menu = ref();

const loading = ref(true);
const progress = ref(0);
const checkMenu = (values) => {
  menu.value = values;
};

const data = ref(biodata);
const quotes = ref(quote);
const captions = ref(caption);

const updateOrCreateMetaTag = (attrName, attrValue, content) => {
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (element) {
    element.setAttribute("content", content);
  } else {
    element = document.createElement("meta");
    element.setAttribute(attrName, attrValue);
    element.setAttribute("content", content);
    document.head.appendChild(element);
  }
};

onBeforeMount(async () => {
  // Simulasi progress naik perlahan (0% ke 100%)
  while (progress.value < 100) {
    await new Promise((resolve) => setTimeout(resolve, 100)); // tiap 50ms
    progress.value += 10;
  }

  // Setelah progress penuh, matikan loading
  loading.value = false;
});
</script>

<template>
  <v-app class="bg-gradient-to-r from-gray-900 to-gray-700">
    <div class="flex flex-col justify-center items-center w-full h-[100dvh]" v-if="loading">
      <div class="flex justify-center animate__animated animate__pulse animate__infinite">
        <img src="/public/favicon.png" alt="Āmantrana" class="w-14" />
      </div>

      <div class="w-[200px] mt-2">
        <v-progress-linear v-model="progress" color="info" height="20" rounded>
          <template v-slot:default="{ value }">
            <strong class="text-gray-200 text-[10px]">{{ Math.ceil(value) }}%</strong>
          </template>
        </v-progress-linear>
      </div>
      <div class="px-5 text-center mt-3">
        <p class="text-md">
          Bersiaplah untuk kisah indah kami... <br />
          sebentar lagi tampil 💑
        </p>
      </div>
    </div>
    <v-container class="p-0 my-0" v-else>
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
              class="animate__animated animate__fadeInUp"
            />
            <Mempelai
              v-if="menu == 'Mempelai'"
              :data="data"
              class="animate__animated animate__fadeInUp"
            />
            <Quotes
              v-if="menu == 'Quotes'"
              :quote="quotes"
              class="animate__animated animate__fadeInUp"
            />
            <Acara
              v-if="menu == 'Acara'"
              :data="data"
              class="animate__animated animate__fadeInUp"
            />
            <Lokasi
              v-if="menu == 'Lokasi'"
              :data="data"
              class="animate__animated animate__fadeInUp"
            />
            <Galeri
              v-if="menu == 'Galeri'"
              :data="data"
              class="animate__animated animate__fadeInUp"
            />
            <Hadiah
              v-if="menu == 'Hadiah'"
              :data="data"
              class="animate__animated animate__fadeInUp"
            />
            <RSVP v-if="menu == 'RSVP'" />
            <Closing
              v-if="menu == 'Penutupan'"
              :caption="captions"
              class="animate__animated animate__fadeInUp"
            />
            <Menus v-if="menu" :data="data" @selected="checkMenu" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style>
.bg-theme {
  background-image: url("/public/img/cover.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
