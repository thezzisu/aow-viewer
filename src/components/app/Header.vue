<template>
  <div class="h-64px flex items-center p-2 border-b border-light-900">
    <div class="flex-1">
      <NBadge :value="version">
        <h1 class="text-xl">AOW Viewer</h1>
      </NBadge>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NBadge, NAvatar } from 'naive-ui'

const version = APP_VERSION
</script>
