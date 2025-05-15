<script setup>
const props = defineProps({ data: Object });
</script>
<template>
  <v-container height="100dvh" class="relative p-5">
    <div class="flex items-center justify-center h-[87dvh] bg-white/80 rounded-lg">
      <div class="text-center">
        <div class="flex justify-center mb-2">
          <v-avatar :image="props.data?.mempelai[0].foto" size="150" />
        </div>
        <h3 class="font-bold">
          {{ props.data?.mempelai[0].nama_lengkap }}
        </h3>
        <p class="mb-0 text-[12px]">
          Putra
          {{ props.data?.mempelai[0].anak_ke }} dari
        </p>
        <p class="text-[14px] mt-0">
          {{ props.data?.mempelai[0].orang_tua?.ayah }} &
          {{ props.data?.mempelai[0].orang_tua?.ibu }}
        </p>

        <h2 class="text-base mt-5 mb-5">dengan</h2>

        <div class="flex justify-center mb-2">
          <v-avatar :image="props.data?.mempelai[1].foto" size="150" />
        </div>
        <h3 class="font-bold">
          {{ props.data?.mempelai[1].nama_lengkap }}
        </h3>
        <p class="mb-0 text-[12px]">
          Putra
          {{ props.data?.mempelai[1].anak_ke }} dari
        </p>
        <p class="text-[14px] mt-0">
          {{ props.data?.mempelai[1].orang_tua?.ayah }} &
          {{ props.data?.mempelai[1].orang_tua?.ibu }}
        </p>
      </div>
    </div>
  </v-container>
</template>
