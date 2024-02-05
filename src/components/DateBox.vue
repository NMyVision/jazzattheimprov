<script setup lang="ts">
import { useDateFormat, useNow } from '@vueuse/core'

type Props = {
  date: string | number
  title: string | undefined
  subtitle: string | undefined
  current: boolean
}
const { date, title, subtitle, current } = defineProps<Props>()
// const emits = defineEmits()
const month = useDateFormat(date, 'MMM')
const day = useDateFormat(date, 'D')
</script>

<template>
  <div class="grid grid-cols-[theme(space.16),auto] gap-3 border-l-2 border-transparent md:border-purple-700">
    <div class="flex flex-col items-center italic text-white">
      <span class="sm:text-2xl font-semibold">{{ month }}</span>
      <span class="sm:text-4xl font-bold">{{ day }}</span>
    </div>

    <div class="flex flex-col justify-center self-center text-white">
      <p class=" font-bold text-2xl"> {{ title ?? 'Coming Soon' }} </p>
      <p v-if="subtitle">{{ subtitle  }} </p>
    </div>


  </div>
</template>
