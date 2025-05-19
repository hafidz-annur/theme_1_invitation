<script setup>
import { ref } from "vue";
import moment from "moment";

const props = defineProps({ data: Object, caption: Object });
const deadline = ref(props.data?.acara?.resepsi?.tanggal);
</script>
<template>
  <v-container height="100dvh" class="relative p-5">
    <div class="bg-[#608961]/60 h-[87dvh] rounded-lg px-5">
      <div class="text-center pt-5 animate__animated animate__zoomIn animate__delay-1s">
        <p
          v-html="props.caption?.islam?.pembuka[1]"
          class="text-[14px] mt-3"
        ></p>
      </div>

      <div class="flex justify-center animate__animated animate__zoomIn animate__delay-1s">
        <img src="/public/img/wayang.png" alt="" class="w-[110px]" />
      </div>

      <div class="absolute bottom-20 left-0 w-full flex justify-center animate__animated animate__zoomIn animate__delay-1s">
        <div class="w-[60%]">
          <div class="text-center mb-3">
            <v-avatar
              :image="props.data?.foto_opening"
              size="200"
              class="mb-3"
            />
            <h1 class="text-xl font-bold">
              {{ props.data?.mempelai.pria.nama_panggilan }} &
              {{ props.data?.mempelai.wanita.nama_panggilan }}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>
