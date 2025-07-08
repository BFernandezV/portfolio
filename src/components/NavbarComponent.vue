<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { computed } from 'vue'
  import { formatDate } from '@/utils/date'
  import IconSun from './icons/IconSun.vue'
  import IconWSP from './icons/IconWSP.vue'
  import IconMoon from './icons/IconMoon.vue'
  import { useDark, useToggle } from '@vueuse/core'
  import IconLinkedin from './icons/IconLinkedin.vue'
  import { useCurrentTime } from '@/composables/useCurrentTime'

  const { currentTime } = useCurrentTime()
  const formattedTime = computed(() => formatDate(currentTime.value, 'MMMM d HH:mm:ss'))

  const { locale, t } = useI18n()

  const isDark = useDark()
  const toggleDark = useToggle(isDark)

  const timeText = computed(() => {
    if (currentTime.value.getHours() < 12) {
      return t('navbar.goodMorning')
    } else if (currentTime.value.getHours() < 18) {
      return t('navbar.goodAfternoon')
    } else {
      return t('navbar.goodEvening')
    }
  })

  const currentLanguage = computed(() => {
    return locale.value === 'en' ? 'En' : 'Es'
  })

  const changeLocale = () => {
    locale.value = locale.value === 'en' ? 'es' : 'en'
    localStorage.setItem('locale', locale.value)
  }

  const goToLinkedin = () => {
    window.open('https://www.linkedin.com/in/bfernandezvera/', '_blank')
  }

  const goToWSP = () => {
    window.open('https://wa.me/+56968745197', '_blank')
  }
</script>

<template>
  <header class="fixed top-0 left-0 z-10 flex w-full justify-center">
    <section
      class="header flex h-[70px] w-full items-center justify-center bg-gray-950 text-white md:w-2/3 dark:bg-gray-700"
    >
      <div class="glass" />

      <div
        class="relative z-10 flex w-1/5 grow flex-col items-center self-center md:items-end dark:text-gray-950"
      >
        <span class="font-at-amiga text-xs md:text-sm dark:text-white">
          {{ formattedTime }}
        </span>
        <span class="font-at-amiga text-accent-600 text-xs">{{ timeText }}</span>
      </div>

      <div class="relative z-10 flex h-full w-2/5 items-center justify-center">
        <div
          class="font-ds-digital mx-5 flex h-3/4 grow items-center justify-center rounded-sm border bg-black text-lg text-gray-950 text-green-400 md:w-[200px] md:text-2xl dark:bg-gray-800"
        >
          <span class="blinking-message text-center">{{ t('common.available') }}</span>
        </div>
      </div>

      <div
        class="z-10 flex h-full w-1/5 grow flex-col items-end justify-center sm:items-center md:items-start"
      >
        <div class="flex items-center gap-2">
          <button
            type="button"
            class="font-at-amiga cursor-pointer rounded-full p-1 text-sm transition-transform duration-300 hover:scale-110 hover:opacity-80 active:opacity-70 dark:text-gray-950 dark:text-white"
            @click="changeLocale"
          >
            {{ currentLanguage }}
          </button>
          <button
            type="button"
            class="cursor-pointer rounded-full p-1 text-sm hover:opacity-80 active:opacity-70"
            @click="toggleDark()"
          >
            <IconMoon
              v-if="!isDark"
              class="w-[20px] text-white transition-transform duration-300 hover:scale-110 dark:text-white"
            />
            <IconSun
              v-else
              class="w-[20px] text-white transition-transform duration-300 hover:scale-110 dark:text-white"
            />
          </button>
        </div>

        <div class="flex items-center gap-2">
          <button
            type="button"
            class="cursor-pointer rounded-full p-1 text-sm hover:opacity-80 active:opacity-70 dark:text-gray-950"
            @click="goToLinkedin"
          >
            <IconLinkedin
              class="w-[20px] cursor-pointer text-white transition-transform duration-300 hover:scale-110"
            />
          </button>
          <button
            type="button"
            class="cursor-pointer rounded-full p-1 text-sm hover:opacity-80 active:opacity-70 dark:text-gray-950"
            @click="goToWSP"
          >
            <IconWSP
              class="w-[20px] cursor-pointer text-white transition-transform duration-300 hover:scale-110"
            />
          </button>
        </div>
      </div>
    </section>
  </header>
</template>

<style scoped>
  @media only screen and (min-width: 600px) {
    .header {
      clip-path: polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%);
    }
  }

  .glass {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip-path: polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%);
    pointer-events: none;
  }

  .blinking-message {
    animation: blink 2s infinite;
    text-shadow:
      0 0 2px #fff,
      0 0 10px #fff,
      0 0 100px #fff;
    -webkit-animation: glow 1s ease-in-out infinite alternate;
    -moz-animation: glow 1s ease-in-out infinite alternate;
    animation: glow 1s ease-in-out infinite alternate;
  }

  @keyframes glow {
    0% {
      opacity: 0.5;
      text-shadow:
        0 0 2px #fff,
        0 0 4px #05df72;
    }

    100% {
      opacity: 1;
      text-shadow:
        0 0 6px #fff,
        0 0 12px #05df72,
        0 0 18px #05df72;
    }
  }
</style>
