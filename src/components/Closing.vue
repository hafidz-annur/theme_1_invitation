<script setup>
const props = defineProps({ caption: Object });
</script>
<template>
  <v-container height="100dvh" class="relative p-5">
    <div
      class="flex items-center justify-center bg-[#608961]/60 h-[87dvh] rounded-lg p-5 relative overflow-hidden"
    >
      <div
        class="text-center animate__animated animate__zoomIn animate__delay-1s mb-10"
      >
        <div class="flex justify-center">
          <img src="/public/img/wayang.png" alt="" class="w-[80px] mb-4" />
        </div>
        <p class="text-[14px]" v-html="props.caption?.islam?.penutup[2]"></p>
      </div>
      <div class="absolute bottom-[5vh] left-0 w-full animate__animated animate__fadeInUp animate__delay-2s">
        <div class="flex justify-center mt-[20vh]">
          <img src="/public/logo.png" alt="Āmantrana" class="w-20" />
        </div>
        <div class="text-center">
          <small>Digital Wedding Invitation © 2025</small>
        </div>
      </div>
    </div>
  </v-container>
</template>
