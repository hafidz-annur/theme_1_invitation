<script setup>
const props = defineProps({ data: Object });
</script>
<template>
  <v-container height="100dvh" class="relative p-5">
    <div
      class="flex items-center justify-center h-[87dvh] bg-black/80 rounded-lg"
    >
      <div class="text-center">
        <div class="animate__animated animate__zoomIn animate__delay-1s">
          <div class="flex justify-center mb-2">
            <v-avatar :image="props.data?.mempelai.pria.foto" size="120" />
          </div>
          <h3 class="font-bold text-2xl">
            {{ props.data?.mempelai.pria.nama_lengkap }}
          </h3>
          <v-btn
            shadow="0"
            prepend-icon="mdi-instagram"
            density="compact"
            :href="props.data?.mempelai.pria.insta"
            target="_blank"
            class="mb-3 mt-1"
          >
            {{ props.data?.mempelai.pria.nama_panggilan }}</v-btn
          >
          <p class="mb-0 text-[12px]">
            Putra
            {{ props.data?.mempelai.pria.anak_ke }} dari
          </p>
          <p class="text-[14px] mt-0">
            {{ props.data?.mempelai.pria.orang_tua?.ayah }} &
            {{ props.data?.mempelai.pria.orang_tua?.ibu }}
          </p>
        </div>

        <h2
          class="text-xl mt-2 mb-2 animate__animated animate__zoomIn animate__delay-2s"
        >
          dengan
        </h2>

        <div class="animate__animated animate__zoomIn animate__delay-3s">
          <div class="flex justify-center mb-2">
            <v-avatar :image="props.data?.mempelai.wanita.foto" size="120" />
          </div>
          <h3 class="font-bold text-2xl">
            {{ props.data?.mempelai.wanita.nama_lengkap }}
          </h3>
          <v-btn
            shadow="0"
            prepend-icon="mdi-instagram"
            density="compact"
            :href="props.data?.mempelai.pria.insta"
            target="_blank"
            class="mb-3 mt-1"
          >
            {{ props.data?.mempelai.wanita.nama_panggilan }}</v-btn
          >
          <p class="mb-0 text-[12px]">
            Putra
            {{ props.data?.mempelai.wanita.anak_ke }} dari
          </p>
          <p class="text-[14px] mt-0">
            {{ props.data?.mempelai.wanita.orang_tua?.ayah }} &
            {{ props.data?.mempelai.wanita.orang_tua?.ibu }}
          </p>
        </div>
      </div>
    </div>
  </v-container>
</template>
