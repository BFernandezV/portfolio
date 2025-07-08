<script setup lang="ts">
  import { computed, ref, type Ref } from 'vue'
  import { useModal } from 'vue-final-modal'
  import { Carousel, Slide } from 'vue3-carousel'
  import IconRow from '@/components/icons/IconRow.vue'
  import Eskuad1 from '@/assets/images/eskuad1.webp'
  import Eskuad2 from '@/assets/images/eskuad2.webp'
  import Eskuad3 from '@/assets/images/eskuad3.webp'
  import IconSmile from '@/components/icons/IconSmile.vue'
  import Udec1 from '@/assets/images/udec1.webp'
  import Udec2 from '@/assets/images/udec2.webp'

  import Udec3 from '@/assets/images/udec3.webp'
  import Udec4 from '@/assets/images/udec4.webp'
  import Dosier1 from '@/assets/images/dosier1.webp'
  import Dosier2 from '@/assets/images/dosier2.webp'
  import Dosier3 from '@/assets/images/dosier3.webp'
  import Dosier4 from '@/assets/images/dosier4.webp'
  import Dosier5 from '@/assets/images/dosier5.webp'
  import Buses1 from '@/assets/images/buses1.webp'
  import Buses2 from '@/assets/images/buses2.webp'
  import Buses3 from '@/assets/images/buses3.webp'
  import Pokedex1 from '@/assets/images/pokedex1.webp'
  import Pokedex2 from '@/assets/images/pokedex2.webp'
  import Pokedex3 from '@/assets/images/pokedex3.webp'
  import IconMiniRow from '@/components/icons/IconMiniRow.vue'
  import WorkExperiencieComponent from '@/components/WorkExperiencieComponent.vue'
  import WorkExperienceDetailsComponent from '@/components/WorkExperienceDetailsComponent.vue'
  import type { WorkExperience } from '@/types/WorkExperience'
  import { useI18n } from 'vue-i18n'
  import RubberDuck from '@/components/RubberDuck.vue'

  const carouselRef = ref()
  const currentSlide = ref(1)

  const next = () => carouselRef.value.next()
  const prev = () => carouselRef.value.prev()

  const selectedWorkExperience: Ref<WorkExperience | null> = ref(null)
  const { t } = useI18n()

  const { open: openModal, close: closeModal } = useModal({
    component: WorkExperienceDetailsComponent,
    attrs: {
      onConfirm() {
        closeModal()
      },
      selectedWorkExperience: computed(() => selectedWorkExperience.value),
    },
  })

  const workExperiences = computed<WorkExperience[]>(() => [
    {
      id: 1,
      position: t('eskuad.position'),
      description: t('eskuad.description'),
      imagesSrc: [Eskuad1, Eskuad2, Eskuad3],
      company: t('eskuad.company'),
      startDate: t('eskuad.startDate'),
      endDate: t('eskuad.endDate'),
      technologies: [
        'Vue.js',
        'Vuetify',
        'Node.js',
        'Express',
        'MongoDB',
        'Redis',
        'RabbitMQ',
        'New Relic',
        'Docker',
        'AWS',
        'Git',
        'GitHub',
        'CI/CD',
        'Scrum',
      ],
      url: 'https://eskuad.com',
      descriptionPoints: [
        t('eskuad.descriptionPoint1'),
        t('eskuad.descriptionPoint2'),
        t('eskuad.descriptionPoint3'),
      ],
    },
    {
      id: 2,
      position: t('dosier.position'),
      description: t('dosier.description'),
      imagesSrc: [Dosier1, Dosier2, Dosier3, Dosier4, Dosier5],
      company: t('dosier.company'),
      startDate: t('dosier.startDate'),
      endDate: t('dosier.endDate'),
      technologies: [
        'Vue.js',
        'Vuetify',
        'Node.js',
        'Express',
        'PostgreSQL',
        'Sequelize',
        'Docker',
        'AWS',
        'Git',
        'GitHub',
        'CI/CD',
        'Scrum',
        'Figma',
      ],
      url: '',
      descriptionPoints: [
        t('dosier.descriptionPoint1'),
        t('dosier.descriptionPoint2'),
        t('dosier.descriptionPoint3'),
      ],
    },
    {
      id: 3,
      position: t('udec.position'),
      description: t('udec.description'),
      imagesSrc: [Udec1, Udec2, Udec3, Udec4],
      company: t('udec.company'),
      startDate: t('udec.startDate'),
      endDate: t('udec.endDate'),
      technologies: [
        'Vue.js',
        'Vuetify',
        'Node.js',
        'Express',
        'PostgreSQL',
        'Sequelize',
        'Docker',
        'Git',
        'GitHub',
        'CI/CD',
        'Scrum',
        'Figma',
      ],
      url: 'https://ofivirtualfi.udec.cl',
      descriptionPoints: [t('udec.descriptionPoint1')],
    },
    {
      id: 4,
      position: t('buses.position'),
      description: t('buses.description'),
      imagesSrc: [Buses1, Buses2, Buses3],
      company: t('buses.company'),
      startDate: t('buses.startDate'),
      endDate: t('buses.endDate'),
      technologies: [
        'React',
        'MUI',
        'Tailwind CSS',
        'Phyton',
        'Django',
        'PostgreSQL',
        'Redis',
        'Docker',
        'Git',
        'GitHub',
        'CI/CD',
        'Scrum',
      ],
      url: 'https://agendabuses.cl/',
      descriptionPoints: [
        t('buses.descriptionPoint1'),
        t('buses.descriptionPoint2'),
        t('buses.descriptionPoint3'),
      ],
    },
    {
      id: 5,
      position: t('pokedex.position'),
      description: t('pokedex.description'),
      imagesSrc: [Pokedex1, Pokedex2, Pokedex3],
      company: t('pokedex.company'),
      startDate: t('pokedex.startDate'),
      endDate: t('pokedex.endDate'),
      technologies: [
        'Vue.js',
        'Vuetify',
        'Git',
        'GitHub',
        'Tailwind CSS',
        'Tanstack Query',
        'Pinia',
      ],
      url: 'https://global66-test-code.vercel.app/welcome',
      descriptionPoints: [t('pokedex.descriptionPoint1')],
    },
  ])

  const carouselConfig: {
    snapAlign: 'center' | 'start' | 'end' | 'center-even' | 'center-odd'
    itemsToShow: number
    gap: number
    wrapAround: boolean
    breakpointMode: 'viewport'
    breakpoints?: Record<number, { itemsToShow: number }>
  } = {
    itemsToShow: 1,
    gap: 5,
    wrapAround: true,
    breakpointMode: 'viewport',
    snapAlign: 'start',
    breakpoints: {
      1000: {
        itemsToShow: 2,
      },
      1400: {
        itemsToShow: 3,
      },
    },
  }

  const openModalAndSetWorkExperience = (id: number) => {
    const workExperience = workExperiences.value.find(we => we.id === id)
    if (workExperience) {
      selectedWorkExperience.value = workExperience
      openModal()
    } else {
      console.error('Work experience not found:', id)
    }
  }
