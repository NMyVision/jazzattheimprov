<script setup lang="ts">
import Carousel from 'primevue/carousel'

const videos = [
  '0AMJkVLVJpw' /* 2025/05/28 */,
  'C6yB5CFstn4' /* 2025/04/23 */,
  'tZS3xVnRW28' /* 2025/03/26 */,
  'By-3uYmJpgg' /* 2025/02/26 */,
  'lfCiZjvB6dE' /* 2025/01/22 */,
  'Gmy8FK1pH34' /* 2024/12/18 */,
  'yd5qvDfdf-M' /* 2024/11/20 */,
  'cJ9mIXZ63Sc' /* 2024/10/16 */,
  'rmQqXqr6NK0' /* 2024/09/18 */,
  'LrCCAONtrtk' /* 2024/08/24 */,
  'TVC6e3Lan-Q' /* 2024/07/17*/,
  'sXBSR1Wo2RA' /* 2024/06/19*/,
  'anrYG11AzWA' /* 2024/05/15 */,
  'BikqoEpgt7w' /* 2024/04/15 */,
  'v7gPUHqLEvg' /* 2024/03/20 */,
  'fenZmDl3YGU' /* 2024/02/15 */,
  'jOLayAPuPQg' /* 2024/01/17 */,
  'QgmKb2sR_pc' /* 2023/12/20 */,
  '-H9wWuI0-38' /* 2023/11/16 */,
  'cyltpaGwFhM' /* 2023/10/18 */]

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
      <div class="flex flex-row justify-between items-center mb-8">

        <h3 class="mb-2 text-2xl font-bold uppercase text-white">Latest Videos</h3>

        <div>
          <a href="https://www.youtube.com/@SmoothJazzattheImprovPresents/videos" target="_blank" class="text-sm rounded-full hover:bg-red-600 text-white/80 font-semibold px-4 py-1 grow-0 flex-0">View All on YouTube</a>
        </div>
      </div>

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
