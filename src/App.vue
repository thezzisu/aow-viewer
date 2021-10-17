<template>
  <NLayout position="absolute">
    <NLayoutHeader style="height: 64px">
      <Header />
    </NLayoutHeader>
    <NLayout position="absolute" style="top: 64px">
      <router-view />
    </NLayout>
  </NLayout>
</template>

<script setup lang="ts">
import { NLayout, NLayoutHeader } from 'naive-ui'
import Header from './components/app/Header.vue'
</script>
