<script setup>
import { ref } from "vue";

const props = defineProps({ data: Object });
const tab = ref("one");

const copyText = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Text copied to clipboard:", text);
    })
    .catch((err) => {
      console.error("Failed to copy text:", err);
    });
};
</script>
<template>
  <v-container height="100dvh" class="relative p-5">
    <div class="bg-white/80 h-[87dvh] rounded-lg p-5">
      <div class="text-center mb-3">
        <h4 class="mb-1 font-bold">Terima Kasih</h4>
        <p>
          Terima kasih telah menambah semangat kegembiraan pernikahaan kam
          dengan kehadiran dan hadiah indah Anda.
        </p>
      </div>
      <v-card variant="tonal">
        <v-tabs v-model="tab" bg-color="secondary" align-tabs="center">
          <v-tab value="one">Bank</v-tab>
          <v-tab value="two">E-Wallet</v-tab>
          <v-tab value="three">Kirim Kado</v-tab>
        </v-tabs>

        <v-card-text>
          <v-tabs-window v-model="tab">
            <v-tabs-window-item value="one">
              <div class="h-[54dvh] overflow-auto">
                <div
                  v-for="item in props.data?.hadiah?.bank"
                  :key="item"
                  class="mb-3 bg-[#f3f3f3]/80 p-2 rounded-md shadow"
                >
                  <div class="flex justify-center">
                    <img
                      :src="'img/bank/' + item.nama + '.png'"
                      class="w-[130px]"
                    />
                  </div>
                  <p class="text-[16px] text-center my-1">
                    {{ item.atas_nama }}
                  </p>
                  <div
                    class="bg-white/50 px-4 py-1 flex justify-between items-center rounded-md text-lg shadow"
                  >
                    {{ item.norek }}
                    <v-btn
                      prepend-icon="mdi-content-copy"
                      @click="copyText(item.norek)"
                    >
                      Copy
                    </v-btn>
                  </div>
                </div>
              </div>
            </v-tabs-window-item>

            <v-tabs-window-item value="two">
              <div class="h-[54dvh] overflow-auto">
                <div
                  v-for="item in props.data?.hadiah?.ewallet"
                  :key="item"
                  class="mb-3 bg-[#f3f3f3]/80 p-2 rounded-md shadow-md"
                >
                  <div class="flex justify-center">
                    <img
                      :src="'img/bank/' + item.nama + '.png'"
                      class="w-[130px]"
                    />
                  </div>
                  <p class="text-[16px] text-center my-1">
                    {{ item.atas_nama }}
                  </p>
                  <div
                    class="bg-white/50 px-4 py-1 flex justify-between items-center rounded-md text-lg shadow"
                  >
                    {{ item.norek }}
                    <v-btn
                      prepend-icon="mdi-content-copy"
                      @click="copyText(item.norek)"
                    >
                      Copy
                    </v-btn>
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
