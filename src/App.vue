<script setup lang="ts">
  import NavbarComponent from '@/components/NavbarComponent.vue'
  import { ModalsContainer } from 'vue-final-modal'
  import { SpeedInsights } from '@vercel/speed-insights/next'
</script>

<template>
  <main class="min-h-full bg-gray-200 px-2 md:px-10 dark:bg-gray-900">
    <NavbarComponent />
    <RouterView />
    <ModalsContainer />
    <SpeedInsights></SpeedInsights>
  </main>
</template>
