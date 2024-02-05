<script setup lang="ts">
import { useDateFormat, useNow } from '@vueuse/core'
import { useMediaStore } from '@/stores/media'
import DateBox from '@/components/DateBox.vue';
'http://res.cloudinary.com/dm7x6mos2'


const { episodes, current, past, upcoming } = useMediaStore()
const CLOUDINARY_URL = import.meta.VITE_APP_CLOUDINARY_URL

onMounted(function () {

})

</script>

<template>
  <div class="wrapper space-y-10">
    <h1 class="text-3xl text-white ml-[2.5vw] font-bold">Shows</h1>

    <div class="w-full min-h-10 grid md:grid-cols-3 gap-4">
      <h1 class="text-2xl italic font-bold px-4 self-center">Upcoming Events</h1>
      <DateBox :date="current.d" :title="current.title" :subtitle="current.subtitle" :current="true" />
      <DateBox :date="upcoming.d" :title="upcoming.title" :subtitle="upcoming.subtitle" :current="false" />
    </div>


    <iframe class="w-full aspect-video rounded-lg shadow-lg " :src="`https://www.youtube.com/embed/${current.highlight}`"
      title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen></iframe>

    <div>
      <h2 class="text-3xl text-white font-bold mb-10">Previous Shows</h2>

      <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
        <template v-for="ep in past" :key="ep.date">
          <RouterLink :to="{ name: 'shows-detail', params: { id: ep?.slug ?? '' } }" class="group">
            <div class="h-full">
              <img class="rounded w-full h-full object-cover object-center " :src="ep.image" alt="">
              <!-- flyer images are used here.. there is a grayscale effect.. look for a way to use if statment to only grayscale flyers when their date have passed -->
            </div>
          </RouterLink>
        </template>
      </div>
    </div>

  </div>
</template>