</script>

<template>
  <section class="flex w-full flex-col">
    <div class="h-[150px]">
      <div class="grid h-full grid-cols-4">
        <div class="border border-gray-400 dark:border-gray-700" />
        <div class="border-y-1 border-gray-400 dark:border-gray-700" />
        <div class="border-y-1 border-gray-400 dark:border-gray-700" />
        <div class="border border-gray-400 dark:border-gray-700" />
      </div>
    </div>
    <div
      class="block flex h-4/12 flex-col items-center justify-center gap-2 border-x border-gray-400 bg-white dark:border-gray-700 dark:bg-gray-800"
    >
      <h1 class="font-at-amiga text-center text-3xl md:text-7xl dark:text-white">
        {{ t('common.name').toUpperCase() }}
      </h1>
      <h5 class="font-roboto-mono text-xl md:text-3xl dark:text-white">{{ t('common.role') }}</h5>
    </div>
    <article class="">
      <div class="grid h-full grid-cols-4">
        <div class="col-span-3 border border-gray-400 p-4 md:col-span-1 dark:border-gray-700">
          <blockquote
            class="quote-block font-roboto-mono truncate-vertical relative flex h-full w-full items-center px-4 py-2 text-start text-xs text-pretty md:text-base lg:text-xl dark:text-white"
          >
            {{ t('common.quote') }}
          </blockquote>
        </div>
        <div
          class="col-span-1 flex items-end gap-3 border-y-1 border-e-1 border-gray-400 p-4 md:border-x-0 md:border-y-1 dark:border-gray-700"
        >
          <IconRow class="text-accent-700 w-[70px]" />
          <IconSmile class="text-accent-700 w-[70px]" />
        </div>
        <div
          class="relative col-span-4 flex min-h-[200px] items-center justify-center border border-gray-400 p-4 md:col-span-2 dark:border-gray-700"
        >
          <RubberDuck />

          <div class="small-top-right-box"></div>
          <div class="small-bottom-left-box"></div>
          <div class="small-top-left-box"></div>
          <div
            class="absolute right-0 bottom-0 flex gap-5 border border-e-0 border-b-0 border-gray-400 px-3 pt-1"
          >
            <IconRow class="w-[40px] rotate-270 dark:text-white" />
            <div class="flex flex-col items-center">
              <h6 class="font-roboto-mono dark:text-white">{{ t('common.projects') }}</h6>
              <h2 class="font-at-amiga text-5xl dark:text-white">0{{ workExperiences.length }}</h2>
            </div>
          </div>
        </div>
      </div>
    </article>
    <div
      class="flex flex-col gap-1 overflow-x-auto border-x border-b-1 border-gray-400 px-4 py-8 md:flex-row dark:border-gray-700"
    >
      <div class="flex items-center justify-center md:w-1/8 md:px-4">
        <button
          type="button"
          class="flex h-1/2 w-1/2 cursor-pointer justify-center border border-gray-400 bg-white p-1 text-sm hover:opacity-80 active:bg-gray-200 active:bg-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-950 dark:text-white"
          @click="prev"
        >
          <IconMiniRow class="w-[20px] text-gray-950 dark:text-white" />
        </button>
        <button
          type="button"
          class="flex h-1/2 w-1/2 cursor-pointer justify-center border border-gray-400 bg-white p-1 text-sm hover:opacity-80 active:bg-gray-200 active:bg-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-950"
          @click="next"
        >
          <IconMiniRow class="w-[20px] rotate-180 text-gray-950 dark:text-white" />
        </button>
      </div>

      <section class="md:w-7/8">
        <Carousel ref="carouselRef" v-model="currentSlide" v-bind="carouselConfig">
          <Slide v-for="(workExperience, index) in workExperiences" :key="index">
            <WorkExperiencieComponent
              :id="workExperience.id"
              :title="workExperience.company"
              :description="workExperience.description"
              :src="workExperience.imagesSrc[0]"
              @openModal="openModalAndSetWorkExperience"
            />
          </Slide>
        </Carousel>
      </section>
    </div>
  </section>
</template>

<style scoped>
  .quote-block::before,
  .quote-block::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    border: 4px solid var(--color-accent-700);
  }

  .quote-block::before {
    top: 0;
    left: 0;
    border-right: none;
    border-bottom: none;
  }

  .quote-block::after {
    bottom: 0;
    right: 0;
    border-left: none;
    border-top: none;
  }

  .small-top-right-box {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 30px;
    height: 30px;
    border-top: 4px solid var(--color-gray-400);
    border-right: 4px solid var(--color-gray-400);
  }

  .small-bottom-left-box {
    position: absolute;
    bottom: 16px;
    left: 16px;
    width: 30px;
    height: 30px;
    border-bottom: 4px solid var(--color-gray-400);
    border-left: 4px solid var(--color-gray-400);
  }

  .small-top-left-box {
    position: absolute;
    top: 16px;
    left: 16px;
    width: 30px;
    height: 30px;
    border-top: 4px solid var(--color-gray-400);
    border-left: 4px solid var(--color-gray-400);
  }

  @media only screen and (max-width: 900px) {
    .quote-block::before,
    .quote-block::after {
      width: 15px;
      height: 15px;
    }

    .small-top-right-box {
      width: 15px;
      height: 15px;
    }
  }
</style>
