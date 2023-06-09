<template>
  <div ref="designer">
    <v-form-designer :designerConfig="designerConfig"></v-form-designer>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
const designerConfig = {
  externalLink: false
}
const designer = ref(null)
onMounted(() => {
  if (designer.value) {
    designer.value?.children[0].children[0].remove()
  }
})
</script>
