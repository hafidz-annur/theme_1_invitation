<script setup>
import moment from "moment";

const props = defineProps({ data: Object });
</script>
<template>
  <v-container height="100dvh" class="relative p-5">
    <div class="flex items-center justify-center h-[87dvh] bg-white/80 rounded-lg">
      <div class="text-center">
        <div class="flex justify-center mb-3">
          <img src="/public/img/wayang.png" alt="" class="w-[40px]" />
        </div>
        <h3 class="text-[16px] font-bold mb-2">Akad Pernikahan</h3>
        <h4 class="mb-2">{{ props.data?.acara?.akad_nikah?.hari }}</h4>
        <h4>
          {{ moment(props.data?.acara?.akad_nikah?.tanggal).format("LL") }}
        </h4>
        <p>Pukul {{ props.data?.acara?.akad_nikah?.waktu }}</p>
        <p>{{ props.data?.acara?.akad_nikah?.tempat }}</p>
        <v-spacer class="my-5" />
        <div class="flex justify-center">
          <img src="/public/img/joglo.png" alt="" class="w-[100px]" />
        </div>
        <h3 class="text-[16px] font-bold mb-2 -mt-[20px]">Resepsi</h3>
        <h4 class="mb-2">{{ props.data?.acara?.resepsi?.hari }}</h4>
        <h4>
          {{ moment(props.data?.acara?.resepsi?.tanggal).format("LL") }}
        </h4>
        <p>Pukul {{ props.data?.acara?.resepsi?.waktu }}</p>
        <p>{{ props.data?.acara?.resepsi?.tempat }}</p>
      </div>
    </div>
  </v-container>
</template>
