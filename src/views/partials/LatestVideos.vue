<script setup lang="ts">
import Carousel from 'primevue/carousel'

const videos = ['TVC6e3Lan-Q?si=jadAJ0HKCq-MJKzx' /* 7/17*/, 'sXBSR1Wo2RA?si=DxCAjO4MfKbBl5Sq' /* 6/19*/, 'anrYG11AzWA?si=g6izKJH-A-4NHh2C' /* 5/15 */, 'BikqoEpgt7w?si=3nr4ZMkyEg2FVBNK' /* 4/15 */, 'v7gPUHqLEvg?si=JOUwKjdwhADAyow6' /* 3/20 */, 'fenZmDl3YGU?si=bTco1sqTtJCwiTCt' /* 2/15 */, 'jOLayAPuPQg?si=GLmK1uzUSMUFdoED' /* 1/17 */, 'QgmKb2sR_pc?si=5Zys3ibUUX6R9wKx' /* 12/20 */, '-H9wWuI0-38?si=ed9YThsRz9kqrYjc' /* 11/16 */, 'cyltpaGwFhM?si=D6dFeMPvQdcrKWCd' /* 10/18 */]

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
