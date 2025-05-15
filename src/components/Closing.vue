<script setup>
const props = defineProps({ caption: Object });
</script>
<template>
  <v-container height="100dvh" class="relative p-5">
    <div
      class="flex items-center justify-center bg-white/80 h-[87dvh] rounded-lg p-5"
    >
      <div class="text-center">
        <div class="flex justify-center">
          <img src="/public/img/wayang.png" alt="" class="w-[80px] mb-4" />
        </div>
        <p class="text-[14px]" v-html="props.caption?.islam?.penutup[2]"></p>
      </div>
    </div>
  </v-container>
</template>
