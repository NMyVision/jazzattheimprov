<script setup lang="ts">
import VimeoVideoPlayer from '@/components/VimeoVideoPlayer.vue';

// type Props = { }
// const { } = defineProps<Props>()
// const emits = defineEmits()
const data = [
  // {
  //   name: 'Rick Braun',
  //   date: 'April 17, 2024',
  //   location: '1224 Parkside Main Street Cary, NC 27519',
  //   image: '/RickBraun_20240417.jpeg',
  //   css: 'order-1',
  //   link: 'https://improv.com/raleigh/event/smooth+jazz+at+the+improv+presents%3a+rick+braun/13518773/'
  // },
  {
    name: 'Pieces of a Dream',
    date: 'May 15, 2024',
    location: '1224 Parkside Main Street Cary, NC 27519',
    image: '/PiecesOfADream_20240515.jpeg',
    css: 'order-1',
    link: 'https://improv.com/raleigh/event/smooth+jazz+at+the+improv+presents%3a+pieces+of+a+dream/13412154/',
    videoId: 937110802
  }
]
</script>

<template>
  <div class="flex-1 flex flex-col p-10 gap-8">
    <template v-for="item in data" :key="item.name">
      <div class="flex justify-center gap-8">
        <div class="mx-auto flex flex-col gap-10 md:flex-row">
          <div :class="['md:w-2/5', item.css]">
            <img :src="item.image" :alt="item.name" class="mx-auto h-full w-full max-w-screen-sm object-cover" />
          </div>
          <div class="space-y-4 text-xl text-indigo-700 md:w-3/5">
            <!-- <p class="text-sm uppercase">upcoming concert</p> -->

            <h2 class="bg-white bg-clip-text text-7xl font-light text-transparent">{{ item.name }}</h2>
            <p class="text-yellow-500">
              {{ item.date }}<br />
              {{ item.location }}
            </p>
            <p class=""></p>
            <div class="pt-6">
              <a :href="item.link" target="_blank" class="block w-full rounded-md bg-gradient-to-tr from-indigo-700 to-violet-800 px-20 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:inline-block md:w-auto">Buy Ticket</a>
            </div>
            <div class="mt-8">
              <VimeoVideoPlayer :videoId="item.videoId" :title="item.name" />
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
