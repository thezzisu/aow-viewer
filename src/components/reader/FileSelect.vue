<template>
  <div class="p-2">
    <p>Select your AOW file</p>
    <input type="file" accept=".aow" ref="input" v-on:change="onSubmit" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { processFile } from '../../data'

const input = ref<HTMLInputElement | null>(null)

const file = ref<File>()
const onSubmit = () => {
  const file = input.value?.files?.[0]
  if (file) {
    console.log(file)
    if (!file.name.endsWith('.aow')) {
      alert('Please select a valid AOW file')
      input.value!.value = ''
      return
    }
    processFile(file)
  }
}
</script>
