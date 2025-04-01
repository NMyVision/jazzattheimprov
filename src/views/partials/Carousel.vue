<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/Carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useToggle } from '@vueuse/core'
// type Props = { }
// const { } = defineProps<Props>()
// const emits = defineEmits()

//const set = ['RCP_7326.jpg', 'RCP_7399.jpg', 'RCP_7372.jpg', 'RLC_2624.jpg', '2024_03/IMG_3781.jpg', '2024_03/IMG_3786.jpg', '2024_03/IMG_3788.jpg', '2024_03/IMG_3797.jpg', '2024_03/IMG_3806.jpg', '2024_03/IMG_3810.jpg', '2024_03/IMG_3842.jpg', '2024_03/IMG_3844.jpg', '2024_03/IMG_3858.jpg', '2024_03/IMG_3864.jpg', '2024_03/IMG_3868.jpg', '2024_03/IMG_3872.jpg', '2024_03/IMG_3880.jpg', '2024_03/IMG_3885.jpg', '2024_03/IMG_3887.jpg', '2024_03/IMG_3891.jpg']

const set = ['raleigh/2024_04/IMG_3937_b9twht.jpg', 'raleigh/2024_04/IMG_3942_fvgo45.jpg', 'raleigh/2024_04/IMG_3983_d5cxb8.jpg', 'raleigh/2024_04/IMG_3972_j3dlnw.jpg', 'raleigh/2024_04/IMG_3951_ev5pe1.jpg', 'raleigh/2024_04/IMG_3944_c7jtyy.jpg', 'raleigh/2024_04/IMG_3955_ipb7zc.jpg', 'raleigh/2024_04/IMG_3949_exewyt.jpg', 'raleigh/2024_04/IMG_3967_xxenr0.jpg', 'raleigh/2024_04/IMG_3986_kelexi.jpg', 'raleigh/2024_04/IMG_3960_yl1gwj.jpg', 'raleigh/2024_04/IMG_4009_j0upue.jpg', 'raleigh/2024_04/IMG_3980_zybgb5.jpg', 'raleigh/2024_04/IMG_3995_rt4vjc.jpg', 'raleigh/2024_04/IMG_3978_fhgqlc.jpg', 'raleigh/2024_04/IMG_3974_njozes.jpg']

const randomizedSet = [...set]

for (let i = randomizedSet.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1))
  const temp = randomizedSet[i]
  randomizedSet[i] = randomizedSet[j]
  randomizedSet[j] = temp
}
// public\gallery\raleigh\2024_04\IMG_3974_njozes.jpg
//        gallery/raleigh/2024_04/IMG_3974_njozes.jpg
</script>

<template>
  <div class="relative isolate flex min-h-96 items-center md:h-[90dvh]">
    <div class="absolute inset-0 -z-10 bg-[url('/crowd-background.jpg')]"></div>

    <Carousel class="relative mx-auto w-full max-w-screen-xl" :plugins="[Autoplay({ delay: 5000 })]">
      <CarouselContent>
        <template v-for="img in randomizedSet" :key="img">
          <CarouselItem class="relative grid aspect-video justify-center *:max-h-[80dvh] *:w-full *:object-cover">
            <img :src="`gallery/${img}`" />
          </CarouselItem>
        </template>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
</template>
