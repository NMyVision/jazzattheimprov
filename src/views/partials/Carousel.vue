<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/Carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useToggle } from '@vueuse/core'
// type Props = { }
// const { } = defineProps<Props>()
// const emits = defineEmits()

const set = ['RCP_7326.jpg', 'RCP_7399.jpg', 'RCP_7372.jpg', 'RLC_2624.jpg', '2024_03/IMG_3781.JPG', '2024_03/IMG_3786.JPG', '2024_03/IMG_3788.JPG', '2024_03/IMG_3797.JPG', '2024_03/IMG_3806.JPG', '2024_03/IMG_3810.JPG', '2024_03/IMG_3842.JPG', '2024_03/IMG_3844.JPG', '2024_03/IMG_3858.JPG', '2024_03/IMG_3864.JPG', '2024_03/IMG_3868.JPG', '2024_03/IMG_3872.JPG', '2024_03/IMG_3880.JPG', '2024_03/IMG_3885.JPG', '2024_03/IMG_3887.JPG', '2024_03/IMG_3891.JPG']

const randomizedSet = [...set]

for (let i = randomizedSet.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1))
  const temp = randomizedSet[i]
  randomizedSet[i] = randomizedSet[j]
  randomizedSet[j] = temp
}


</script>

<template>
  <div class="relative isolate flex min-h-96 items-center md:h-[90dvh]">
    <div class="absolute inset-0 -z-10 bg-[url('/crowd-background.jpg')]"></div>

    <Carousel class="relative mx-auto w-full max-w-screen-xl" :plugins="[Autoplay({ delay: 5000 })]">
      <CarouselContent>
        <template v-for="img in randomizedSet" :key="img">
          <CarouselItem class="relative grid aspect-video justify-center *:max-h-[80dvh] *:w-full *:object-cover">
            <div :style="`background-image: url('/src/assets/${img}')`" class="relative bg-contain bg-center bg-no-repeat">
              <img :src="`/src/assets/${img}`" class="opacity-0" />
            </div>
          </CarouselItem>
        </template>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
</template>
