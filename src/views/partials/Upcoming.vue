<script setup lang="ts">
import VimeoVideoPlayer from '@/components/VimeoVideoPlayer.vue'
import AudioPlayer from '@/components/AudioPlayer.vue'

// type Props = { }
// const { } = defineProps<Props>()
// const emits = defineEmits()

type ConcertType = {
  name: string
  additional?: { label: string; name: string }
  date: string
  image: string
  css: string
  link?: string
  video?: { type: 'vimeo' | 'youtube'; id: string | number }
  audio?: { type: 'mp3'; source: string }
}

const configuration = {
  deck: 2,
  location: '1224 Parkside Main Street Cary, NC 27519',
  date: new Date()
}

const data: ConcertType[] = [
  // {
  //   name: 'Rick Braun',
  //   date: 'April 17, 2024',
  //   image: '/events/2024/RickBraun_20240417.jpeg',
  //   css: 'order-1',
  //   link: 'https://improv.com/raleigh/event/smooth+jazz+at+the+improv+presents%3a+rick+braun/13518773/'
  // },
  // {
  //   name: 'Pieces of a Dream',
  //   date: 'May 15, 2024',
  //   image: '/events/2024/PiecesOfADream_20240515.jpeg',
  //   css: 'order-1',
  //   link: 'https://improv.com/raleigh/event/smooth+jazz+at+the+improv+presents%3a+pieces+of+a+dream/13412154/',
  //   video: { type: 'vimeo', id: 937110802 }
  // },
  // {
  //   name: 'Bob Baldwin',
  //   additional: {
  //     label: 'w/ Special guest',
  //     name: 'Marcus Anderson'
  //   },
  //   date: 'June 19, 2024',
  //   image: '/events/2024/BobBaldwin_20240619.jpg',
  //   css: '',
  //   link: 'https://improv.com/raleigh/event/smooth+jazz+at+the+improv+presents%3a+bob+baldwin+with+special+guest+marcu+anderson/13543344/'
  //   //videoId: { type: 'vimeo', video: 937110802 }
  //   //video: { type: 'youtube', id: 937110802 }
  // },
  // {
  //   name: 'Najee',
  //   date: 'July 17, 2024',
  //   image: '/events/2024/NAJEE_20240717.jpg',
  //   css: 'order-1',
  //   link: 'https://improv.com/raleigh/event/smooth+jazz+at+the+improv+presents%3a+najee/13543364/'
  //   //videoId: { type: 'vimeo', video: 937110802 }
  //   //video: { type: 'youtube', id: 937110802 }
  // },
  // {
  //   name: 'Jonathan Butler',
  //   date: 'Aug 28, 2024',
  //   image: '/events/2024/JonathanButler_20240828.jpg',
  //   css: 'order-1',
  //   link: 'https://improv.com/raleigh/event/smooth+jazz+at+the+improv+presents%3a+jonathan+butler/13778453/'
  //   //videoId: { type: 'vimeo', video: 937110802 }
  //   //video: { type: 'youtube', id: 937110802 }
  // },
  // {
  //   name: 'Mike Phillips',
  //   date: 'Sept 18, 2024',
  //   image: '/events/2024/MikePhillips_20240918.jpg',
  //   css: '',
  //   link: 'https://improv.com/raleigh/event/smooth+jazz+at+the+improv+presents%3a+mike+phillips/13778463/',
  //   audio: {
  //     type: 'mp3',
  //     source: '/mike-phillips-promo.mp3'
  //   }
  //   //videoId: { type: 'vimeo', video: 937110802 }
  //   //video: { type: 'youtube', id: 937110802 }
  // },
  // {
  //   name: 'Gerald Albright',
  //   date: 'Oct 16, 2024',
  //   image: '/events/2024/GeraldAlbright_20241016.jpg',
  //   link: 'https://improv.com/raleigh/event/smooth+jazz+at+the+improv+presents%3a+gerald+albright/13778473/',
  //   css: 'order-1'
  //   //videoId: { type: 'vimeo', video: 937110802 }
  //   //video: { type: 'youtube', id: 937110802 }
  // },
  // {
  //   name: 'Eric Roberson',
  //   date: 'Nov 20, 2024',
  //   image: '/events/2024/eric-roberson_20241120.jpg',
  //   link: 'https://improv.com/raleigh/event/smooth+jazz+at+the+improv+presents%3a+eric+roberson/13615964/',
  //   css: ''
  //   //videoId: { type: 'vimeo', video: 937110802 }
  //   //video: { type: 'youtube', id: 937110802 }
  // },
  {
    name: 'Kirk Whalum',
    date: 'Dec 18, 2024',
    image: '/events/2024/KirkWhalum_20241218.jpg',
    link: 'https://improv.com/raleigh/event/smooth+jazz+at+the+improv+presents%3akirk+whalum/13615974/',
    css: 'order-1'
  },
  {
    name: 'Nicholas Cole',
    date: 'Jan 22, 2025',
    image: '/events/2025/NicholasCole_20250122.jpg',
    link: 'https://improv.com/raleigh/event/smooth+jazz+at+the+improv+presents%3a+nicholas+cole/14100493/',
    css: ''
  },
  {
    name: 'Marion Meadows',
    date: 'Feb 26, 2025',
    image: '/events/2025/MarionMeadows_20250226.jpg',
    link: 'https://improv.com/raleigh/event/smooth+jazz+at+the+improv+presents%3a+marion+meadows/14104273/',
    css: 'order-1'
  },
  {
    name: 'Will Downing',
    date: 'March 26, 2025',
    image: '/events/2025/WillDowning_20250326.jpeg',
    link: 'https://improv.com/raleigh/event/smooth+jazz+at+the+improv+presents%3a+will+downing/13690434/',
    css: ''
  },
  {
    name: 'Will Downing',
    date: 'March 27, 2025',
    image: '/events/2025/WillDowning_20250327.jpeg',
    link: 'https://buy.stripe.com/cN28zy1ZU8GQ4Du7tJ',
    css: 'order-1'
  },
  {
    name: 'MarcusAnderson',
    date: 'April 23, 2025',
    image: '/events/2025/MarcusAnderson_20250423.jpg',
    link: 'https://improv.com/raleigh/event/smooth+jazz+at+the+improv+presents%3a+marcus+anderson/13690564/',
    css: ''
  },
  {
    name: 'Julian Vaughn',
    date: 'May 28, 2025',
    image: '/events/2025/JulianVaughn_20250528.jpg',
    link: 'https://improv.com/raleigh/event/smooth+jazz+at+the+improv+presents%3a+julian+vaughn/13690594/',
    css: 'order-1'
  },
  {
    name: 'Chrisette Michele',
    date: 'June 25, 2025',
    image: '/events/2025/ChrisetteMichele_20250625.jpg',
    css: '',
    link: 'https://improv.com/raleigh/event/smooth+jazz+at+the+improv+presents%3a+chrisette+michele/14451583/'
  },
  {
    name: 'David Benoit',
    date: 'July 23, 2025',
    image: '/events/2025/DavidBenoit20250723.jpg',
    css: 'order-1',
    link: 'https://improv.com/raleigh/event/smooth+jazz+at+the+improv+presents%3a+david+benoit/14451593/'
  },
  {
    name: 'Shaun LaBelle',
    date: 'August 27, 2025',
    image: '/events/2025/ShaunLaBelle_20250827.jpg',
    css: 'order-1',
    additional: {
      label: 'featuring',
      name: 'Bobby Lyle & Stokley'
    },
    link: 'https://improv.com/raleigh/event/smooth+jazz+at+the+improv+presents%3a+shaun+labelle+featuring+bobby+lyle+%26+stokely/13891434/'
  },
]

