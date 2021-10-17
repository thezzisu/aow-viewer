<template>
  <div class="p-2">
    <template v-if="info">
      <p class="text-center">{{ info.path }}</p>
      <p class="text-center">{{ info.url }}</p>
      <img :src="info.url" />
    </template>
    <template v-else>
      <p>No file selected</p>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { files, index } from '../../data'

const info = computed(() => files.value[index.value])
</script>
