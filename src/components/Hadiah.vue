<script setup>
import { ref } from "vue";

const props = defineProps({ data: Object });
const tab = ref("one");

const copyText = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Berhasil disalin", text);
    })
    .catch((err) => {
      console.error("Failed to copy text:", err);
    });
};
</script>
<template>
  <v-container height="100dvh" class="relative p-5">
    <div class="bg-white/90 h-[87dvh] rounded-lg p-5">
      <div
        class="text-center mb-3 animate__animated animate__zoomIn animate__delay-1s"
      >
        <h4 class="mb-1 text-2xl font-bold">Terima Kasih</h4>
        <p>
          Terima kasih telah menambah semangat kegembiraan pernikahaan kam
          dengan kehadiran dan hadiah indah Anda.
        </p>
      </div>
      <v-card
        color="white"
        class="animate__animated animate__zoomIn animate__delay-2s"
      >
        <v-tabs v-model="tab" bg-color="#C1A162" align-tabs="center">
          <v-tab
            value="one"
            class="text-[12px]"
            :class="tab == 'one' ? 'bg-white text-gray-500' : null"
            >Bank</v-tab
          >
          <v-tab
            value="two"
            class="text-[12px]"
            :class="tab == 'two' ? 'bg-white text-gray-500' : null"
            >E-Wallet</v-tab
          >
          <v-tab
            value="three"
            class="text-[12px]"
            :class="tab == 'three' ? 'bg-white text-gray-500' : null"
            >Kirim Kado</v-tab
          >
        </v-tabs>

        <v-card-text>
          <v-tabs-window v-model="tab">
            <v-tabs-window-item value="one">
              <div class="h-[60dvh] overflow-auto">
                <div
                  v-for="item in props.data?.hadiah?.bank"
                  :key="item"
                  class="mb-3 bg-[#fff] p-2 py-4 rounded-lg shadow-lg"
                >
                  <div class="flex justify-between items-center">
                    <div class="">
                      <p class="text-lg text-center my-1">
                        {{ item.atas_nama }}
                      </p>
                      <div class="flex items-center text-gray-400 text-lg mt-1">
                        <v-icon icon="mdi-wallet-bifold-outline" class="me-2"></v-icon>
                        {{ item.norek }}
                      </div>
                    </div>
                    <div class="w-[100px] text-right">
                      <img :src="'img/bank/' + item.nama + '.png'" class="mb-2" />
                      <v-btn
                        color="#C1A162"
                        prepend-icon="mdi-content-copy"
                        @click="copyText(item.norek)"
                        size="small"
                      >
                        Salin
                      </v-btn>
                    </div>
                  </div>
                </div>
              </div>
            </v-tabs-window-item>

            <v-tabs-window-item value="two">
              <div class="h-[60dvh] overflow-auto">
                <div
                  v-for="item in props.data?.hadiah?.ewallet"
                  :key="item"
                  class="mb-3 bg-[#fff] p-2 py-4 rounded-lg shadow-lg"
                >
                  <div class="flex justify-between items-center">
                    <div class="">
                      <p class="text-lg text-center my-1">
                        {{ item.atas_nama }}
                      </p>
                      <div class="flex items-center text-gray-400 text-lg mt-1">
                        <v-icon icon="mdi-wallet-bifold-outline" class="me-2"></v-icon>
                        {{ item.norek }}
                      </div>
                    </div>
                    <div class="w-[100px] text-right">
                      <img :src="'img/bank/' + item.nama + '.png'" class="mb-2" />
                      <v-btn
                        color="#C1A162"
                        prepend-icon="mdi-content-copy"
                        @click="copyText(item.norek)"
                        size="small"
                      >
                        Salin
                      </v-btn>
                    </div>
                  </div>
                </div>
              </div>
            </v-tabs-window-item>

            <v-tabs-window-item value="three">
              <div class="text-center">
                <v-icon icon="mdi-gift-outline" size="40" class="mb-2" />
                <h3 class="font-bold">Alamat</h3>
                <p class="mt-3 text-[16px]">
                  {{ props.data?.hadiah?.alamat }}
                </p>
              </div>
            </v-tabs-window-item>
          </v-tabs-window>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>
