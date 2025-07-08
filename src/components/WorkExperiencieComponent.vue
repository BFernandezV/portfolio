<script setup lang="ts">
  import IconRow from '@/components/icons/IconRow.vue'

  defineProps<{
    id: number
    title: string
    description: string
    src: string
  }>()

  const emit = defineEmits<{
    (e: 'openModal', id: number): void
  }>()
</script>

<template>
  <article
    class="flex h-full flex-col border border-gray-400 bg-white dark:border-gray-700 dark:bg-gray-800"
  >
    <div class="overflow-hidden">
      <img
        :src="src"
        class="h-[230px] w-full object-cover transition-transform duration-300 hover:scale-110"
      />
    </div>

    <div class="flex grow items-center">
      <div class="h-full w-4/5 p-4">
        <h1 class="font-roboto-mono text-xl font-medium dark:text-white">{{ title }}</h1>
        <p class="font-roboto-mono text-base dark:text-white">
          {{ description }}
        </p>
      </div>
      <div
        class="flex h-full w-1/5 items-center justify-center border-s-1 border-gray-400 p-4 dark:border-gray-700"
      >
        <button
          type="button"
          class="cursor-pointer rounded-full p-1 text-sm hover:opacity-80 active:opacity-70 dark:text-gray-950"
          @click="emit('openModal', id)"
        >
          <IconRow class="w-[40px] rotate-180 text-gray-950 dark:text-white" />
        </button>
      </div>
    </div>
  </article>
</template>
