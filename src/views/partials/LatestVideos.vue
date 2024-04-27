<script setup lang="ts">
import Carousel from 'primevue/carousel'
// type Props = { }
// const { } = defineProps<Props>()
// const emits = defineEmits()
const videos = ['pn4Fxg5nFTA?si=O7CLFIdCV13BF_A2', 'v7gPUHqLEvg?si=JOUwKjdwhADAyow6', 'P6ltgDqFytU?si=IIhAkJHZUQGzm6FC', '_tXqBNuDcyk?si=HT5tGcWVQEi-e9JU', 'iBUmtR9YcTo?si=VUk_h8ATKOhc5-tl', 'Ql1fZphvOVE?si=e6Z0uDKIqzv9n0Nx']

const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
])
</script>

<template>
  <section class="">
    <div class="wrapper relative isolate p-4 md:p-20">
      <div class="absolute inset-0 -z-10 bg-gradient-to-t from-indigo-1000 to-black"></div>
      <h3 class="mb-2 text-2xl font-bold uppercase text-white">Latest Videos</h3>

      <Carousel :value="videos" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
        <template #item="slotProps">
          <div class="p-8">
            <iframe class="aspect-video h-full w-full object-cover object-center" :src="`https://www.youtube.com/embed/${slotProps.data}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </template>
      </Carousel>
    </div>
  </section>
</template>
