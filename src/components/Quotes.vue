<script setup>
const props = defineProps({ quote: Object });
</script>
<template>
  <v-container height="100dvh" class="relative p-5">
    <div class="flex items-center justify-center h-[87dvh] bg-white/80 rounded-lg px-5">
      <div class="text-center animate__animated animate__zoomIn animate__delay-1s">
        <div class="flex justify-center mb-3">
          <img src="/public/img/wayang.png" alt="" class="w-[60px]" />
        </div>
        <p class="text-[14px]">
          {{ props.quote?.islam[0].quote }}
        </p>
        <h3 class="text-2xl font-bold  mt-3">
          {{ props.quote?.islam[0].sumber }}
        </h3>
      </div>
    </div>
  </v-container>
</template>
