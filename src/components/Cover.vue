<script setup>
const props = defineProps({ name: String, data: Object });

const emits = defineEmits(["selected"]);
const openInvitation = () => {
  emits("selected", "Pembukaan");
};
</script>
<template>
  <v-container height="100dvh" class="relative p-0">
    <div class="text-center h-full bg-[#35312c]/80 p-5">
      <p class="text-xl mb-3 text-dark animate__animated animate__zoomIn pt-[5vh]">
        The Wedding of
      </p>
      <h1
        class="text-4xl text-white-600 animate__animated animate__zoomIn animate__delay-1s"
      >
        {{ props.data?.mempelai.pria.nama_panggilan }}
      </h1>

      <h2
        class="text-3xl mt-2 text-white-600 animate__animated animate__zoomIn animate__delay-1s"
      >
        &
      </h2>
      <h1
        class="text-4xl text-white-600 animate__animated animate__zoomIn animate__delay-1s"
      >
        {{ props.data?.mempelai.wanita.nama_panggilan }}
      </h1>

      <div class="flex justify-center mt-5">
        <img
          src="/public/img/wayang.png"
          alt=""
          class="md:w-[150px] w-[100px] animate__animated animate__zoomIn animate__delay-2s"
        />
      </div>
    </div>

    <div class="absolute bottom-10 left-0 w-full flex justify-center">
      <div class="w-[60%]">
        <p
          class="text-center mb-3 animate__animated animate__zoomIn animate__delay-2s"
        >
          Kepada Yth; <br />
          Bapak/Ibu/Saudara/i
        </p>
        <v-card
          class="animate__animated animate__zoomIn animate__delay-2s bg-black/40"
          shadow
        >
          <v-card-text class="text-center">
            <p class="text-[15px]">
              {{ props.name ? props.name : "Belum Ada Nama" }}
            </p>
          </v-card-text>
        </v-card>
        <div class="text-center animate__animated animate__zoomIn animate__delay-2s">
          <p class="text-[10px]">
            Mohon maaf apabila ada kesalahan penulisan nama/gelar.
          </p>
        </div>
        <div
          class="flex justify-center mt-3 animate__animated animate__zoomIn animate__delay-2s"
        >
          <v-btn
            rounded
            @click="openInvitation"
            color="primary"
            size="small"
            prepend-icon="mdi-email-open-heart-outline"
          >
            Buka Undangan
          </v-btn>
        </div>
      </div>
    </div>
  </v-container>
</template>
