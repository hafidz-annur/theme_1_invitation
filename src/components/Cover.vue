<script setup>
const props = defineProps({ name: String, data: Object });

const emits = defineEmits(["selected"]);
const openInvitation = () => {
  emits("selected", "Pembukaan");
};
</script>
<template>
  <v-container height="100vh" class="relative">
    <div class="text-center pt-5">
      <h3 class="text-md mb-3">The Wedding of</h3>
      <h1 class="text-4xl font-bold">
        {{ props.data?.mempelai[0].nama_panggilan }}
      </h1>

      <h2 class="text-xl font-bold">&</h2>
      <h1 class="text-4xl font-bold">
        {{ props.data?.mempelai[1].nama_panggilan }}
      </h1>

      <div class="flex justify-center mt-5">
        <img src="/public/img/wayang.png" alt="" class="w-[150px]" />
      </div>
    </div>

    <div class="absolute bottom-10 left-0 w-full flex justify-center">
      <div class="w-[60%]">
        <div class="text-center mb-3">
          Kepada Yth; <br />
          Bapak/Ibu/Saudara/i
        </div>
        <v-card variant="tonal" color="primary" border>
          <v-card-text class="text-center">
            <h4 class="text-lg">
              {{ props.name ? props.name : "Belum Ada Nama" }}
            </h4>
          </v-card-text>
        </v-card>
        <div class="flex justify-center mt-3">
          <v-btn color="info" rounded @click="openInvitation">
            Buka Undangan
          </v-btn>
        </div>
      </div>
    </div>
  </v-container>
</template>
