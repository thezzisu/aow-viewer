<template>
  <div class="card w-10vw">
    <div class="wrapper">
      <ol>
        <li v-for="(item, i) of items" @click="setIndex(i)">
          {{ item }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { files, index } from '../data'

const items = computed(() => files.value.map(({ path }) => path))
const setIndex = (i: number) => (index.value = i)
</script>
