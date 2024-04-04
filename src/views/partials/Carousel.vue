<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/Carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useToggle } from '@vueuse/core'
// type Props = { }
// const { } = defineProps<Props>()
// const emits = defineEmits()

const set = ['RCP_7326.jpg', 'RCP_7399.jpg', 'RCP_7372.jpg', 'RLC_2624.jpg', '2024_03/IMG_3781.jpg', '2024_03/IMG_3786.jpg', '2024_03/IMG_3788.jpg', '2024_03/IMG_3797.jpg', '2024_03/IMG_3806.jpg', '2024_03/IMG_3810.jpg', '2024_03/IMG_3842.jpg', '2024_03/IMG_3844.jpg', '2024_03/IMG_3858.jpg', '2024_03/IMG_3864.jpg', '2024_03/IMG_3868.jpg', '2024_03/IMG_3872.jpg', '2024_03/IMG_3880.jpg', '2024_03/IMG_3885.jpg', '2024_03/IMG_3887.jpg', '2024_03/IMG_3891.jpg']

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
            <div :style="`background-image: url(/gallery/${img})`" class="relative bg-contain bg-center bg-no-repeat">
              <img :src="`/gallery/${img}`" class="opacity-0" />
            </div>
          </CarouselItem>
        </template>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
</template>
