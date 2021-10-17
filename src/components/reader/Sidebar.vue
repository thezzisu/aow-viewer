<template>
  <NLayout position="absolute">
    <NLayoutHeader style="height: 64px" class="flex items-center border-b border-light-900">
      <FileSelect />
    </NLayoutHeader>
    <NLayout position="absolute" style="top: 64px" :native-scrollbar="false">
      <ol>
        <li v-for="(item, i) of items" @click="setIndex(i)">
          {{ item }}
        </li>
      </ol>
    </NLayout>
  </NLayout>
</template>

<script setup lang="ts">
import { NLayout, NLayoutHeader } from 'naive-ui'
import FileSelect from './FileSelect.vue'
import { computed } from 'vue'
import { files, index } from '../../data'

const items = computed(() => files.value.map(({ path }) => path))
const setIndex = (i: number) => (index.value = i)
</script>
