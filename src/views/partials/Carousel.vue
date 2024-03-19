<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/Carousel'
import Autoplay from 'embla-carousel-autoplay'
// type Props = { }
// const { } = defineProps<Props>()
// const emits = defineEmits()
</script>

<template>
  <div class="relative isolate flex min-h-96 items-center md:h-[90dvh]">
    <div class="absolute inset-0 -z-10 bg-[url('/crowd-background.jpg')]"></div>

    <Carousel class="relative mx-auto w-full max-w-screen-xl" :plugins="[Autoplay({ delay: 4000 })]">
      <CarouselContent>
        <CarouselItem class="aspect-video *:w-full *:object-cover"><img width="1280" height="720" src="\src\assets\RCP_7326.jpg" /></CarouselItem>
        <CarouselItem class="aspect-video *:w-full *:object-cover"><img width="1280" height="720" src="\src\assets\RCP_7399.jpg" /></CarouselItem>
        <CarouselItem class="aspect-video *:w-full *:object-cover"><img width="1280" height="720" src="\src\assets\RCP_7372.jpg" /></CarouselItem>
        <CarouselItem class="aspect-video *:w-full *:object-cover"><img width="1280" height="720" src="\src\assets\RLC_2624.jpg" /></CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
</template>
