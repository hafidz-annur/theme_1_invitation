<script setup>
const props = defineProps({ data: Object });
</script>
<template>
  <v-container height="100dvh" class="relative p-5">
    <div
      class="flex items-center justify-center h-[87dvh] bg-black/80 rounded-lg"
    >
      <div
        class="text-center animate__animated animate__zoomIn animate__delay-1s"
      >
        <p class="text-xl mb-5">{{ props.data?.lokasi?.tempat }}</p>
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
          color="primary"
          size="small"
        >
          Kunjungi Sekarang
        </v-btn>
      </div>
    </div>
  </v-container>
</template>
