<script setup lang="ts">
import Footer from '@/views/partials/Footer.vue'
import Header from '@/views/partials/Header.vue'
import Sponsors from '@/views/partials/Sponsors.vue'
import Video from './views/partials/Video.vue'
import Carousel from './views/partials/Carousel.vue'
import Mission from './views/partials/Mission.vue'
import LatestVideos from './views/partials/LatestVideos.vue'
import Upcoming from '../public/Upcoming.vue'

// type Props = { }
// const { } = defineProps<Props>()
// const emits = defineEmits()
</script>

<template>
  <Header />
  <Video />
  <Mission />
  <Upcoming />
  <Carousel />
  <LatestVideos />
  <Sponsors />
  <Footer />
</template>
