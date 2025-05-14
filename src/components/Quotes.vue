<script setup>
const props = defineProps({ quote: Object });
</script>
<template>
  <v-container height="100vh" class="relative p-5">
    <div class="flex items-center justify-center h-[87vh] bg-white/80 rounded-lg">
      <div class="text-center">
        <div class="flex justify-center mb-3">
          <img src="/public/img/wayang.png" alt="" class="w-[60px]" />
        </div>
        <p class="text-lg">
          {{ props.quote?.islam[0].quote }}
        </p>
        <h3 class="text-lg mt-3">
          {{ props.quote?.islam[0].sumber }}
        </h3>
      </div>
    </div>
  </v-container>
</template>