const filteredData = computed(() => {
  return data
    .map((item, index) => {
      return {
        ...item,
        hasPassed: new Date(item.date) < configuration.date,
        index
      }
    })
    .filter((x) => x.hasPassed === false)
})

function take<T>(arr: T[], num: number | undefined = 1, offset: number | undefined = 0) {
  return arr.slice(offset, num)
}
function select(item: ConcertType) {
  if (currentItem.value?.date === item.date) {
    currentItem.value = undefined
    return
  }
  currentItem.value = item
}
const currentItem = ref<ConcertType>()
</script>

<template>
  <div class="flex flex-1 flex-col gap-8 p-10">
    <template v-for="item in take(filteredData, Math.max(configuration.deck, 1))" :key="item.name">
      <div class="flex justify-center gap-8">
        <div class="mx-auto flex flex-col gap-10 md:flex-row">
          <div :class="['md:w-2/5', item.css]">
            <img :src="item.image" :alt="item.name" class="mx-auto h-full w-full max-w-screen-sm object-cover" />
          </div>
          <div class="space-y-4 text-xl text-indigo-700 md:w-3/5">
            <!-- <p class="text-sm uppercase">upcoming concert</p> -->

            <h2 class="text-7xl font-light text-transparent text-white">{{ item.name }}</h2>
            <template v-if="item.additional">
              <h3 class="font-light text-transparent text-zinc-100">
                <p class="text-zinc-400">{{ item.additional.label }}</p>
                <p class="text-4xl">{{ item.additional.name }}</p>
              </h3>
            </template>
            <p class="text-yellow-500">
              {{ item.date }}<br />
              {{ configuration.location }}
            </p>
            <p class=""></p>
            <div class="flex gap-4 pt-6">
              <template v-if="item.link">
                <div>
                  <a :href="item.link" target="_blank" class="block w-full rounded-md bg-gradient-to-tr from-indigo-700 to-violet-800 px-20 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:inline-block md:w-auto">Buy Ticket</a>
                </div>
              </template>
              <template v-else>
                <div>
                  <span class="block w-fit rounded-md bg-gradient-to-tr from-indigo-700 to-violet-800 px-20 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Coming Soon</span>
                </div>
              </template>

              <template v-if="item.audio">
                <AudioPlayer :source="item.audio.source" />
              </template>
            </div>
            <div class="mt-8" v-if="item.video">
              <template v-if="item.video!.type === 'vimeo'">
                <VimeoVideoPlayer :videoId="item.video!.id" :title="item.name" />
              </template>
              <template v-else>
                <iframe class="aspect-video h-full w-full object-cover object-center" :src="`https://www.youtube.com/embed/${item.video!.id}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </template>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
  <section class="bg-black" v-if="configuration.deck > 0 && filteredData.length > 1">
    <div class="wrapper mx-auto w-full max-w-screen-xl p-10 md:p-20">
      <h3 class="mb-4 text-lg">Upcoming Shows</h3>
      <div class="inline-grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(min(100%,theme(spacing.36)),1fr))]">
        <template v-for="item in take(filteredData, 10, Math.max(configuration.deck, 1))" :key="item.name">
          <section :class="currentItem?.date == item.date && 'col-span-2 flex flex-col gap-8 bg-indigo-1000 p-10'">
            <div class="h-80" @mousedown="select(item)">
              <img :src="item.image" :alt="item.name" :class="['aspect-[3/1] h-full w-full object-contain', currentItem && item.date === currentItem.date ? '' : 'grayscale hover:grayscale-0']" />
            </div>
            <div v-if="currentItem?.date == item.date">
              <div class="inline-flex justify-center gap-8" v-for="item in [currentItem]" :key="item.name">
                <div class="mx-auto flex w-full flex-col gap-10 outline-1 outline-red-400 md:flex-row">
                  <div class="space-y-4 text-xl text-indigo-700 md:w-3/5">
                    <!-- <p class="text-sm uppercase">upcoming concert</p> -->

                    <h2 class="text-5xl font-light text-transparent text-white">{{ item.name }}</h2>
                    <p class="text-yellow-500">{{ item.date }}<br /></p>
                    <p class=""></p>
                    <div class="pt-6">
                      <template v-if="item.link">
                        <a :href="item.link" target="_blank" class="block w-full rounded-md bg-gradient-to-tr from-indigo-700 to-violet-800 px-20 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:inline-block md:w-auto">Buy Ticket</a>
                      </template>
                      <template v-else>
                        <span class="block w-fit rounded-md bg-gradient-to-tr from-indigo-700 to-violet-800 px-20 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:inline-block md:w-auto">Coming Soon</span>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </template>
      </div>
    </div>
  </section>
</template>
