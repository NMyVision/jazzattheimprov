<script setup lang="ts">
import Carousel from 'primevue/carousel'

const videos = ['P6ltgDqFytU?si=IIhAkJHZUQGzm6FC' /* 4/15 */, 'v7gPUHqLEvg?si=JOUwKjdwhADAyow6' /* 3/20 */, 'fenZmDl3YGU?si=bTco1sqTtJCwiTCt' /* 2/15 */, 'jOLayAPuPQg?si=GLmK1uzUSMUFdoED' /* 1/17 */, 'QgmKb2sR_pc?si=5Zys3ibUUX6R9wKx' /* 12/20 */, '-H9wWuI0-38?si=ed9YThsRz9kqrYjc' /* 11/16 */, 'cyltpaGwFhM?si=D6dFeMPvQdcrKWCd' /* 10/18 */]

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
