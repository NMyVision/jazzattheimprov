<script setup lang="ts">

import { useMediaStore } from '@/stores/media'
'http://res.cloudinary.com/dm7x6mos2'


const { episodes } = useMediaStore()
const CLOUDINARY_URL = import.meta.VITE_APP_CLOUDINARY_URL

</script>

<template>
  <div class="wrapper">
    <h2 id="products-heading" class=" ">Shows</h2>

    <div v-if="false">
      <select name="" id="">
        <option :value="null"></option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </div>

    <pre>{{ CLOUDINARY_URL }}</pre>

    <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">

      <tempate v-for="ep in episodes" :key="ep.title">

        <template v-if="ep.image">
          <RouterLink :to="{ name: 'shows-detail', params: { id: ep?.slug ?? '' } }" class="group">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 relative "
              :class="ep.current && 'grayscale'">
              <div class="absolute bg-blend-saturation inset-0"></div>
              <img :src="ep.image" :alt="`episode cover staring: ${ep.title} cover image`"
                class="h-full w-full object-cover object-center group-hover:opacity-75">

            </div>
            <div class="mt-4 flex items-center justify-between text-base font-medium text-gray-200">
              <h3>{{ ep.title }}</h3>
            </div>
            <p class="mt-1 text-sm italic text-gray-500">{{ ep.date }}</p>
          </RouterLink>
        </template>
        <template v-else>
          <div class="group">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
              <img src="/placeholder_cover.jpg" />
            </div>
            <div class="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
              <h3>To be announced</h3>
            </div>
            <p class="mt-1 text-sm italic text-gray-500">{{ ep.date }}</p>
          </div>
        </template>
      </tempate>


      <!-- More products... -->
    </div>
  </div>
</template>

