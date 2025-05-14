<script setup>
import { ref } from "vue";
import moment from "moment";

const props = defineProps({ data: Object, caption: Object });
const deadline = ref(props.data?.acara?.resepsi?.tanggal);
</script>
<template>
  <v-container height="100vh" class="relative p-5">
    <div class="bg-white/80 h-[87vh] rounded-lg">
      <div class="text-center pt-5">
        <p
          v-html="props.caption?.islam?.pembuka[1]"
          class="text-[16px] mt-3"
        ></p>
        <!-- <h2 class="mb-3 font-bold">
        {{ moment(deadline).format("LL") }}
      </h2> -->
        <!-- <vue3-flip-countdown
        countdownSize="1rem"
        labelSize=".6rem"
        mainFlipBackgroundColor="#fff"
        secondFlipBackgroundColor="#fff"
        mainColor="#000"
        secondFlipColor="#000"
        :labels="{
          days: 'Hari',
          hours: 'Jam',
          minutes: 'Menit',
          seconds: 'Detik',
        }"
        :deadline="deadline"
      /> -->
      </div>

      <div class="flex justify-center">
        <img src="/public/img/wayang.png" alt="" class="w-[110px]" />
      </div>

      <div class="absolute bottom-20 left-0 w-full flex justify-center">
        <div class="w-[60%]">
          <div class="text-center mb-3">
            <v-avatar
              :image="props.data?.foto_opening"
              size="200"
              class="mb-3"
            />
            <h1 class="text-xl font-bold">
              {{ props.data?.mempelai[0].nama_panggilan }} &
              {{ props.data?.mempelai[1].nama_panggilan }}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>
