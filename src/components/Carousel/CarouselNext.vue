<script setup lang="tsx">
import ChevronRight from '@/components/icons/ChevronRight.vue'
import { useCarousel } from './useCarousel'
import type { WithClassAsProps } from './interface'
import { cn } from '../utils'

const props = defineProps<WithClassAsProps>()

const { orientation, canScrollNext, scrollNext } = useCarousel()
</script>

<template>
  <button :disabled="!canScrollNext" :class="cn('absolute flex h-8 w-8 touch-manipulation items-center justify-center rounded-full bg-white/40 p-0 disabled:bg-white/5 disabled:text-white/50', orientation === 'horizontal' ? '-right-12 top-1/2 -translate-y-1/2' : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90', props.class)" variant="outline" @click="scrollNext">
    <slot>
      <ChevronRight class="h-4 w-4 text-current" />
    </slot>
  </button>
</template>
