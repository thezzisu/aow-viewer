<template>
  <div class="p-2">
    <template v-if="files.length">
      <template v-for="file of files">
        <p class="text-center">{{ file.path }}</p>
        <p class="text-center">{{ file.url }}</p>
        <img :src="file.url" loading="lazy" />
        <NDivider />
      </template>
    </template>
    <template v-else>
      <p>No file selected</p>
    </template>
  </div>
</template>

<script setup lang="ts">
import { NDivider } from 'naive-ui'
import { files } from '../../data'
</script>
