<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({ data: String });
const emit = defineEmits(["selected"]);

let intervalId;
const audio = ref(null);
const autoplay_menu = ref(false);
const autoplay_music = ref(false);
const menus = ref([
  {
    icon: "mdi-home",
    title: "Pembukaan",
  },
  {
    icon: "mdi-account-heart-outline",
    title: "Mempelai",
  },
  {
    icon: "mdi-comment-quote-outline",
    title: "Quotes",
  },
  {
    icon: "mdi-calendar-star",
    title: "Acara",
  },
  {
    icon: "mdi-map-marker-radius-outline",
    title: "Lokasi",
  },
  {
    icon: "mdi-multimedia",
    title: "Galeri",
  },
  {
    icon: "mdi-gift-open-outline",
    title: "Hadiah",
  },
  {
    icon: "mdi-send-variant-outline",
    title: "RSVP",
  },
  {
    icon: "mdi-emoticon-wink-outline",
    title: "Penutupan",
  },
]);

const selected = ref(null);
const selectedMenu = () => {
  emit("selected", selected.value);
  if (autoplay_menu.value) {
    autoplay_menu.value = false;
    clearInterval(intervalId);
  }
};

const autoplayMenu = () => {
  if (autoplay_menu.value) {
    let index = menus.value.findIndex((menu) => menu.title === selected.value);
    const menus_count = menus.value.length;

    intervalId = setInterval(() => {
      if (index >= menus_count) {
        autoplay_menu.value = false;
        selected.value = "Pembukaan";
        emit("selected", selected.value);
        return;
      }

      const element = menus.value[index].title;
      selected.value = element;
      emit("selected", selected.value);
      index++;
    }, 8000);
  } else {
    clearInterval(intervalId);
  }
};

const playMusic = () => {
  if (!audio.value) return;

  if (audio.value.paused) {
    audio.value
      .play()
      .then(() => {
        autoplay_music.value = true;
      })
      .catch((err) => {
        console.error("Audio play failed:", err);
      });
  } else {
    audio.value.pause();
    autoplay_music.value = false;
  }
};

onMounted(() => {
  audio.value = new Audio(props.data?.musik);
  autoplay_menu.value = true;
  autoplayMenu();
  playMusic();
});
</script>

<template>
  <div class="fixed top-3 left-3 z-[9999] flex flex-col">
    <v-btn
      color="#C1A162"
      :icon="!autoplay_menu ? 'mdi-play-outline' : 'mdi-pause'"
      @click="
        autoplay_menu = !autoplay_menu;
        autoplayMenu();
      "
    />
  </div>
  <div class="fixed top-3 right-3 z-[9999] flex flex-col">
    <v-btn
      color="#C1A162"
      :icon="!autoplay_music ? 'mdi-music-note-outline' : 'mdi-music-note-off'"
      @click="playMusic()"
    />
  </div>
  <div class="absolute bottom-1 left-0 w-full px-5">
    <v-tabs
      v-model="selected"
      align-tabs="center"
      bg-color="#C1A162"
      color="secondary"
      slider-color="secondary"
      height="50"
      stacked
      center-active
      class="rounded-lg"
      @update:model-value="selectedMenu()"
    >
      <v-tab
        density="compact"
        v-for="item in menus"
        :value="item.title"
        class="p-0"
      >
        <v-icon :icon="item.icon" size="20" />
        <p class="text-[10px]">
          {{ item.title }}
        </p>
      </v-tab>
    </v-tabs>
  </div>
</template>
