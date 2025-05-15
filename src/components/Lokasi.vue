<script setup>
const props = defineProps({ data: Object });
</script>
<template>
  <v-container height="100dvh" class="relative p-5">
    <div class="flex items-center justify-center h-[87dvh] bg-white/80 rounded-lg">
      <div class="text-center">
        <h3 class="text-lg mb-5">{{ props.data?.lokasi?.tempat }}</h3>
        <div
          v-html="props.data?.lokasi?.maps_embed"
          class="h-[300px] rounded-lg relative overflow-hidden"
        ></div>
        <v-btn
          :href="props.data?.lokasi?.maps_link"
          target="_blank"
          class="mt-5"
          append-icon="mdi-bicycle"
          prepend-icon="mdi-bicycle"
          rounded
          color="info"
        >
          Kunjungi Sekarang
        </v-btn>
      </div>
    </div>
  </v-container>
</template>
