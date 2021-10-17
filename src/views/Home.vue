<template>
  <NLayout position="absolute" has-sider>
    <NLayoutSider bordered>
      <Sidebar />
    </NLayoutSider>
    <NLayout :native-scrollbar="false">
      <Content />
    </NLayout>
  </NLayout>
</template>

<script setup lang="ts">
import { NLayout, NLayoutSider } from 'naive-ui'
import Content from '../components/reader/Content.vue'
import AppHeader from '../components/Header.vue'
import Sidebar from '../components/reader/Sidebar.vue'
</script>
