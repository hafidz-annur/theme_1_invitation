<script setup>
import { ref } from "vue";
const props = defineProps({ data: Object });
</script>
<template>
  <v-container height="100dvh" class="p-5">
    <div class="relative h-[87dvh] bg-[#608961]/60 rounded-lg overflow-auto p-2">
      <v-row no-gutters>
        <template v-for="(image, imgIdx) in props.data?.galeri" :key="imgIdx">
          <v-col class="pa-2" :cols="image.cols">
            <v-img :src="image.foto" height="100%" rounded cover></v-img>
          </v-col>

          <v-col v-if="image.children" class="d-flex flex-column pa-2" cols="6">
            <v-row>
              <v-col class="pa-2"
                v-for="(children, childIdx) in image.children"
                :key="childIdx"
                :cols="children.cols"
              >
                <v-img :src="children.foto" height="100%" rounded cover></v-img>
              </v-col>
            </v-row>
          </v-col>
        </template>
      </v-row>
    </div>
  </v-container>
</template>
