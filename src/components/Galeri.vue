<script setup>
import { ref } from "vue";
const props = defineProps({ data: Object });
</script>
<template>
  <v-container height="100vh" class="p-5">
    <div class="relative h-[87vh] bg-white/80 rounded-lg overflow-auto p-5">
      <v-row>
        <template v-for="(image, imgIdx) in props.data?.galeri" :key="imgIdx">
          <v-col :cols="image.cols">
            <v-img
              :src="image.foto"
              height="100%"
              cover
            ></v-img>
          </v-col>

          <v-col v-if="image.children" class="d-flex flex-column" cols="6">
            <v-row>
              <v-col
                v-for="(children, childIdx) in image.children"
                :key="childIdx"
                :cols="children.cols"
              >
                <v-img
                  :src="children.foto"
                  height="100%"
                  cover
                ></v-img>
              </v-col>
            </v-row>
          </v-col>
        </template>
      </v-row>
    </div>
  </v-container>
</template>
