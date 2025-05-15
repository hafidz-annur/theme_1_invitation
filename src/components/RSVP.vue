<script setup>
import { ref, onMounted } from "vue";
import { database } from "@/firebase";
import { ref as dbRef, get, child, set, push } from "firebase/database";
import moment from "moment";

const dialog = ref(true);
const messages = ref([]);
const formData = ref(null);
const form = ref({
  nama: null,
  pesan: null,
  kehadiran: null,
  created_at: moment().format("LLL"),
});

const fetchData = async () => {
  const db = dbRef(database);
  try {
    const snapshot = await get(child(db, "project/test"));

    if (snapshot.exists()) {
      messages.value = snapshot.val();
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

const submit = async () => {
  const { valid } = await formData.value.validate();

  if (valid) {
    const db = dbRef(database, "project/test/pesan/");
    try {
      await push(db, form.value);
      alert("Pesan berhasil dikirimkan!");
      dialog.value = false;
      form.value = {
        nama: null,
        kehadiran: null,
        pesan: null,
      };
      fetchData();
    } catch (error) {
      console.error("Gagal mengirim:", error);
    }
  }
};

onMounted(() => {
  fetchData();
});
</script>
<template>
  <v-dialog v-model="dialog" width="auto">
    <v-card max-width="400" prepend-icon="mdi-update" title="Kirim Pesan">
      <v-card-text>
        <v-form fast-fail @submit.prevent="submit" ref="formData">
          <v-text-field
            v-model="form.nama"
            density="compact"
            label="Nama Anda"
            placeholder="Masukan nama anda"
            variant="outlined"
            :rules="[(value) => !!value || 'Anda wajib memasukan nama.']"
            class="mb-3"
          />
          <v-textarea
            v-model="form.pesan"
            density="compact"
            label="Pesan"
            placeholder="Masukan pesan anda"
            variant="outlined"
            :rules="[(value) => !!value || 'Anda wajib memberikan pesan.']"
            class="mb-3"
          />
          <v-radio-group
            inline
            v-model="form.kehadiran"
            :rules="[
              (value) => !!value || 'Anda wajib menginformasikan kehadiran.',
            ]"
            class="mb-3"
          >
            <v-radio label="Hadir" value="Hadir"></v-radio>
            <v-radio
              label="Belum Bisa Hadir"
              value="Belum Bisa Hadir"
            ></v-radio>
            <v-radio label="Belum Tahu" value="Belum Tahu"></v-radio>
          </v-radio-group>
          <div class="text-center mb-3">
            <v-btn type="submit" prepend-icon="mdi-send" color="info"
              >Kirim Pesan</v-btn
            >
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
  <v-container height="100dvh" class="relative p-5">
    <div class="bg-white/80 h-[87dvh] rounded-lg p-5">
      <div class="h-full overflow-hidden">
        <h3 class="text-[16px] font-bold text-center mb-3">RSVP</h3>
        <v-btn
          prepend-icon="mdi-send"
          color="info"
          block
          class="mb-3"
          @click="dialog = true"
        >
          Kirim Pesan
        </v-btn>
        <div class="h-full overflow-auto pb-[80px]">
          <div
            class="bg-gray-500/50 rounded-lg px-2 py-2 mb-3 text-white"
            v-for="(item, index) in messages.pesan"
            :key="item"
          >
            <div class="flex items-center justify-between">
              <div>
                <h5 class="-mb-2">
                  {{ item.nama }}
                </h5>
                <small class="text-gray-200">{{ item.created_at }}</small>
              </div>
              <div class="bg-info rounded-lg px-2">
                <small>
                  {{ item.kehadiran }}
                </small>
              </div>
            </div>
            <p class="border-t-2">
              {{ item.pesan }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>
