<template>
  <div class="flex flex-col absolute left-0 right-0 top-0 bottom-0 p-4">
    <div class="p-2">
      <app-header />
    </div>
    <div class="flex-auto flex">
      <div class="p-2 flex">
        <sidebar class="flex-auto" />
      </div>
      <div class="flex-auto p-2 flex">
        <content class="flex-auto" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Content from './components/Content.vue'
import AppHeader from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
</script>
