<script setup>
import { ref } from "vue";
import moment from "moment";

const props = defineProps({ data: Object });

const deadline = ref("2025-12-10 10:00:00");

const saveCalendar = () => {
  const title =
    "&text=Undangan Pernikahan " +
    props.data?.mempelai.pria.nama_panggilan +
    " - " +
    props.data?.mempelai.wanita.nama_panggilan;
  const description =
    "&details=Dalam+perjalanan+yang+penuh+rasa+dan+doa%2C%0Akami+memantapkan+hati+untuk+melangkah+bersama+dalam+ikatan+suci.%0AKami+mengundang+dengan+penuh+cinta+dan+harap%2C%0Aagar+Bapak%2FIbu%2FSaudara%2Fi+dapat+hadir%0Amerayakan+momen+bahagia+kami.";
  const location = "&location=" + props.data?.acara?.resepsi?.tempat;
  const dates =
    "&dates=" +
    moment("2025-12-10").utc().format("YYYYMMDDTHHmmss[Z]") +
    "%2F" +
    moment("2025-12-10").utc().format("YYYYMMDDTHHmmss[Z]");

  const url =
    "https://www.google.com/calendar/render?action=TEMPLATE" +
    title +
    description +
    location +
    dates;

  window.open(url, "_blank");
};
</script>
<template>
  <v-container height="100dvh" class="relative p-5">
    <div
      class="flex items-center justify-center h-[87dvh] bg-black/80 rounded-lg"
    >
      <div class="text-center">
        <div class="animate__animated animate__zoomIn animate__delay-1s">
          <div class="flex justify-center mb-3">
            <img src="/public/img/wayang.png" alt="" class="w-[40px]" />
          </div>
          <h3 class="text-2xl font-bold mb-2">Akad Pernikahan</h3>
          <p class="mb-0">{{ props.data?.acara?.akad_nikah?.hari }}</p>
          <p>
            {{ props.data?.acara?.akad_nikah?.tanggal }}
          </p>
          <p>Pukul {{ props.data?.acara?.akad_nikah?.waktu }}</p>
          <p>{{ props.data?.acara?.akad_nikah?.tempat }}</p>
        </div>

        <vue3-flip-countdown
          countdownSize=".8rem"
          labelSize=".7rem"
          mainColor="white"
          labelColor="white"
          :flipAnimation="false"
          :labels="{
            days: 'Hari',
            hours: 'Jam',
            minutes: 'Menit',
            seconds: 'Detik',
          }"
          :deadline="props.data?.acara?.resepsi?.raw_tanggal"
          class="animate__animated animate__zoomIn animate__delay-2s mt-3"
        />

        <div class="animate__animated animate__zoomIn animate__delay-2s">
          <v-spacer class="my-5" />
          <div class="flex justify-center">
            <img src="/public/img/joglo.png" alt="" class="w-[100px]" />
          </div>
          <h3 class="text-2xl font-bold mb-2 -mt-[20px]">Resepsi</h3>
          <p class="mb-0">{{ props.data?.acara?.resepsi?.hari }}</p>
          <p>
            {{ props.data?.acara?.resepsi?.tanggal }}
          </p>
          <p>Pukul {{ props.data?.acara?.resepsi?.waktu }}</p>
          <p>{{ props.data?.acara?.resepsi?.tempat }}</p>

          <v-btn
            color="primary"
            size="small"
            prepend-icon="mdi-calendar"
            @click="saveCalendar"
            class="mt-3"
          >
            Simpan Tanggal
          </v-btn>
        </div>
      </div>
    </div>
  </v-container>
</template>

<style>
.flip-clock__piece {
  margin: 0 10px !important;
}
</style>
