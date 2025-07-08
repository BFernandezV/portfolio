<script setup lang="ts">
  import { toRaw, type ComputedRef } from 'vue'
  import { Carousel, Slide, Navigation } from 'vue3-carousel'
  import { VueFinalModal } from 'vue-final-modal'
  import type { WorkExperience } from '@/types/WorkExperience'
  import { useI18n } from 'vue-i18n'

  const props = defineProps<{
    selectedWorkExperience: ComputedRef<WorkExperience | null>
  }>()

  const { t } = useI18n()

  const workExperience = toRaw(props.selectedWorkExperience)

  const emit = defineEmits<{
    (e: 'confirm'): void
  }>()

  const goToPage = () => {
    if (workExperience?.url) {
      window.open(workExperience.url, '_blank')
    }
  }
</script>

<template>
  <VueFinalModal
    class="flex items-center justify-center"
    content-class="flex flex-col bg-white border border-gray-400 dark:bg-gray-800 dark:border-gray-700  shadow-lg max-w-[700px] max-h-[90vh]"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <picture class="relative overflow-hidden">
      <span
        class="bg-accent-600 font-roboto-mono absolute left-0 z-20 px-3 py-1 font-medium text-white"
        >{{ workExperience?.company }}</span
      >
      <span
        class="font-roboto-mono absolute right-0 bottom-0 z-20 border border-gray-400 bg-white px-3 py-1 text-sm font-medium dark:border-gray-700"
        >{{ workExperience?.startDate }} - {{ workExperience?.endDate }}</span
      >
      <button
        type="button"
        @click="emit('confirm')"
        class="absolute top-5 right-5 z-20 cursor-pointer bg-white px-3 py-1 text-gray-950 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
      >
        X
      </button>

      <Carousel ref="carouselRef" v-model="currentSlide" v-bind="carouselConfig">
        <Slide v-for="(image, index) in workExperience?.imagesSrc" :key="index">
          <img
            :src="image"
            class="h-[300px] w-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </Slide>
        <template #addons>
          <Navigation class="mx-2" />
        </template>
      </Carousel>
    </picture>
    <div class="flex flex-wrap gap-2 border-b-1 border-gray-400 p-4 dark:border-gray-700">
      <span
        v-for="(tech, index) in workExperience?.technologies"
        :key="index"
        class="font-roboto-mono polygon bg-gray-200 px-3 py-1 align-middle text-sm font-medium text-nowrap"
        >{{ tech }}</span
      >
    </div>
    <section class="flex flex-col gap-4 overflow-y-auto p-4">
      <h1 class="font-roboto-mono font-bold dark:text-white">
        {{ t('common.description').toUpperCase() }}
      </h1>
      <ul class="flex flex-col gap-2">
        <li
          v-for="(point, index) in workExperience?.descriptionPoints"
          :key="index"
          class="flex items-start gap-3"
        >
          <div class="mt-2 h-[10px] w-1/8 w-[10px] bg-black dark:bg-white"></div>
          <span class="font-roboto-mono w-7/8 grow text-base dark:text-white">{{ point }}</span>
        </li>
      </ul>
    </section>
    <button
      v-if="workExperience?.url"
      type="button"
      class="bg-accent-700 polygon font-roboto-mono hover:bg-accent-600 dark:bg-accent-500 dark:hover:bg-accent-400 mb-4 w-[200px] cursor-pointer self-center p-2 text-lg font-medium text-white"
      @click="goToPage"
    >
      {{ t('common.go') }}
    </button>
  </VueFinalModal>
</template>

<style>
  .polygon {
    clip-path: polygon(10px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 10px);
  }

  .carousel {
    --vc-nav-background: rgba(255, 255, 255, 0.7);
    --vc-nav-border-radius: 100%;
  }
</style>
