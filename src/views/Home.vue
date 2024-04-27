<script setup lang="ts">
import Sponsors from './partials/Sponsors.vue'
import Video from './partials/Video.vue'
import Carousel from './partials/Carousel.vue'
import Mission from './partials/Mission.vue'
import LatestVideos from './partials/LatestVideos.vue'
import Upcoming from './partials/Upcoming.vue'
import Subscriptions from './partials/Subscriptions.vue'

// type Props = { }
// const { } = defineProps<Props>()
// const emits = defineEmits()
</script>

<template>
  <Video />
  <Mission />
  <section class="flex items-center bg-black sm:h-96 pb-20">
    <div class="wrapper mx-auto max-w-screen-xl p-10 md:p-20">
      <h3 class="mb-2 text-2xl font-bold uppercase text-white">Memberships</h3>
      <Subscriptions />
    </div>
  </section>
  <Upcoming />
  <Carousel />
  <LatestVideos />
  <Sponsors />
</template>
